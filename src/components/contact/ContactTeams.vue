<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { contactTeams } from '@/data/contact'
</script>

<template>
  <section class="contact-teams" data-aos="fade-up">
    <div class="page-container">
      <h2>Fale com o time certo</h2>
      <p>Escolha o canal ideal para o que você precisa.</p>
      <div class="contact-teams__grid">
        <article v-for="team in contactTeams" :key="team.title" class="contact-team-card">
          <div class="contact-team-card__icon"><component :is="team.icon" aria-hidden="true" /></div>
          <div>
            <h3>{{ team.title }}</h3>
            <p>{{ team.description }}</p>
            <a :href="team.href">{{ team.action }} <ArrowRight aria-hidden="true" /></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
