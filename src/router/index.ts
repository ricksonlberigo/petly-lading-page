import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'
import CookiesView from '@/views/CookiesView.vue'
import CopyrightView from '@/views/CopyrightView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contato', name: 'contact', component: ContactView },
    { path: '/sobre', name: 'about', component: AboutView },
    { path: '/politica-de-privacidade', name: 'privacy', component: PrivacyView },
    { path: '/termos-de-uso', name: 'terms', component: TermsView },
    { path: '/politica-de-cookies', name: 'cookies', component: CookiesView },
    { path: '/direitos-autorais', name: 'copyright', component: CopyrightView },
  ],
  scrollBehavior(to) {
    return to.hash ? { el: to.hash, behavior: 'smooth', top: 84 } : { top: 0 }
  },
})
