<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'
import { features } from '@/data/features'
</script>

<template>
  <section id="features" class="features-section section-anchor">
    <div class="page-container features-section__shell">
      <div class="features-section__intro">
        <h2>Tudo que seu pet shop<br />precisa, <span>em um só sistema.</span></h2>
        <p>Do atendimento à gestão financeira, o Petly centraliza suas operações para você focar no que realmente importa: seus clientes e seus pets.</p>
        <div class="device-mockups">
          <img
            class="device-mockups__tablet"
            src="/assets/responsive/petly-mockup-tablet-720.webp"
            srcset="
              /assets/responsive/petly-mockup-tablet-480.webp 480w,
              /assets/responsive/petly-mockup-tablet-720.webp 720w,
              /assets/responsive/petly-mockup-tablet-1200.webp 1200w
            "
            sizes="(min-width: 1101px) 39vw, (min-width: 601px) 70vw, 95vw"
            alt="Petly exibindo o cadastro de um pet em um tablet"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
          />
          <img
            class="device-mockups__phone"
            src="/assets/responsive/petly-dashboard-phone-200.webp"
            srcset="
              /assets/responsive/petly-dashboard-phone-200.webp 200w,
              /assets/responsive/petly-dashboard-phone-400.webp 400w
            "
            sizes="(min-width: 601px) 14vw, 29vw"
            alt="Resumo financeiro do Petly em um smartphone"
            width="864"
            height="1821"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div class="features-section__cards">
        <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
      </div>
    </div>
  </section>
</template>
