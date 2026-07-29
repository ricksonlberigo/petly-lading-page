<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import ContactFooter from '@/components/contact/ContactFooter.vue'
import CookiesContent from '@/components/cookies/CookiesContent.vue'
import CookiesHero from '@/components/cookies/CookiesHero.vue'

onMounted(() => { document.title = 'Política de Cookies | Petly' })
</script>

<template>
  <AppHeader />
  <main class="cookies-page">
    <CookiesHero />
    <CookiesContent />
  </main>
  <ContactFooter />
</template>
