<script setup lang="ts">
import { CalendarDays, ChevronRight } from '@lucide/vue'
</script>

<template>
  <section class="privacy-hero terms-hero">
    <div class="page-container privacy-hero__grid">
      <div class="privacy-hero__content">
        <nav class="privacy-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><ChevronRight aria-hidden="true" /><span>Termos de Uso</span>
        </nav>
        <h1>Termos de <span>Uso</span></h1>
        <p>Estes Termos de Uso regem o acesso e a utilização do site e dos serviços da Petly. Ao utilizar nossos serviços, você concorda com estes termos.</p>
        <div class="privacy-hero__date"><CalendarDays />Última atualização: 27 de maio de 2025</div>
      </div>
      <div class="privacy-hero__visual">
        <img class="privacy-hero__blob" src="/assets/hero-blob.svg" alt="" width="800" height="600" />
        <img
          class="privacy-hero__pets"
          src="/assets/responsive/hero-dog-cat-640.webp"
          alt="Cachorro e gato juntos"
          width="1024"
          height="1536"
          fetchpriority="high"
        />
        <img class="privacy-hero__heart" src="/assets/heart.svg" alt="" width="58" height="52" />
      </div>
    </div>
  </section>
</template>
