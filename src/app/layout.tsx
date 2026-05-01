import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

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
  title: {
    default: 'ISAOS Soluções Digitais — Tecnologia que Transforma',
    template: '%s | ISAOS Soluções Digitais',
  },
  description:
    'A ISAOS é uma startup angolana de tecnologia especializada em desenvolvimento web, apps mobile, automação e transformação digital. Soluções inovadoras para empresas que querem crescer.',
  keywords: [
    'desenvolvimento web Angola',
    'software Luanda',
    'transformação digital Angola',
    'apps mobile Angola',
    'startup tecnologia Luanda',
    'ISAOS',
  ],
  authors: [{ name: 'ISAOS Soluções Digitais' }],
  creator: 'ISAOS Soluções Digitais',
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://isaos.ao',
    siteName: 'ISAOS Soluções Digitais',
    title: 'ISAOS Soluções Digitais — Tecnologia que Transforma',
    description:
      'Soluções digitais inovadoras para empresas angolanas e africanas. Desenvolvimento web, mobile, automação e consultoria tecnológica.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISAOS Soluções Digitais',
    description: 'Tecnologia que Transforma',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body bg-dark-900 text-slate-200 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
