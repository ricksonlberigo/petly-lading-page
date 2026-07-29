<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeBenefits from '@/components/home/HomeBenefits.vue'
import HomePricing from '@/components/home/HomePricing.vue'
import HomeFaq from '@/components/home/HomeFaq.vue'
import HomeCta from '@/components/home/HomeCta.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HomeHero />
    <HomeFeatures />
    <HomeBenefits />
    <HomePricing />
    <HomeFaq />
    <HomeCta />
  </main>
  <AppFooter />
</template>
