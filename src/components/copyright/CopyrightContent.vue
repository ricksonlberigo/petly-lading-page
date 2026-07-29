<script setup lang="ts">
import { copyrightPermissions, copyrightRules } from '@/data/copyright'
</script>

<template>
  <section class="copyright-content">
    <div class="page-container copyright-content__grid">
      <div class="copyright-rules">
        <article v-for="rule in copyrightRules" :key="rule.title">
          <div :class="{ 'copyright-icon--coral': rule.tone === 'coral' }">
            <component :is="rule.icon" aria-hidden="true" />
          </div>
          <span><h2>{{ rule.title }}</h2><p>{{ rule.description }}</p></span>
        </article>
      </div>
      <div class="copyright-sidebar">
        <section class="copyright-permissions">
          <h2>Resumo de permissões de uso</h2>
          <article v-for="permission in copyrightPermissions" :key="permission.title">
            <div :class="{ 'copyright-icon--coral': permission.tone === 'coral' }">
              <component :is="permission.icon" aria-hidden="true" />
            </div>
            <span><h3>{{ permission.title }}</h3><p>{{ permission.description }}</p></span>
          </article>
        </section>
        <section class="copyright-report">
          <h2>Precisa reportar uso indevido ou solicitar autorização?</h2>
          <p>Nossa equipe está pronta para ajudar com dúvidas, solicitações de uso de marca, parcerias ou reportes de violação de direitos autorais.</p>
          <a href="/contato">Entrar em contato</a>
          <img src="/assets/logo.svg" alt="" width="110" height="48" loading="lazy" />
        </section>
      </div>
    </div>
  </section>
</template>
