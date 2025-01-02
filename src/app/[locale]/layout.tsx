import "./globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { type Locale, locales } from "@/i18n/i18n.config";
import { Metadata } from "next";
import { krub, noto, rubik } from "@/fonts/font";
import Header from "@/components/Header/Header";
import useTextDirection from "@/hooks/useTextDirection";
import NextIntlClientWrapper from "@/components/NextIntlClientWrapper/NextIntlClientWrapper";
import Footer from "@/components/Footer";
import Script from "next/script";


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {


  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    metadataBase: new URL('https://www.virtualksa.com/'),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical:'/',
      languages: {
        en: '/en', 
        ar: '/ar',
      },
    },
    keywords: [t('logistics'), t('transportation'), t('supply chain'), t('freight services'), t('global shipping'), t('warehousing'), t('Virtual Solutions')],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: 'https://www.virtualksa.com/',
      siteName: t("title"),
      type: 'website',
      images: [
        {
          url: '/images/logo.png',
          secureUrl: 'https://www.virtualksa.com/images/logo.png',
          width: 1200,
          height: 630,
          alt: 'Preview image for Virtual Solutions',
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@virtualsolutions',
      title: t("title"),
      description: t("description"),
      creator: '@virtualsolutions',
      images: {
        url: 'https://www.virtualksa.com/images/logo.png',
        alt: 'Virtual Solutions',
      }
    },
  };
}



export default  function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {

  unstable_setRequestLocale(locale);
  const dir = useTextDirection();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Solutions",
    "url": "https://www.virtualksa.com",
    "logo": "https://www.virtualksa.com/images/logo.png",
    "sameAs": [
      "https://www.instagram.com/virtual_solutions_est",
      "https://www.linkedin.com/company/virtual-solutions-est/",
    ],
    "description":
      locale === "ar"
        ? "الحلول الافتراضية لخدمات النقل والخدمات اللوجستية."
        : "Virtual Solutions for logistics and transportation services.",
  };

  return (
    <html
      lang={locale}
      className={`${locale === 'ar' ? 'font-noto' : 'font-rubik'} ${locale == 'ar' ? `${noto.variable}` : `${rubik.variable} ${krub.variable}`}`}
      dir={dir}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="X2HYYfaiAnfHNZa7z9UQKB5BhjfngxGH3SayyvYDFoY" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-DFGPXB8C6L`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFGPXB8C6L');
          `}
        </Script>
      </head>
      <body
        className={`2xl:container mx-auto ${locale == 'ar' ? 'font-noto': 'font-kurb'}`}
      >
        <NextIntlClientWrapper>
          <Header />
          {children}
          <Footer />
        </NextIntlClientWrapper>
      </body>
    </html>
  );
}
