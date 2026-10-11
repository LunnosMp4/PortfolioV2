<template>
  <header class="header" ref="header">
    <div class="header-content" ref="headerContent">
      <div @click="scrollToTop" :class="{ clickable: isTitleVisible }" class="home" ref="home">
        <h1 ref="headerTitle">Loïc Tisseyre</h1>
      </div>
      <nav class="nav" ref="nav">
        <a href="#about" @click.prevent="goTo('about')" :class="{ active: activeSection === 'about' }"><span class="number">0. </span>About</a>
        <a href="#skills" @click.prevent="goTo('skills')" :class="{ active: activeSection === 'skills' }"><span class="number">1. </span>Skills</a>
        <a href="#experience" @click.prevent="goTo('experience')" :class="{ active: activeSection === 'experience' }"><span class="number">2. </span>Experience</a>
        <a href="#projects" @click.prevent="goTo('projects')" :class="{ active: activeSection === 'projects' }"><span class="number">3. </span>Projects</a>
        <a href="#contact" @click.prevent="goTo('contact')" :class="{ active: activeSection === 'contact' }"><span class="number">4. </span>Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
import emitter from '@/eventBus.js';
import { scrollTo } from '@/plugins/smoothScroll';

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
      scrollTo(0, { duration: 1.4 });
    },
    goTo(id) {
      const el = document.getElementById(id);
      if (el) scrollTo(el, { duration: 1.2 });
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
  color: var(--color-secondary);
}

.nav a.active {
  color: var(--color-highlight);
}

.nav a::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--color-tertiary), var(--color-paragraph-lighter));
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav a:hover::after,
.nav a.active::after {
  transform: scaleX(1);
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
