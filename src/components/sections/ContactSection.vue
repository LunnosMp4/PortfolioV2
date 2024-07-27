<template>
  <section id="contact" class="section contact">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">Contact</h2>
      <form ref="form" @submit.prevent="handleSubmit" class="contact-form" v-if="!formSubmitted && !isLoading">
        <div class="form-group">
          <label for="name">First Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div v-if="isLoading" class="loading-message">
        <p>Sending your message...</p>
      </div>
      <div v-if="formSubmitted && !isLoading" class="success-message">
        <p>Thank you! Your message has been sent successfully.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      formSubmitted: false,
      isLoading: false
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

    gsap.from(this.$refs.form, {
      scrollTrigger: {
        trigger: this.$refs.form,
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      try {
        const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL_HERE', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });

        if (response.ok) {
          this.formSubmitted = true;
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } else {
          alert('There was an error sending your message.');
        }
      } catch (error) {
        alert('There was an error sending your message.');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style scoped>

.contact {
  display: flex;
}

.contact-form {
  margin-top: 10px;
  padding: 20px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
}

input,
textarea {
  width: 90%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ffffff;
  border-radius: 0px;
  background-color: transparent;
  color: #ffffff;
  font-size: 0.8em;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--color-tertiary);
}

button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  font-size: 1.1em;
  background-color: var(--color-button);
  border-radius: 8px;
  color: var(--color-background);
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--color-button-hover);
}

.loading-message, .success-message {
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
}

.loading-message {
  background-color: var(--color-loading);
}

.success-message {
  background-color: var(--color-success);
}

@media screen and (max-width: 768px) {
  .contact-form {
    padding: 0px;
    padding-top: 20px;
  }

  button {
    width: 100%;
  }
}
</style>
