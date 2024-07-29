<template>
  <section id="projects" class="section projects">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">Projects</h2>
      <div>
        <Project 
          v-for="(project, index) in projects" 
          :key="index" 
          class="project-list" 
          :class="{'dimmed': hoveredIndex !== null && hoveredIndex !== index}"
          :color="project.color" 
          :title="project.title" 
          :description="project.description"
          :skills="project.skills"
          :openLink="project.openLink" 
          @hover="handleHover(index)" 
          @leave="handleLeave"
        />
      </div>
      <RoundedButton :url="'https://github.com/LunnosMp4?tab=repositories'" class="button-view-more">
        View More
      </RoundedButton>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Project from '@/components/Project.vue';
import RoundedButton from '@/components/RoundedButton.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectsSection',
  components: {
    Project,
    RoundedButton
  },
  data() {
    return {
      hoveredIndex: null,
      projects: [
      { color: 'rgba(255, 104, 104, 0.3)', title: 'Dashboard', description: 'A personal dashboard to manage your raspberry, host cloud stockage, write note, etc...', openLink: 'https://github.com/LunnosMp4', skills: ['Vue.js', 'Node.js', 'Raspberry Pi'] },
        { color: 'rgba(255, 217, 104, 0.3)', title: 'Cirrus', description: 'An aircraft game featuring realistic/arcade physics, providing a nuanced experience for mastering proper aircraft control.', openLink: 'https://github.com/LunnosMp4/Cirrus', skills: ['Unreal Engine 5', 'C++', '3D Modeling'] },
        { color: 'rgba(104, 255, 169, 0.3)', title: 'Dump1090 Web Modern', description: 'A modern web interface for dump1090, used to track airplanes with an ADS-B receiver.', openLink: 'https://github.com/LunnosMp4/Dump1090-Web-Modern', skills: ['JavaScript', 'HTML', 'CSS'] },
        { color: 'rgba(169, 104, 255, 0.3)', title: 'Portfolio', description: 'This website, made using Vue.js and some library like GSAP for all the animations.', openLink: 'https://github.com/LunnosMp4/PortfolioV2', skills: ['Vue.js', 'Node.js', 'HTML', 'CSS'] },
      ]
    };
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

    gsap.utils.toArray('.project-list').forEach(element => {
      gsap.fromTo(element, 
        { backgroundSize: '0% 100%' }, 
        { 
          backgroundSize: '100% 100%', 
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
            snap: 0.2
          }
        }
      );
    });
  },
  methods: {
    handleHover(index) {
      this.hoveredIndex = index;
    },
    handleLeave() {
      this.hoveredIndex = null;
    }
  }
}
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;
  border-radius: 16px;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.project-list:first-child {
  margin-top: 20px;
}

.dimmed * {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.2s ease;
}

.button-view-more {
  margin-top: 30px;
  margin-left: 20px;
}

@media screen and (max-width: 768px) {

  .project-list {
    padding: 0px 0px;
    border-radius: 0px;
  }

  .button-view-more {
    margin-left: 0px;
  }
}


</style>
