<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'
import { computed, nextTick, ref } from 'vue'
import { termsSections } from '@/data/terms'

const showAllSections = ref(false)
const visibleSections = computed(() =>
  showAllSections.value ? termsSections : termsSections.slice(0, 6),
)

const navigateToSection = async (event: MouseEvent, index: number, id: string) => {
  if (index < 6 || showAllSections.value) return
  event.preventDefault()
  showAllSections.value = true
  await nextTick()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="terms-content" data-aos="fade-up">
    <div class="page-container terms-content__layout">
      <aside class="privacy-index terms-index">
        <h2>Neste conteúdo</h2>
        <nav aria-label="Índice dos termos">
          <a
            v-for="(section, index) in termsSections"
            :key="section.id"
            :href="`#${section.id}`"
            @click="navigateToSection($event, index, section.id)"
          >
            <span aria-hidden="true"></span>{{ section.title }}
          </a>
        </nav>
      </aside>

      <div class="terms-content__main">
        <p class="terms-content__intro">
          Ao acessar ou utilizar o Petly, você concorda com os Termos de Uso descritos abaixo.
          Leia atentamente antes de utilizar nossos serviços.
        </p>
        <article
          v-for="section in visibleSections"
          :id="section.id"
          :key="section.id"
          class="terms-section"
        >
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.bullets">
            <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </article>
        <button
          class="terms-content__more"
          type="button"
          :aria-expanded="showAllSections"
          @click="showAllSections = !showAllSections"
        >
          {{ showAllSections ? 'Menos seções' : 'Mais seções' }}
          <ChevronDown :class="{ 'terms-content__more-icon--open': showAllSections }" />
        </button>
      </div>
    </div>
  </section>
</template>
