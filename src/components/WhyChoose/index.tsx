'use client';
import Image from "next/image";
import LableHeading from "../LabelHeading/LableHeading";
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';
import { useTranslations } from "next-intl";

export default function Index() {
    const t = useTranslations("whyChoose");
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
                                <LableHeading text={t("heading")} styles='text-dark-blue bg-[rgba(232,232,232,0.50)]' />
                            </MotionItem>
                            <MotionItem>
                                <h4 className="text-dark-blue font-rubik text-[35px] leading-9 font-semibold my-3">
                                    {t("subHeading")}
                                </h4>
                            </MotionItem>
                            <MotionItem>
                                <p className="text-gray font-kurb text-base/[151%] font-medium">
                                    {t("description")}
                                </p>
                            </MotionItem>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: t("services.safePackage"),
                                    image: "/icons/packing-rounded.svg",
                                },
                                {
                                    title: t("services.shipEverywhere"),
                                    image: "/icons/ship-rounded.svg",
                                },
                                {
                                    title: t("services.globalTracking"),
                                    image: "/icons/global-rounded.svg",
                                },
                                {
                                    title: t("services.support"),
                                    image: "/icons/support-rounded.svg",
                                },
                                {
                                    title: t("services.onTimeDelivery"),
                                    image: "/icons/time-rounded.svg",
                                },
                                {
                                    title: t("services.transparentPricing"),
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
