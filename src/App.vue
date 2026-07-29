<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
import BackToTopButton from '@/components/ui/BackToTopButton.vue'
</script>

<template>
  <RouterView />
  <BackToTopButton />
  <Analytics />
</template>
