<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowUp } from '@lucide/vue'

const isVisible = ref(false)
let animationFrameId: number | null = null

const updateVisibility = () => {
  isVisible.value = window.scrollY > 500
  animationFrameId = null
}

const handleScroll = () => {
  if (animationFrameId === null) {
    animationFrameId = window.requestAnimationFrame(updateVisibility)
  }
}

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <Transition name="back-to-top">
    <button
      v-if="isVisible"
      class="back-to-top-button"
      type="button"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      @click="scrollToTop"
    >
      <ArrowUp aria-hidden="true" />
    </button>
  </Transition>
</template>
