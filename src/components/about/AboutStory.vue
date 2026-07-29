<script setup lang="ts">
import { storyPoints } from '@/data/about'
</script>

<template>
  <section class="about-story" data-aos="fade-up">
    <div class="page-container about-story__grid">
      <div class="about-story__content">
        <h2>Feito para pet shops,<br />pensado para pessoas.</h2>
        <p>
          A Petly nasceu de quem vive a rotina real dos pet shops. Entendemos os desafios, as
          demandas e as corridas do dia a dia — e criamos uma solução prática, intuitiva e leve,
          para que você possa focar no que mais importa: seus clientes e seus pets.
        </p>
        <ul>
          <li v-for="point in storyPoints" :key="point.title">
            <component :is="point.icon" aria-hidden="true" />
            <span><strong>{{ point.title }}</strong>{{ point.description }}</span>
          </li>
        </ul>
      </div>
      <div
        v-tilt="{ max: 3.5, scale: 1.008, glare: true, 'max-glare': 0.06 }"
        class="about-story__dashboard"
      >
        <img
          src="/assets/responsive/petly-dashboard-desktop-1200.webp"
          srcset="
            /assets/responsive/petly-dashboard-desktop-960.webp 960w,
            /assets/responsive/petly-dashboard-desktop-1200.webp 1200w,
            /assets/responsive/petly-dashboard-desktop-1600.webp 1600w
          "
          sizes="(min-width: 851px) 62vw, 96vw"
          alt="Dashboard do sistema Petly"
          width="1672"
          height="941"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>
