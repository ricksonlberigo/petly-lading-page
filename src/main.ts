import { createApp } from 'vue'
import { nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import './styles/main.css'

createApp(App).use(router).mount('#app')

AOS.init({
  duration: 650,
  easing: 'ease-out-cubic',
  once: true,
  mirror: false,
  offset: 55,
  anchorPlacement: 'top-bottom',
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
})

router.afterEach(async () => {
  await nextTick()
  AOS.refreshHard()
})
