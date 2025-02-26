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
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="var(--color-button-text)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.1887 8.07625C17.3085 7.71692 17.215 7.32075 16.9471 7.05292C16.6793 6.78509 16.2831 6.69156 15.9238 6.81134L9.56381 8.93134C9.2652 9.03088 9.03089 9.26519 8.93135 9.5638L6.81135 15.9238C6.69158 16.2831 6.7851 16.6793 7.05293 16.9471C7.32076 17.215 7.71693 17.3085 8.07626 17.1887L14.4363 15.0687C14.7349 14.9692 14.9692 14.7349 15.0687 14.4363L17.1887 8.07625Z" fill="var(--color-button-text)"/>
        </svg>
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
        { color: 'rgba(255, 180, 85, 0.4)', title: 'GateKeeper', description: 'A high-performance Rust-based API Gateway with authentication, rate limiting, caching, and analytics for managing and securing backend microservices.', openLink: 'https://github.com/LunnosMp4/GateKeeper', skills: ['Rust', 'Vue.js', 'Docker', 'PostgreSQL', 'Redis'] },
        { color: 'rgba(255, 217, 104, 0.3)', title: 'Cirrus', description: 'An aircraft game featuring realistic/arcade physics, providing a nuanced experience for mastering proper aircraft control.', openLink: 'https://lunnos.itch.io/cirrus', skills: ['Unreal Engine 5', 'C++', '3D Modeling'] },
        { color: 'rgba(104, 255, 169, 0.3)', title: 'Dump1090 Web Modern', description: 'A modern web interface for dump1090, used to track airplanes with an ADS-B receiver.', openLink: 'https://github.com/LunnosMp4/Dump1090-Web-Modern', skills: ['JavaScript', 'HTML', 'CSS'] },
        { color: 'rgba(169, 104, 255, 0.3)', title: 'Portfolio', description: 'This website, made using Vue.js and some library like GSAP for all the animations.', openLink: 'https://github.com/LunnosMp4/PortfolioV2', skills: ['Vue.js', 'Node.js', 'HTML', 'CSS'] },
        { color: 'rgba(104, 255, 255, 0.3)', title: 'Perceptia', description: 'Capture screen regions for AI-powered responses.', openLink: 'https://github.com/LunnosMp4/Perceptia', skills: ['Node.js'] },
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
            scrub: 1
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

.button-view-more svg {
  margin-right: 10px;
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
