'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import PortfolioImage1 from '../../public/images/port-image1.jpg';
import PortfolioImage2 from '../../public/images/port-image2.jpg';
import PortfolioImage3 from '../../public/images/port-image3.jpg';
import PortfolioImage4 from '../../public/images/port-image4.jpg';
import PortfolioImage5 from '../../public/images/port-image5.jpg';
import {motion} from 'framer-motion';

const portfolioImages = [
  { id: 1, label: 'Wedding Photography', image: PortfolioImage5 },
  { id: 2, label: 'Corporate & Event Photography', image: PortfolioImage4 },
  { id: 3, label: 'Portrait Photography', image: PortfolioImage1 },
  { id: 4, label: 'Product Photography', image: PortfolioImage3 },
  { id: 5, label: 'Travel & Landscape Photography', image: PortfolioImage2 },
];

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState(1); // Default to the first image

  const handleItemClick = (id: number) => {
    setSelectedId(id);
  };
  return (
    <div>
        <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>
        <div className='px-12 py-20'>
            <div className='flex items-center gap-4'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
                    SERVICES
                </div>
        </div>
        <motion.div className='flex w-full justify-between'
          initial={{ opacity: 0, y: 500 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className='w-1/2 flex justify-end px-20 pb-20'>
          {/* Render the image based on selectedId */}
          <motion.div
          key={selectedId} // This ensures Framer Motion re-renders and animates on key change
          initial={{ opacity: 0, scale: 0.9 }} // Start animation: transparent and slightly scaled down
          animate={{ opacity: 1, scale: 1 }} // End animation: fully visible and normal scale
          exit={{ opacity: 0, scale: 0.9 }} // Exit animation: reverse of initial
          transition={{ duration: 0.5, ease: 'easeInOut' }} // Customize timing
          className='w-[25rem] h-[30rem] object-cover'
        >
          <Image
            src={portfolioImages.find((item) => item.id === selectedId)?.image || PortfolioImage1}
            alt=''
            className='w-[25rem] h-[33rem] object-cover'
          />
          </motion.div>
        </div>
        <ul className='w-1/2 pl-4 pb-20'>
          {portfolioImages.map((item) => (
            <li
              key={item.id}
              className={`transition-all duration-300 text-[6rem] whitespace-nowrap leading-[7rem] italic cursor-pointer ${
                selectedId === item.id ? 'text-white -translate-x-[100%]' : 'text-[#161616]'
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        </motion.div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>        
    </div>
  )
}
