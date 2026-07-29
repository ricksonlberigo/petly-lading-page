<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { contactChannels } from '@/data/contact'
</script>

<template>
  <section class="contact-channels" aria-label="Canais de contato">
    <div class="page-container contact-channels__grid">
      <article v-for="channel in contactChannels" :key="channel.title" class="contact-channel-card">
        <div
          class="contact-channel-card__icon"
          :class="{ 'contact-channel-card__icon--coral': channel.tone === 'coral' }"
        >
          <component :is="channel.icon" aria-hidden="true" />
        </div>
        <h2>{{ channel.title }}</h2>
        <p>{{ channel.description }}</p>
        <a :href="channel.href">{{ channel.action }} <ArrowRight aria-hidden="true" /></a>
      </article>
    </div>
  </section>
</template>
