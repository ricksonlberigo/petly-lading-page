<script setup lang="ts">
import { onMounted } from 'vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import PrivacyContent from '@/components/privacy/PrivacyContent.vue'
import PrivacyHero from '@/components/privacy/PrivacyHero.vue'

onMounted(() => { document.title = 'Política de Privacidade | Petly' })
</script>

<template>
  <AppHeader />
  <main class="privacy-page">
    <PrivacyHero />
    <PrivacyContent />
  </main>
  <AppFooter />
</template>
