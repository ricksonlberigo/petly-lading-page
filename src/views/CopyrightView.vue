<script setup lang="ts">
import { onMounted } from 'vue'
import CopyrightContent from '@/components/copyright/CopyrightContent.vue'
import CopyrightCta from '@/components/copyright/CopyrightCta.vue'
import CopyrightFooter from '@/components/copyright/CopyrightFooter.vue'
import CopyrightHero from '@/components/copyright/CopyrightHero.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

onMounted(() => { document.title = 'Direitos Autorais | Petly' })
</script>

<template>
  <AppHeader />
  <main class="copyright-page">
    <CopyrightHero />
    <CopyrightContent />
    <CopyrightCta />
  </main>
  <CopyrightFooter />
</template>
