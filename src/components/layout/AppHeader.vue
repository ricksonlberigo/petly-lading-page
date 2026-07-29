<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { Menu, X } from '@lucide/vue'
import { navigationItems } from '@/constants/navigation'
import BaseButton from '@/components/ui/BaseButton.vue'

const isOpen = ref(false)

const closeMenu = () => { isOpen.value = false }
const handleEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') closeMenu() }

watch(isOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
  if (open) document.addEventListener('keydown', handleEscape)
  else document.removeEventListener('keydown', handleEscape)
})
onBeforeUnmount(() => {
  document.body.classList.remove('menu-open')
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <header class="site-header">
    <div class="page-container site-header__inner">
      <RouterLink class="brand" to="/" aria-label="Petly, início">
        <img src="/assets/logo.svg" alt="Petly" width="142" height="62" />
      </RouterLink>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a v-for="item in navigationItems" :key="item.label" :href="item.href">{{ item.label }}</a>
      </nav>
      <div class="site-header__actions">
        <a class="login-link" href="#">Entrar</a>
        <BaseButton href="/contato#contact-form">Falar com especialista</BaseButton>
      </div>
      <button
        class="menu-toggle"
        :aria-expanded="isOpen"
        aria-controls="mobile-navigation"
        :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" /><Menu v-else />
      </button>
    </div>
    <nav id="mobile-navigation" class="mobile-nav" :class="{ 'mobile-nav--open': isOpen }" aria-label="Navegação mobile">
      <a v-for="item in navigationItems" :key="item.label" :href="item.href" @click="closeMenu">{{ item.label }}</a>
      <a href="#" @click="closeMenu">Entrar</a>
      <BaseButton href="/contato#contact-form" @click="closeMenu">Falar com especialista</BaseButton>
    </nav>
  </header>
</template>
