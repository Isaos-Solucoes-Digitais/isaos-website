import type { Metadata } from 'next'
import { Metadata as Meta } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a ISAOS Soluções Digitais — a nossa história, missão, visão e os valores que guiam cada projecto que desenvolvemos.',
}

export default function AboutPage() {
  return <AboutContent />
}
