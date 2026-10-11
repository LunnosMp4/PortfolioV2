import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { initSmoothScroll } from '@/plugins/smoothScroll'

import 'lenis/dist/lenis.css'
import '@/styles/effects.css'

// Boot the smooth scrolling experience before the app mounts so the very
// first interaction already feels premium.
initSmoothScroll()

const app = createApp(App)

app.use(router)
app.mount('#app')
