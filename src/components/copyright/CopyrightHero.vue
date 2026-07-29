<script setup lang="ts">
import { CalendarDays, ShieldCheck } from '@lucide/vue'
</script>

<template>
  <section class="copyright-hero">
    <div class="page-container copyright-hero__grid">
      <div class="copyright-hero__content">
        <span><ShieldCheck />Informações legais</span>
        <h1>Direitos autorais</h1>
        <p>Todo o conteúdo do site, sistema, design, materiais e ativos da Petly é protegido por direitos autorais e por outras leis de propriedade intelectual.</p>
        <div><CalendarDays />Última atualização: 25 de maio de 2025</div>
      </div>
      <div class="copyright-hero__visual">
        <img class="copyright-hero__blob" src="/assets/hero-blob.svg" alt="" width="800" height="600" />
        <img
          class="copyright-hero__pets"
          src="/assets/responsive/cta-contact-800.webp"
          srcset="/assets/responsive/cta-contact-480.webp 480w, /assets/responsive/cta-contact-800.webp 800w"
          sizes="(min-width: 851px) 48vw, 90vw"
          alt="Cachorro e gato juntos"
          width="1024"
          height="616"
          fetchpriority="high"
        />
        <img class="copyright-hero__heart" src="/assets/heart.svg" alt="" width="54" height="49" />
        <span class="copyright-hero__ring" aria-hidden="true"></span>
      </div>
    </div>
  </section>
</template>
