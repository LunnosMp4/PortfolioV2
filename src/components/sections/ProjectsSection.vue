<template>
  <section id="projects" class="section projects">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">Projects</h2>
      <div class="bento-grid" ref="grid">
        <Card class="grid-item item1" :title="'Dashboard'" :description="'A personal dashboard to manage your raspberry, host cloud stockage, write note, etc...'" :openLink="'https://github.com/LunnosMp4/Dashboard'"/>
        <Card class="grid-item item2" :title="'Cirrus'" :description="'A plane game made with Unreal Engine 5'" :imageUrl="require('@/assets/images/Cirrus.png')" :openLink="'https://github.com/LunnosMp4/Cirrus'"/>
        <Card class="grid-item item3" :title="'Dump1090 Web Modern'" :description="'A modern web interface for dump1090'" :imageUrl="require('@/assets/images/Dump1090.png')" :openLink="'https://github.com/LunnosMp4/Dump1090-Web-Modern'"/>
        <Card class="grid-item item4" :title="'Portfolio'" :description="'This website, made with Vue.js'" :imageUrl="require('@/assets/images/Portfolio.png')" :openLink="'https://github.com/LunnosMp4/PortfolioV2'"/>
        <Card class="grid-item item5" :title="'Discover More'" :description="'Check out my GitHub for more projects'"/>
      </div>
    </div>
  </section>
</template>



<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from '@/components/Card.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectsSection',
  components: {
    Card
  },
  mounted() {
    gsap.from(this.$refs.dot, {
      scrollTrigger: {
        trigger: this.$refs.dot,
        start: "top-=200 center",
        end: "bottom center",
        scrub: true,
      },
      scale: 0,
      ease: "power3.out"
    });

    gsap.fromTo(this.$refs.title, 
      { rotationX: 90, transformOrigin: "top center" }, 
      { 
        rotationX: 0,
        scrollTrigger: {
          trigger: this.$refs.title,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
        ease: "power3.out"
      }
    );
    
    const gridItems = this.$refs.grid.children;

    gsap.from(gridItems[0], {
      scrollTrigger: {
        trigger: gridItems[0],
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(gridItems[1], {
      scrollTrigger: {
        trigger: gridItems[1],
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(gridItems[2], {
      scrollTrigger: {
        trigger: gridItems[2],
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(gridItems[3], {
      scrollTrigger: {
        trigger: gridItems[3],
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(gridItems[4], {
      scrollTrigger: {
        trigger: gridItems[4],
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }
}
</script>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  gap: 10px;
  max-width: 800px;
  margin-top: 20px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item1 {
  grid-column: span 2;
  grid-row: span 1;
}

.item2 {  
  grid-column: span 3;
  grid-row: span 2;
}

.item3 {
  grid-column: span 2;
  grid-row: span 2;
}

.item4 {
  grid-column: span 3;
  grid-row: span 1;
}

.item5 {
  grid-column: span 5;
  grid-row: span 1;
}
</style>