<script setup lang="ts">
import { contactInfo } from '@/constants/contact'
import { trackEvent } from '@/services/analyticsService'
</script>

<template>
  <div class="social-links" aria-label="Redes sociais">
    <a href="#" aria-label="Instagram">
      <i class="fa-brands fa-instagram" aria-hidden="true"></i>
    </a>
    <a href="#" aria-label="Facebook">
      <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
    </a>
    <a
      :href="contactInfo.whatsappHref"
      aria-label="WhatsApp"
      @click="trackEvent('whatsapp_click')"
    >
      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
  </div>
</template>
