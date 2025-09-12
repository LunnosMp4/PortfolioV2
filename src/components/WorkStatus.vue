<template>
  <div :class="['work-status', workStatusClass]">
    <p>{{ workStatusText }}</p>
  </div>
</template>

<script>
export default {
  name: 'WorkStatus',
  data() {
    return {
      isOpenToWork: false,
    };
  },
  computed: {
    workStatusText() {
      return this.isOpenToWork ? 'Open to Work' : 'Close to Work';
    },
    workStatusClass() {
      return this.isOpenToWork ? 'open' : 'close';
    }
  },
}
</script>

<style scoped>
.work-status {
  display: flex;
  align-items: center;
  font-size: 1.4em;
  margin-bottom: 10px;
}

.work-status.open p {
  color: rgba(107, 255, 104, 0.7);
}

.work-status.open:before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: rgba(107, 255, 104, 0.7);
  border-radius: 50%;
  margin-right: 15px;
  animation: active 2s infinite;
}

.work-status.close p {
  color: rgba(255, 107, 104, 0.7);
}

.work-status.close:before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: rgba(255, 107, 104, 0.7);
  border-radius: 50%;
  margin-right: 15px;
  animation: active 2s infinite;
}

@keyframes active {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .work-status {
    font-size: 1.2em;
    margin-bottom: 0px;
  }
}
</style>