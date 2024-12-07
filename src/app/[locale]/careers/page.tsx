'use client';
import LableHeading from '@/components/LabelHeading/LableHeading';
import RippleButton from '@/components/RippleButton';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Job {
    _id: string;
    title: string;
    location: string;
}

export default function CareersPage() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/api/jobs');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    return (
        <main>
            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: `url('/images/careers-banner.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative w-full py-10 md:py-24 px-4 md:px-7 lg:px-24"
            >
                <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full inset-0 z-0"></div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="relative max-w-[570px] text-white font-rubik my-14 mx-4 md:mx-7 lg:mx-10 z-10"
                >
                    <LableHeading text="Careers" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-normal">
                        Careers at Virtual Solutions
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-300">
                        At Virtual Solutions, we believe in fostering talent, driving innovation, and creating an environment where individuals can thrive. Join us to be a part of a team dedicated to redefining logistics.
                    </p>
                    <RippleButton
                        component="button"
                        buttonText="Explore Opportunities"
                        buttonCss="mt-7 py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-secondary hover:before:w-[200px] hover:text-primary hover:before:h-[200px]"
                        handleClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
                    />
                </motion.div>
            </section>

            {/* One Team Section */}
            <section className="py-16 px-4 md:px-7 lg:px-24 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className="h-80 md:h-[400px] bg-cover bg-center rounded-lg shadow-lg"
                        style={{
                            backgroundImage: `url('/images/careers-banner.jpg')`,
                        }}
                    ></motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                    >
                        <h2 className="text-3xl font-kurb md:text-4xl font-bold text-dark-blue">
                            Our Team, Our Strength
                        </h2>
                        <p className="mt-4 font-rubik text-base text-gray-600">
                            At Virtual Solutions, we thrive on collaboration and innovation. Our dynamic team is the backbone of our success, working together to achieve extraordinary results. With a shared vision and values, we’re committed to making a meaningful impact every day.
                        </p>
                        <ul className="mt-6 space-y-4">
                            {[
                                {
                                    title: 'VISIONARY THINKING',
                                    description: 'Embracing creativity and innovation to lead the future.',
                                },
                                {
                                    title: 'PROBLEM SOLVERS',
                                    description: 'Taking ownership to address challenges head-on.',
                                },
                                {
                                    title: 'CLIENT OBSESSION',
                                    description: 'Prioritizing the needs of our clients in every decision.',
                                },
                                {
                                    title: 'ETHICS FIRST',
                                    description: 'Acting with transparency and honesty in all we do.',
                                },
                                {
                                    title: 'DIVERSITY MATTERS',
                                    description: 'Building an inclusive environment where everyone belongs.',
                                },
                            ].map((value, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary font-bold mr-2">•</span>
                                    <div>
                                        <p className="font-semibold text-gray-800 font-kurb">{value.title}</p>
                                        <p className="text-sm text-gray-600 font-rubik">{value.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Explore Opportunities Section */}
            <section id="opportunities" className="py-16 px-4 md:px-7 lg:px-24 bg-white">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Explore Opportunities</h2>
                    <p className="mt-2 text-base text-gray-600">
                        Find the role that suits you best and take your career to the next level.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {jobs && jobs.length > 0 ? (
                        jobs.map((job) => (
                            <motion.div
                                key={job._id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                                <p className="text-sm text-gray-500 mt-2">{job.location}</p>
                                <a
                                    href={`/careers/${job._id}`}
                                    className="block mt-4 text-secondary underline font-medium hover:text-primary"
                                >
                                    Learn More
                                </a>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center col-span-full">
                            <h3 className="text-2xl font-semibold text-gray-700">No Opportunities Available</h3>
                            <p className="text-gray-600 mt-2">
                                Currently, there are no job openings. Please check back later or feel free to contact us for future opportunities.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-dark-primary"
                            >
                                Contact Us
                            </a>
                        </div>
                    )}
                </div>
            </section>

        </main>
    );
}
