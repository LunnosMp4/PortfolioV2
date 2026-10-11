<template>
  <div id="app" class="dot-pattern">
    <Background></Background>
    <ScrollProgress></ScrollProgress>
    <CustomCursor></CustomCursor>
    <div class="grain" aria-hidden="true"></div>
    <Header></Header>
    <div class="page">
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import '@/styles/fonts.css'
import Background from '@/components/Background.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'

export default {
  name: 'App',
  components: {
    Background,
    Header,
    Footer,
    CustomCursor,
    ScrollProgress
  }
}
</script>

<style scoped>

.page {
  position: relative;
  top: 150px;
  max-width: 75%;
  margin: 0 auto;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .page {
    max-width: 90%;
  }
  
}

/* .dot-pattern {
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%);
  mask-size: cover;
} */

</style>
