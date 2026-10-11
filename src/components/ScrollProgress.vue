<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress__bar" ref="bar"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  mounted() {
    this.onScroll = () => {
      if (this.queued) return
      this.queued = true
      requestAnimationFrame(() => {
        this.queued = false
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
        if (this.$refs.bar) {
          this.$refs.bar.style.transform = `scaleX(${progress})`
        }
      })
    }
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('resize', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onScroll)
  }
}
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9997;
  pointer-events: none;
}

.scroll-progress__bar {
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    var(--color-tertiary),
    var(--color-paragraph-lighter),
    var(--color-tertiary)
  );
  box-shadow: 0 0 14px var(--glow-highlight);
  will-change: transform;
}
</style>
