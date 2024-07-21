<template>
  <div id="app">
    <Background></Background>
    <Header></Header>
    <div class="page">
      <HomeScreen></HomeScreen>
    </div>
  </div>
</template>

<script>
import './style/fonts.css'

import Background from './components/Background.vue'
import Header from './components/Header.vue'

import HomeScreen from './screens/HomeScreen.vue'

export default {
  name: 'App',
  components: {
    Background,
    Header,
    HomeScreen
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  color: #fff;
  scroll-behavior: smooth;
}

.page {
  position: relative;
  top: 150px;
  max-width: 75%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
}

</style>
