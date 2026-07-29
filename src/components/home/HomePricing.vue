<script setup lang="ts">
import { Check, CircleCheck, Clock3, Gift, Headphones } from '@lucide/vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { pricingPlans } from '@/data/pricing'

const purchaseBenefits = [
  { label: '14 dias grátis', icon: CircleCheck },
  { label: 'Sem taxa de implantação', icon: Check },
  { label: 'Cancele quando quiser', icon: Clock3 },
  { label: 'Suporte humanizado', icon: Headphones },
]
</script>

<template>
  <section id="pricing" class="pricing-section section-anchor" aria-labelledby="pricing-title">
    <div class="page-container pricing-section__container">
      <header class="pricing-section__header">
        <h2 id="pricing-title">Um plano para cada fase do seu pet shop.</h2>
        <p>Comece com o que você precisa hoje e evolua conforme o seu negócio cresce.</p>
      </header>

      <div class="pricing-section__grid">
        <article
          v-for="plan in pricingPlans"
          :key="plan.name"
          class="pricing-card"
          :class="{ 'pricing-card--featured': plan.featured }"
        >
          <span v-if="plan.badge" class="pricing-card__badge">{{ plan.badge }}</span>
          <h3>{{ plan.name }}</h3>
          <p class="pricing-card__description">{{ plan.description }}</p>
          <p class="pricing-card__price">
            <span>R$</span><strong>{{ plan.price }}</strong><small>/mês</small>
          </p>
          <ul>
            <li v-for="feature in plan.features" :key="feature">
              <CircleCheck aria-hidden="true" />{{ feature }}
            </li>
          </ul>
          <BaseButton href="/contato#contact-form" :variant="plan.featured ? 'primary' : 'outline'">
            Começar agora
          </BaseButton>
        </article>
      </div>

      <div class="pricing-offer">
        <Gift aria-hidden="true" />
        <div>
          <strong>Oferta de lançamento para clientes fundadores</strong>
          <span>Planos promocionais a partir de R$ 49,90</span>
        </div>
      </div>

      <ul class="pricing-benefits" aria-label="Benefícios de contratação">
        <li v-for="benefit in purchaseBenefits" :key="benefit.label">
          <component :is="benefit.icon" aria-hidden="true" />{{ benefit.label }}
        </li>
      </ul>
    </div>
  </section>
</template>
