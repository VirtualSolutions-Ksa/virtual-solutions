'use client'
import Image from 'next/image'
import React from 'react'
import LableHeading from '../LabelHeading/LableHeading'
import { motion } from 'framer-motion'
import RippleButton from '../RippleButton'

export const OurWork = () => {
    const services = [
        {
            title: 'Warehousing Services',
            description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking.',
            image: '/icons/ship-icon.svg'
        },
        {
            title: 'Safety & Quality',
            description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking.',
            image: '/icons/ware-house-icon.svg'
        },
        {
            title: 'Care for Environment',
            description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking.',
            image: '/icons/Flight-icon.svg'
        },
    ]

    return (
        <section className="mb-10 px-4 md:px-7 pb-10 md:pb-0 lg:px-24 relative bg-light-gray mx-auto">
            <div className=" mt-6 grid gap-8 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2  md:p-20 xl:container mx-auto z-10 relative">
                <div className="relative">
                    <motion.div
                        whileInView={{
                            opacity: [0, 1],
                            x: [-50, 0],
                        }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                        aria-hidden
                        className="w-full h-[250px] md:w-[460px] md:h-[300px;]"
                    >
                        <Image
                            src="/images/services-image-1.png"
                            alt="Flight"
                            fill
                            className="object-cover h-auto w-auto max-w-full"
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{
                            opacity: [0, 1],
                            x: [-50, 0],
                        }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                        aria-hidden
                        className="absolute -bottom-[8%] right-0 md:-right-[5%] pl-1 md:pl-4 md:pt-4 bg-white w-fit"
                    >
                        <Image
                            src="/images/services-image-2.png"
                            alt="Flight"
                            width={200}
                            height={100}
                            className="object-cover h-28 md:h-48 w-auto max-w-full"
                        />
                    </motion.div>
                </div>
                <motion.div
                    whileInView={{
                        opacity: [0, 1],
                        x: [50, 0],
                    }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                    aria-hidden
                    className=""
                >
                    {
                        services.map((item, idx) => (
                            <motion.div
                                whileInView={{
                                    opacity: [0, 1],
                                    y: [100, 0]
                                }}
                                viewport={{ once: true }}
                                transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                                aria-hidden key={idx} className="flex flex-col md:flex-row mt-10 md:mt-0 gap-5 w-auto">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={52}
                                    height={52}
                                />
                                <div className='flex flex-col md:block md:mt-6'>
                                    <h3 className='text-dark-blue font-rubik text-2xl/normal leading-normal'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>

            </div >

        </section >
    )
}
