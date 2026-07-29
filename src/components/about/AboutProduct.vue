<script setup lang="ts">
import { productPillars } from '@/data/about'
</script>

<template>
  <section class="about-product">
    <div class="page-container about-product__pillars">
      <article v-for="pillar in productPillars" :key="pillar.title">
        <div><component :is="pillar.icon" aria-hidden="true" /></div>
        <span><strong>{{ pillar.title }}</strong>{{ pillar.description }}</span>
      </article>
    </div>
    <div class="page-container about-product__cards">
      <article class="about-product-card">
        <img src="/assets/prancheta-about.svg" alt="Prancheta Petly" width="535" height="717" loading="lazy" />
        <div>
          <h2>Como pensamos o produto</h2>
          <p>Desenvolvemos a Petly com base em escuta ativa de centenas de lojistas e profissionais do mercado pet.</p>
          <p>Cada funcionalidade tem um propósito: resolver problemas reais e gerar impacto no seu dia a dia.</p>
        </div>
      </article>
      <article class="about-product-card">
        <img src="/assets/heart-about.svg" alt="Coração com pata" width="641" height="550" loading="lazy" />
        <div>
          <h2>Por que a Petly existe</h2>
          <p>Acreditamos que pet shops movem o amor pelos animais. Nosso propósito é cuidar de quem cuida, oferecendo tecnologia que simplifica, conecta e impulsiona negócios.</p>
          <p>Mais organização. Mais tempo.<br />Mais felicidade para você e seus clientes.</p>
        </div>
      </article>
    </div>
  </section>
</template>
