<script setup lang="ts">
import type { Feature } from '@/data/features'
defineProps<{ feature: Feature }>()
</script>

<template>
  <article class="feature-card">
    <div class="feature-card__icon" :class="`feature-card__icon--${feature.tone}`">
      <component :is="feature.icon" :size="34" :stroke-width="1.7" aria-hidden="true" />
    </div>
    <div><h3>{{ feature.title }}</h3><p>{{ feature.description }}</p></div>
  </article>
</template>
