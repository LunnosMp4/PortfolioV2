<template>
  <div 
    class="project" 
    @mouseover="onHover" 
    @mouseleave="onLeave" 
    @click="openLinkInNewTab"
    :style="{ backgroundColor: isHovered ? color : '' }"
  >
    <div class="card-content">
      <div class="title">
        <h3>{{ title }}</h3>
        <div class="line" :style="lineStyle"></div>
        <div class="skills">
          <span v-for="skill in skills" :style="{backgroundColor: isHovered ? '': color}" :key="skill">{{ skill }}</span>
        </div>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
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
      isHovered: false
    };
  },
  computed: {
    lineStyle() {
      return {
        '--line-color': this.color
      };
    }
  },
  methods: {
    onHover() {
      this.isHovered = true;
      this.$emit('hover');
    },
    onLeave() {
      this.isHovered = false;
      this.$emit('leave');
    },
    openLinkInNewTab() {
      window.open(this.openLink, '_blank');
    }
  },
};
</script>

<style scoped>
.project:hover {
  cursor: pointer;
}

.line {
  display: none;
}

.card-content p {
  font-size: 1.1em;
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
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
}
</style>
