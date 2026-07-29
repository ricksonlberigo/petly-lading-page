<script setup lang="ts">
import { Check, LockKeyhole } from '@lucide/vue'
import { reactive, ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import { submitLead, type LeadFormData } from '@/services/leadService'
import { trackEvent } from '@/services/analyticsService'

const form = reactive<LeadFormData>({ name: '', email: '', phone: '' })
const errors = reactive<Partial<Record<keyof LeadFormData, string>>>({})
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const validateForm = (): boolean => {
  errors.name = form.name.trim().length >= 2 ? '' : 'Informe seu nome.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Informe um e-mail válido.'
  errors.phone = form.phone.replace(/\D/g, '').length >= 10 ? '' : 'Informe um WhatsApp válido.'
  return !errors.name && !errors.email && !errors.phone
}

const submitContactForm = async () => {
  if (!validateForm()) return
  status.value = 'submitting'
  trackEvent('lead_form_submit')
  try {
    await submitLead({ ...form })
    status.value = 'success'
    trackEvent('lead_form_success')
  } catch {
    status.value = 'error'
    trackEvent('lead_form_error')
  }
}
</script>

<template>
  <section id="cta" class="cta-section section-anchor" data-aos="fade-up">
    <div class="page-container cta-section__shell">
      <div class="cta-section__content">
        <h2>Pronto para simplificar a gestão<br />do seu pet shop?</h2>
        <p>Fale com um especialista e descubra como o Petly pode transformar a rotina do seu negócio.</p>
        <ul>
          <li><Check />Apresentação personalizada</li>
          <li><Check />Tire dúvidas com um especialista</li>
          <li><Check />Proposta sob medida para o seu pet shop</li>
        </ul>
      </div>
      <form class="lead-form" novalidate @submit.prevent="submitContactForm">
        <div class="lead-form__grid">
          <BaseInput id="lead-name" v-model="form.name" label="Seu nome" autocomplete="name" :error="errors.name" />
          <BaseInput id="lead-email" v-model="form.email" label="Seu melhor e-mail" type="email" autocomplete="email" :error="errors.email" />
          <BaseInput id="lead-phone" v-model="form.phone" label="Seu WhatsApp" type="tel" autocomplete="tel" :error="errors.phone" />
          <BaseButton type="submit" :disabled="status === 'submitting'">{{ status === 'submitting' ? 'Enviando...' : 'Falar com especialista' }}</BaseButton>
        </div>
        <p v-if="status === 'success'" class="lead-form__message lead-form__message--success" role="status">Recebemos seus dados! Em breve entraremos em contato.</p>
        <p v-else-if="status === 'error'" class="lead-form__message" role="alert">Não foi possível enviar agora. Tente novamente em instantes.</p>
        <p class="lead-form__privacy"><LockKeyhole />Sem compromisso. Resposta rápida.</p>
      </form>
      <img
        class="cta-section__dog"
        src="/assets/responsive/cta-corgi-240.webp"
        srcset="
          /assets/responsive/cta-corgi-240.webp 240w,
          /assets/responsive/cta-corgi-480.webp 480w
        "
        sizes="215px"
        alt="Corgi sorridente"
        width="1024"
        height="1536"
        loading="lazy"
        decoding="async"
      />
      <img class="cta-section__heart" src="/assets/heart.svg" alt="" width="58" height="52" loading="lazy" />
    </div>
  </section>
</template>
