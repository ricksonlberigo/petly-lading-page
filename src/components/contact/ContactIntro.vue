<script setup lang="ts">
import { Clock3, Mail, MessageCircle, Send, ShieldCheck, UserRound } from '@lucide/vue'
import { reactive, ref } from 'vue'
import { contactInfo } from '@/constants/contact'
import { submitContact, type ContactFormData } from '@/services/contactService'

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
const isSubmitting = ref(false)
const feedback = ref('')

const submitContactForm = async () => {
  if (!form.name || !form.email || !form.phone || !form.subject || !form.message) {
    feedback.value = 'Preencha todos os campos para enviar sua mensagem.'
    return
  }

  isSubmitting.value = true
  feedback.value = ''
  try {
    await submitContact({ ...form })
    feedback.value = 'Mensagem enviada com sucesso. Em breve entraremos em contato.'
  } catch {
    feedback.value = 'Não foi possível enviar agora. Tente novamente em instantes.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="contact-intro">
    <div class="page-container contact-intro__grid">
      <div class="contact-intro__content">
        <span class="contact-eyebrow"><ShieldCheck /> Estamos aqui para ajudar</span>
        <div class="contact-intro__title">
          <h1>Entre em contato</h1>
          <img src="/assets/heart.svg" alt="" width="58" height="52" />
        </div>
        <p>
          Nossa equipe está pronta para entender a operação do seu pet shop e apresentar a melhor
          solução para o seu negócio.
        </p>
        <address id="contact-details" class="contact-details">
          <a :href="contactInfo.whatsappHref">
            <MessageCircle />
            <span><strong>WhatsApp</strong>{{ contactInfo.whatsappDisplay }}</span>
          </a>
          <a :href="contactInfo.emailHref">
            <Mail />
            <span><strong>E-mail</strong>{{ contactInfo.email }}</span>
          </a>
          <div>
            <Clock3 />
            <span><strong>Horário de atendimento</strong>Segunda a sexta, das 9h às 18h</span>
          </div>
          <!-- Redes sociais temporariamente indisponíveis. -->
        </address>
      </div>

      <form id="contact-form" class="contact-form" novalidate @submit.prevent="submitContactForm">
        <div class="contact-form__row">
          <label>
            <span>Seu nome</span>
            <span class="contact-form__control"><UserRound aria-hidden="true" /><input v-model="form.name" autocomplete="name" placeholder="Digite seu nome completo" /></span>
          </label>
          <label>
            <span>E-mail</span>
            <span class="contact-form__control"><Mail aria-hidden="true" /><input v-model="form.email" type="email" autocomplete="email" placeholder="seu@email.com" /></span>
          </label>
        </div>
        <label>
          <span>WhatsApp</span>
          <span class="contact-form__control"><MessageCircle aria-hidden="true" /><input v-model="form.phone" type="tel" autocomplete="tel" placeholder="(11) 99999-9999" /></span>
        </label>
        <label>
          <span>Assunto</span>
          <select v-model="form.subject">
            <option value="" disabled>Selecione o assunto</option>
            <option>Comercial</option>
            <option>Suporte</option>
            <option>Parcerias</option>
            <option>Outro</option>
          </select>
        </label>
        <label>
          <span>Sua mensagem</span>
          <textarea v-model="form.message" rows="4" placeholder="Conte-nos como podemos ajudar seu pet shop..."></textarea>
        </label>
        <button class="contact-form__submit" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Enviando...' : 'Enviar mensagem' }} <Send aria-hidden="true" />
        </button>
        <p v-if="feedback" class="contact-form__feedback" role="status">{{ feedback }}</p>
        <p class="contact-form__privacy"><ShieldCheck /> Seus dados estão seguros e não compartilhamos suas informações.</p>
      </form>
    </div>
  </section>
</template>
