'use client';
import AnimatedNumber from '@/components/AnimatedNumber/AnimatedNumber';
import CompanyStats from '@/components/CompanyStats/CompanyStats';
import LableHeading from '@/components/LabelHeading/LableHeading';
import RippleButton from '@/components/RippleButton';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function page() {
    const services = [
        {
            title: 'Sea Transport',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ship-icon.svg'
        },
        {
            title: 'Warehousing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/ware-house-icon.svg'
        },
        {
            title: 'Air Fright',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/Flight-icon.svg'
        },
        {
            title: 'Local Freight',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/viechile-icon.svg'
        },
        {
            title: 'DHL Courier',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/dhl-icon.svg'
        },
        {
            title: 'Packing',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/packing-icon.svg'
        },
        {
            title: 'Relocation',
            description: 'Following the quality of our service thus having gained trust of our many clients.',
            image: '/icons/relocation-icon.svg'
        },
    ]
    return (
        <>
            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: "url('/images/about-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                }}
                className="relative py-10 md:py-24 px-4 md:px-7 lg:px-24"
            >
                <div className="absolute top-0 left-0 bg-about-banner w-full h-full inset-0 z-0"></div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                    aria-hidden
                    className="relative max-w-[570px] text-white font-rubik my-14 mx-4 md:mx-7 lg:mx-10 z-10">
                    <LableHeading text="About Us" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-normal" aria-label="Main Heading">
                        About Our Logistics
                    </h1>
                </motion.div>
            </section>

            {/* Company Overview */}
            <section className="mb-10 px-4 md:px-7 lg:px-24 relative">
                <div className="bg-white mt-6 grid gap-8 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2  md:p-20 xl:container mx-auto z-10 relative">
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [50, 0] }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                        aria-hidden
                    >
                        <LableHeading text="About Us" styles="text-dark-blue font-rubik bg-[rgba(232,232,232,0.50)]" />
                        <h2 className="mt-4 font-rubik text-4xl font-semibold leading-none">
                            Our Company Overview
                        </h2>
                        <p className="mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <RippleButton
                            component="link"
                            buttonText="Contact Us"
                            buttonCss="mt-7 py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-secondary hover:before:w-[200px] hover:text-primary hover:before:h-[200px]"
                        />
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                            aria-hidden
                        >
                            <Image
                                src="/images/about-img-one.png"
                                alt="Flight"
                                width={461}
                                height={415}
                                className="object-cover h-auto w-auto max-w-full"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                            aria-hidden
                            className="absolute -bottom-[12%] right-0 md:-left-[15%] p-1 md:p-4 bg-white w-fit"
                        >
                            <Image
                                src="/images/about-img-two.png"
                                alt="Flight"
                                width={200}
                                height={100}
                                className="object-cover h-28 md:h-36 w-auto max-w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section with Animations */}
            <div className="xl:container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12">Our Mission & Vision</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                    {/* Mission Section */}
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: 'spring' }}
                        aria-hidden
                        className="md:order-1"
                    >
                        <Image
                            src="/images/Mission.png"
                            alt="Mission Image"
                            width={500}
                            height={350}
                            className="object-cover object-center max-h-[200px] w-auto max-w-full h-auto mx-auto"
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [50, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: 'spring' }}
                        aria-hidden
                        className="md:order-2 text-center md:text-left"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            To deliver high-quality solutions that create value and reliable competitive advantage for our clients around the world. We focus on leveraging cutting-edge technologies and fostering innovation to provide impactful results.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Vision Section */}
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [50, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: 'spring' }}
                        aria-hidden
                        className="md:order-2"
                    >
                        <Image
                            src="/images/Vision.png"
                            alt="Vision Image"
                            width={500}
                            height={350}
                            className="object-cover object-center max-h-[240px] w-auto max-w-full h-auto mx-auto"
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: 'spring' }}
                        aria-hidden
                        className="md:order-1 text-center md:text-left"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            To be a global leader in providing innovative solutions and services that empower companies to achieve their goals. We strive to make a lasting impact by fostering a culture of growth, integrity, and sustainability.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Logistics Services Section */}
            <section className="py-16 px-4 md:px-7 lg:px-24 bg-white flex flex-col items-center">
                <div className='pb-16'>
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                        aria-hidden
                        className="text-dark-blue font-rubik"
                    >
                        <LableHeading text="What We Do" styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            Our Logistics Services
                        </h2>
                    </motion.div>
                </div>

                <div className='grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: [0, 1], y: [50, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: 'spring' }}
                            aria-hidden
                            className='flex flex-col justify-between items-center gap-3 bg-[#F4F4F4] p-6 w-full rounded-xl'
                        >
                            <Image src={service.image} width={50} height={50} alt={service.title} />
                            <p className='text-xl font-semibold text-dark-blue'>{service.title}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <CompanyStats />
        </>

    );
}
