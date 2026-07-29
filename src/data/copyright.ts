import {
  Ban,
  BookOpen,
  CheckCircle2,
  FileText,
  Link,
  Mail,
  ShieldCheck,
  ShoppingCart,
  Tag,
  UsersRound,
} from '@lucide/vue'
import type { Component } from 'vue'

export interface CopyrightItem {
  title: string
  description: string
  icon: Component
  tone?: 'navy' | 'coral'
}

export const copyrightRules: CopyrightItem[] = [
  {
    title: 'Titularidade do conteúdo',
    description:
      'Todos os conteúdos disponíveis no site e no sistema Petly, incluindo textos, imagens, ilustrações, vídeos, códigos, layouts, bancos de dados e demais materiais, são de titularidade exclusiva da Petly ou de seus licenciadores.',
    icon: ShieldCheck,
  },
  {
    title: 'Uso permitido',
    description:
      'É permitido acessar, visualizar e utilizar o conteúdo do site e do sistema Petly apenas para fins informativos e operacionais, de forma individual, pessoal e não comercial.',
    icon: CheckCircle2,
  },
  {
    title: 'Uso não autorizado',
    description:
      'É proibida a reprodução, distribuição, modificação, adaptação, comunicação pública ou qualquer outro uso não autorizado do conteúdo, total ou parcialmente, sem a prévia autorização por escrito da Petly.',
    icon: Ban,
    tone: 'coral',
  },
  {
    title: 'Marcas e identidade visual',
    description:
      'As marcas, logotipos, nomes comerciais e elementos visuais da Petly são protegidos por leis de marcas e propriedade intelectual. Seu uso indevido pode resultar em medidas legais.',
    icon: Tag,
  },
  {
    title: 'Conteúdo de terceiros',
    description:
      'Podemos utilizar conteúdos de terceiros mediante licença. Esses conteúdos pertencem aos seus respectivos titulares e estão sujeitos às condições de uso aplicáveis.',
    icon: UsersRound,
  },
  {
    title: 'Solicitações e remoções',
    description:
      'Respeitamos os direitos de propriedade intelectual. Se você acredita que algum conteúdo da Petly está sendo utilizado de forma indevida, entre em contato conosco para avaliarmos sua solicitação.',
    icon: Mail,
  },
]

export const copyrightPermissions: CopyrightItem[] = [
  {
    title: 'Referência educacional',
    description:
      'Você pode citar trechos curtos com finalidade educacional, desde que mencione a fonte Petly.',
    icon: BookOpen,
  },
  {
    title: 'Compartilhar links oficiais',
    description:
      'É permitido compartilhar links das páginas oficiais da Petly em canais e redes sociais.',
    icon: Link,
  },
  {
    title: 'Sem uso comercial',
    description:
      'É proibido utilizar nosso conteúdo para fins comerciais ou promocionais sem autorização.',
    icon: ShoppingCart,
    tone: 'coral',
  },
  {
    title: 'Sem reprodução ou cópia',
    description:
      'Não é permitido copiar, replicar ou reproduzir o sistema, o design ou qualquer material da Petly.',
    icon: FileText,
    tone: 'coral',
  },
]
