<template>
  <div class="background" ref="bg" aria-hidden="true">
    <div class="aurora" ref="aurora">
      <div class="aurora__blob aurora__blob--1"></div>
      <div class="aurora__blob aurora__blob--2"></div>
      <div class="aurora__blob aurora__blob--3"></div>
    </div>

    <div class="glow" ref="glow"></div>

    <div class="blob-container dot-pattern">
      <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2e3e5c" d="M38.1,-20C52.8,-11.9,70.6,4.1,67.3,14.1C64,24.1,39.7,28,20.4,34C1.2,40.1,-13,48.2,-26.4,45.4C-39.9,42.6,-52.6,28.7,-58.1,11.3C-63.7,-6.2,-62.1,-27.2,-51.3,-34.5C-40.4,-41.7,-20.2,-35.1,-4.3,-31.7C11.7,-28.3,23.3,-28.1,38.1,-20Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
</template>

<script>
import { hasFinePointer, prefersReducedMotion } from '@/plugins/smoothScroll'

export default {
  name: 'Background',
  mounted() {
    if (!hasFinePointer() || prefersReducedMotion()) return

    this.interactive = true
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    this.auroraPos = { x: 0, y: 0 }
    this.glowPos = { ...this.pos }

    window.addEventListener('mousemove', this.onMove, { passive: true })
    this.raf = requestAnimationFrame(this.tick)
  },
  beforeUnmount() {
    if (!this.interactive) return
    cancelAnimationFrame(this.raf)
    window.removeEventListener('mousemove', this.onMove)
  },
  methods: {
    onMove(e) {
      this.pos.x = e.clientX
      this.pos.y = e.clientY
    },
    tick() {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2

      // Aurora drifts a little toward the pointer (parallax).
      const ax = ((this.pos.x - cx) / cx) * 26
      const ay = ((this.pos.y - cy) / cy) * 26
      this.auroraPos.x += (ax - this.auroraPos.x) * 0.05
      this.auroraPos.y += (ay - this.auroraPos.y) * 0.05
      if (this.$refs.aurora) {
        this.$refs.aurora.style.transform = `translate3d(${this.auroraPos.x}px, ${this.auroraPos.y}px, 0)`
      }

      // Soft glow trails the cursor more closely.
      this.glowPos.x += (this.pos.x - this.glowPos.x) * 0.08
      this.glowPos.y += (this.pos.y - this.glowPos.y) * 0.08
      if (this.$refs.glow) {
        this.$refs.glow.style.transform = `translate3d(${this.glowPos.x}px, ${this.glowPos.y}px, 0)`
      }

      this.raf = requestAnimationFrame(this.tick)
    }
  }
}
</script>

<style scoped>
.background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--color-background);
  pointer-events: none;
}

.aurora {
  position: absolute;
  inset: -10%;
  filter: blur(90px);
  opacity: 0.45;
  will-change: transform;
}

.aurora__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
}

.aurora__blob--1 {
  width: 46vw;
  height: 46vw;
  top: -14%;
  left: -6%;
  background: radial-gradient(circle, rgba(238, 187, 195, 0.42), transparent 62%);
  animation: drift1 24s ease-in-out infinite alternate;
}

.aurora__blob--2 {
  width: 54vw;
  height: 54vw;
  top: 2%;
  right: -16%;
  background: radial-gradient(circle, rgba(184, 193, 236, 0.34), transparent 64%);
  animation: drift2 30s ease-in-out infinite alternate;
}

.aurora__blob--3 {
  width: 40vw;
  height: 40vw;
  bottom: -12%;
  left: 28%;
  background: radial-gradient(circle, rgba(226, 162, 172, 0.28), transparent 66%);
  animation: drift3 27s ease-in-out infinite alternate;
}

/* Radial spotlight that follows the pointer across the whole page. */
.glow {
  position: absolute;
  top: 0;
  left: 0;
  width: min(60vw, 900px);
  height: min(60vw, 900px);
  margin: calc(min(60vw, 900px) / -2) 0 0 calc(min(60vw, 900px) / -2);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(238, 187, 195, 0.09), transparent 60%);
  will-change: transform;
}

.blob-container {
  position: absolute;
  inset: 0;
}

.blob {
  position: absolute;
  top: -6%;
  left: 50%;
  width: 120vw;
  height: 120vw;
  transform: translateX(-50%);
  animation: randomMove 20s infinite alternate, rotate 60s infinite linear;
  filter: blur(20px);
}

.dot-pattern {
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.15) 90%);
  mask-size: cover;
}

@keyframes randomMove {
  0% { transform: translate(-50%, -17%); }
  25% { transform: translate(calc(-50% - 2%), -20%); }
  50% { transform: translate(calc(-50% - 3%), -16%); }
  75% { transform: translate(calc(-50% + 1%), -15%); }
  100% { transform: translate(-50%, -17%); }
}

@keyframes rotate {
  0% { rotate: 0deg; }
  25% { rotate: 45deg; }
  50% { rotate: 0deg; }
  75% { rotate: -45deg; }
  100% { rotate: 0deg; }
}

@keyframes drift1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(8vw, 6vw) scale(1.15); }
}

@keyframes drift2 {
  0% { transform: translate(0, 0) scale(1.05); }
  100% { transform: translate(-9vw, 4vw) scale(0.92); }
}

@keyframes drift3 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-5vw, -6vw) scale(1.2); }
}

@media (max-width: 768px) {
  .aurora {
    opacity: 0.4;
  }

  .glow {
    display: none;
  }

  .blob {
    width: 160vw;
    height: 160vw;
  }
}
</style>
