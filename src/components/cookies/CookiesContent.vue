<script setup lang="ts">
import { cookiePolicySections, cookieTypes } from '@/data/cookies'
</script>

<template>
  <section class="cookies-content">
    <div class="page-container privacy-content__layout">
      <aside class="privacy-index">
        <h2>Neste conteúdo</h2>
        <nav aria-label="Índice da política de cookies">
          <a v-for="section in cookiePolicySections" :key="section.id" :href="`#${section.id}`">
            <span aria-hidden="true"></span>{{ section.title }}
          </a>
        </nav>
      </aside>

      <div class="cookies-content__main">
        <article
          v-for="section in cookiePolicySections"
          :id="section.id"
          :key="section.id"
          class="cookie-section"
        >
          <div class="privacy-section__icon"><component :is="section.icon" aria-hidden="true" /></div>
          <div>
            <h2>{{ section.title }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul v-if="section.bullets">
              <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
            <div v-if="section.id === 'cookie-types'" class="cookie-table-wrap">
              <table>
                <thead>
                  <tr><th>Tipo de cookie</th><th>Finalidade</th><th>Exemplos</th><th>Prazo</th></tr>
                </thead>
                <tbody>
                  <tr v-for="cookie in cookieTypes" :key="cookie.type">
                    <td><span aria-hidden="true"></span><strong>{{ cookie.type }}</strong></td>
                    <td>{{ cookie.purpose }}</td>
                    <td>{{ cookie.examples }}</td>
                    <td>{{ cookie.duration }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="cookie-table-note">ⓘ A Petly não utiliza cookies para coletar dados sensíveis.</p>
            </div>
            <details v-if="section.id === 'disable-cookies'" class="cookie-instructions">
              <summary>Ver instruções por navegador</summary>
              <p>
                Acesse as configurações de privacidade do seu navegador e procure por “Cookies” ou
                “Dados de sites” para bloquear, permitir ou apagar cookies.
              </p>
            </details>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
