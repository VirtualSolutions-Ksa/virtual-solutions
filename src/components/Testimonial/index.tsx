'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LableHeading from '../LabelHeading/LableHeading';
import Image from 'next/image';
import { useScreenSize } from '@/utils/useScreenSize';
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';

export default function Testimonial() {
    const screenSize = useScreenSize();

    return (
        <section className="py-10 md:py-24 px-4 md:px-7 lg:px-24">
            <MotionContainer classNames="relative">
                <MotionItem>
                    <div className='text-dark-blue font-rubik mb-8'>
                        <LableHeading text='Testimonial' styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            What Our Customers Say
                        </h2>
                    </div>
                </MotionItem>

                <MotionItem>
                    <Swiper
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                        slidesPerView={screenSize === "sm" ? 1 : 2}
                        modules={[Navigation]}
                        autoHeight={true}
                        className='relative'
                    >
                        {Array.from({ length: 4 }, (_, idx) => (
                            <SwiperSlide key={idx}>
                                <MotionItem>
                                    <div className={`${idx % 2 === 0 ? 'bg-light-gray' : 'bg-primary'} p-10`}>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex gap-4 items-center'>
                                                <Image height={56} width={56} className='h-14 w-14 object-center rounded-full' src={'/images/avatar.png'} alt='avatar' />
                                                <div>
                                                    <h3 className={`${idx % 2 === 0 ? 'text-primary' : 'text-light-gray'} font-rubik text-lg/normal font-medium`}>
                                                        Kathleen Smith
                                                    </h3>
                                                    <p className={`${idx % 2 === 0 ? 'text-primary' : 'text-light-gray'} font-rubik text-base/[24px]`}>
                                                        Fuel Company
                                                    </p>
                                                </div>
                                            </div>
                                            <Image src={'/icons/qoute.svg'} height={32} width={32} alt='Quote Icon' className='h-8 w-8 object-contain object-center' />
                                        </div>
                                        <p className={`${idx % 2 === 0 ? 'text-dark-blue' : 'text-white'} font-kurb text-base/6 italic font-medium mt-6`}>
                                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                        </p>
                                        <div className='mt-8'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="34" viewBox="0 0 180 34" fill="none">
                                                <path d="M16.0489 2.92705C16.3483 2.00574 17.6517 2.00574 17.9511 2.92705L20.5922 11.0557C20.7261 11.4678 21.1101 11.7467 21.5433 11.7467L30.0903 11.7467C31.059 11.7467 31.4618 12.9863 30.6781 13.5557L23.7634 18.5795C23.4129 18.8342 23.2663 19.2855 23.4001 19.6976L26.0413 27.8262C26.3406 28.7475 25.2862 29.5137 24.5025 28.9443L17.5878 23.9205C17.2373 23.6658 16.7627 23.6658 16.4122 23.9205L9.49755 28.9443C8.71383 29.5137 7.65936 28.7475 7.95871 27.8262L10.5999 19.6976C10.7337 19.2855 10.5871 18.8342 10.2366 18.5795L3.32194 13.5557C2.53822 12.9863 2.941 11.7467 3.90972 11.7467L12.4567 11.7467C12.8899 11.7467 13.2739 11.4678 13.4078 11.0557L16.0489 2.92705Z" fill="#FBA54B" />
                                                <path d="M53.0489 2.92705C53.3483 2.00574 54.6517 2.00574 54.9511 2.92705L57.5922 11.0557C57.7261 11.4678 58.1101 11.7467 58.5433 11.7467L67.0903 11.7467C68.059 11.7467 68.4618 12.9863 67.6781 13.5557L60.7634 18.5795C60.4129 18.8342 60.2663 19.2855 60.4001 19.6976L63.0413 27.8262C63.3406 28.7475 62.2862 29.5137 61.5025 28.9443L54.5878 23.9205C54.2373 23.6658 53.7627 23.6658 53.4122 23.9205L46.4975 28.9443C45.7138 29.5137 44.6594 28.7475 44.9587 27.8262L47.5999 19.6976C47.7337 19.2855 47.5871 18.8342 47.2366 18.5795L40.3219 13.5557C39.5382 12.9863 39.941 11.7467 40.9097 11.7467L49.4567 11.7467C49.8899 11.7467 50.2739 11.4678 50.4078 11.0557L53.0489 2.92705Z" fill="#FBA54B" />
                                                <path d="M89.0489 2.92705C89.3483 2.00574 90.6517 2.00574 90.9511 2.92705L93.5922 11.0557C93.7261 11.4678 94.1101 11.7467 94.5433 11.7467L103.09 11.7467C104.059 11.7467 104.462 12.9863 103.678 13.5557L96.7634 18.5795C96.4129 18.8342 96.2663 19.2855 96.4001 19.6976L99.0413 27.8262C99.3406 28.7475 98.2862 29.5137 97.5025 28.9443L90.5878 23.9205C90.2373 23.6658 89.7627 23.6658 89.4122 23.9205L82.4975 28.9443C81.7138 29.5137 80.6594 28.7475 80.9587 27.8262L83.5999 19.6976C83.7337 19.2855 83.5871 18.8342 83.2366 18.5795L76.3219 13.5557C75.5382 12.9863 75.941 11.7467 76.9097 11.7467L85.4567 11.7467C85.8899 11.7467 86.2739 11.4678 86.4078 11.0557L89.0489 2.92705Z" fill="#FBA54B" />
                                                <path d="M125.049 2.92705C125.348 2.00574 126.652 2.00574 126.951 2.92705L129.592 11.0557C129.726 11.4678 130.11 11.7467 130.543 11.7467L139.09 11.7467C140.059 11.7467 140.462 12.9863 139.678 13.5557L132.763 18.5795C132.413 18.8342 132.266 19.2855 132.4 19.6976L135.041 27.8262C135.341 28.7475 134.286 29.5137 133.502 28.9443L126.588 23.9205C126.237 23.6658 125.763 23.6658 125.412 23.9205L118.498 28.9443C117.714 29.5137 116.659 28.7475 116.959 27.8262L119.6 19.6976C119.734 19.2855 119.587 18.8342 119.237 18.5795L112.322 13.5557C111.538 12.9863 111.941 11.7467 112.91 11.7467L121.457 11.7467C121.89 11.7467 122.274 11.4678 122.408 11.0557L125.049 2.92705Z" fill="#FBA54B" />
                                                <path d="M162.049 2.92705C162.348 2.00574 163.652 2.00574 163.951 2.92705L166.592 11.0557C166.726 11.4678 167.11 11.7467 167.543 11.7467L176.09 11.7467C177.059 11.7467 177.462 12.9863 176.678 13.5557L169.763 18.5795C169.413 18.8342 169.266 19.2855 169.4 19.6976L172.041 27.8262C172.341 28.7475 171.286 29.5137 170.502 28.9443L163.588 23.9205C163.237 23.6658 162.763 23.6658 162.412 23.9205L155.498 28.9443C154.714 29.5137 153.659 28.7475 153.959 27.8262L156.6 19.6976C156.734 19.2855 156.587 18.8342 156.237 18.5795L149.322 13.5557C148.538 12.9863 148.941 11.7467 149.91 11.7467L158.457 11.7467C158.89 11.7467 159.274 11.4678 159.408 11.0557L162.049 2.92705Z" fill="#FBA54B" />
                                            </svg>
                                        </div>
                                    </div>
                                </MotionItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MotionItem>
                <div className=''>
                    <div className="swiper-button image-swiper-button-next -bottom-16 md:top-7 md:right-0">
                        <img src={'/icons/arrow-right.svg'} alt="arrow right" />
                    </div>
                </div>
                <div className=''>
                    <div className="swiper-button image-swiper-button-prev -bottom-16 md:top-7 md:right-16">
                        <img src={'/icons/arrow-left.svg'} alt="arrow right" />
                    </div>
                </div> 
            </MotionContainer>
        </section>
    );
}
