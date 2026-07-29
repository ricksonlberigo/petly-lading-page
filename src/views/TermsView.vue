<script setup lang="ts">
import { onMounted } from 'vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
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
  <AppFooter />
</template>
