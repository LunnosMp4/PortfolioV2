<template>
  <div
    class="project"
    ref="card"
    data-cursor-label="Open"
    @mouseenter="onEnter"
    @mousemove="onMove"
    @mouseleave="onLeave"
    @click="openLinkInNewTab"
    :style="{ backgroundColor: isHovered ? color : '' }"
  >
    <div class="card-content" ref="content">
      <div class="title">
        <h3>{{ title }}</h3>
        <div class="line" :style="lineStyle"></div>
        <div class="skills">
          <span v-for="skill in skills" :style="{backgroundColor: isHovered ? '': color}" :key="skill">{{ skill }}</span>
        </div>
      </div>
      <p>{{ description }}</p>
      <span class="arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { hasFinePointer, prefersReducedMotion } from '@/plugins/smoothScroll'

export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum Dolor'
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?'
    },
    openLink: {
      type: String,
      default: 'https://github.com/LunnosMp4'
    },
    color: {
      type: String,
      default: '#000'
    },
    skills: {
      type: Array,
      default: () => ['Vue.js', 'Node.js', 'Raspberry Pi']
    }
  },
  data() {
    return {
      isHovered: false,
      canTilt: false
    };
  },
  computed: {
    lineStyle() {
      return {
        '--line-color': this.color
      };
    }
  },
  mounted() {
    this.canTilt = hasFinePointer() && !prefersReducedMotion();
  },
  methods: {
    onEnter() {
      this.isHovered = true;
      this.$emit('hover');
    },
    onMove(e) {
      if (!this.canTilt || !this.$refs.content || !this.$refs.card) return;
      const rect = this.$refs.card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - py) * 7;
      const rotateY = (px - 0.5) * 9;
      this.$refs.content.style.transform =
        `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`;
    },
    onLeave() {
      this.isHovered = false;
      if (this.$refs.content) this.$refs.content.style.transform = '';
      this.$emit('leave');
    },
    openLinkInNewTab() {
      window.open(this.openLink, '_blank');
    }
  },
};
</script>

<style scoped>
.project {
  cursor: pointer;
}

.card-content {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
  will-change: transform;
}

.card-content p {
  font-size: 1.1em;
  margin-top: auto;
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.line {
  display: none;
}

.skills {
  display: flex;
  gap: 10px;
}

.skills span {
  padding: 5px 10px;
  border-radius: 50px;
  transition: background-color 0.2s;
}

.arrow {
  position: absolute;
  top: 26px;
  right: 22px;
  width: 26px;
  height: 26px;
  color: var(--color-highlight);
  opacity: 0;
  transform: translate(-8px, 8px);
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.arrow svg {
  width: 100%;
  height: 100%;
}

.project:hover .arrow {
  opacity: 1;
  transform: translate(0, 0);
}

@media screen and (max-width: 768px) {
  .title {
    margin-top: 10px;
  }

  .card-content p {
    margin: 0;
  }

  .skills {
    display: none;
  }

  .line {
    display: flex;
    width: 100%;
    height: 2px;
  }

  .line::before {
    content: '';
    flex: 1;
    background-color: var(--line-color);
  }

  .arrow {
    display: none;
  }
}
</style>
