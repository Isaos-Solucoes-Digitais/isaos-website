# ISAOS Soluções Digitais — Website Institucional

Website institucional completo e moderno para a ISAOS Soluções Digitais.

## Stack Tecnológica

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)

## Requisitos

- Node.js 18.17 ou superior
- npm 9+

## Início Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no browser
# http://localhost:3000
```

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page completa |
| `/about` | Sobre a empresa, missão, visão e valores |
| `/services` | Todos os serviços detalhados |
| `/portfolio` | Portfólio de projectos com filtros |
| `/contact` | Formulário de contacto + mapa |

## Estrutura do Projecto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx          # Layout raiz com Navbar e Footer
│   ├── page.tsx            # Homepage
│   ├── about/              # Página Sobre
│   ├── services/           # Página Serviços
│   ├── portfolio/          # Página Portfólio
│   └── contact/            # Página Contacto
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Services, Differentials, CTA...
│   └── ui/                 # Button, ServiceCard, ContactForm...
├── hooks/                  # Custom React hooks
├── utils/                  # Utilitários
└── styles/                 # CSS global
```

## Personalização

### Logo
Substitua o logotipo no componente `Navbar.tsx` e `Footer.tsx`. Actualmente usa um logotipo gerado por CSS que pode ser substituído por:

```tsx
import Image from 'next/image'
<Image src="/logo.svg" alt="ISAOS" width={120} height={40} />
```

### Cores
Edite `tailwind.config.ts` para ajustar a paleta de cores da marca.

### Conteúdo
- Textos: edite directamente nos ficheiros de cada página
- Serviços: `src/components/sections/ServicesSection.tsx`
- Portfólio: `src/app/portfolio/PortfolioContent.tsx`
- Testemunhos: `src/components/sections/SocialProofSection.tsx`

### WhatsApp
Substitua `244923000000` pelo número real em:
- `src/components/ui/WhatsAppButton.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/app/contact/ContactContent.tsx`

## Deploy

```bash
# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

### Vercel (recomendado)
```bash
npm i -g vercel
vercel
```

## Licença

© 2024 ISAOS Soluções Digitais. Todos os direitos reservados.
