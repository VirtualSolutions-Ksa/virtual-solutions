import HomeBanner from "@/components/Banners/HomeBanner";
import CompanyStats from "@/components/CompanyStats/CompanyStats";
import HomeServices from "@/components/Services/HomeServices";
import SerivesCardSection from "@/components/Services/SerivesCardSection";
import WhyUs from "@/components/whyUs/WhyUs";
import WhyChoose from '@/components/WhyChoose';
import { unstable_setRequestLocale } from "next-intl/server";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm/ContactForm";
import BrandLogos from "@/components/BrandLogos/BrandLogos";

export default function Home({ params: { locale }, }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <HomeBanner />
      <HomeServices locale={locale} />
      <WhyUs />
      <CompanyStats />
      <WhyChoose />
      <SerivesCardSection />
      <BrandLogos />
      <Testimonial />
      <ContactForm />
    </main>
  );
}
