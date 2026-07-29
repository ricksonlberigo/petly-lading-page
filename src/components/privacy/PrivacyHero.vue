<script setup lang="ts">
import { CalendarDays, ChevronRight } from '@lucide/vue'
</script>

<template>
  <section class="privacy-hero">
    <div class="page-container privacy-hero__grid">
      <div class="privacy-hero__content">
        <nav class="privacy-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><ChevronRight aria-hidden="true" /><span>Política de Privacidade</span>
        </nav>
        <h1>Política de<br /><span>Privacidade</span></h1>
        <p>A sua privacidade é importante para nós. Esta Política explica como coletamos, usamos, armazenamos e protegemos os seus dados pessoais quando você utiliza o Petly.</p>
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
