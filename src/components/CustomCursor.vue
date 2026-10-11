<template>
  <div
    v-show="enabled"
    class="cursor"
    :class="{ 'is-hidden': !visible, 'is-hover': hovering, 'is-down': down, 'has-label': !!label }"
    aria-hidden="true"
  >
    <div class="cursor-dot" ref="dot"></div>
    <div class="cursor-ring" ref="ring">
      <span class="cursor-label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
import { hasFinePointer, prefersReducedMotion } from '@/plugins/smoothScroll'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, [data-cursor]'

export default {
  name: 'CustomCursor',
  data() {
    return {
      enabled: false,
      visible: false,
      hovering: false,
      down: false,
      label: ''
    }
  },
  mounted() {
    if (!hasFinePointer() || prefersReducedMotion()) return

    this.enabled = true
    document.documentElement.classList.add('custom-cursor')

    this.target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    this.dotPos = { ...this.target }
    this.ringPos = { ...this.target }

    window.addEventListener('mousemove', this.onMove, { passive: true })
    window.addEventListener('mousedown', this.onDown)
    window.addEventListener('mouseup', this.onUp)
    document.addEventListener('mouseover', this.onOver, { passive: true })
    document.addEventListener('mouseleave', this.onLeave)
    window.addEventListener('blur', this.onLeave)

    this.raf = requestAnimationFrame(this.tick)
  },
  beforeUnmount() {
    if (!this.enabled) return
    document.documentElement.classList.remove('custom-cursor')
    cancelAnimationFrame(this.raf)
    window.removeEventListener('mousemove', this.onMove)
    window.removeEventListener('mousedown', this.onDown)
    window.removeEventListener('mouseup', this.onUp)
    document.removeEventListener('mouseover', this.onOver)
    document.removeEventListener('mouseleave', this.onLeave)
    window.removeEventListener('blur', this.onLeave)
  },
  methods: {
    onMove(e) {
      this.target.x = e.clientX
      this.target.y = e.clientY
      this.visible = true
    },
    onDown() {
      this.down = true
    },
    onUp() {
      this.down = false
    },
    onOver(e) {
      const el = e.target.closest ? e.target.closest(INTERACTIVE) : null
      this.hovering = !!el
      this.label = el ? el.getAttribute('data-cursor-label') || '' : ''
    },
    onLeave() {
      this.visible = false
    },
    tick() {
      this.dotPos.x += (this.target.x - this.dotPos.x) * 0.4
      this.dotPos.y += (this.target.y - this.dotPos.y) * 0.4
      this.ringPos.x += (this.target.x - this.ringPos.x) * 0.16
      this.ringPos.y += (this.target.y - this.ringPos.y) * 0.16

      if (this.$refs.dot) {
        this.$refs.dot.style.transform = `translate3d(${this.dotPos.x}px, ${this.dotPos.y}px, 0)`
      }
      if (this.$refs.ring) {
        this.$refs.ring.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0)`
      }

      this.raf = requestAnimationFrame(this.tick)
    }
  }
}
</script>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: opacity 0.2s ease;
}

.cursor.is-hidden {
  opacity: 0;
}

.cursor-dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 7px;
  height: 7px;
  margin: -3.5px 0 0 -3.5px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.05s linear, opacity 0.25s ease;
}

.cursor-ring {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin: -17px 0 0 -17px;
  border: 1.5px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  transition: width 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    margin 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.28s ease, border-color 0.28s ease, opacity 0.25s ease;
}

.cursor-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--color-button-text);
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.2s ease, transform 0.2s ease;
  white-space: nowrap;
}

/* Hovering an interactive element: grow the ring, hide the dot. */
.cursor.is-hover .cursor-ring {
  width: 56px;
  height: 56px;
  margin: -28px 0 0 -28px;
  border-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.1);
}

.cursor.is-hover .cursor-dot {
  opacity: 0;
}

/* Pressed state. */
.cursor.is-down .cursor-ring {
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  background-color: rgba(255, 255, 255, 0.24);
}

/* Labelled state (e.g. project cards). */
.cursor.has-label {
  mix-blend-mode: normal;
}

.cursor.has-label .cursor-ring {
  width: 74px;
  height: 74px;
  margin: -37px 0 0 -37px;
  border-color: var(--color-highlight);
  background-color: rgba(238, 187, 195, 0.14);
  backdrop-filter: blur(2px);
}

.cursor.has-label .cursor-dot {
  opacity: 0;
}

.cursor.has-label .cursor-label {
  opacity: 1;
  transform: scale(1);
}
</style>
