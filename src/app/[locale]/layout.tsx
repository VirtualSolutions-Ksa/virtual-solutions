import "./globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { type Locale, locales } from "@/i18n/i18n.config";
import { Metadata } from "next";
import { krub, noto, rubik } from "@/fonts/font";
import Header from "@/components/Header/Header";
import useTextDirection from "@/hooks/useTextDirection";
import NextIntlClientWrapper from "@/components/NextIntlClientWrapper/NextIntlClientWrapper";
import Footer from "@/components/Footer";


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
      canonical:'https://www.virtualksa.com/',
      languages: {
        en: 'https://www.virtualksa.com/en', 
        ar: 'https://www.virtualksa.com/ar',
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


  return (
    <html
      lang={locale}
      className={`${locale === 'ar' ? 'font-noto' : 'font-rubik'} ${locale == 'ar' ? `${noto.variable}` : `${rubik.variable} ${krub.variable}`}`}
      dir={dir}
    >
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
