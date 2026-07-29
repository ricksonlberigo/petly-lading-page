import {
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  UserRound,
} from '@lucide/vue'
import type { Component } from 'vue'
import type { FaqItem } from './faq'

export interface ContactChannel {
  title: string
  description: string
  action: string
  href: string
  icon: Component
  tone?: 'teal' | 'coral'
}

export interface ContactTeam {
  title: string
  description: string
  action: string
  href: string
  icon: Component
}

export const contactChannels: ContactChannel[] = [
  {
    title: 'WhatsApp',
    description: 'Fale com a gente de forma rápida e prática pelo WhatsApp.',
    action: 'Abrir WhatsApp',
    href: 'https://wa.me/5511999999999',
    icon: MessageCircle,
  },
  {
    title: 'E-mail',
    description: 'Envie suas dúvidas ou solicitações e responderemos em breve.',
    action: 'Enviar e-mail',
    href: 'mailto:contato@petly.com.br',
    icon: Mail,
  },
  {
    title: 'Horário de atendimento',
    description: 'Segunda a sexta-feira, das 9h às 18h.',
    action: 'Ver detalhes',
    href: '#contact-details',
    icon: Clock3,
    tone: 'coral',
  },
  /*
   * Redes sociais temporariamente indisponíveis.
   * {
   *   title: 'Siga nas redes',
   *   description: 'Acompanhe nossas redes sociais e fique por dentro das novidades.',
   *   action: 'Ver redes',
   *   href: '#contact-footer',
   *   icon: UsersRound,
   * },
   */
]

export const contactTeams: ContactTeam[] = [
  {
    title: 'Comercial',
    description:
      'Fale com nosso time comercial para conhecer o sistema, agendar uma demonstração ou tirar dúvidas sobre funcionalidades.',
    action: 'Falar com o comercial',
    href: '#contact-form',
    icon: UserRound,
  },
  {
    title: 'Suporte',
    description:
      'Precisa de ajuda com o sistema? Nosso time de suporte está pronto para ajudar você e seu pet shop.',
    action: 'Abrir chamado de suporte',
    href: '#contact-form',
    icon: Headphones,
  },
  /*
   * Canal de parcerias temporariamente indisponível.
   * {
   *   title: 'Parcerias',
   *   description:
   *     'Quer ser nosso parceiro ou integrar soluções à Petly? Vamos conversar sobre oportunidades.',
   *   action: 'Falar sobre parcerias',
   *   href: '#contact-form',
   *   icon: Handshake,
   * },
   */
]

export const contactFaqItems: FaqItem[] = [
  {
    question: 'Como agendar uma demonstração?',
    answer: 'Preencha o formulário e escolha o assunto Comercial para nossa equipe entrar em contato.',
  },
  {
    question: 'Qual o prazo de resposta do suporte?',
    answer: 'Nossa equipe responde às solicitações dentro do horário comercial, o mais rápido possível.',
  },
  {
    question: 'Vocês atendem por WhatsApp?',
    answer: 'Sim. Você pode falar conosco pelo WhatsApp de segunda a sexta-feira, das 9h às 18h.',
  },
  {
    question: 'Posso tirar dúvidas antes de contratar?',
    answer: 'Sim. Um especialista pode apresentar o Petly e esclarecer todas as suas dúvidas.',
  },
]
