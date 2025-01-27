'use client';

import React from 'react'
import Image from 'next/image';
import AboutImage from '../../public/images/about-image1.jpg';
import AboutImage2 from '../../public/images/about-image2.jpg';
import AboutImage3 from '../../public/images/about-image3.jpg';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';


export default function About() {
    const ref = useRef(null); // Create a ref for the element
    const isInView = useInView(ref, { margin: '-10% 0px', once: true }); // Hook to check visibility
  return (
    <div className='relative font-poppins'>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>
        <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>
        <div className='px-12 py-20 z-10'>
            <div className='flex items-center gap-4'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
                ABOUT US
            </div>
            <div className='text-[6rem] leading-[6rem] w-1/2 font-[500] py-10'>
                We Capture Meaning
            </div>
            <motion.div className='z-10'
                ref={ref}
                initial={{y: 1000}}
                animate={{y: -130}}
                transition={{duration: 1, ease: 'easeInOut'}}
            >
                <Image src={AboutImage} alt='' className='w-[32rem] h-[32rem] object-cover mx-auto z-10 filter'/>
            </motion.div>
            
        </div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>
        <div className='py-20 z-10 relative'>
            <motion.div className='flex pl-32'>
                <Image src={AboutImage2} alt='' className='w-[80%]'/>
            </motion.div>
            <motion.div className='absolute top-1/4 right-32'>
                <Image src={AboutImage3} alt='' className='w-96 filter grayscale'/>
            </motion.div>
        </div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>
        <div className='py-10'>

        </div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>        
    </div>
  )
}
