import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/images/hero-image.jpg';

export default function Hero() {
  return (
    <div className='relative font-poppins flex flex-col gap-40'>
        <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>
        <div className='text-[30rem] flex leading-[32rem] font-[500]'>
            <div className='z-10 flex'>M<div className='italic'>ö</div></div>
            <Image src={heroImage} alt='' className='w-[30rem] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20'/>
            <div className='z-30'>bius</div>
        </div>
        <div className='flex w-full px-12 justify-between py-10'>
            <div className='flex items-center font-semibold'>
                <div><svg width="60" height="60" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.416 1.5 1.5 4.416 1.5 8C1.5 11.584 4.416 14.5 8 14.5C11.584 14.5 14.5 11.584 14.5 8C14.5 4.416 11.584 1.5 8 1.5ZM8 2.5C11.0435 2.5 13.5 4.9565 13.5 8C13.5 11.0435 11.0435 13.5 8 13.5C4.9565 13.5 2.5 11.0435 2.5 8C2.5 4.9565 4.9565 2.5 8 2.5ZM7.5 4.5V9.64L5.5 7.64L4.797 8.36L7.6405 11.203L8.0005 11.563L8.3605 11.203L11.2035 8.3595L10.5 7.64L8.5 9.64V4.5H7.5Z" fill="white"/>
</svg></div>
                <div className='text-4xl'>scroll down</div>
            </div>
            <div className='w-96 text-xl'>Where creativity meets precision. - Discover the artistry of professional photography tailored to your story.</div>
        </div>
    </div>
  )
}
