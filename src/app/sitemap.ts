import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://acme.com',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://acme.com/',
                    ar: 'https://acme.com/ar',
                },
            },
        },
    ]
}