<template>
  <section id="contact" class="section contact">
    <div class="dot" ref="dot"></div>
    <div class="content-section">
      <h2 ref="title">Contact</h2>

      <p class="contact-intro" ref="intro">
        Have a project in mind, a role to fill, or just want to say hi? My inbox is always open.
      </p>

      <div class="email-chip" ref="emailChip">
        <svg class="email-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 5h18v14H3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="m3.5 6 8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="email-address">contact@loic-tisseyre.com</span>
        <button type="button" class="copy-btn" @click="copyEmail">
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>

      <form ref="form" @submit.prevent="handleSubmit" class="contact-form" v-if="!formSubmitted && !isLoading" novalidate>
        <div class="form-group" :class="{ 'has-error': errors.name }">
          <label for="name">First Name</label>
          <input type="text" id="name" v-model.trim="form.name" autocomplete="given-name" @input="errors.name = ''" />
          <span class="error-text" v-if="errors.name">{{ errors.name }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.email }">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="form.email" autocomplete="email" @input="errors.email = ''" />
          <span class="error-text" v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.message }">
          <label for="message">Message</label>
          <textarea id="message" v-model.trim="form.message" rows="4" @input="errors.message = ''"></textarea>
          <span class="error-text" v-if="errors.message">{{ errors.message }}</span>
        </div>
        <button type="submit" class="submit-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send-alt" class="icon glyph"><path fill="var(--color-button-text)" d="M21.88,4.73,16.2,20.65A2,2,0,0,1,14.3,22h0a2,2,0,0,1-1.9-1.31l-2.12-5.52,1.54-1.54,2.49-2.49a1,1,0,1,0-1.42-1.42l-2.49,2.49L8.82,13.76,3.31,11.63a2,2,0,0,1,0-3.83L19.27,2.12a2,2,0,0,1,2.61,2.61Z"></path></svg>
          Send
        </button>
      </form>

      <div v-if="isLoading" class="loading-message">
        <span class="spinner" aria-hidden="true"></span>
        <p>Sending your message...</p>
      </div>
      <div v-if="formSubmitted && !isLoading" class="success-message">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <p>Thank you! Your message has been sent successfully.</p>
      </div>
      <div v-if="submitError && !isLoading" class="error-message">
        <p>{{ submitError }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      formSubmitted: false,
      isLoading: false,
      submitError: '',
      copied: false,
      copyTimer: null
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
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: this.$refs.title,
          start: "top 88%",
          once: true,
        }
      }
    );

    gsap.from([this.$refs.intro, this.$refs.emailChip, this.$refs.form], {
      duration: 0.7,
      ease: "power3.out",
      y: 40,
      opacity: 0,
      stagger: 0.12,
      scrollTrigger: {
        trigger: this.$refs.form,
        start: "top 92%",
        once: true
      }
    });
  },
  beforeUnmount() {
    if (this.copyTimer) clearTimeout(this.copyTimer);
  },
  methods: {
    validate() {
      this.errors.name = this.form.name ? '' : 'Please enter your name.';
      this.errors.email = !this.form.email
        ? 'Please enter your email.'
        : (EMAIL_RE.test(this.form.email) ? '' : 'Please enter a valid email address.');
      this.errors.message = this.form.message.length >= 10
        ? ''
        : 'Please write at least 10 characters.';
      return !this.errors.name && !this.errors.email && !this.errors.message;
    },
    async handleSubmit() {
      this.submitError = '';
      if (!this.validate()) return;

      this.isLoading = true;
      try {
        const response = await fetch('https://formsubmit.co/ajax/contact@loic-tisseyre.com', {
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
          this.submitError = 'There was an error sending your message. Please try again.';
        }
      } catch (error) {
        this.submitError = 'There was an error sending your message. Please try again.';
      } finally {
        this.isLoading = false;
      }
    },
    async copyEmail() {
      const email = 'contact@loic-tisseyre.com';
      try {
        await navigator.clipboard.writeText(email);
      } catch (error) {
        const el = document.createElement('textarea');
        el.value = email;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      this.copied = true;
      if (this.copyTimer) clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => { this.copied = false; }, 2000);
    }
  }
}
</script>

<style scoped>

.contact {
  display: flex;
}

.contact-intro {
  margin-top: 10px;
  color: var(--color-paragraph);
  font-size: 1.2em;
}

.email-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  padding: 8px 10px 8px 14px;
  border-radius: 50px;
  border: 1px solid rgba(184, 193, 236, 0.35);
  background: rgba(184, 193, 236, 0.05);
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.email-chip:hover {
  border-color: var(--color-highlight);
  background: rgba(226, 162, 172, 0.08);
}

.email-icon {
  width: 18px;
  height: 18px;
  color: var(--color-highlight);
  flex: 0 0 auto;
}

.email-address {
  color: var(--color-paragraph-lighter);
  font-size: 1em;
}

.copy-btn {
  border: none;
  border-radius: 50px;
  padding: 5px 14px;
  background: var(--color-button);
  color: var(--color-button-text);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 0.85em;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.copy-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px var(--glow-highlight);
}

.contact-form {
  margin-top: 24px;
  padding: 0;
  width: 100%;
}

.form-group {
  margin-bottom: 22px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
}

input,
textarea {
  width: 90%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0px;
  background-color: transparent;
  color: #ffffff;
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  resize: vertical;
  transition: border-color 0.3s ease;
}

input::placeholder,
textarea::placeholder {
  color: rgba(184, 193, 236, 0.5);
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--color-tertiary);
}

.has-error input,
.has-error textarea {
  border-bottom-color: var(--color-danger-text);
}

.error-text {
  display: block;
  margin-top: 6px;
  color: var(--color-danger-text);
  font-size: 0.85em;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  font-size: 1.1em;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  background-color: var(--color-button);
  border-radius: 8px;
  color: var(--color-background);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-btn:hover {
  background-color: var(--color-button);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--glow-highlight);
}

.submit-btn svg {
  margin-right: 8px;
  vertical-align: middle;
}

.loading-message,
.success-message,
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 12px;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.loading-message {
  background-color: var(--color-loading);
  color: var(--color-paragraph-lighter);
}

.success-message {
  background-color: var(--color-success);
  color: var(--color-success-text);
}

.error-message {
  background-color: var(--color-danger);
  color: var(--color-danger-text);
}

.success-message svg {
  width: 22px;
  height: 22px;
}

.spinner {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-top-color: var(--color-highlight);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media screen and (max-width: 768px) {
  .contact-form {
    padding: 0px;
    padding-top: 20px;
  }

  input,
  textarea {
    width: 100%;
  }

  .submit-btn {
    width: 100%;
    justify-content: center;
  }

  .email-address {
    font-size: 0.85em;
  }
}
</style>
