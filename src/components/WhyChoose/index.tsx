'use client';
import Image from "next/image";
import LableHeading from "../LabelHeading/LableHeading";
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';

export default function Index() {
    return (
        <section className="">
            <MotionContainer classNames="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-primary py-10 md:py-20 pl-4 md:pl-7 lg:pl-24 flex items-center">
                    <div className="relative">
                        <Image width={729} height={610} alt='Flight Image' src={'/images/why-choose.png'} />
                        <div className="absolute -bottom-10 md:-bottom-5 md:right-5 bg-secondary p-2 md:p-5 flex gap-4 items-center max-w-fit m-5 md:m-0">
                            <div>
                                <Image width={65} height={80} className="h-20 w-[65px]" src="/icons/flight-round.svg" alt="Flight" />
                            </div>
                            <p className="max-w-[259px] font-rubik text-dark-blue text-6/normal">
                                Moving your products across borders
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundImage: 'url(/images/world-map.svg)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat'
                }}
                    className="py-10 md:py-20 bg-light-gray px-4 md:px-7 lg:px-24 flex items-center"
                >
                    <div>
                        <div className="pb-10">
                            <MotionItem>
                                <LableHeading text="Why Choose" styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                            </MotionItem>
                            <MotionItem>
                                <h4 className="text-dark-blue font-rubik text-[35px] leading-9 font-semibold my-3">
                                    We create opportunity to reach potential
                                </h4>
                            </MotionItem>
                            <MotionItem>
                                <p className="text-gray font-kurb text-base/[151%] font-medium">
                                    We offer a complete range of logistics services tailored to your needs, including secure packaging, global shipping, and real-time tracking. With 24/7 customer support and an on-time delivery guarantee, you can trust us to handle your shipments with care. Our transparent pricing means no hidden fees—just reliable, straightforward service.
                                </p>
                            </MotionItem>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Safe Package",
                                    image: "/icons/packing-rounded.svg",
                                },
                                {
                                    title: "Ship Everywhere",
                                    image: "/icons/ship-rounded.svg",
                                },
                                {
                                    title: "Global Tracking",
                                    image: "/icons/global-rounded.svg",
                                },
                                {
                                    title: "24/7 Support",
                                    image: "/icons/support-rounded.svg",
                                },
                                {
                                    title: "In Time Delivery",
                                    image: "/icons/time-rounded.svg",
                                },
                                {
                                    title: "Transparent Pricing",
                                    image: "/icons/time-rounded.svg",
                                },
                            ].map((item, idx) => (
                                <MotionItem key={idx} classNames="flex gap-4 items-center w-fit">
                                    <div>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            height={44}
                                            width={44}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-dark-blue font-rubik text-base font-normal leading-normal">{item.title}</h3>
                                </MotionItem>
                            ))}
                        </div>
                    </div>
                </div>
            </MotionContainer>
        </section>
    );
}
