<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import ContactFooter from '@/components/contact/ContactFooter.vue'
import TermsContent from '@/components/terms/TermsContent.vue'
import TermsHero from '@/components/terms/TermsHero.vue'

onMounted(() => { document.title = 'Termos de Uso | Petly' })
</script>

<template>
  <AppHeader />
  <main class="terms-page">
    <TermsHero />
    <TermsContent />
  </main>
  <ContactFooter />
</template>
