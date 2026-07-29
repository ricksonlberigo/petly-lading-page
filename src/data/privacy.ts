import {
  Baby,
  Cookie,
  Edit3,
  LockKeyhole,
  Mail,
  Monitor,
  Share2,
  ShieldCheck,
  UserRound,
} from '@lucide/vue'
import type { Component } from 'vue'

export interface PrivacySection {
  id: string
  title: string
  icon: Component
  paragraphs: string[]
  bullets?: string[]
}

export const privacySections: PrivacySection[] = [
  {
    id: 'introduction',
    title: '1. Introdução',
    icon: ShieldCheck,
    paragraphs: [
      'O Petly (“nós”, “nosso” ou “Petly”) valoriza a sua privacidade e está comprometido com a proteção dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você fornece ao utilizar nosso site e nosso sistema.',
    ],
  },
  {
    id: 'data-collected',
    title: '2. Quais dados coletamos',
    icon: UserRound,
    paragraphs: [
      'Coletamos apenas os dados necessários para fornecer uma experiência melhor e mais segura. Alguns dos dados que podem ser coletados incluem:',
    ],
    bullets: [
      'Dados de identificação: nome, e-mail, telefone/WhatsApp, nome da empresa.',
      'Dados de acesso: e-mail e senha criptografada.',
      'Dados de uso: páginas acessadas, funcionalidades utilizadas, informações do dispositivo, navegador e endereço IP.',
      'Dados de negócio: informações relacionadas ao seu pet shop, clientes e pets, conforme cadastradas no sistema.',
    ],
  },
  {
    id: 'data-use',
    title: '3. Como usamos seus dados',
    icon: Monitor,
    paragraphs: ['Utilizamos seus dados para:'],
    bullets: [
      'Criar e gerenciar sua conta.',
      'Prestar e melhorar nossos serviços.',
      'Enviar comunicações importantes sobre sua conta e o Petly.',
      'Oferecer suporte e atendimento.',
      'Enviar conteúdos e ofertas, quando autorizado.',
      'Cumprir obrigações legais e regulatórias.',
    ],
  },
  {
    id: 'data-sharing',
    title: '4. Compartilhamento de dados',
    icon: Share2,
    paragraphs: [
      'Seus dados não são vendidos. Compartilhamos informações apenas quando necessário:',
    ],
    bullets: [
      'Com prestadores de serviços que nos ajudam a operar o sistema, como hospedagem, e-mail e analytics.',
      'Para cumprir obrigações legais ou ordens judiciais.',
      'Em caso de fusão, aquisição ou venda de ativos, mediante confidencialidade.',
    ],
  },
  {
    id: 'storage-security',
    title: '5. Armazenamento e segurança',
    icon: LockKeyhole,
    paragraphs: [
      'Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda, alteração ou divulgação indevida.',
    ],
  },
  {
    id: 'your-rights',
    title: '6. Seus direitos',
    icon: UserRound,
    paragraphs: ['Você pode, a qualquer momento:'],
    bullets: [
      'Confirmar a existência de tratamento.',
      'Acessar, corrigir ou solicitar a exclusão dos seus dados.',
      'Revogar consentimentos.',
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies e tecnologias semelhantes',
    icon: Cookie,
    paragraphs: [
      'Utilizamos cookies para melhorar sua experiência, analisar o uso do site e personalizar conteúdo. Você pode gerenciar suas preferências a qualquer momento.',
    ],
  },
  {
    id: 'children-data',
    title: '8. Dados de crianças e adolescentes',
    icon: Baby,
    paragraphs: [
      'Nossos serviços não são destinados a crianças menores de 13 anos. Não coletamos intencionalmente dados deste público.',
    ],
  },
  {
    id: 'policy-changes',
    title: '9. Alterações nesta política',
    icon: Edit3,
    paragraphs: [
      'Podemos atualizar esta Política sempre que necessário. A data da última atualização estará sempre indicada no início da página.',
    ],
  },
  {
    id: 'contact',
    title: '10. Contato',
    icon: Mail,
    paragraphs: [
      'Dúvidas sobre esta Política de Privacidade? Entre em contato conosco:',
      'E-mail: privacidade@petly.com.br',
      'WhatsApp: (11) 99999-9999',
    ],
  },
]
