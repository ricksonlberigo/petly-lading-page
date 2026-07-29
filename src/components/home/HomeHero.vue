<script setup lang="ts">
import { Cloud, Headphones, ShieldCheck } from '@lucide/vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { trackEvent } from '@/services/analyticsService'
</script>

<template>
  <section id="top" class="hero-section" data-aos="fade-up">
    <div class="page-container hero-section__grid">
      <div class="hero-section__content">
        <div class="hero-section__title-wrap">
          <h1>Mais tempo<br />para cuidar,<br />menos tempo<br /><span>para se preocupar.</span></h1>
          <img class="hero-section__heart" src="/assets/heart.svg" alt="" width="62" height="56" />
        </div>
        <p class="hero-section__description">
          O Petly é o sistema de gestão completo para pet shops que desejam simplificar processos,
          encantar clientes e fazer o negócio crescer.
        </p>
        <div class="hero-section__actions">
          <BaseButton href="#features" @click="trackEvent('hero_primary_cta_click')">Conhecer o sistema</BaseButton>
          <BaseButton href="#cta" variant="outline" @click="trackEvent('hero_contact_click')">Falar com especialista</BaseButton>
        </div>
        <ul class="hero-section__proofs" aria-label="Benefícios rápidos">
          <li><Cloud />100% na nuvem</li>
          <li><ShieldCheck />Seguro e confiável</li>
          <li><Headphones />Suporte humanizado</li>
        </ul>
      </div>
      <div class="hero-visual" aria-label="Visão do sistema Petly">
        <img class="hero-visual__blob" src="/assets/hero-blob.svg" alt="" width="800" height="600" />
        <picture>
          <source
            media="(min-width: 851px)"
            srcset="/assets/responsive/hero-dog-cat-320.webp"
          />
          <source
            srcset="
              /assets/responsive/hero-dog-cat-320.webp 320w,
              /assets/responsive/hero-dog-cat-400.webp 400w,
              /assets/responsive/hero-dog-cat-480.webp 480w
            "
            sizes="62vw"
          />
          <img
            class="hero-visual__pets"
            src="/assets/responsive/hero-dog-cat-320.webp"
            alt="Cachorro e gato juntos"
            width="1024"
            height="1536"
            decoding="async"
            fetchpriority="high"
          />
        </picture>
        <div
          v-tilt="{ max: 3.5, scale: 1.008, glare: true, 'max-glare': 0.06 }"
          class="hero-visual__dashboard-frame"
        >
          <img
            class="hero-visual__dashboard"
            src="/assets/responsive/petly-dashboard-desktop-960.webp"
            alt="Dashboard de gestão do Petly"
            width="1672"
            height="941"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </section>
</template>
