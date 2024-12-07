'use client'
import { motion } from 'framer-motion';
import LableHeading from '../LabelHeading/LableHeading';
import Image from 'next/image';
import { Link } from '@/i18n/i18n.config';
import { useTranslations } from 'next-intl';
import RippleButton from '../RippleButton';
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

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


export default function ContactForm() {
    const t = useTranslations("Header");
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await axios.post<ApiResponse>('/api/contact', data);
            toast(response.data.message);
            reset();  // Reset form after successful submission
        } catch (error) {
            toast("Failed to send message. Try again later.");
        }
    };

  return (
      <section className="py-10 mt-10 md:mt-0 md:py-24 px-4 md:px-7 lg:px-24 bg-primary">
          <motion.div
              whileInView={{
                  opacity: [0, 1],
                  y: [100, 0]
              }}
              viewport={{ once: true }}
              transition={{ duration: 3, type: 'spring' }}
              aria-hidden className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              <div className='col-span-1'>
                  <LableHeading text="Contact" styles="text-white bg-[rgba(26,45,64,0.50)]" />
                  <h4 className="mt-2 text-xl text-white md:text-[35px]/normal font-bold leading-normal" aria-label="Main Heading">
                      Get in touch with us
                  </h4>
                  <p className="text-white font-kurb text-base/[151%] font-normal">
                      We are here to assist you! Reach out to us for inquiries or support. Our team is available to provide you with the best logistics solutions. Whether you prefer email or phone, we are happy to connect and discuss your needs.
                  </p>
                  <div className='space-y-4 mt-4'>
                      <div className="flex gap-3 items-center">
                          <div className="h-12 w-12">
                              <Image src="/icons/email.svg" alt="email icon" width={56} height={56} />
                          </div>
                          <div className="text-white text-nowrap font-kurb text-sm font-medium leading-[136%]">
                              <p>Email</p>
                              <Link href="mailto:info@yourwebsite.com">
                                  Ops-cs@virtualksa.com
                              </Link>
                          </div>
                      </div>
                      <div className="flex gap-3 text-nowrap items-center">
                          <div className="h-12 w-12">
                              <Image src="/icons/phone.svg" alt="email icon" width={56} height={56} />
                          </div>
                          <div className="text-white font-kurb text-sm font-medium leading-[136%]">
                              <p>Call Us</p>
                              <Link href="tel:+051842353">
                                  051842353
                              </Link>
                          </div>
                      </div>
                      <div className="flex gap-3 items-center">
                          <div className="h-12 w-12">
                              <Image src="/icons/time.svg" alt="time icon" width={56} height={56} />
                          </div>
                          <div className="text-white text-nowrap font-kurb text-sm font-medium leading-[136%]">
                              <p>{t('openTime')}</p>
                              <p>{t('closedDay')}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='col-span-2 text-white space-y-5'>
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
          </motion.div>
          <Toaster />
      </section>
  )
}
