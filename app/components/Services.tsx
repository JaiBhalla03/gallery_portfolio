'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import portfolioImage1 from '../../public/images/po-image1.jpg';
import portfolioImage2 from '../../public/images/po-image2.jpg';
import portfolioImage3 from '../../public/images/po-image3.jpg';
import portfolioImage4 from '../../public/images/po-image4.jpg';

const images = [
  portfolioImage1,
  portfolioImage2,
  portfolioImage3,
  portfolioImage4,
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Handle keydown events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentSlide < images.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]); // Re-run if currentSlide changes

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Vertical Line */}
      <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>

      {/* Title */}
      <div className='px-12 pt-20 pb-10'>
        <div className='flex items-center gap-4'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z'
              fill='white'
              stroke='white'
              strokeWidth='1.5'
              strokeLinejoin='round'
            />
          </svg>
          PORTFOLIO
        </div>
      </div>

      {/* Slider */}
      <div className='overflow-hidden relative w-full'>
        <motion.div
          ref={sliderRef}
          className='flex cursor-grab active:cursor-grabbing'
          drag="x"
          dragConstraints={{ left: -((images.length - 1) * window.innerWidth * 0.5), right: 0 }}
          animate={{ x: `-${currentSlide * 50}vw` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {images.map((image, index) => (
            <div key={index} className='w-[50vw] h-[70vh] flex-shrink-0 p-5'>
              <Image src={image} alt='' className='w-full h-full object-cover' />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className='flex gap-2 py-4 justify-center'>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-10 h-[0.2rem] bg-[#161616] cursor-pointer ${
              currentSlide === index ? 'bg-white' : 'opacity-50'
            }`}
          ></div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className='h-[0.1rem] bg-[#161616] w-full'></div>
    </div>
  );
}
