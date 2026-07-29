<script setup lang="ts">
import BaseAccordion from '@/components/ui/BaseAccordion.vue'
import { faqItems } from '@/data/faq'
</script>

<template>
  <section id="faq" class="faq-section section-anchor" data-aos="fade-up">
    <div class="page-container">
      <h2>Perguntas frequentes</h2>
      <BaseAccordion :items="faqItems" />
    </div>
  </section>
</template>
