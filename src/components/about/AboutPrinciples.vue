<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue'
import { aboutCards } from '@/data/about'
</script>

<template>
  <section class="about-principles" data-aos="fade-up">
    <div class="page-container about-principles__grid">
      <article v-for="card in aboutCards" :key="card.title" class="about-principle-card">
        <div class="about-principle-card__icon" :class="`about-principle-card__icon--${card.tone}`">
          <component :is="card.icon" aria-hidden="true" />
        </div>
        <h2>{{ card.title }}</h2>
        <p v-if="card.description">{{ card.description }}</p>
        <ul v-else>
          <li v-for="value in card.values" :key="value"><CheckCircle2 />{{ value }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
