import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string; 
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Constrói um objeto Metadata completo
 */
export function buildMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage}`

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
      languages: {
        'pt-AO': `${siteConfig.url}${path}`,
        'en':    `${siteConfig.url}/en${path}`,
        'es':    `${siteConfig.url}/es${path}`,
        'fr':    `${siteConfig.url}/fr${path}`,
        'ja':    `${siteConfig.url}/ja${path}`,
        'zh':    `${siteConfig.url}/zh${path}`,
        'x-default': `${siteConfig.url}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  }
}
