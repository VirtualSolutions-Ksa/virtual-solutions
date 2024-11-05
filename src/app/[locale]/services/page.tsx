'use client';
import CompanyStats from "@/components/CompanyStats/CompanyStats";
import LableHeading from "@/components/LabelHeading/LableHeading";
import { OurWork } from "@/components/OurWork/OurWork";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import { motion } from 'framer-motion';

export default function Services({ params: { locale }, }: Readonly<{ params: { locale: string } }>) {

  return (
    <main>
      <section
        style={{
          backgroundImage: "url('/images/services-bg-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full py-10 md:py-24 px-4 md:px-7 lg:px-24"
      >
        <div className="absolute top-0 left-0 bg-about-banner w-full h-full inset-0 z-0"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
          aria-hidden
          className="relative max-w-[570px] text-white font-rubik my-14 mx-4 md:mx-7 lg:mx-10 z-10">
          <LableHeading text="Services" styles="text-white bg-[rgba(26,45,64,0.50)]" />
          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-normal" aria-label="Main Heading">
            Our Logistics Services
          </h1>
        </motion.div>
      </section>
      <WhatWeDo />
      <OurWork />
      <Testimonial />
      <CompanyStats />
    </main>
  );
} 
