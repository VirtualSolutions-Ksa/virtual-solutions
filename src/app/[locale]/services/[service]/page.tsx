'use client'
import LableHeading from "@/components/LabelHeading/LableHeading";
import data from '@/data/services.json'
import { motion } from 'framer-motion';
import Image from "next/image";
import { notFound } from "next/navigation";

export default function page({ params }: { params: { locale: string; service: string; } }) {
    
    const { service: url } = params;
    
    const service = data.services.find((service) => service.url === url);

    console.log(service);
    

    if (!service) {
        notFound();
    }
    
    
  return (
      <main>
          <section
              style={{
                  backgroundImage: `url('${service.images.bannerImage}')`,
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
                     {service.title}
                  </h1>
              </motion.div>
          </section>
          <section className="mt-7 md:mt-14 px-4 md:px-7 lg:px-24">
              <Image src={service.images.mainImage} width={1600} height={1100} alt={service.title} className="w-full h-auto max-h-[460px] object-cover object-center" />
              <div className="flex items-center gap-6 mt-5 md:mt-10 mb-2.5 md:mb-5">
                  <Image src={service.icon} alt="icon" width={56} height={56} />
                  <h1 className="text-dark-blue font-rubik text-xl md:text-4xl leading-normal font-semibold">
                      {service.title}
                  </h1>
              </div>
              <p className="font-kurb text-gray text-sm md:text-lg leading-[150%] font-medium">
                  {service.detailedDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5 md:my-14">
                  <div className="">
                      <div className="mb-4">
                          <h2 className="text-dark-blue font-rubik text-lg md:text-3xl font-semibold leading-normal">
                              Benefit of Service
                          </h2>
                      </div>
                      <ul className="space-y-3 md:space-y-4 text-dark-blue">
                          {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                  <span className="text-secondary-main text-base md:text-lg font-kurb">{benefit.icon}</span>
                                  <p className="text-base sm:text-lg md:text-xl font-medium">
                                      {benefit.title}: <span className="font-normal text-gray">{benefit.description}</span>
                                  </p>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="my-auto">
                      <Image src={service.images.benefitSectionImage} width={600} height={320} alt="Benefits Image" className="w-full h-auto max-h-[560px]" />
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5 md:my-14">
                  <div className="my-auto">
                      <Image src={service.images.howItWorksImage} width={600} height={320} alt="Benefits Image" className="w-full h-auto max-h-[560px]" />
                  </div>
                  <div className="">
                      <div className="mb-4">
                          <h2 className="text-dark-blue font-rubik text-lg sm:text-xl md:text-3xl font-semibold leading-normal">
                              How It Works
                          </h2>
                      </div>
                      <ul className="space-y-3">
                          {service.howItWorks.map((step, index) => (
                              <li key={index} className="flex items-start space-x-4">
                                  <span className="text-secondary-main text-base md:text-lg">{step.icon}</span>
                                  <div>
                                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-dark-blue">{step.step}: {step.title}</h3>
                                      <p className="text-base md:text-lg text-gray">{step.description}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </section>
     </main>
  )
}
