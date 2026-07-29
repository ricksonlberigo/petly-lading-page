<script setup lang="ts">
import { onMounted } from 'vue'
import AboutCta from '@/components/about/AboutCta.vue'
import AboutHero from '@/components/about/AboutHero.vue'
import AboutPrinciples from '@/components/about/AboutPrinciples.vue'
import AboutProduct from '@/components/about/AboutProduct.vue'
import AboutStory from '@/components/about/AboutStory.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

onMounted(() => { document.title = 'Sobre a Petly | Gestão para pet shops' })
</script>

<template>
  <AppHeader />
  <main class="about-page">
    <AboutHero />
    <AboutPrinciples />
    <AboutStory />
    <AboutProduct />
    <AboutCta />
  </main>
  <AppFooter />
</template>
