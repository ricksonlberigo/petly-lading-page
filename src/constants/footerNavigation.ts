export interface FooterLink {
  label: string
  href: string
}

export interface FooterNavigationGroup {
  title: string
  links: FooterLink[]
}

export const footerNavigationGroups: FooterNavigationGroup[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '/#features' },
      { label: 'Funcionalidades', href: '/#features' },
      { label: 'Benefícios', href: '/#benefits' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '/sobre' },
      { label: 'Termos de uso', href: '/termos-de-uso' },
      { label: 'Privacidade', href: '/politica-de-privacidade' },
      { label: 'Cookies', href: '/politica-de-cookies' },
      { label: 'Direitos autorais', href: '/direitos-autorais' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de ajuda', href: '#' },
      { label: 'Fale conosco', href: '/contato#contact-form' },
      { label: 'Reportar problema', href: '/contato#contact-form' },
    ],
  },
]
