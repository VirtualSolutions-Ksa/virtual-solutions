'use client';
import LableHeading from "@/components/LabelHeading/LableHeading";
import RippleButton from "@/components/RippleButton";
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';


// Validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    city: Yup.string().required("City is required"),
    message: Yup.string().required("Message is required"),
});

// Define the structure of the form data
interface FormData {
    name: string;
    email: string;
    phone: string;
    city: string;
    message: string;
}

// Define the structure of the API response
interface ApiResponse {
    message: string;
}

export default function Page() {
    const t = useTranslations("Header");
    const [submissionMessage, setSubmissionMessage] = useState<string>('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await axios.post<ApiResponse>('/api/contact', data);
            setSubmissionMessage(response.data.message);
            reset();  // Reset form after successful submission
        } catch (error) {
            setSubmissionMessage("Failed to send message. Try again later.");
        }
    };

    return (
        <>
            <section style={{
                backgroundImage: "url('/images/contact-us.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
                className="relative w-full py-10 md:py-24 px-4 md:px-7 lg:px-24">
                <div className="absolute top-0 left-0 bg-about-banner w-full h-full inset-0 z-0"></div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                    aria-hidden
                    className="relative max-w-[570px] text-white font-rubik my-14 mx-4 md:mx-7 lg:mx-10 z-10">
                    <LableHeading text="Contact" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-normal" aria-label="Main Heading">
                        Contact Us
                    </h1>
                </motion.div>
            </section>

            <section className="py-14 px-4 md:px-8 flex justify-center items-center">
                <div className="max-w-[954px] bg-primary py-12 md:py-20 px-4 md:px-16">
                    <form onSubmit={handleSubmit(onSubmit)} className='text-white space-y-5 mt-5'>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('name')}
                                    placeholder="Your name*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('email')}
                                    placeholder="Email*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('phone')}
                                    placeholder="Phone Number*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('city')}
                                    placeholder="City*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                            </div>
                        </div>
                        <div className="space-y-3 w-full">
                            <textarea
                                {...register('message')}
                                placeholder="Your message"
                                rows={6}
                                className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                        <RippleButton
                            component="button"
                            buttonText="Submit Message"
                            buttonCss="mt-4 py-4 px-10 w-fit bg-banner-button font-kurb text-base font-bold text-dark-blue before:bg-white hover:before:w-[300px] hover:before:h-[300px]"
                        />
                    </form>
                    {submissionMessage && <p className="mt-4 text-center text-white">{submissionMessage}</p>}
                </div>
            </section>
        </>
    );
}
