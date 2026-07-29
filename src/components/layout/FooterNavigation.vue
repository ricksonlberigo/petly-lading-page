<script setup lang="ts">
import { footerNavigationGroups } from '@/constants/footerNavigation'
import { useFooterNavigation } from '@/composables/useFooterNavigation'

const { isFooterLinkActive } = useFooterNavigation()
</script>

<template>
  <nav class="footer-navigation" aria-label="Navegação do rodapé">
    <div
      v-for="group in footerNavigationGroups"
      :key="group.title"
      class="footer-navigation__group"
    >
      <h3>{{ group.title }}</h3>
      <a
        v-for="link in group.links"
        :key="link.label"
        :href="link.href"
        :class="{ 'footer-link--active': isFooterLinkActive(link.href) }"
        :aria-current="isFooterLinkActive(link.href) ? 'page' : undefined"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>
