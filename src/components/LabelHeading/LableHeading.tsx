
'use client'
import { motion } from 'framer-motion';

export default function LableHeading({text, styles}: {text: string, styles: string}) {
  return (
      <div className="flex w-fit items-center">
          <div className="w-1 h-6 bg-banner-small-head"></div>
          <motion.h2
              initial={{ width: '0%', }}
              animate={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 3, type: 'spring' }}
              className={`${styles ?? ''} py-1 px-2 overflow-hidden  text-nowrap text-xs md:text-sm leading-none`}
              aria-label="Small Heading">
             {text}
          </motion.h2>
      </div>
  )
}
