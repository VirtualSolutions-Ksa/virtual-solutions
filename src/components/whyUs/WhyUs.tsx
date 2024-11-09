'use client';
import Image from "next/image";
import LableHeading from "../LabelHeading/LableHeading";
import MotionContainer from "../MotionContainer/MotionContainer";
import MotionItem from "../MotionItem/MotionItem";

export default function WhyUs() {
    return (
        <section className="half-image-half-color pt-28 px-4 md:px-7 lg:px-24 relative">
            {/* Background Gradient */}
            <div className="w-full h-1/2 absolute top-0 left-0 half-bg-gradient"></div>

            {/* Content Container */}
            <div className="bg-white mt-6 grid gap-8 md:gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2 p-5 md:p-20 xl:container mx-auto z-10 relative">

                {/* Text Section */}
                <MotionContainer classNames="">
                    <MotionItem>
                        <LableHeading text="Why Choose Us for Your Logistics Needs?" styles='text-dark-blue font-rubik bg-[rgba(232,232,232,0.50)]' />
                    </MotionItem>
                    <MotionItem>
                        <h2 className='mt-4 font-rubik text-4xl font-semibold leading-none'>
                            Safe, Reliable, and Cost-Effective Cargo Solutions
                        </h2>
                    </MotionItem>
                    <MotionItem>
                        <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                            At Virtual Solutions, we are committed to providing the most efficient and reliable <b>logistics</b> and <b>cargo solutions</b> that ensure your goods reach their destination safely and on time. With a team of experts and cutting-edge technology, we offer unmatched service quality in the transportation and shipping industry.
                        </p>
                    </MotionItem>
                    {/* <MotionItem>
                        <p className='mt-2 text-[#6F7B8E] font-kurb text-base font-medium leading-[150%]'>
                            Whether you're looking to optimize your **global shipping**, enhance your **supply chain** management, or reduce transportation costs, we provide tailor-made solutions to meet your needs and exceed your expectations.
                        </p>
                    </MotionItem> */}
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
                            <h3 className="text-dark-blue font-rubik text-lg font-normal leading-normal">On-Time Delivery, Every Time</h3>
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
                                Optimized Shipping Costs <br /> for Maximum Efficiency
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
