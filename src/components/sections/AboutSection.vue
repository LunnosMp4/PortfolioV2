<template>
  <section id="about" class="section about">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">About</h2>
      <div class="about-me">
        <p>
          Hi there! I'm a <span class="highlight">Cloud Engineer</span> focused on cloud platforms, with hands-on experience building and automating infrastructure on <span class="highlight">GCP</span> and <span class="highlight">S3NS</span> using Terraform.
        </p>
        <p>
          My cloud experience includes deploying secure landing zones, applying Infrastructure as Code, and improving consistency across multi-client environments. I care about building infrastructure that is <span class="highlight">reliable</span>, <span class="highlight">secure</span>, and maintainable.
        </p>
        <p>
          Alongside cloud engineering, I continue to work as a <span class="highlight">freelance software developer</span>, building tailored applications and tools for clients.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutSection',
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

    gsap.utils.toArray('.highlight').forEach(element => {
      gsap.fromTo(element, 
        { backgroundSize: '0% 100%' }, 
        { 
          backgroundSize: '100% 100%', 
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1
          }
        }
      );
    });
  }
}
</script>

<style scoped>

.about-me h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.about-me p {
  margin-bottom: 1em;
}

.highlight {
  background-image: linear-gradient(120deg, var(--color-tertiary) 0%, var(--color-paragraph-lighter) 100%);
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  font-weight: 600;
}
</style>
