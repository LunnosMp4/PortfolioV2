<template>
  <div class="card" 
        :style="{ backgroundImage: 'url(' + imageUrl + ')', transform: cardTransform }"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        @click="openLinkInNewTab">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="glow" :style="glowStyle"></div>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum Dolor'
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?'
    },
    imageUrl: {
      type: String,
      default: 'https://picsum.photos/1920/1080'
    },
    openLink: {
      type: String,
      default: 'https://github.com/LunnosMp4'
    }
  },
  data() {
    return {
      cardTransform: 'rotateX(0deg) rotateY(0deg)',
      glowStyle: {
        backgroundImage: 'radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)'
      }
    };
  },
  methods: {
    handleMouseMove(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 8; // adjust the 8 to control the tilt
      const rotateY = ((x - centerX) / centerX) * -8; // adjust the 8 to control the tilt

      this.cardTransform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1)`;

      const center = {
        x: (x - centerX) * 2,
        y: (y - centerY) * 2
      };

      this.glowStyle = {
        backgroundImage: `radial-gradient(circle at ${center.x + rect.width / 2}px ${center.y + rect.height / 2}px, #ffffff55, #0000000f)`
      };
    },
    handleMouseLeave() {
      this.cardTransform = 'rotateX(0deg) rotateY(0deg)';
      this.glowStyle = {
        backgroundImage: 'radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)'
      };
    },
    openLinkInNewTab() {
      window.open(this.openLink, '_blank');
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  background-size: cover;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(19, 15, 15, 0.1);
  overflow: hidden;
  border: 1px solid var(--color-tertiary);
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  position: relative;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(19, 15, 15, 0.5);
}

.card-content {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: var(--color-background);
  flex: 1;
  transition: background-color 0.3s;
}

.card-content:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.card-content h3, .card-content p {
  transition: opacity 0.3s;
  margin-left: 20px;
  opacity: 1;
}

.card-content:hover h3, .card-content:hover p {
  opacity: 0;
  user-select: none;
}

.card-content h3 {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.card-content p {
  color: #ffffffb4;
}

.glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
  pointer-events: none;
  transition: background-image 0.1s ease-out;
}
</style>
