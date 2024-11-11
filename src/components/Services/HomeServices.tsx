import LableHeading from '../LabelHeading/LableHeading';
import Image from 'next/image';
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomeServices({ locale }: { locale: string }) {
    
    const services = [
        {
            title: "Sea Transport",
            description: "Secure and cost-effective ocean freight solutions for businesses and individuals.",
            image: '/icons/ship-icon.svg',
            url: '/services/sea-transport'
        },
        {
            title: 'Warehousing',
            description: 'Flexible storage solutions to keep your inventory safe and organized.',
            image: '/icons/ware-house-icon.svg',
            url: '/services/warehousing'
        },
        {
            title: 'Air Freight',
            description: 'Fast and reliable air freight for time-sensitive shipments.',
            image: '/icons/Flight-icon.svg',
            url: '/services/air-freight'
        },
        {
            title: 'Local Freight',
            description: 'Efficient delivery within city or regional limits.',
            image: '/icons/viechile-icon.svg',
            url: '/services/local-freight'
        },
        {
            title: 'Relocation',
            description: 'Smooth relocation services for individuals and businesses.',
            image: '/icons/relocation-icon.svg',
            url: '/services/relocating'
        },
        {
            title: 'Packing',
            description: 'Professional packing to protect your items during transit.',
            image: '/icons/packing-icon.svg',
            url: '/services/packing'
        },
        {
            title: 'DHL Shipping',
            description: 'Fast, secure global shipping with DHL.',
            image: '/icons/dhl-icon.svg',
            url: '/services/dhl-shipping'
        }
    ];

    const arabicServices = [
        {
            title: "النقل البحري",
            description: "حلول الشحن البحري الآمنة وذات التكلفة الفعالة للأعمال التجارية والأفراد.",
            image: '/icons/ship-icon.svg',
            url: '/services/sea-transport'
        },
        {
            title: "التخزين",
            description: "حلول التخزين المرنة للحفاظ على أمان وتنظيم مخزونك.",
            image: '/icons/ware-house-icon.svg',
            url: '/services/warehousing'
        },
        {
            title: "الشحن الجوي",
            description: "خدمات الشحن الجوي السريعة والموثوقة للطرود الحساسة زمنياً.",
            image: '/icons/Flight-icon.svg',
            url: '/services/air-freight'
        },
        {
            title: "الشحن المحلي",
            description: "توصيل فعال ضمن المدينة أو الحدود الإقليمية.",
            image: '/icons/viechile-icon.svg',
            url: '/services/local-freight'
        },
        {
            title: "الانتقال",
            description: "خدمات الانتقال السلسة للأفراد والشركات.",
            image: '/icons/relocation-icon.svg',
            url: '/services/relocating'
        },
        {
            title: "التعبئة",
            description: "تعبئة احترافية لحماية مقتنياتك أثناء النقل.",
            image: '/icons/packing-icon.svg',
            url: '/services/packing'
        },
        {
            title: "شحن DHL",
            description: "شحن عالمي سريع وآمن عبر DHL.",
            image: '/icons/dhl-icon.svg',
            url: '/services/dhl-shipping'
        }
    ];


    const t = useTranslations("homeServices")

    return (
        <section className="py-24 px-4 md:px-7 lg:px-24 bg-white">
            <MotionContainer classNames="grid grid-cols-1 md:grid-cols-3 xl:container gap-10 mx-auto">
                <div>
                    <MotionItem>
                        <LableHeading text={t("heading")} styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            {t("subHeading")}
                        </h2>
                    </MotionItem>
                </div>
                <div className='grid col-span-2 gap-8 grid-cols-1 md:grid-cols-2'>
                    {(locale === 'ar' ? arabicServices : services).map((item, idx) => (
                        <MotionItem key={idx}>
                            <Link href={item.url} className='flex gap-7 items-start hover:bg-white hover:shadow-xl cursor-pointer p-5 hover:rounded-2xl transition-all ease-out duration-200'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={52}
                                    height={52}
                                />
                                <div className='border-l border-[#D8D8D8] pl-4'>
                                    <h3 className='text-dark-blue font-rubik text-2xl/normal leading-normal'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </MotionItem>
                    ))}
                </div>
            </MotionContainer>
        </section>
    );
}
