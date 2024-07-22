<template>
  <button class="rounded-button" @click="openUrl" ref="button">
    <slot></slot>
  </button>
</template>

<script>
import emitter from '@/eventBus'; // Import the event bus

export default {
  name: 'RoundedButton',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted() {
    const button = this.$refs.button;

    const handleMouseMove = (e) => {
      const pos = button.getBoundingClientRect();
      const mx = e.clientX - pos.left - pos.width / 2;
      const my = e.clientY - pos.top - pos.height / 2;

      button.style.transform = `translate(${mx * 0.15}px, ${my * 0.3}px) rotate3d(${mx * -0.1}, ${my * -0.3}, 0, 12deg)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 0deg)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    emitter.on('destroyEventListeners', () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    });
  },
  beforeUnmount() {
    emitter.emit('destroyEventListeners');
  },
  methods: {
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
  justify-content: center; /* Center the content inside the button */
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-button);
  color: var(--color-button-text);
  font-size: 1.2em;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, rotate 0.1s;
  position: relative;
}

.rounded-button:hover {
  box-shadow: 0 0px 5px var(--color-highlight);
}
</style>
