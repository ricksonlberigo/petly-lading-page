<script setup lang="ts">
import { contactInfo } from '@/constants/contact'
import { footerNavigationGroups } from '@/constants/footerNavigation'
import { trackEvent } from '@/services/analyticsService'
import FooterBottom from '@/components/layout/FooterBottom.vue'
import SocialLinks from '@/components/layout/SocialLinks.vue'
import { useFooterNavigation } from '@/composables/useFooterNavigation'

const { isFooterLinkActive } = useFooterNavigation()
</script>

<template>
  <footer class="site-footer">
    <div class="page-container site-footer__grid">
      <div class="site-footer__brand">
        <img src="/assets/logo.svg" alt="Petly" width="126" height="56" />
        <p>O sistema de gestão feito para pet shops que querem crescer com organização e carinho.</p>
        <SocialLinks />
      </div>
      <div v-for="group in footerNavigationGroups" :key="group.title">
        <h3>{{ group.title }}</h3>
        <a
          v-for="link in group.links"
          :key="link.label"
          :href="link.href"
          :class="{ 'footer-link--active': isFooterLinkActive(link.href) }"
          :aria-current="isFooterLinkActive(link.href) ? 'page' : undefined"
        >{{ link.label }}</a>
      </div>
      <div class="contact-card">
        <h3>Fale com a gente!</h3>
        <a :href="contactInfo.whatsappHref" @click="trackEvent('whatsapp_click')">{{ contactInfo.whatsappDisplay }}</a>
        <a :href="contactInfo.emailHref">{{ contactInfo.email }}</a>
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>
