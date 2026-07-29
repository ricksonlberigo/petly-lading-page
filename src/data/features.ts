import { CalendarDays, ChartNoAxesCombined, PawPrint, Scissors, ShieldCheck, WalletCards } from '@lucide/vue'
import type { Component } from 'vue'

export interface Feature {
  title: string
  description: string
  icon: Component
  tone: 'teal' | 'coral'
}

export const features: Feature[] = [
  { title: 'Clientes e Pets', description: 'Cadastre clientes, múltiplos pets, histórico completo e preferências.', icon: PawPrint, tone: 'teal' },
  { title: 'Agenda Inteligente', description: 'Agendamentos online, lembretes automáticos e controle de horários.', icon: CalendarDays, tone: 'coral' },
  { title: 'Serviços e Profissionais', description: 'Cadastre serviços, preços e comissões. Organize sua equipe de forma simples.', icon: Scissors, tone: 'teal' },
  { title: 'Financeiro e Pagamentos', description: 'Controle de receitas, despesas e formas de pagamento. Relatórios automáticos.', icon: WalletCards, tone: 'coral' },
  { title: 'Relatórios e Indicadores', description: 'Acompanhe o desempenho do seu negócio com dashboards completos.', icon: ChartNoAxesCombined, tone: 'teal' },
  { title: 'Acesso e Auditoria', description: 'Controle de permissões, trilha de auditoria e mais segurança para seus dados.', icon: ShieldCheck, tone: 'coral' },
]
