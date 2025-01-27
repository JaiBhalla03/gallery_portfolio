'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/images/hero-image.jpg';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';


export default function Hero() {
    const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { margin: '-10% 0px', once: true }); // Hook to check visibility
  return (
    <div className='relative font-poppins flex flex-col gap-[6rem]'>
        <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>
        <div className='text-[30rem] flex leading-[32rem] font-[500]'>
            <motion.div className='z-10 flex'
                initial={{opacity: 0, x: -500}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, ease: 'easeInOut'}}
            >
                M<div className='italic'>ö</div>
            </motion.div>
            <motion.div className='z-30'
                initial={{opacity: 0, x: 500}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, ease: 'easeInOut'}}
            >
                bius
            </motion.div>
        </div>
        <motion.div
                initial={{opacity: 0, y: -800}}
                animate={{opacity: 1, y: -350}}
                transition={{duration: 1, delay:0.5, ease: 'easeInOut'}}
                className='z-20'
            >
                <Image src={heroImage} alt='' className='w-[30rem] absolute left-1/2 top-1/2 -translate-x-1/2 z-20 filter grayscale'/>
        </motion.div>
        <div className='flex w-full px-12 justify-between pb-10'>
            <motion.div className='flex items-center font-semibold'
                initial={{y: 0}}
                animate={{y: [-5, 0]}}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }}
            >
                <div><svg width="60" height="60" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.416 1.5 1.5 4.416 1.5 8C1.5 11.584 4.416 14.5 8 14.5C11.584 14.5 14.5 11.584 14.5 8C14.5 4.416 11.584 1.5 8 1.5ZM8 2.5C11.0435 2.5 13.5 4.9565 13.5 8C13.5 11.0435 11.0435 13.5 8 13.5C4.9565 13.5 2.5 11.0435 2.5 8C2.5 4.9565 4.9565 2.5 8 2.5ZM7.5 4.5V9.64L5.5 7.64L4.797 8.36L7.6405 11.203L8.0005 11.563L8.3605 11.203L11.2035 8.3595L10.5 7.64L8.5 9.64V4.5H7.5Z" fill="white"/>
</svg></div>
                <div className='text-4xl'>scroll down</div>
            </motion.div>
            <motion.div className='w-96 text-xl'
                ref={ref} // Attach the ref to the element
                initial={{ opacity: 0, x: 100 }} // Initial state (hidden and shifted)
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
                transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth animation
            >
                Where creativity meets precision. - Discover the artistry of professional photography tailored to your story.
            </motion.div>
        </div>
    </div>
  )
}
