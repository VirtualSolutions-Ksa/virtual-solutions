import "./globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { type Locale, locales } from "@/i18n/i18n.config";
import { Metadata } from "next";
import { krub, rubik } from "@/fonts/font";
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
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical:'https://virtualsolutions.vercel.app/',
      languages: {
        en: 'https://virtualsolutions.vercel.app/en', 
        ar: 'https://virtualsolutions.vercel.app/ar',
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: 'https://virtualsolutions.vercel.app/',
      siteName: t("title"),
      type: 'website',
      images: [
        {
          url: 'images/virtual-solutions-overview.png',
          secureUrl: 'https://virtualsolutions.vercel.app/images/virtual-solutions-overview.png',
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
        url: 'https://virtualsolutions.vercel.app/images/virtual-solutions-overview.png',
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
      className={`${rubik.variable} ${krub.variable}`}
      dir={dir}
    >
      <body
        className="2xl:container mx-auto"
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
