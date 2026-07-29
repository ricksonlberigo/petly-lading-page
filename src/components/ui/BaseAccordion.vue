<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import type { FaqItem } from '@/data/faq'
import { trackEvent } from '@/services/analyticsService'

const props = defineProps<{ items: FaqItem[] }>()
const openIndex = ref<number | null>(null)
const buttonRefs = ref<HTMLButtonElement[]>([])

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
  if (openIndex.value !== null) trackEvent('faq_open', { question: props.items[index]?.question })
}

const setButtonRef = (element: unknown, index: number) => {
  if (element instanceof HTMLButtonElement) buttonRefs.value[index] = element
}

const handleKeydown = async (event: KeyboardEvent, index: number) => {
  let target: number | null = null
  if (event.key === 'ArrowDown') target = (index + 1) % props.items.length
  if (event.key === 'ArrowUp') target = (index - 1 + props.items.length) % props.items.length
  if (event.key === 'Home') target = 0
  if (event.key === 'End') target = props.items.length - 1
  if (target !== null) {
    event.preventDefault()
    await nextTick()
    buttonRefs.value[target]?.focus()
  }
}

const columns = computed(() => [
  props.items.slice(0, Math.ceil(props.items.length / 2)),
  props.items.slice(Math.ceil(props.items.length / 2)),
])
</script>

<template>
  <div class="accordion">
    <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="accordion__column">
      <article
        v-for="(item, localIndex) in column"
        :key="item.question"
        class="accordion__item"
        :class="{ 'accordion__item--open': openIndex === localIndex + columnIndex * columns[0].length }"
      >
        <button
          :ref="(element) => setButtonRef(element, localIndex + columnIndex * columns[0].length)"
          class="accordion__trigger"
          :aria-expanded="openIndex === localIndex + columnIndex * columns[0].length"
          :aria-controls="`faq-panel-${localIndex + columnIndex * columns[0].length}`"
          @click="toggleItem(localIndex + columnIndex * columns[0].length)"
          @keydown="handleKeydown($event, localIndex + columnIndex * columns[0].length)"
        >
          <span>{{ item.question }}</span><ChevronDown :size="18" aria-hidden="true" />
        </button>
        <div
          :id="`faq-panel-${localIndex + columnIndex * columns[0].length}`"
          class="accordion__panel"
          role="region"
        >
          <div><p>{{ item.answer }}</p></div>
        </div>
      </article>
    </div>
  </div>
</template>
