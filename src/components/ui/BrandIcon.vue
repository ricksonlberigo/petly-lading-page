<script setup lang="ts">
import { computed } from 'vue'
import type { IconDefinition } from '@fortawesome/fontawesome-common-types'

const props = defineProps<{ icon: IconDefinition }>()

const viewBox = computed(() => `0 0 ${props.icon.icon[0]} ${props.icon.icon[1]}`)
const paths = computed(() => {
  const pathData = props.icon.icon[4]
  return Array.isArray(pathData) ? pathData : [pathData]
})
</script>

<template>
  <svg :viewBox="viewBox" aria-hidden="true" focusable="false">
    <path v-for="(path, index) in paths" :key="index" fill="currentColor" :d="path" />
  </svg>
</template>
