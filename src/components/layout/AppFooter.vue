<script setup lang="ts">
import { contactInfo } from '@/constants/contact'
import { trackEvent } from '@/services/analyticsService'
import FooterBottom from '@/components/layout/FooterBottom.vue'
import FooterNavigation from '@/components/layout/FooterNavigation.vue'
import SocialLinks from '@/components/layout/SocialLinks.vue'
</script>

<template>
  <footer class="site-footer" data-aos="fade-up">
    <div class="page-container site-footer__grid">
      <div class="site-footer__brand">
        <img src="/assets/logo.svg" alt="Petly" width="126" height="56" />
        <p>O sistema de gestão feito para pet shops que querem crescer com organização e carinho.</p>
        <SocialLinks />
      </div>
      <FooterNavigation />
      <div class="contact-card">
        <h3>Fale com a gente!</h3>
        <a :href="contactInfo.whatsappHref" @click="trackEvent('whatsapp_click')">{{ contactInfo.whatsappDisplay }}</a>
        <a :href="contactInfo.emailHref">{{ contactInfo.email }}</a>
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>
