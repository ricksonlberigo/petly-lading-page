<script setup lang="ts">
import BaseAccordion from '@/components/ui/BaseAccordion.vue'
import { contactFaqItems } from '@/data/contact'
</script>

<template>
  <section class="contact-faq" data-aos="fade-up">
    <div class="page-container">
      <h2>Perguntas rápidas</h2>
      <BaseAccordion :items="contactFaqItems" />
    </div>
  </section>
</template>
