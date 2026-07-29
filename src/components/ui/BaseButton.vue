<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'outline' | 'light'
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  { variant: 'primary', type: 'button', disabled: false },
)
</script>

<template>
  <a v-if="href" :href="href" class="base-button" :class="`base-button--${variant}`">
    <slot />
  </a>
  <button v-else :type="type" :disabled="disabled" class="base-button" :class="`base-button--${variant}`">
    <slot />
  </button>
</template>
