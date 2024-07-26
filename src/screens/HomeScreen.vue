<template>
  <section class="home-screen">
    <div class="name">
      <p ref="greeting" >Hello there! I'm</p>
      <h1 ref="name">Loïc Tisseyre</h1>
    </div>
    <div class="description" ref="description">
      <p>
        I'm a Full-stack developer passionate about intuitive, high-performance applications.
      </p>
    </div>
    <div class="network" ref="network">
      <RoundedButton url="https://github.com/LunnosMp4">
        <svg width="20" height="20" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="var(--color-button-text)"/></svg>
        Github
      </RoundedButton>
      <RoundedButton url="https://linkedin.com/in/loïc-tisseyre">
        <svg width="20" height="20" viewBox="0 0 256 256" xml:space="preserve"><g transform="scale(2.81 2.81)" ><path d="M 83.349 0 H 6.651 C 2.978 0 0 2.887 0 6.447 v 77.106 C 0 87.114 2.978 90 6.651 90 h 76.698 C 87.022 90 90 87.114 90 83.553 V 6.447 C 90 2.887 87.022 0 83.349 0 z M 27.282 75.339 H 13.688 v -40.64 h 13.594 V 75.339 z M 20.485 29.151 h -0.088 c -4.562 0 -7.512 -3.121 -7.512 -7.021 c 0 -3.988 3.04 -7.022 7.69 -7.022 c 4.651 0 7.513 3.034 7.601 7.022 C 28.176 26.03 25.225 29.151 20.485 29.151 z M 76.299 75.339 H 62.707 V 53.598 c 0 -5.463 -1.968 -9.19 -6.887 -9.19 c -3.756 0 -5.992 2.513 -6.975 4.94 c -0.359 0.868 -0.447 2.081 -0.447 3.296 v 22.695 H 34.804 c 0 0 0.178 -36.826 0 -40.64 h 13.594 v 5.756 c 1.806 -2.769 5.036 -6.709 12.251 -6.709 c 8.944 0 15.65 5.808 15.65 18.291 V 75.339 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: var(--color-button-text); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>
        LinkedIn
      </RoundedButton>
      <RoundedButton url="https://codepen.io/lunnosmp4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4265 1.18077C11.7709 0.939744 12.2291 0.939744 12.5735 1.18077L22.5735 8.18077C22.8408 8.3679 23 8.67369 23 9V16C23 16.3263 22.8408 16.6321 22.5735 16.8192L12.5735 23.8192C12.2291 24.0603 11.7709 24.0603 11.4265 23.8192L1.42654 16.8192C1.15921 16.6321 1 16.3263 1 16V9C1 8.67369 1.15921 8.3679 1.42654 8.18077L11.4265 1.18077ZM3 10.9207V14.0793L5.25621 12.5L3 10.9207ZM7 13.7207L3.74379 16L11 21.0793V16.5207L7 13.7207ZM13 16.5207V21.0793L20.2562 16L17 13.7207L13 16.5207ZM18.7438 12.5L21 14.0793V10.9207L18.7438 12.5ZM20.2562 9L17 11.2793L13 8.47934V3.92066L20.2562 9ZM11 3.92066V8.47934L7 11.2793L3.74379 9L11 3.92066ZM12 10.2207L8.74379 12.5L12 14.7793L15.2562 12.5L12 10.2207Z" fill="var(--color-button-text)"/></svg>
        Codepen
      </RoundedButton>
    </div>

    <div class="scroll" ref="scroll">
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="var(--color-paragraph)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 6V14" stroke="var(--color-paragraph)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 11L12 14L9 11" stroke="var(--color-paragraph)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="sections">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </section>
</template>

<script>
import '@/styles/sections.css';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RoundedButton from '@/components/RoundedButton.vue';

import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

import emitter from '@/eventBus.js';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomeScreen',
  components: {
    RoundedButton,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  },
  mounted() {
    const tl = gsap.timeline();

    tl.from(this.$refs.greeting, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    })
    .from(this.$refs.name, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.5")
    .from(this.$refs.description, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.6")
    .from(this.$refs.network.children, {
      duration: 0.8,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.5");

    ScrollTrigger.create({
      trigger: this.$refs.name,
      start: "bottom top",
      onEnter: () => {
        emitter.emit('showHeaderTitle');
      },
      onLeaveBack: () => {
        emitter.emit('hideHeaderTitle');
      }
    });

    gsap.utils.toArray('.sections > *').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          scrub: true,
          onEnter: () => {
            const id = section.id;
            emitter.emit('sectionChanged', id);
          },
          onLeaveBack: () => {
            const id = section.id;
            emitter.emit('sectionChanged', id);
          },
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    let scrollDivHidden = false;
    const hideScrollDiv = () => {
      if (!scrollDivHidden) {
        gsap.to(this.$refs.scroll, {
          duration: 0.5,
          opacity: 0,
          ease: "power3.out",
        });
        scrollDivHidden = true;
      }
    };

    window.addEventListener('scroll', hideScrollDiv);
  }
}
</script>

<style scoped>
.home-screen {
  position: relative;
  display: flex;
  flex-direction: column;
}

.name {
  width: fit-content;
}

.name p {
  font-size: 1.2em;
  font-weight: 600;
  background: linear-gradient(to right, var(--color-tertiary), var(--color-paragraph-lighter));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;
}

.name h1 {
  margin: 0;
  font-size: 6em;
  font-weight: 600;
  background: linear-gradient(to right, var(--color-tertiary), var(--color-paragraph-lighter));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  margin-top: 20px;
  max-width: 60%;
  font-size: 1.8em;
}

.network {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.network svg {
  margin-right: 10px;
}

.scroll {
  position: relative;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 20px;
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateY(10px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .name h1 {
    font-size: 4em;
  }

  .description {
    max-width: 80%;
    font-size: 1.5em;
  }
}

@media (max-width: 768px) {
  .name h1 {
    font-size: 3em;
  }
  .description {
    max-width: 100%;
    font-size: 1.2em;
  }

  .network {
    flex-wrap: wrap;
  }

  .scroll {
    opacity: 0;
  }
}
</style>
