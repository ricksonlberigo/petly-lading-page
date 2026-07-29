export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  { question: 'O Petly funciona para qualquer tamanho de pet shop?', answer: 'Sim. O Petly acompanha desde operações enxutas até redes com várias unidades.' },
  { question: 'Preciso instalar algo?', answer: 'Não. O sistema funciona 100% na nuvem e pode ser acessado pelo navegador.' },
  { question: 'Posso acessar pelo celular?', answer: 'Sim. A interface se adapta a celulares, tablets e computadores.' },
  { question: 'Meus dados ficam seguros?', answer: 'Sim. Usamos boas práticas de segurança, backups e controle de acesso.' },
  { question: 'Existe período de teste?', answer: 'Nossa equipe apresenta as opções disponíveis de acordo com o seu negócio.' },
  { question: 'Como funciona o suporte?', answer: 'Você conta com atendimento humanizado para tirar dúvidas e apoiar sua rotina.' },
  { question: 'É possível integrar com WhatsApp e Pix?', answer: 'Sim. O Petly está preparado para integrações que simplificam comunicação e pagamentos.' },
  { question: 'Como é o processo de implantação?', answer: 'A implantação é acompanhada e inclui configuração inicial e orientação da equipe.' },
  { question: 'Posso cancelar quando quiser?', answer: 'Sim. As condições de cancelamento são transparentes e apresentadas na contratação.' },
  { question: 'Como faço para contratar?', answer: 'Preencha o formulário e um especialista entrará em contato com uma proposta sob medida.' },
]
