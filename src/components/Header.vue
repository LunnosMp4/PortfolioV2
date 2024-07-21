<template>
  <header class="header" ref="header">
    <div class="header-content" ref="headerContent">
      <div class="home" ref="home">
        <h1 ref="headerTitle">Loïc Tisseyre</h1>
      </div>
      <nav class="nav" ref="nav">
        <a href="#about"><span class="number">0. </span>About</a>
        <a href="#skills"><span class="number">1. </span>Skills</a>
        <a href="#projects"><span class="number">2. </span>Projects</a>
        <a href="#contact"><span class="number">3. </span>Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isTitleVisible: false
    };
  }
}
</script>

<style scoped>
.header {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
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
  color: #aaa;
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

.nav a:active::before {
  height: 30px;
  transition: transform 0.2s, height 0.2s;
}

nav a .number {
  color: var(--color-highlight);
}
</style>
