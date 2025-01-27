import Image from 'next/image'
import React from 'react'
import footerImage from '../../public/images/footer-image.jpg'

export default function Footer() {
  return (
    <div>
        <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>
        <div className='px-12 pt-20 z-10'>
            <div className='flex w-full justify-between'>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl'>NAVIGATION</div>
                    <ul className='text-md font-[300] cursor-pointer'>
                        <li className='hover:font-[500] transition-all duration-300'>Home</li>
                        <li className='hover:font-[500] transition-all duration-300'>About Us</li>
                        <li className='hover:font-[500] transition-all duration-300'>Services</li>
                        <li className='hover:font-[500] transition-all duration-300'>Portfolio</li>
                        <li className='hover:font-[500] transition-all duration-300'>Contact</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl'>SOCIALS</div>
                    <ul className='text-md font-[300] cursor-pointer'>
                        <li className='hover:font-[500] transition-all duration-300'>Instagram</li>
                        <li className='hover:font-[500] transition-all duration-300'>Behance</li>
                        <li className='hover:font-[500] transition-all duration-300'>Facebook</li>
                        <li className='hover:font-[500] transition-all duration-300'>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className='relative flex justify-center'>
                <Image src={footerImage} alt='' className='w-[30rem] h-[35rem] -translate-y-20 object-cover filter grayscale relative'/>
                <div className='text-white flex flex-col justify-center absolute top-0 left-1/2 z-20 w-[30rem] h-[35rem] -translate-y-20 -translate-x-1/2 text-center'>
                    <div className='text-md'>Ready to create something extraordinary?</div>
                    <div className='text-[6rem]'>Let's Talk</div>
                </div>
            </div>
        </div>
        <div className='h-[0.1rem] bg-[#161616] w-full'></div>        
        <div className='py-4 flex w-full justify-between px-12'>
            <div>© 2024 Möbius Studio. All right reserved</div>
            <div>Privacy Policy</div>
        </div>
    </div>
  )
}
