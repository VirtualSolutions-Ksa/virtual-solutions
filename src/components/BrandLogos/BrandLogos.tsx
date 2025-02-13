// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import { Autoplay, EffectFade } from 'swiper/modules';
// import { motion } from 'framer-motion';



// const BrandLogos: React.FC = () => {
//     const logos = [
//         '/images/logos/Asset 47@300x.png',
//         '/images/logos/Asset 48@300x.png',
//         '/images/logos/Asset 49@300x.png',
//         '/images/logos/Asset 50@300x.png',
//         '/images/logos/Asset 51@300x.png',
//         '/images/logos/Asset 52@300x.png',
//         '/images/logos/Asset 53@300x.png',
//         '/images/logos/Asset 54@300x.png',
//         '/images/logos/Asset 55@300x.png',
//         '/images/logos/Asset 56@300x.png',
//         '/images/logos/Asset 58@300x.png',
//         '/images/logos/Asset 59@300x.png',
//         '/images/logos/Asset 60@300x.png',
//         '/images/logos/Asset 61@300x.png',
//         '/images/logos/Asset 62@300x.png',
//         '/images/logos/Asset 63@300x.png',
//         '/images/logos/Asset 64@300x.png',
//         '/images/logos/Asset 65@300x.png',
//         '/images/logos/Asset 66@300x.png',
//         '/images/logos/Asset 67@300x.png',
//         '/images/logos/Asset 69@300x.png',
//         '/images/logos/Asset 70@300x.png',
//         '/images/logos/Asset 71@300x.png',
//         '/images/logos/Asset 72@300x.svg',
//     ];

//     return (
//         <motion.div
//             className='py-[35px] md:py-[38px] px-[39px] md:px-14 lg:px-20 border-b border-[#E5E5E5]'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//         >
//             <h4 className="text-2xl font-semibold text-gray mb-6 text-center">
//                 Trusted by
//             </h4>

//             <Swiper
//                 modules={[Autoplay, EffectFade]}
//                 effect='fade'
//                 fadeEffect={{ crossFade: true }}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 speed={1800}
//             >
//                 {logos
//                     .reduce((acc, logo, index) => {
//                         // Group logos in batches of 5
//                         const batchIndex = Math.floor(index / 5);
//                         if (!acc[batchIndex]) acc[batchIndex] = [];
//                         acc[batchIndex].push(logo);

//                         return acc;
//                     }, [] as string[][])
//                     .map((batch, i) => (
//                         <SwiperSlide key={i}>
//                             <div className='logo-batch flex justify-between gap-4 flex-wrap md:flex-nowrap'>
//                                 {batch.map((logo, idx) => (
//                                     <div key={idx} className='flex flex-grow mr-6'>
//                                         <div className='w-full max-h-[65px] p-2'>
//                                             <div className='relative h-full w-full flex justify-center'>
//                                                 <img
//                                                     key={idx}
//                                                     src={logo}
//                                                     alt={`Brand logo ${idx + 1}`}
//                                                     className='logo'
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </SwiperSlide>
//                     ))}
//             </Swiper>
//         </motion.div>
//     );
// };

// export default BrandLogos;


'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const BrandLogos: React.FC = () => {
    const logos = [
        '/images/logos/Asset 47@300x.png',
        '/images/logos/Asset 48@300x.png',
        '/images/logos/Asset 49@300x.png',
        '/images/logos/Asset 50@300x.png',
        '/images/logos/Asset 51@300x.png',
        '/images/logos/Asset 52@300x.png',
        '/images/logos/Asset 53@300x.png',
        '/images/logos/Asset 54@300x.png',
        '/images/logos/Asset 55@300x.png',
        '/images/logos/Asset 56@300x.png',
        '/images/logos/Asset 58@300x.png',
        '/images/logos/Asset 59@300x.png',
        '/images/logos/Asset 60@300x.png',
        '/images/logos/Asset 61@300x.png',
        '/images/logos/Asset 62@300x.png',
        '/images/logos/Asset 63@300x.png',
        '/images/logos/Asset 64@300x.png',
        '/images/logos/Asset 65@300x.png',
        '/images/logos/Asset 66@300x.png',
        '/images/logos/Asset 67@300x.png',
        '/images/logos/Asset 69@300x.png',
        '/images/logos/Asset 70@300x.png',
        '/images/logos/Asset 71@300x.png',
        '/images/logos/Asset 72@300x.png',
        '/images/trans-fright.png'
    ];

    return (
        <motion.div
            className="py-[35px] md:py-[38px] px-[39px] md:px-14 lg:px-20 border-b border-[#E5E5E5]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h4 className="text-2xl font-semibold text-dark-blue mb-6 text-center">
                Trusted by
            </h4>

            <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
                className="flex items-center"
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center mx-10"
                    >
                        <img
                            src={logo}
                            alt={`Brand logo ${index + 1}`}
                            className="w-auto min-h-[65px] max-h-28 h-auto object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </motion.div>
    );
};

export default BrandLogos;
