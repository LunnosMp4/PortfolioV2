import Lenis from 'lenis'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * True when the user asked the OS to reduce motion.
 * Used to gracefully fall back to native scrolling / no custom cursor.
 */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** True on devices with a precise pointer (i.e. a real mouse). */
export function hasFinePointer() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches
  )
}

let lenis = null

/**
 * Boots Lenis and wires it into GSAP's ticker so ScrollTrigger stays
 * perfectly in sync with the smoothed scroll position.
 */
export function initSmoothScroll() {
  if (lenis || prefersReducedMotion()) return lenis

  lenis = new Lenis({
    duration: 1.05,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const raf = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)

  lenis._gsapRaf = raf

  // Fonts / images can shift layout after boot.
  window.addEventListener('load', () => ScrollTrigger.refresh())

  return lenis
}

export function getLenis() {
  return lenis
}

/**
 * Scroll to a numeric offset, an element, or a `#selector`, using Lenis
 * when available and native smooth scrolling otherwise.
 */
export function scrollTo(target, options = {}) {
  const opts = { duration: 1.2, ...options }

  if (lenis) {
    lenis.scrollTo(target, opts)
    return
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: opts.immediate ? 'auto' : 'smooth' })
  } else if (typeof target === 'string') {
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function destroySmoothScroll() {
  if (!lenis) return
  if (lenis._gsapRaf) gsap.ticker.remove(lenis._gsapRaf)
  lenis.destroy()
  lenis = null
}
