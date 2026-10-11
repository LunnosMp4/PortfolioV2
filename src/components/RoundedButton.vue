<template>
  <button class="rounded-button" ref="button" @click="openUrl">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$refs.button.addEventListener('mousemove', this.handleMouseMove);
    this.$refs.button.addEventListener('mouseleave', this.handleMouseLeave);
  },
  beforeUnmount() {
    const button = this.$refs.button;
    if (!button) return;
    button.removeEventListener('mousemove', this.handleMouseMove);
    button.removeEventListener('mouseleave', this.handleMouseLeave);
  },
  methods: {
    handleMouseMove(e) {
      const button = this.$refs.button;
      const pos = button.getBoundingClientRect();
      const mx = e.clientX - pos.left - pos.width / 2;
      const my = e.clientY - pos.top - pos.height / 2;

      // Full 2D magnetic pull toward the cursor (plus a subtle 3D lean).
      button.style.transform =
        `translate(${mx * 0.2}px, ${my * 0.2}px) rotate3d(${mx * -0.08}, ${my * -0.08}, 0, 9deg)`;
    },
    handleMouseLeave() {
      this.$refs.button.style.transform = 'translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 0deg)';
    },
    openUrl() {
      window.open(this.url, '_blank');
    }
  }
}
</script>

<style scoped>
.rounded-button {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-button);
  color: var(--color-button-text);
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease;
  will-change: transform;
}

.rounded-button:hover {
  box-shadow: 0 8px 22px var(--glow-highlight);
}

@media screen and (max-width: 768px) {
  .rounded-button {
    width: 100%;
    background: linear-gradient(to right, var(--color-tertiary), var(--color-paragraph-lighter));
  }
}
</style>
