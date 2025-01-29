'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import portfolioImage1 from '../../public/images/po-image1.jpg';
import portfolioImage2 from '../../public/images/po-image2.jpg';
import portfolioImage3 from '../../public/images/po-image3.jpg';
import portfolioImage4 from '../../public/images/po-image4.jpg';

const images = [portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
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
  }, [currentSlide]);

  // Fix window error
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDragConstraints({
        left: -((images.length - 1) * window.innerWidth * 0.5),
        right: 0
      });
    }
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div 
      className='relative overflow-hidden' 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Vertical Line */}
      <motion.div 
        className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2' 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
      ></motion.div>

      {/* Title */}
      <motion.div className='px-12 pt-20 pb-10' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div className='flex items-center gap-4'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z' fill='white' stroke='white' strokeWidth='1.5' strokeLinejoin='round' />
          </svg>
          PORTFOLIO
        </div>
      </motion.div>

      {/* Slider */}
      <div className='overflow-hidden relative w-full'>
        <motion.div
          ref={sliderRef}
          className='flex cursor-grab active:cursor-grabbing'
          drag="x"
          dragConstraints={dragConstraints}
          animate={{ x: `-${currentSlide * 50}vw` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className='w-[50vw] h-[70vh] flex-shrink-0 p-5' 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.2 }}
            >
              <Image src={image} alt='' className='w-full h-full object-cover' />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <motion.div className='flex gap-2 py-4 justify-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-10 h-[0.2rem] bg-[#161616] cursor-pointer ${currentSlide === index ? 'bg-white' : 'opacity-50'}`}
          ></div>
        ))}
      </motion.div>

      {/* Bottom Line */}
      <motion.div className='h-[0.1rem] bg-[#161616] w-full' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}></motion.div>
    </motion.div>
  );
}
