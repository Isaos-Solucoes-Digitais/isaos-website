import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import { I18nProvider } from '@/i18n'
import { ThemeProvider } from '@/hooks/useTheme'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import { siteConfig } from '@/config/site'
import { JsonLd, organizationSchema, websiteSchema } from '@/lib/jsonld'


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Soluções digitais que Transformam`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'pt-AO': siteConfig.url,
      en: `${siteConfig.url}/en`,
      es: `${siteConfig.url}/es`,
      fr: `${siteConfig.url}/fr`,
      ja: `${siteConfig.url}/ja`,
      zh: `${siteConfig.url}/zh`,
      'x-default': siteConfig.url,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Soluções digitais que Transformam`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Soluções digitais que Transformam`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@isaos_ao',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    // ⚠️ substituir pelos códigos reais ao registar no Google Search Console / Bing
    google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    other: { 'msvalidate.01': 'BING_WEBMASTER_VERIFICATION_CODE' },
  },
  category: 'technology',
}

/* viewport + themeColor */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteConfig.themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body bg-dark-900 text-slate-200 overflow-x-hidden" suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />

        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
