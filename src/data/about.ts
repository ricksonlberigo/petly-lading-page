import {
  Clock3,
  Eye,
  Gem,
  Heart,
  Layers3,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
} from '@lucide/vue'
import type { Component } from 'vue'

export interface AboutCard {
  title: string
  description?: string
  icon: Component
  tone: 'teal' | 'purple' | 'coral'
  values?: string[]
}

export interface AboutPoint {
  title: string
  description: string
  icon: Component
}

export const aboutCards: AboutCard[] = [
  {
    title: 'Nossa missão',
    description:
      'Simplificar a gestão de pet shops e ajudar negócios a crescer com mais organização, eficiência e cuidado.',
    icon: Target,
    tone: 'teal',
  },
  {
    title: 'Nossa visão',
    description:
      'Ser referência em tecnologia para pet shops, conectando operação, atendimento e crescimento em uma única plataforma.',
    icon: Eye,
    tone: 'purple',
  },
  {
    title: 'Nossos valores',
    icon: Gem,
    tone: 'coral',
    values: [
      'Simplicidade',
      'Confiança',
      'Cuidado com os pets',
      'Proximidade com o cliente',
      'Evolução contínua',
    ],
  },
]

export const storyPoints: AboutPoint[] = [
  {
    title: 'Mais tempo para o que importa',
    description: 'Automatize tarefas e ganhe tempo no dia a dia.',
    icon: Clock3,
  },
  {
    title: 'Gestão completa, sem complicação',
    description: 'Vendas, serviços, estoque, finanças e clientes em um só lugar.',
    icon: TrendingUp,
  },
  {
    title: 'Melhores decisões, mais resultados',
    description: 'Relatórios e indicadores que ajudam você a crescer com segurança.',
    icon: Heart,
  },
]

export const productPillars: AboutPoint[] = [
  {
    title: 'Foco em simplicidade',
    description: 'Interface intuitiva e fluxos desenhados para o dia a dia do pet shop.',
    icon: MousePointerClick,
  },
  {
    title: 'Arquitetura escalável',
    description: 'Tecnologia moderna que cresce junto com o seu negócio.',
    icon: Layers3,
  },
  {
    title: 'Segurança e auditoria',
    description: 'Proteção de dados, permissões inteligentes e trilha de auditoria.',
    icon: ShieldCheck,
  },
  {
    title: 'Evolução contínua',
    description: 'Novas funcionalidades e melhorias com base no que você realmente precisa.',
    icon: RefreshCw,
  },
]
