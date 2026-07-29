import {
  AlertTriangle,
  Ban,
  Cookie,
  Edit3,
  Grid2X2,
  Mail,
  Settings2,
  ShieldCheck,
  UsersRound,
} from '@lucide/vue'
import type { Component } from 'vue'

export interface CookiePolicySection {
  id: string
  title: string
  icon: Component
  paragraphs: string[]
  bullets?: string[]
}

export interface CookieType {
  type: string
  purpose: string
  examples: string
  duration: string
}

export const cookieTypes: CookieType[] = [
  {
    type: 'Essenciais',
    purpose: 'Necessários para o funcionamento do site e para permitir o uso de recursos básicos.',
    examples: 'Autenticação, segurança, preferências de consentimento de cookies.',
    duration: 'Sessão / Até 1 ano',
  },
  {
    type: 'Desempenho',
    purpose: 'Coletam informações sobre como os visitantes usam o site para melhorar nosso desempenho.',
    examples: 'Google Analytics.',
    duration: 'Até 2 anos',
  },
  {
    type: 'Funcionais',
    purpose: 'Permitem lembrar escolhas e personalizar sua experiência.',
    examples: 'Idioma, região, preferências de exibição.',
    duration: 'Até 1 ano',
  },
  {
    type: 'Marketing',
    purpose: 'Utilizados para exibir anúncios mais relevantes para você.',
    examples: 'Meta Pixel, Google Ads.',
    duration: 'Até 2 anos',
  },
]

export const cookiePolicySections: CookiePolicySection[] = [
  {
    id: 'what-are-cookies',
    title: '1. O que são cookies?',
    icon: Cookie,
    paragraphs: [
      'Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, celular ou tablet) quando você acessa um site. Eles ajudam a melhorar sua experiência, lembrar preferências e entender como o site é utilizado.',
    ],
  },
  {
    id: 'how-we-use-cookies',
    title: '2. Como usamos cookies',
    icon: ShieldCheck,
    paragraphs: [
      'Utilizamos cookies para tornar sua navegação mais eficiente, personalizada e segura. Eles nos ajudam a:',
    ],
    bullets: [
      'Garantir o funcionamento adequado do site;',
      'Lembrar suas preferências e configurações;',
      'Entender como os visitantes interagem com o site;',
      'Melhorar nossos serviços e comunicação.',
    ],
  },
  {
    id: 'cookie-types',
    title: '3. Tipos de cookies que utilizamos',
    icon: Grid2X2,
    paragraphs: [],
  },
  {
    id: 'third-party-cookies',
    title: '4. Cookies de terceiros',
    icon: UsersRound,
    paragraphs: [
      'Alguns cookies são definidos por terceiros que prestam serviços em nosso nome, como ferramentas de análise e plataformas de publicidade. Eles podem coletar informações sobre sua navegação em diferentes sites ao longo do tempo.',
    ],
  },
  {
    id: 'preferences',
    title: '5. Gerenciamento de preferências',
    icon: Settings2,
    paragraphs: [
      'Ao acessar nosso site pela primeira vez, exibimos um banner de cookies para que você escolha quais tipos deseja permitir. Você pode alterar suas escolhas a qualquer momento clicando em “Preferências de Cookies” no rodapé do site.',
    ],
  },
  {
    id: 'disable-cookies',
    title: '6. Como desativar cookies',
    icon: Ban,
    paragraphs: [
      'Você pode bloquear ou excluir cookies nas configurações do seu navegador. Note que algumas funcionalidades do site podem não funcionar corretamente sem cookies.',
    ],
  },
  {
    id: 'disable-impact',
    title: '7. Impactos da desativação',
    icon: AlertTriangle,
    paragraphs: [
      'Ao desativar cookies, certas funcionalidades podem ser afetadas, como login automático, preenchimento de formulários e preferências salvas.',
    ],
  },
  {
    id: 'cookie-policy-changes',
    title: '8. Alterações nesta política',
    icon: Edit3,
    paragraphs: [
      'Podemos atualizar esta Política de Cookies periodicamente. A data da última atualização estará sempre indicada no início desta página.',
    ],
  },
  {
    id: 'cookie-contact',
    title: '9. Contato',
    icon: Mail,
    paragraphs: [
      'Se tiver dúvidas sobre esta Política de Cookies, entre em contato conosco.',
      'E-mail: privacidade@petly.com.br | WhatsApp: (11) 99999-9999',
    ],
  },
]
