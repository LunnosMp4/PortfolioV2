<template>
  <section id="experience" class="section experience">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">Experience</h2>
      <div ref="buttons" class="toggle-buttons">
        <button @click="showSection('professional')" :class="{ active: currentSection === 'professional' }">Professional Experience</button>
        <button @click="showSection('academic')" :class="{ active: currentSection === 'academic' }">Academic Experience</button>
      </div>
      <div ref="exp">
        <div class="experience-list" v-if="currentSection === 'professional'">
          <Experience
          v-for="exp in professionalExperiences"
          :key="exp.id"
          :name="exp.name"
          :description="exp.description"
          :skills="exp.skills"
          :date="exp.date"
        />
        </div>
        <div class="experience-list" v-if="currentSection === 'academic'">
          <Experience
          v-for="exp in academicExperiences"
          :key="exp.id"
          :name="exp.name"
          :description="exp.description"
          :date="exp.date"
          />
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import Experience from '@/components/Experience.vue';

export default {
  name: 'ExperienceSection',
  components: {
    Experience
  },
  data() {
    return {
      currentSection: 'professional',
      professionalExperiences: [
        {
          id: 1,
          name: "Freelance Software Developer",
          description: "Developed a C# application as an extension for Tekla Structures to handle bending profiles. The tool automated workflows related to profile bending, improving accuracy and reducing manual work. I designed and implemented the application from scratch, ensuring smooth integration with Tekla and delivering a reliable solution tailored to structural engineering needs.",
          skills: ["C#", "Tekla Structures API", "Software Development"],
          date: "Jul — Sep 2025"
        },
        {
          id: 2,
          name: "Software Engineer (Intership) · Eliis",
          description: "At Eliis, I worked on the development of PaleoScan™, a seismic interpretation software. My role involved programming in C++ and Qt to add features, improve functionality, and fix bugs. I managed tasks with Jira, used Git for version control, and participated in continuous integration with Jenkins. I followed agile methodologies to ensure efficient project delivery. Eliis specializes in advanced geoscience solutions that enhance the speed and accuracy of subsurface analysis.",
          skills: ["C++", "QT", "Git", "Jenkins", "Jira"],
          date: "Feb — May 2024"
        },
        {
          id: 3,
          name: "Full-Stack Developer (Intership) · Elloha",
          description: "At Elloha, I developed and improved web templates, working on both the front-end and back-end using C#. My responsibilities included adding new features, fixing bugs, and ensuring seamless integration between components. I managed tasks using Jira and maintained version control with Git. Elloha's platform helps tourism and leisure businesses digitalize their operations, making it easier to manage bookings and enhance customer experiences.",
          skills: ["JavaScript", "HTML & CSS", "C#", "Git", "Jira"],
          date: "Jul — Nov 2022"
        }
      ],
      academicExperiences: [
        {
          id: 1,
          name: "European Institute of Technology Epitech · Montpellier",
          description: "I am currently in my fourth year at Epitech, a leading technology university in France. My studies focus on computer science and software engineering, where I've gained practical skills in various programming languages, development frameworks, and project management. Epitech's hands-on approach has allowed me to work on real-world projects and collaborate with peers, enhancing my problem-solving and technical abilities.",
          skills: ["C", "C++", "C#", "Java", "JavaScript", "Python", "PHP", "SQL", "HTML & CSS"],
          date: "2021 — 2026"
        },
        {
          id: 2,
          name: "Chung-Ang University Exchange Program · Seoul",
          description: "Starting in September 2024, I am enrolled in an exchange program at Chung-Ang University in Seoul, South Korea. My coursework includes Korean Culture and Art, Elementary Korean Language, Image Processing, Mobile Programming, Design of Game Software, and Web Programming. This program offers a blend of cultural studies and technical courses, providing a diverse and comprehensive learning experience.",
          skills: ["Korean", "Korean Culture", "Korean History", "Korean Economy"],
          date: "2024 — 2025"
        }
      ]
    };
  },
  watch: {
    currentSection() {
      this.$nextTick(() => {
        this.applyAnimations();
      });
    }
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
    },
    applyAnimations() {
      gsap.utils.toArray(this.$refs.exp.children).forEach((child) => {
        gsap.from(child, {
          scrollTrigger: {
            trigger: child,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }
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

    gsap.from(this.$refs.buttons, {
      scrollTrigger: {
        trigger: this.$refs.buttons,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.utils.toArray(this.$refs.exp.children).forEach((child) => {
      gsap.from(child, {
        scrollTrigger: {
          trigger: child,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  },

}
</script>

<style scoped>
.experience-list {
  margin-top: 20px;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.toggle-buttons button {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid var(--color-highlight);
}

.toggle-buttons button.active {
  background-color: var(--color-highlight);
  color: var(--color-background);
}

.toggle-buttons button:hover {
  border: 1px solid var(--color-highlight);
  transform: scale(1.05);
}

</style>
