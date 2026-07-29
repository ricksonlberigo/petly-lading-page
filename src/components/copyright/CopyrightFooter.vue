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
  <footer class="copyright-footer">
    <div class="page-container copyright-footer__grid">
      <div class="copyright-footer__brand">
        <img src="/assets/logo.svg" alt="Petly" width="145" height="64" />
        <p>A plataforma completa para cuidar melhor do seu pet e fazer seu negócio crescer.</p>
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
      <div class="copyright-footer__contact">
        <h2>Contato</h2>
        <a :href="contactInfo.emailHref"><Mail />{{ contactInfo.email }}</a>
        <a :href="contactInfo.whatsappHref"><MessageCircle />{{ contactInfo.whatsappDisplay }}</a>
        <span><MapPin />São Paulo, SP - Brasil</span>
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>
