import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.virtualksa.com',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/en',
                    ar: 'https://www.virtualksa.com/ar',
                },
            },
            priority: 1.00,
        },
        {
            url: 'https://www.virtualksa.com/about',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/en/about',
                    ar: 'https://www.virtualksa.com/ar/about',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/en/services',
                    ar: 'https://www.virtualksa.com/ar/services',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/contact',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/en/contact',
                    ar: 'https://www.virtualksa.com/ar/contact',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services/sea-transport',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/services/en/sea-transport',
                    ar: 'https://www.virtualksa.com/services/ar/sea-transport',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services/warehousing',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/services/en/warehousing',
                    ar: 'https://www.virtualksa.com/services/ar/warehousing',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services/local-freight',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/services/en/local-freight',
                    ar: 'https://www.virtualksa.com/services/ar/local-freight',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services/relocating',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/services/en/relocating',
                    ar: 'https://www.virtualksa.com/services/ar/relocating',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services/packing',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/services/en/packing',
                    ar: 'https://www.virtualksa.com/services/ar/packing',
                },
            },
            priority: 0.80,
        },
        {
            url: 'https://www.virtualksa.com/services/dhl-shipping',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://www.virtualksa.com/services/en/dhl-shipping',
                    ar: 'https://www.virtualksa.com/services/ar/dhl-shipping',
                },
            },
            priority: 0.80,
        },
    ]
}