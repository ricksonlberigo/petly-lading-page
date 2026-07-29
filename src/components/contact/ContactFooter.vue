<script setup lang="ts">
import { Mail, MapPin, MessageCircle } from '@lucide/vue'
import { contactInfo } from '@/constants/contact'
import { footerNavigationGroups } from '@/constants/footerNavigation'
import FooterBottom from '@/components/layout/FooterBottom.vue'
import SocialLinks from '@/components/layout/SocialLinks.vue'
import { useFooterNavigation } from '@/composables/useFooterNavigation'

const { isFooterLinkActive } = useFooterNavigation()
</script>

<template>
  <footer id="contact-footer" class="contact-footer">
    <div class="page-container contact-footer__grid">
      <div class="contact-footer__brand">
        <img src="/assets/logo.svg" alt="Petly" width="142" height="62" />
        <p>O sistema de gestão feito para pet shops que querem crescer com organização e carinho.</p>
        <SocialLinks />
      </div>
      <div v-for="group in footerNavigationGroups" :key="group.title">
        <h2>{{ group.title }}</h2>
        <a
          v-for="link in group.links"
          :key="link.label"
          :href="link.href"
          :class="{ 'footer-link--active': isFooterLinkActive(link.href) }"
          :aria-current="isFooterLinkActive(link.href) ? 'page' : undefined"
        >{{ link.label }}</a>
      </div>
      <div class="contact-footer__contact">
        <h2>Contato</h2>
        <a :href="contactInfo.whatsappHref"><MessageCircle />{{ contactInfo.whatsappDisplay }}</a>
        <a :href="contactInfo.emailHref"><Mail />{{ contactInfo.email }}</a>
        <span><MapPin />São Paulo, SP - Brasil</span>
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>
