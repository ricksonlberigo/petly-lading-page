<script setup lang="ts">
import { onMounted } from 'vue'
import ContactChannels from '@/components/contact/ContactChannels.vue'
import ContactCta from '@/components/contact/ContactCta.vue'
import ContactFaq from '@/components/contact/ContactFaq.vue'
import ContactFooter from '@/components/contact/ContactFooter.vue'
import ContactIntro from '@/components/contact/ContactIntro.vue'
import ContactTeams from '@/components/contact/ContactTeams.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

onMounted(() => {
  document.title = 'Contato | Petly'
})
</script>

<template>
  <AppHeader />
  <main class="contact-page">
    <ContactIntro />
    <ContactChannels />
    <ContactTeams />
    <ContactFaq />
    <ContactCta />
  </main>
  <ContactFooter />
</template>
