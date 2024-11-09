'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export const OurWork = () => {
    const services = [
        {
            title: 'Warehousing Services',
            description: 'We provide secure, scalable storage solutions for your inventory. Our warehouses are equipped with the latest technologies to ensure efficiency and safety.',
            image: '/icons/ship-icon.svg',
            alt: 'Warehousing Services'
        },
        {
            title: 'Safety & Quality',
            description: 'We prioritize the safety of your shipments and ensure the highest standards of quality control at every stage of the supply chain.',
            image: '/icons/ware-house-icon.svg',
            alt: 'Safety & Quality'
        },
        {
            title: 'Care for Environment',
            description: 'We are committed to sustainable practices, ensuring that all logistics operations are eco-friendly and minimize environmental impact.',
            image: '/icons/Flight-icon.svg',
            alt: 'Care for Environment'
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
