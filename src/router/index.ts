import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contato', name: 'contact', component: () => import('@/views/ContactView.vue') },
    { path: '/sobre', name: 'about', component: () => import('@/views/AboutView.vue') },
    {
      path: '/politica-de-privacidade',
      name: 'privacy',
      component: () => import('@/views/PrivacyView.vue'),
    },
    { path: '/termos-de-uso', name: 'terms', component: () => import('@/views/TermsView.vue') },
    {
      path: '/politica-de-cookies',
      name: 'cookies',
      component: () => import('@/views/CookiesView.vue'),
    },
    {
      path: '/direitos-autorais',
      name: 'copyright',
      component: () => import('@/views/CopyrightView.vue'),
    },
  ],
  scrollBehavior(to) {
    return to.hash ? { el: to.hash, behavior: 'smooth', top: 84 } : { top: 0 }
  },
})
