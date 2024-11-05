'use client';
import RippleButton from "../RippleButton";
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesCardSection() {
    const services = [
        {
            heading: 'Sea Transport',
            subheading: 'Ocean Freight',
            image: '/images/sea-transport.png',
            url: '/services/sea-transport'
        },
        {
            heading: 'Air Freight',
            subheading: 'Fast Shipping',
            image: '/images/air-fright.png',
            url: '/services/air-freight'
        },
        {
            heading: 'Local Freight',
            subheading: 'Regional Delivery',
            image: '/images/road-transportation.png',
            url: '/services/local-freight'
        },
        {
            heading: 'Packing',
            subheading: 'Secure Packing',
            image: '/images/packaging.png',
            url: '/services/packing'
        },
    ];

    return (
        <section className="py-24 px-4 md:px-7 lg:px-24 bg-gradient-to-b from-white via-white to-yellow-500">
            <MotionContainer classNames="space-y-9">
                <MotionItem>
                    <h3 className="text-dark-blue font-rubik text-[35px]/normal font-semibold text-center">
                        Transporting Across The World
                    </h3>
                </MotionItem>
                <div className="pb-5">
                    <MotionContainer classNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {services.map((service, idx) => (
                            <MotionItem key={idx}>
                                <Link href={service.url} className="flex flex-col justify-end h-[410px] relative group overflow-hidden">
                                    <div
                                        className="w-full h-full bg-home-service-card"
                                        style={{
                                            backgroundImage: `url(${service.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        <div className="absolute bottom-5 left-6 space-y-1 transition-transform duration-300 transform group-hover:translate-y-0">
                                            <h4 className="text-white font-rubik text-xl/normal font-medium">
                                                {service.heading}
                                            </h4>
                                            <p className="text-secondary font-kurb text-base/[24px] font-medium">
                                                {service.subheading}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </MotionItem>
                        ))}
                    </MotionContainer>
                    <div className="flex justify-center mt-16">
                        <RippleButton
                            component="link"
                            buttonText="More Work"
                            buttonCss="py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-white hover:before:w-[200px] hover:text-primary hover:before:h-[200px]"
                        />
                    </div>
                </div>
            </MotionContainer>
        </section>
    );
}
