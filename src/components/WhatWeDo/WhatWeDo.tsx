'use client'

import React from 'react'
import RippleButton from '../RippleButton'
import Image from 'next/image'
import LableHeading from '../LabelHeading/LableHeading'
import MotionContainer from '../MotionContainer/MotionContainer'
import MotionItem from '../MotionItem/MotionItem'
import Link from 'next/link'

const WhatWeDo = () => {

    const services = [
        {
            title: 'Sea Transport',
            description: 'Secure and cost-effective ocean freight solutions for businesses and individuals.',
            image: '/icons/ship-icon.svg',
            url: '/services/sea-transport',
            alt: 'Sea Transport'
        },
        {
            title: 'Warehousing',
            description: 'Flexible storage solutions to keep your inventory safe, organized, and easy to access.',
            image: '/icons/ware-house-icon.svg',
            url: '/services/warehousing',
            alt: 'Warehousing Services'
        },
        {
            title: 'Air Freight',
            description: 'Fast and reliable air freight for time-sensitive shipments across the globe.',
            image: '/icons/Flight-icon.svg',
            url: '/services/air-freight',
            alt: 'Air Freight'
        },
        {
            title: 'Local Freight',
            description: 'Efficient local freight solutions for deliveries within city and regional areas.',
            image: '/icons/viechile-icon.svg',
            url: '/services/local-freight',
            alt: 'Local Freight'
        },
        {
            title: 'Relocation',
            description: 'Smooth and hassle-free relocation services for both individuals and businesses.',
            image: '/icons/relocation-icon.svg',
            url: '/services/relocating',
            alt: 'Relocation Services'
        },
        {
            title: 'Packing',
            description: 'Professional packing services to ensure the safety and integrity of your items during transit.',
            image: '/icons/packing-icon.svg',
            url: '/services/packing',
            alt: 'Packing Services'
        },
        {
            title: 'DHL Shipping',
            description: 'Fast, secure, and reliable global shipping services in partnership with DHL.',
            image: '/icons/dhl-icon.svg',
            url: '/services/dhl-shipping',
            alt: 'DHL Shipping'
        }
    ];

    return (
        <>
            <section className="py-14 px-4 md:px-8 flex-col flex justify-center mx-auto">
                <div className="flex flex-col md:items-center md:justify-center px-4 md:px-0">
                    <LableHeading text="What We Do" styles="bg-[rgba(232, 232, 232, 0.50)]" />
                    <p className="text-[#1C1F35] pt-4 md:pl-0 font-rubik text-4xl font-semibold leading-none">
                        Our Logistics Services
                    </p>
                    <p className="mt-4 text-lg max-w-[956px] text-center text-[#6F7B8E] font-medium leading-relaxed">
                        At Virtual Solution Logistics, we offer a wide range of services designed to meet your transportation and supply chain needs. Whether you're shipping internationally, relocating, or need specialized storage solutions, we have the expertise and resources to get the job done efficiently and safely.
                    </p>
                </div>

                {/* Using MotionContainer for the Grid of Services */}
                <MotionContainer classNames='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 mt-16'>
                    {
                        services.map((item, idx) => (
                            // Using MotionItem for Each Service
                            <MotionItem key={idx} classNames='flex gap-7 items-start hover:bg-white hover:shadow-xl cursor-pointer p-5 hover:rounded-2xl transition-all ease-out duration-200'>
                                <Link href={item.url} className="flex flex-col justify-center px-5 md:justify-start">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={52}
                                        height={52}
                                    />
                                    <h3 className='text-dark-blue font-rubik text-2xl/normal leading-normal mt-6'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                                        {item.description}
                                    </p>
                                </Link>
                            </MotionItem>
                        ))
                    }
                </MotionContainer>

                {/* CTA Button to Explore More */}
                <RippleButton
                    component="link"
                    buttonText="Explore All Services"
                    buttonCss="mt-16 mx-auto py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-white hover:before:w-[200px] hover:text-primary hover:before:h-[200px]" />
            </section>
        </>
    )
}

export default WhatWeDo;
