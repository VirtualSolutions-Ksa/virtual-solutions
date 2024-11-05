import { Link } from "@/i18n/i18n.config";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
    const t = useTranslations("Header");

    const socialMedias = [
        { url: "/icons/instagram.png", link: 'https://www.instagram.com' },
        { url: "/icons/facebook.png", link: 'https://www.instagram.com' },
        { url: "/icons/whatsapp.png", link: 'https://wa.me/123456789' },
    ];

    const footerData = [
        {
            title: "Services",
            items: [
                { text: 'Sea Transport', url: '/products/laptops' },
                { text: 'Air Freight', url: '/products/smartphones' },
                { text: 'Local Freight', url: '/products/cameras' },
                { text: 'Packing', url: '/products/accessories' },
            ]
        },
        {
            title: "Useful Links",
            items: [
                { text: 'Home', url: '/' },
                { text: 'About', url: '/about' },
                { text: 'Services', url: '/services' },
                { text: 'Contact Us', url: '/contact' },
            ]
        }
    ];


  return (
      <section className="bg-primary">
          <Image alt="Footer Background" width={1200} height={700} src={'/images/bg-footer.png'} className="w-full object-cover object-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-14 px-4 md:px-7 lg:px-24 py-10">
              <div className="flex flex-col justify-center items-start gap-8">
                  <div className="flex flex-col justify-center items-start gap-6 self-stretch">
                      <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                          <div className="h-10 w-10 md:h-14 md:w-14 ">
                              <Link href='/'>
                                  <Image src="/images/logo.png" alt="Virtual Solutions Logo" width={80} height={80} />
                              </Link>
                          </div>
                          <Link href='/' className="font-rubik text-base text-nowrap md:text-xl lg:text-2xl leading-none font-semibold uppercase text-white">
                              <h1 aria-label="website-name">{t('appTitle')}</h1>
                              <h2 aria-label="sub-name" className="text-sm md:text-base leading-none">{t('appSubTitle')}</h2>
                          </Link>
                      </div>
                      <p className="text-base text-white font-poppins">
                          Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.
                      </p>
                  </div>
                  <div className="w-full h-[1px] bg-[#FFFFFF]"></div>
                  <div className="flex gap-4">
                      {
                          socialMedias.map((soc, idx) => (
                              <div key={idx} className="p-2 rounded-lg border border-[#E2E8F0]">
                                  <img src={soc.url} alt="" className="h-5 w-5 object-contain object-center" />
                              </div>
                          ))
                      }
                  </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2 md:grid-cols-3 col-span-2 text-nowrap">
                  {
                      footerData.map((foot, idx) => (
                          <div key={idx}>
                              <div className="flex gap-2 items-center mb-4">
    
                                  <p className="text-white font-poppins text-base font-semibold leading-[18px] capitalize">
                                      {foot.title}
                                  </p>
                              </div>
                              {
                                  foot.items.map((item, idx) => (
                                      <div key={idx} className="flex gap-2 items-center text-white font-poppins font-semibold text-xl mb-3">
                                          &gt;
                                          <Link href={`${item.url}#category${idx + 1}`} className="text-sm font-normal capitalize line-clamp-1">
                                              {item.text}
                                          </Link>
                                      </div>
                                  ))
                              }
                          </div>
                      ))
                  }
                  <div>
                      <div className="flex gap-2 items-center mb-4">
                          <p className="text-white font-poppins text-base font-semibold leading-[18px] capitalize">
                              Contact Us
                          </p>
                      </div>
                      <div className="">
                          <div className="mb-5">
                              <div className="flex gap-2 items-center mb-1">
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                  <p className="text-white font-poppins text-sm font-medium leading-[20px] capitalize">Riyadh</p>
                              </div>
                              <div className="flex gap-4">
                                  <div className="w-[0.2px] bg-[#F5F5F5] ml-[2px]"></div>
                                  <p className="text-white text-sm font-normal leading-[20px] capitalize text-balance">
                                      Istanbul - Suali - Riyadh 11521
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
