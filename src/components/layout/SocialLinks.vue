<script setup lang="ts">
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import { contactInfo } from '@/constants/contact'
import { trackEvent } from '@/services/analyticsService'
</script>

<template>
  <div class="social-links" aria-label="Redes sociais">
    <a href="#" aria-label="Instagram">
      <BrandIcon :icon="faInstagram" />
    </a>
    <a href="#" aria-label="Facebook">
      <BrandIcon :icon="faFacebookF" />
    </a>
    <a
      :href="contactInfo.whatsappHref"
      aria-label="WhatsApp"
      @click="trackEvent('whatsapp_click')"
    >
      <BrandIcon :icon="faWhatsapp" />
    </a>
  </div>
</template>
