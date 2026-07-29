<script setup lang="ts">
import { benefits } from '@/data/benefits'
</script>

<template>
  <section id="benefits" class="benefits-section section-anchor" data-aos="fade-up">
    <div class="page-container benefits-section__shell">
      <h2>Benefícios que fazem a diferença no dia a dia do seu pet shop</h2>
      <div class="benefits-section__grid">
        <article v-for="benefit in benefits" :key="benefit.title" class="benefit-item">
          <component :is="benefit.icon" :size="46" :stroke-width="1.6" aria-hidden="true" />
          <div><h3>{{ benefit.title }}</h3><p>{{ benefit.description }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>
