<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <h3>Loïc Tisseyre</h3>
          <p>Cloud Engineer &amp; Freelance Developer — building reliable, automated infrastructure.</p>
        </div>

        <button class="to-top" @click="scrollToTop" aria-label="Back to top">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Back to top</span>
        </button>
      </div>

      <div class="footer-socials">
        <a href="https://github.com/LunnosMp4" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor"/></svg>
        </a>
        <a href="https://linkedin.com/in/loïc-tisseyre" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 256 256" xml:space="preserve"><g transform="scale(2.81 2.81)"><path d="M 83.349 0 H 6.651 C 2.978 0 0 2.887 0 6.447 v 77.106 C 0 87.114 2.978 90 6.651 90 h 76.698 C 87.022 90 90 87.114 90 83.553 V 6.447 C 90 2.887 87.022 0 83.349 0 z M 27.282 75.339 H 13.688 v -40.64 h 13.594 V 75.339 z M 20.485 29.151 h -0.088 c -4.562 0 -7.512 -3.121 -7.512 -7.021 c 0 -3.988 3.04 -7.022 7.69 -7.022 c 4.651 0 7.513 3.034 7.601 7.022 C 28.176 26.03 25.225 29.151 20.485 29.151 z M 76.299 75.339 H 62.707 V 53.598 c 0 -5.463 -1.968 -9.19 -6.887 -9.19 c -3.756 0 -5.992 2.513 -6.975 4.94 c -0.359 0.868 -0.447 2.081 -0.447 3.296 v 22.695 H 34.804 c 0 0 0.178 -36.826 0 -40.64 h 13.594 v 5.756 c 1.806 -2.769 5.036 -6.709 12.251 -6.709 c 8.944 0 15.65 5.808 15.65 18.291 V 75.339 z" fill="currentColor"/></g></svg>
        </a>
        <a href="https://linktr.ee/lunnos" target="_blank" rel="noopener" aria-label="Linktree">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" fill="currentColor"/></svg>
        </a>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p>&copy; {{ year }} Loïc Tisseyre — All rights reserved</p>
        <p>Designed &amp; developed with Vue.js &amp; GSAP</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { scrollTo } from '@/plugins/smoothScroll';

export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      scrollTo(0, { duration: 1.4 });
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  color: var(--color-paragraph);
  padding: 90px 0 40px;
  margin-top: 60px;
}

.footer-inner {
  max-width: 75%;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.footer-brand h3 {
  font-size: 1.8em;
  margin: 0 0 8px;
  background: linear-gradient(to right, var(--color-highlight), var(--color-paragraph-lighter));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.footer-brand p {
  max-width: 460px;
  margin: 0;
  color: var(--color-paragraph);
  opacity: 0.75;
}

.to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 50px;
  border: 1px solid rgba(184, 193, 236, 0.35);
  background: transparent;
  color: var(--color-paragraph-lighter);
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95em;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
  white-space: nowrap;
}

.to-top svg {
  width: 18px;
  height: 18px;
}

.to-top:hover {
  transform: translateY(-3px);
  border-color: var(--color-highlight);
  background: rgba(226, 162, 172, 0.08);
}

.footer-socials {
  display: flex;
  gap: 14px;
  margin-top: 30px;
}

.footer-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--color-paragraph);
  border: 1px solid rgba(184, 193, 236, 0.25);
  transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.footer-socials a svg {
  width: 20px;
  height: 20px;
}

.footer-socials a:hover {
  transform: translateY(-4px);
  color: var(--color-button-text);
  background: var(--color-button);
  border-color: var(--color-button);
}

.footer-divider {
  height: 1px;
  width: 100%;
  margin: 36px 0 24px;
  background: linear-gradient(to right, transparent, rgba(184, 193, 236, 0.3), transparent);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 0.9em;
  opacity: 0.7;
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer-inner {
    max-width: 90%;
  }

  .footer-top {
    flex-direction: column;
  }

  .footer-bottom {
    justify-content: center;
    text-align: center;
  }
}
</style>
