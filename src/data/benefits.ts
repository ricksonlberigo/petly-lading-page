import { Cloud, MessagesSquare, MonitorSmartphone, ShieldCheck } from '@lucide/vue'
import type { Component } from 'vue'

export interface Benefit {
  title: string
  description: string
  icon: Component
}

export const benefits: Benefit[] = [
  { title: 'Multiempresa', description: 'Gerencie várias unidades em uma única conta.', icon: Cloud },
  { title: 'Acesse de qualquer lugar', description: 'Use no computador, tablet ou celular.', icon: MonitorSmartphone },
  { title: 'Dados protegidos', description: 'Seus dados protegidos com backups e criptografia.', icon: ShieldCheck },
  { title: 'Integrações que facilitam', description: 'Integração com WhatsApp, Pix e muito mais.', icon: MessagesSquare },
]
