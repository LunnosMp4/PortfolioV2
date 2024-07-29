<template>
  <header class="header" ref="header">
    <div class="header-content" ref="headerContent">
      <div @click="scrollToTop" :class="{ clickable: isTitleVisible }" class="home" ref="home">
        <h1 ref="headerTitle">Loïc Tisseyre</h1>
      </div>
      <nav class="nav" ref="nav">
        <a href="#about" :class="{ active: activeSection === 'about' }"><span class="number">0. </span>About</a>
        <a href="#skills" :class="{ active: activeSection === 'skills' }"><span class="number">1. </span>Skills</a>
        <a href="#experience" :class="{ active: activeSection === 'experience' }"><span class="number">2. </span>Experience</a>
        <a href="#projects" :class="{ active: activeSection === 'projects' }"><span class="number">3. </span>Projects</a>
        <a href="#contact" :class="{ active: activeSection === 'contact' }"><span class="number">4. </span>Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
import emitter from '@/eventBus.js';

export default {
  name: 'Header',
  data() {
    return {
      isTitleVisible: false,
      activeSection: 'about'
    };
  },
  mounted() {
    emitter.on('showHeaderTitle', this.showTitle);
    emitter.on('hideHeaderTitle', this.hideTitle);
    emitter.on('sectionChanged', this.updateActiveSection);
  },
  beforeUnmount() {
    emitter.off('showHeaderTitle', this.showTitle);
    emitter.off('hideHeaderTitle', this.hideTitle);
    emitter.off('sectionChanged', this.updateActiveSection);
  },
  methods: {
    showTitle() {
      this.isTitleVisible = true;
      this.$refs.headerTitle.classList.add('visible');
    },
    hideTitle() {
      this.isTitleVisible = false;
      this.$refs.headerTitle.classList.remove('visible');
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    updateActiveSection(section) {
      this.activeSection = section;
    }
  }
};
</script>

<style scoped>
.header {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  user-select: none;
  backdrop-filter: blur(12px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
}

.home {
  display: flex;
  align-items: center;
}

.home.clickable {
  cursor: pointer;
}

.home h1 {
  background: linear-gradient(to right, var(--color-highlight), var(--color-paragraph));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.2em;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.home h1.visible {
  opacity: 1;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  position: relative;
  color: var(--color-paragraph);
  text-decoration: none;
  font-size: 1.2em;
  padding: 5px 10px;
  font-weight: 400;
  overflow: hidden;
  transition: color 0.2s;
}

.nav a:hover {
  color: #fff;
}

.nav a.active {
  color: var(--color-highlight);
}

.nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-highlight);
  transform: translateY(100%);
  transition: transform 0.2s;
}

.nav a:hover::before {
  transform: translateY(50%);
}

nav a .number {
  color: var(--color-highlight);
}


@media (max-width: 1024px) {
  .header {
    display: none;
  }
}
</style>
