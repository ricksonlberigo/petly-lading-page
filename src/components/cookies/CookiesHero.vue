<script setup lang="ts">
import { CalendarDays, ChevronRight } from '@lucide/vue'
</script>

<template>
  <section class="privacy-hero cookies-hero">
    <div class="page-container privacy-hero__grid">
      <div class="privacy-hero__content">
        <nav class="privacy-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><ChevronRight aria-hidden="true" /><span>Política de Cookies</span>
        </nav>
        <div class="cookies-hero__title">
          <h1>Política de<br /><span>Cookies</span></h1>
          <img src="/assets/heart.svg" alt="" width="52" height="47" />
        </div>
        <p>Esta Política de Cookies explica o que são cookies, como os usamos no site da Petly e como você pode gerenciar suas preferências.</p>
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
