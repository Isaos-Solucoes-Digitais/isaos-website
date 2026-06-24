/**
 * Configuração central do site — usada por metadata, sitemap, JSON-LD, etc.
 */
import { SOCIALS } from "@/constants"

export const siteConfig = {
  name: 'ISAOS Soluções Digitais',
  shortName: 'ISAOS',
  url: 'https://www.isaos.ao',
  description:
    'A ISAOS é uma startup angolana de tecnologia especializada em desenvolvimento web, apps mobile, automação e transformação digital para empresas em Angola e África.',
  locale: 'pt_AO',
  languages: ['pt', 'en', 'es', 'fr', 'ja', 'zh'],
  defaultLanguage: 'pt',
  themeColor: '#0a6fe8',
  keywords: [
    'desenvolvimento web Angola',
    'software house Luanda',
    'transformação digital Angola',
    'apps mobile Angola',
    'startup tecnologia Luanda',
    'consultoria digital Angola',
    'cybersecurity',
    'automação e IA Angola',
    'ISAOS',
  ],
  social: {
    linkedin: SOCIALS.linkedin,
    twitter: SOCIALS.twitter,
    instagram: SOCIALS.instagram,
    facebook: SOCIALS.facebook,
  },
  contact: {
    email: 'info@isaos.ao',
    phone: '+244945036927',
    address: {
      street: 'Talatona',
      locality: 'Luanda',
      region: 'Luanda',
      country: 'AO',
      postalCode: '',
    },
    geo: {
      latitude: -8.9925,
      longitude: 13.1808,
    },
  },
  // Imagens usadas em Open Graph / Twitter Cards / JSON-LD
  ogImage: '/og-image.jpg',     // 1200x630
  logo: '/logos/logo-gradient-horizontal.jpeg',
  logoSquare: '/logos/logo-gradient-vertical.jpeg', // usado em JSON-LD Organization
} as const

export type SiteConfig = typeof siteConfig