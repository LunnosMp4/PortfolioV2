<template>
  <section id="contact" class="section contact">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">Contact</h2>
      <p>Details about your contact information...</p>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactSection',
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
  }
}
</script>
