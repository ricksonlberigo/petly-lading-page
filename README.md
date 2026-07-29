# Petly Landing Page

Landing page responsiva do Petly, reconstruída em Vue 3 a partir de `reference.png` e dos assets oficiais fornecidos.

## Stack

- Vue 3 com Composition API e `<script setup lang="ts">`
- Vite e TypeScript
- Vue Router
- ESLint e Prettier
- Lucide para os ícones de interface

## Como executar

```bash
npm install
npm run dev
```

Para medir Lighthouse sem os módulos do servidor de desenvolvimento:

```bash
npm run build
npm run preview
```

As variantes WebP responsivas podem ser recriadas após a substituição dos
arquivos originais com:

```bash
npm run optimize:images
```

Validação de produção:

```bash
npm run lint
npm run typecheck
npm run build
```

## Estrutura

- `src/components/layout`: header e footer
- `src/components/home`: seções da Home
- `src/components/ui`: componentes reutilizáveis
- `src/data`: funcionalidades, benefícios e FAQ
- `src/constants`: navegação e contato
- `src/services`: integração de leads e analytics
- `src/styles`: tokens globais e estilos responsivos
- `public/assets`: imagens oficiais usadas na interface

## Variáveis de ambiente

Copie `.env.example` para `.env`. Variáveis `VITE_*` são públicas no bundle e não devem conter segredos.

## Formulário

O formulário valida nome, e-mail e WhatsApp no cliente. O `leadService` envia `POST {VITE_API_BASE_URL}/leads` com:

```json
{ "name": "string", "email": "string", "phone": "string" }
```

Resposta esperada:

```json
{ "id": "string", "message": "string" }
```

## Responsividade e acessibilidade

Os layouts foram adaptados para desktop, tablet e celulares de 360px a 1440px. A página usa landmarks semânticos, foco visível, labels reais, menu móvel acessível e accordion com navegação por teclado.
