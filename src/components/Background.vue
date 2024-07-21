<template>
  <div class="background">
    <div class="blob-container">
      <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2e3e5c" d="M38.1,-20C52.8,-11.9,70.6,4.1,67.3,14.1C64,24.1,39.7,28,20.4,34C1.2,40.1,-13,48.2,-26.4,45.4C-39.9,42.6,-52.6,28.7,-58.1,11.3C-63.7,-6.2,-62.1,-27.2,-51.3,-34.5C-40.4,-41.7,-20.2,-35.1,-4.3,-31.7C11.7,-28.3,23.3,-28.1,38.1,-20Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Background',
}
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--color-background);
  z-index: -10;
  overflow: hidden;
}

.blob {
  width: 100%;
  height: 100%;
  animation: randomMove 20s infinite alternate;
  filter: blur(20px);
}

@keyframes randomMove {
  0% {
    transform: translate(0%, -17%);
  }
  25% {
    transform: translate(-2%, -20%);
  }
  50% {
    transform: translate(-3%, -16%);
  }
  75% {
    transform: translate(1%, -15%);
  }
  100% {
    transform: translate(0%, -17%);
  }
}
</style>