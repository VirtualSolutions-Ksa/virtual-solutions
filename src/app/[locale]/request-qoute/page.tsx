'use client';
import LableHeading from "@/components/LabelHeading/LableHeading";
import RippleButton from "@/components/RippleButton";
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


// Validation schema
const validationSchema = Yup.object().shape({
    service: Yup.string().required("Service is required"),
    vehicle: Yup.string().required("Vehicle is required"),
    product: Yup.string().required("Product is required"),
    volume: Yup.string().required("Volume is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    city: Yup.string().required("City is required"),
    message: Yup.string().required("Message is required"),
    fromLocation: Yup.string().required("From location is required"),
    toLocation: Yup.string().required("To location is required"),
    estimateFrom: Yup.date().required("Estimate from date is required"),
    estimateTo: Yup.date().required("Estimate to date is required"),
});

// Define the structure of the form data
// Define the structure of the form data with Date type for estimateFrom and estimateTo
interface FormData {
    name: string;
    email: string;
    service: string;
    vehicle: string;
    product: string;
    volume: string;
    phone: string;
    city: string;
    message: string;
    fromLocation: string;
    toLocation: string;
    estimateFrom: Date;  // Change to Date
    estimateTo: Date;    // Change to Date
}


// Define the structure of the API response
interface ApiResponse {
    message: string;
}

export default function Page() {
    const t = useTranslations("Header");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await axios.post<ApiResponse>('/api/qoute', data);
            toast.success(response.data.message);
            reset();  // Reset form after successful submission
        } catch (error) {
            toast.error("Failed to send message. Try again later.");
        }
    };

    return (
        <>
            <section
                style={{
                    backgroundImage: "url('/images/contact-us.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="relative w-full py-10 md:py-24 px-4 md:px-7 lg:px-24"
            >
                <div className="absolute top-0 left-0 bg-about-banner w-full h-full inset-0 z-0"></div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 3, duration: 3, type: 'spring' }}
                    aria-hidden
                    className="relative max-w-[570px] text-white font-rubik my-14 mx-4 md:mx-7 lg:mx-10 z-10">
                    <LableHeading text="Get Quote" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-normal" aria-label="Main Heading">
                        Get Quote
                    </h1>
                </motion.div>
            </section>
            <section className="py-14 px-4 md:px-8 flex justify-center items-center">
                <div className="bg-primary py-12 md:py-20 px-4 md:px-16 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 mt-5 text-white'>
                        <h4 className="mt-2 text-lg text-center text-white md:text-[35px]/normal font-bold leading-normal" aria-label="Main Heading">
                            Contact Information
                        </h4>
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
                        <h4 className="mt-2 text-lg text-center text-white md:text-[35px]/normal font-bold leading-normal" aria-label="Main Heading">
                            Select Services
                        </h4>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-3 w-full">
                                <select
                                    {...register("service", { required: "Please select a service" })}
                                    id="service"
                                    className="border border-input-border p-4 bg-primary text-white outline-none ring-0 focus:ring-0 w-full"
                                >
                                    <option value="">Type of Service</option>
                                    <option value="Road - LTL">Road - LTL</option>
                                    <option value="Road - FTL">Road - FTL</option>
                                    <option value="Sea - LCL">Sea - LCL</option>
                                    <option value="Sea - FCL">Sea - FCL</option>
                                    <option value="Air Freight">Air Freight</option>
                                    <option value="Multi Modal">Multi Modal</option>
                                    <option value="Customs Clearance">Customs Clearance</option>
                                    <option value="Breakbulk">Breakbulk</option>
                                    <option value="Heavy Lift">Heavy Lift</option>
                                    <option value="Project Logistics">Project Logistics</option>
                                    <option value="Over Dimensional Cargo">Over Dimensional Cargo</option>
                                    <option value="Specialised Services">Specialised Services</option>
                                    <option value="Last Mile Delivery">Last Mile Delivery</option>
                                    <option value="Warehousing">Warehousing</option>
                                </select>

                                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
                            </div>
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('vehicle')}
                                    placeholder="Vehicle*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.vehicle && <p className="text-red-500 text-sm">{errors.vehicle.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('product')}
                                    placeholder="Product Category/Industry*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.product && <p className="text-red-500 text-sm">{errors.product.message}</p>}
                            </div>
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('volume')}
                                    placeholder="Volume*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.volume && <p className="text-red-500 text-sm">{errors.volume.message}</p>}
                            </div>
                        </div>

                        {/* Location Fields */}
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('fromLocation')}
                                    placeholder="From Location*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.fromLocation && <p className="text-red-500 text-sm">{errors.fromLocation.message}</p>}
                            </div>
                            <div className="space-y-3 w-full">
                                <input
                                    {...register('toLocation')}
                                    placeholder="To Location*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.toLocation && <p className="text-red-500 text-sm">{errors.toLocation.message}</p>}
                            </div>
                        </div>

                        {/* Date Fields */}
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-3 w-full">
                                <input
                                    type="date"
                                    {...register('estimateFrom')}
                                    placeholder="Estimate From*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.estimateFrom && <p className="text-red-500 text-sm">{errors.estimateFrom.message}</p>}
                            </div>
                            <div className="space-y-3 w-full">
                                <input
                                    type="date"
                                    {...register('estimateTo')}
                                    placeholder="Estimate To*"
                                    className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                                />
                                {errors.estimateTo && <p className="text-red-500 text-sm">{errors.estimateTo.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col mt-6">
                            <textarea
                                {...register('message')}
                                placeholder="Message*"
                                className="border border-input-border p-4 bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>

                        <div className="mt-6 text-center">
                            <RippleButton
                                component="button"
                                buttonText="Submit Message"
                                buttonCss="mt-4 py-4 px-10 w-fit bg-banner-button font-kurb text-base font-bold text-dark-blue before:bg-white hover:before:w-[300px] hover:before:h-[300px]"
                            />
                        </div>
                    </form>
                </div>
            </section>
            <Toaster />
        </>
    );
}
