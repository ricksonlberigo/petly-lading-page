export interface TermsSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export const termsSections: TermsSection[] = [
  {
    id: 'general-provisions',
    title: '1. Disposições gerais',
    paragraphs: [
      'Estes Termos de Uso (“Termos”) regulam o acesso e o uso dos serviços oferecidos pela Petly, incluindo nosso site e a plataforma de gestão para pet shops. Ao acessar ou utilizar nossos serviços, você concorda integralmente com estes Termos.',
    ],
  },
  {
    id: 'acceptance',
    title: '2. Aceitação dos termos',
    paragraphs: [
      'Ao criar uma conta ou utilizar nossos serviços, você declara que leu, compreendeu e concorda em cumprir estes Termos. Caso não concorde com qualquer parte destes Termos, não utilize nossos serviços.',
    ],
  },
  {
    id: 'service-description',
    title: '3. Descrição do serviço',
    paragraphs: [
      'O Petly é uma plataforma online de gestão para pet shops, que oferece ferramentas para controle de clientes, pets, agenda, serviços, financeiro, relatórios e muito mais. Reservamo-nos o direito de modificar ou descontinuar qualquer parte dos serviços a qualquer momento, com ou sem aviso prévio.',
    ],
  },
  {
    id: 'account',
    title: '4. Cadastro e conta',
    paragraphs: [
      'Para acessar determinados recursos do Petly, você deverá criar uma conta fornecendo informações verdadeiras e atualizadas. Você é responsável por manter a confidencialidade de seus dados de acesso e por todas as atividades realizadas em sua conta.',
    ],
  },
  {
    id: 'service-use',
    title: '5. Uso do serviço',
    paragraphs: ['Você concorda em utilizar o Petly apenas para fins lícitos e de acordo com estes Termos. É proibido:'],
    bullets: [
      'Utilizar o serviço para atividades ilegais ou fraudulentas;',
      'Compartilhar ou ceder sua conta a terceiros;',
      'Interferir no funcionamento do serviço ou tentar obter acesso não autorizado;',
      'Publicar conteúdo ofensivo, ilegal ou que viole direitos de terceiros.',
    ],
  },
  {
    id: 'payments',
    title: '6. Pagamentos e planos',
    paragraphs: [
      'Os planos e preços estão disponíveis no site. Os pagamentos são processados por parceiros de pagamento. Ao contratar um plano, você concorda com os valores, periodicidade e condições apresentadas no momento da contratação.',
    ],
  },
  {
    id: 'cancellation',
    title: '7. Cancelamento e reembolso',
    paragraphs: [
      'O cancelamento pode ser solicitado conforme as condições do plano contratado. Valores já pagos não serão reembolsados, exceto quando exigido por lei ou expressamente previsto na proposta comercial.',
    ],
  },
  {
    id: 'availability',
    title: '8. Disponibilidade do serviço',
    paragraphs: [
      'Buscamos manter os serviços disponíveis continuamente, mas podem ocorrer interrupções para manutenção, atualizações ou por fatores fora do nosso controle.',
    ],
  },
  {
    id: 'responsibilities',
    title: '9. Responsabilidades',
    paragraphs: [
      'O usuário é responsável pela veracidade dos dados cadastrados, pelo uso adequado da plataforma e pela segurança de suas credenciais de acesso.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '10. Propriedade intelectual',
    paragraphs: [
      'Todos os direitos sobre o Petly, incluindo marca, software, interfaces, textos e materiais, pertencem à Petly ou a seus licenciadores.',
    ],
  },
  {
    id: 'user-conduct',
    title: '11. Conduta do usuário',
    paragraphs: [
      'O usuário deverá agir de boa-fé, respeitar a legislação aplicável e não utilizar a plataforma de forma que prejudique outros usuários ou a operação do serviço.',
    ],
  },
  {
    id: 'liability-limitation',
    title: '12. Limitação de responsabilidade',
    paragraphs: [
      'Na extensão permitida pela legislação, a Petly não será responsável por danos indiretos, lucros cessantes ou perdas decorrentes do uso inadequado da plataforma.',
    ],
  },
  {
    id: 'terms-changes',
    title: '13. Alterações nos termos',
    paragraphs: [
      'Estes Termos podem ser atualizados periodicamente. A versão vigente e sua data de atualização estarão sempre disponíveis nesta página.',
    ],
  },
  {
    id: 'applicable-law',
    title: '14. Lei aplicável',
    paragraphs: [
      'Estes Termos são regidos pelas leis da República Federativa do Brasil, observadas as normas aplicáveis de proteção ao consumidor e de dados pessoais.',
    ],
  },
  {
    id: 'terms-contact',
    title: '15. Contato',
    paragraphs: [
      'Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail contato@petly.com.br ou pelo WhatsApp (11) 99999-9999.',
    ],
  },
]
