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
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ship-icon.svg',
            url: '/services/sea-transport'
        },
        {
            title: 'Warehousing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ware-house-icon.svg',
            url: '/services/warehousing'
        },
        {
            title: 'Air Fright',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/Flight-icon.svg',
            url: '/services/air-freight'
        },
        {
            title: 'Local Freight',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/viechile-icon.svg',
            url: '/services/local-freight'
        },
        {
            title: 'DHL Courier',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/dhl-icon.svg',
            url: '/services/dhl-courier'
        },
        {
            title: 'Packing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/packing-icon.svg',
            url: '/services/packing'
        }
    ];

    return (
        <section className="py-14 px-4 md:px-8 flex-col flex justify-center mx-auto ">
            <div className="flex flex-col md:items-center md:justify-center px-4 md:px-0">
                <LableHeading text="What We Do" styles="bg-[rgba(232, 232, 232, 0.50)]" />
                <p className="text-[#1C1F35] pt-4 md:pl-0 font-rubik text-4xl font-semibold leading-none">Our Logistics Services</p>
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
                                    alt={item.title}
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

            <RippleButton
                component="link"
                buttonText="More Work"
                buttonCss="mt-16 mx-auto py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-white hover:before:w-[200px] hover:text-primary hover:before:h-[200px]" />
        </section>
    )
}

export default WhatWeDo;
