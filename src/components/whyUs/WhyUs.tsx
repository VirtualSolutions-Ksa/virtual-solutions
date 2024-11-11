'use client';
import Image from "next/image";
import LableHeading from "../LabelHeading/LableHeading";
import MotionContainer from "../MotionContainer/MotionContainer";
import MotionItem from "../MotionItem/MotionItem";
import { useTranslations } from "next-intl";

export default function WhyUs() {
    const t = useTranslations("whyUs")
    return (
        <section className="half-image-half-color pt-28 px-4 md:px-7 lg:px-24 relative">
            {/* Background Gradient */}
            <div className="w-full h-1/2 absolute top-0 left-0 half-bg-gradient"></div>

            {/* Content Container */}
            <div className="bg-white mt-6 grid gap-8 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2 p-5 md:p-20 xl:container mx-auto z-10 relative">

                {/* Text Section */}
                <MotionContainer classNames="">
                    <MotionItem>
                        <LableHeading text={t("heading")} styles='text-dark-blue font-rubik bg-[rgba(232,232,232,0.50)]' />
                    </MotionItem>
                    <MotionItem>
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            {t("subHeading")}
                        </h2>
                    </MotionItem>
                    <MotionItem>
                        <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                            {t("description")}
                        </p>
                    </MotionItem>
                    <MotionItem>
                        <div className="flex gap-4 items-center mt-6">
                            <div>
                                <Image
                                    src={'/icons/packing-rounded.svg'}
                                    alt="Packing Rounded"
                                    height={58}
                                    width={58}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-dark-blue font-rubik text-lg font-normal leading-normal">
                                {t("features.onTimeDelivery")}
                            </h3>
                        </div>
                    </MotionItem>
                    <MotionItem>
                        <div className="flex gap-4 items-center mt-6">
                            <div>
                                <Image
                                    src={'/icons/cost-icon.svg'}
                                    alt="Cost Optimization"
                                    height={58}
                                    width={58}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-dark-blue font-rubik text-lg font-normal leading-normal">
                                {t("features.optimizedShipping")}
                            </h3>
                        </div>
                    </MotionItem>
                </MotionContainer>

                {/* Image Section */}
                <div className="relative">
                    <MotionContainer>
                        <MotionItem>
                            <Image
                                src={'/images/why-us-image-1.png'}
                                alt="Reliable Cargo Transportation"
                                width={461}
                                height={415}
                                className="object-cover"
                            />
                        </MotionItem>
                        <MotionItem classNames="absolute -bottom-[12%] -left-10 md:-left-[25%] p-4 bg-white">
                            <Image
                                src={'/images/why-us-image-2.png'}
                                alt="Logistics Operations"
                                width={200}
                                height={100}
                                className="object-cover"
                            />
                        </MotionItem>
                    </MotionContainer>
                </div>
            </div>
        </section>
    );
}
