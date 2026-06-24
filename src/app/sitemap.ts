import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

/**
 * Next.js App Router gera automaticamente /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '',           priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about',     priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services',  priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact',   priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    // Hints others languages (hreflang) for URL
    alternates: {
      languages: {
        en: `${siteConfig.url}/en${path}`,
        es: `${siteConfig.url}/es${path}`,
        fr: `${siteConfig.url}/fr${path}`,
        ja: `${siteConfig.url}/ja${path}`,
        zh: `${siteConfig.url}/zh${path}`,
      },
    },
  }))
}
