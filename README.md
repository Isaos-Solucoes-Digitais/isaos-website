# ISAOS Soluções Digitais — Website Institucional

Website institucional para a ISAOS Soluções Digitais.

## Stack Tecnológica

- **Next.js 16** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)


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
├── app/                    # App Router (Next.js 16)
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

