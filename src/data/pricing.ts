export interface PricingPlan {
  name: string
  description: string
  price: string
  features: string[]
  featured?: boolean
  badge?: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Essencial',
    description: 'Para quem está começando a organizar a operação.',
    price: '59,90',
    features: ['1 empresa', 'até 2 usuários', 'clientes e pets', 'agenda e serviços', 'financeiro básico'],
  },
  {
    name: 'Profissional',
    description: 'Para pet shops que querem controle completo da rotina.',
    price: '99,90',
    features: ['1 empresa', 'até 5 usuários', 'financeiro completo', 'relatórios e indicadores', 'suporte prioritário'],
    featured: true,
    badge: 'Mais escolhido',
  },
  {
    name: 'Multi',
    description: 'Para quem gerencia mais de uma unidade.',
    price: '159,90',
    features: ['até 3 empresas', 'até 10 usuários', 'multiempresa', 'auditoria e permissões', 'relatórios completos'],
  },
]
