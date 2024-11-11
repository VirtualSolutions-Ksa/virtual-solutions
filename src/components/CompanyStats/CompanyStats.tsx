import React from 'react';
import AnimatedNumber from '../AnimatedNumber/AnimatedNumber';
import MotionContainer from '../MotionContainer/MotionContainer';
import MotionItem from '../MotionItem/MotionItem';
import { useTranslations } from 'next-intl';

export default function CompanyStats() {
    const t = useTranslations("companyStats")
    return (
        <section className='max-w-[1020px] mx-auto py-5 md:py-0 border-t border-b border-[#D4D4D4]'>
            <MotionContainer classNames='grid md:grid-cols-2 gap-4 md:gap-20'>

                {/* Delivered Packages */}
                <MotionItem classNames='border-r border-[#D4D4D4] md:py-8'>
                    <div className='flex gap-4 items-center w-fit mx-auto'>
                        <AnimatedNumber
                            value={1294}
                            styles='text-dark-blue font-rubik text-xl md:text-5xl font-semibold leading-normal'
                        />
                        <div className='stats-box-bg'></div>
                        <p className='text-dark-blue font-rubik text-xl/normal font-normal'>
                            {t("deliveredPackages")}
                        </p>
                    </div>
                </MotionItem>

                {/* Satisfied Clients */}
                <MotionItem classNames='md:py-8'>
                    <div className='flex gap-4 items-center w-fit mx-auto'>
                        <AnimatedNumber
                            value={3594}
                            styles='text-dark-blue font-rubik text-xl md:text-5xl font-semibold leading-normal'
                        />
                        <div className='stats-box-bg'></div>
                        <p className='text-dark-blue font-rubik text-xl/normal font-normal'>
                            {t("satisfiedClients")}
                        </p>
                    </div>
                </MotionItem>

            </MotionContainer>
        </section>
    );
}
