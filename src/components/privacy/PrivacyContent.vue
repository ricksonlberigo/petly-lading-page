<script setup lang="ts">
import { privacySections } from '@/data/privacy'

const primarySections = privacySections.slice(0, 4)
const cardSections = privacySections.slice(4)
</script>

<template>
  <section class="privacy-content" data-aos="fade-up">
    <div class="page-container privacy-content__layout">
      <aside class="privacy-index">
        <h2>Neste conteúdo</h2>
        <nav aria-label="Índice da política">
          <a v-for="section in privacySections" :key="section.id" :href="`#${section.id}`">
            <span aria-hidden="true"></span>{{ section.title }}
          </a>
        </nav>
      </aside>

      <div class="privacy-content__main">
        <article
          v-for="section in primarySections"
          :id="section.id"
          :key="section.id"
          class="privacy-section"
        >
          <div class="privacy-section__icon"><component :is="section.icon" aria-hidden="true" /></div>
          <div>
            <h2>{{ section.title }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul v-if="section.bullets">
              <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <div class="page-container privacy-cards">
      <article
        v-for="section in cardSections"
        :id="section.id"
        :key="section.id"
        class="privacy-card"
      >
        <div class="privacy-card__icon"><component :is="section.icon" aria-hidden="true" /></div>
        <div>
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.bullets">
            <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
