'use client';

import React from 'react'
import Image from 'next/image';
import AboutImage from '../../public/images/about-image1.jpg';
import AboutImage2 from '../../public/images/about-image2.jpg';
import AboutImage3 from '../../public/images/about-image3.jpg';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';


export default function About() {
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
            <motion.div className='text-[6rem] leading-[6rem] w-1/2 font-[500] py-10'
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                We Capture Meaning
            </motion.div>
            <div className='z-10 relative'
            >
                <Image src={AboutImage} alt='' className='w-[32rem] h-[32rem] object-cover mx-auto z-10'/>
                <motion.div className='absolute w-[40rem] right-0 -bottom-4 text-right'
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    At Möbius, photography is more than capturing images - it's about 
                    creating timeless art that reflec   ts your unique story. 
                    With over a decade of experience, we special<i className='text-gray-300 not-italic'>ize in 
                    turning moments into lifelong memories. Our passion lies 
                    in every frame, and our mission is simple: to bring your vision to life.</i>
                </motion.div>
            </div>
        </div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>
        <div className='py-20 z-10 relative'>
            <motion.div className='flex pl-32'
                        initial={{ opacity: 0, rotate: 100, x: -1000}}
                        whileInView={{ opacity: 1, rotate: 0 , x: 0}}
                        transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Image src={AboutImage2} alt='' className='w-[80%]'/>
            </motion.div>
            <motion.div className=  'absolute top-1/4 right-32'
                        initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Image src={AboutImage3} alt='' className='w-96 filter grayscale'/>
            </motion.div>
        </div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>
        <div className='py-10 flex flex-col gap-10'>
            <div className='flex w-full justify-around'>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.55 9.888C9.471 9.888 10.208 10.118 10.771 10.63C11.156 10.979 11.371 11.476 11.365 11.997C11.3641 12.2541 11.3109 12.5084 11.2088 12.7444C11.1067 12.9804 10.9578 13.1932 10.771 13.37C10.244 13.854 9.423 14.112 8.551 14.112C7.679 14.112 6.871 13.854 6.336 13.37C6.1427 13.1979 5.98877 12.9862 5.88471 12.7493C5.78065 12.5123 5.7289 12.2558 5.733 11.997C5.733 11.479 5.951 10.982 6.336 10.63C6.836 10.176 7.72 9.888 8.55 9.888ZM8.553 13.558C9.014 13.558 9.441 13.397 9.741 13.1C10.041 12.8 10.174 12.44 10.174 11.997C10.174 11.573 10.026 11.176 9.741 10.894C9.447 10.604 9.008 10.44 8.553 10.44C8.098 10.44 7.66 10.603 7.363 10.894C7.078 11.176 6.929 11.573 6.929 11.997C6.92291 12.4074 7.07885 12.8038 7.363 13.1C7.66 13.394 8.096 13.558 8.553 13.558ZM3.712 11.59C3.872 11.6307 4.02733 11.685 4.178 11.753C4.31765 11.8176 4.4457 11.9048 4.557 12.011C4.754 12.217 4.866 12.493 4.863 12.778C4.86514 12.9283 4.83197 13.077 4.76614 13.2121C4.70031 13.3473 4.60367 13.465 4.484 13.556C4.27188 13.7162 4.03129 13.8346 3.775 13.905C3.38897 14.0266 2.98562 14.084 2.581 14.075C2.229 14.075 2.035 14.034 1.768 13.978L1.691 13.962C1.39675 13.8971 1.10943 13.804 0.832999 13.684C0.820637 13.6756 0.80592 13.6714 0.790999 13.672C0.769069 13.6725 0.748213 13.6816 0.73289 13.6973C0.717567 13.713 0.708992 13.7341 0.708999 13.756V13.959H0.120999V12.481H0.644999C0.648463 12.6308 0.696127 12.7762 0.781999 12.899C0.993999 13.159 1.222 13.259 1.439 13.339C1.806 13.459 2.191 13.523 2.575 13.535C3.128 13.535 3.451 13.401 3.521 13.372L3.53 13.368L3.536 13.366C3.598 13.343 3.848 13.252 3.848 12.974C3.848 12.7 3.614 12.64 3.461 12.601L3.439 12.596C3.269 12.55 2.877 12.508 2.449 12.463L2.297 12.447C1.89566 12.4059 1.49629 12.3476 1.1 12.272C0.601999 12.162 0.405999 11.98 0.283999 11.867L0.275999 11.859C0.0981514 11.6694 -0.000572536 11.419 -1.34994e-06 11.159C-1.34994e-06 10.663 0.339999 10.363 0.757999 10.179C1.21273 9.98487 1.70258 9.88649 2.197 9.89C3.017 9.893 3.684 10.16 3.924 10.284C4.021 10.336 4.069 10.272 4.069 10.224V10.075H4.596V11.363H4.124C4.08203 11.1717 3.97881 10.9993 3.83 10.872C3.73944 10.7993 3.63955 10.7391 3.533 10.693C3.13747 10.5256 2.71147 10.4421 2.282 10.448C1.839 10.448 1.415 10.533 1.202 10.663C1.06933 10.7457 1.00267 10.8477 1.002 10.969C1.002 11.142 1.148 11.211 1.222 11.232C1.418 11.292 1.854 11.335 2.193 11.369L2.397 11.39C2.724 11.423 3.409 11.514 3.712 11.59ZM21.879 10.593V10.114H24V10.584H23.524C23.352 10.584 23.282 10.617 23.152 10.763L21.725 12.393C21.7101 12.4131 21.7033 12.4381 21.706 12.463V13.205C21.7082 13.2395 21.7122 13.2739 21.718 13.308C21.7265 13.3298 21.74 13.3492 21.7573 13.3648C21.7747 13.3805 21.7955 13.3918 21.818 13.398C21.8611 13.4042 21.9045 13.4075 21.948 13.408H22.434V13.878H19.86V13.408H20.32C20.3635 13.4075 20.4069 13.4042 20.45 13.398C20.4729 13.3917 20.4942 13.3803 20.5122 13.3647C20.5302 13.3492 20.5444 13.3298 20.554 13.308C20.5587 13.2748 20.5617 13.2415 20.563 13.208V12.466C20.563 12.441 20.563 12.441 20.53 12.402L19.119 10.8C19.043 10.721 18.913 10.594 18.713 10.594H18.255V10.124H20.843V10.594H20.531C20.461 10.594 20.413 10.664 20.473 10.74L21.352 11.791C21.361 11.803 21.367 11.803 21.379 11.794C21.391 11.785 22.273 10.749 22.279 10.74C22.2864 10.7305 22.2918 10.7196 22.2949 10.7079C22.298 10.6963 22.2988 10.6841 22.2971 10.6722C22.2954 10.6603 22.2914 10.6488 22.2852 10.6384C22.279 10.6281 22.2707 10.6191 22.261 10.612C22.2434 10.5997 22.2224 10.5934 22.201 10.594L21.879 10.593ZM15.595 10.59H16.08C16.301 10.59 16.34 10.675 16.343 10.881L16.371 12.447L13.789 10.123H11.944V10.593H12.356C12.653 10.593 12.674 10.757 12.674 10.903V13.116C12.674 13.244 12.675 13.411 12.492 13.411H11.986V13.878H14.15V13.408H13.622C13.41 13.408 13.402 13.311 13.398 13.105V11.223L16.371 13.874H17.128L17.088 10.878C17.092 10.66 17.107 10.587 17.331 10.587H17.804V10.117H15.595V10.59Z" fill="#545454"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 7.8L6.442 15.276C4.986 15.8927 3.76333 16.201 2.774 16.201C1.654 16.201 0.841666 15.8087 0.337 15.024C0.0203331 14.52 -0.0730002 13.8807 0.0569998 13.106C0.187666 12.3313 0.533 11.5053 1.093 10.628C1.55967 9.918 2.32533 8.98467 3.39 7.828C3.02841 8.39648 2.76349 9.02093 2.606 9.676C2.326 10.8707 2.578 11.748 3.362 12.308C3.73533 12.5693 4.24867 12.7 4.902 12.7C5.424 12.7 6.012 12.616 6.666 12.448L24 7.8Z" fill="#545454"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3H17V21H7V3Z" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.187 2.62199C3.481 6.79099 4.362 10.915 5.019 12.459L2 15.122H4.237L9.069 11.059C9.319 11.684 9.812 13.084 9.812 13.722C9.812 14.072 9.55 14.784 9.25 15.572C8.887 16.566 8.475 17.684 8.475 18.384C8.475 19.384 9.05 20.797 9.331 21.378H14.594C14.874 20.809 15.431 19.409 15.431 18.378C15.431 17.728 15.119 16.841 14.806 15.966C14.506 15.122 14.213 14.303 14.213 13.716C14.213 12.778 14.706 11.553 14.95 11.066L19.737 15.122H22L18.975 12.466C20.481 8.39099 19.506 4.21599 18.831 2.62799L13.938 8.57799C13.768 8.42199 13.15 8.25299 11.988 8.25299C10.825 8.25299 10.05 8.42199 9.812 8.57799L5.187 2.62199ZM5.831 5.79099L8.594 9.36599L6.144 11.346C5.831 10.472 5.337 8.14599 5.831 5.79099ZM18.05 5.79099L15.287 9.36599L17.744 11.346C18.056 10.472 18.55 8.14599 18.056 5.79099H18.05ZM10.262 9.96599C10.55 10.959 11.119 13.134 11.119 13.909C11.119 14.372 10.844 15.153 10.556 15.972C10.231 16.866 9.9 17.809 9.9 18.422C9.9 19.359 10.2 19.997 10.35 20.122H11.375V18.247H12.625V20.122H13.412C13.6 19.922 13.975 19.184 13.975 18.422C13.975 17.922 13.625 16.922 13.288 15.972C12.988 15.109 12.694 14.284 12.694 13.909C12.694 13.284 13.306 11.022 13.612 9.96599C13.0837 9.68749 12.4972 9.53743 11.9 9.52799C11.137 9.52799 10.488 9.82199 10.262 9.96599ZM3.875 21.372V16.916L5.125 15.778V20.122H7.775C7.775 20.122 8.087 20.916 8.25 21.372H3.875ZM20.125 16.891V21.371H15.75C15.906 20.909 16.225 20.121 16.225 20.121H18.875V15.747L20.125 16.891Z" fill="#545454"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18.775C10.344 16.775 9.00001 15.535 9.00001 13.5C9.00001 11.465 10.503 10 12.003 10C13.503 10 15 11.464 15 13.5C15 15.536 13.656 16.775 12 18.775ZM12 18.775C10 21.32 6.02001 21.462 4.35001 20.302C2.67901 19.142 2.65501 16.74 3.75401 14.195C4.85401 11.651 6.31901 8.598 9.25101 4.527C10.212 3.458 10.897 3 11.997 3M12 18.775C14 21.32 17.98 21.462 19.65 20.302C21.321 19.142 21.345 16.74 20.246 14.195C19.146 11.651 17.681 8.598 14.749 4.527C13.788 3.458 13.103 3 12.003 3" stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.818 4.516L20.768 8.664H22.943L24 4.516M19.41 14.04H21.58L22.62 9.96H20.442M18.032 19.483H20.186L21.242 15.336H19.082M19.275 9.959H5.55V10.879L8.891 14.04H18.24M20.65 4.515H0V5.631L3.206 8.663H19.6M11.228 16.243L14.658 19.483H16.863L17.913 15.336H11.228" fill="#545454"/>
</svg>
            </div>
            <div className='flex w-full justify-around'>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.97 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H18.97C20.07 21 20.97 20.1 20.97 19V5C20.97 4.46957 20.7593 3.96086 20.3842 3.58579C20.0091 3.21071 19.5004 3 18.97 3ZM17.38 16.98C17.35 16.99 17.31 17 17.28 17H15.02C14.9221 17.0017 14.826 16.974 14.744 16.9205C14.662 16.867 14.5979 16.7902 14.56 16.7L12.1 10.96C12.08 10.9 12.02 10.87 11.97 10.89C11.954 10.896 11.9395 10.9054 11.9274 10.9174C11.9154 10.9295 11.906 10.944 11.9 10.96L10.37 14.61C10.34 14.68 10.37 14.75 10.44 14.78C10.46 14.79 10.47 14.79 10.49 14.79H12.17C12.27 14.79 12.37 14.85 12.41 14.95L13.15 16.59C13.22 16.74 13.14 16.92 12.99 16.99C12.93 16.99 12.89 17 12.85 17H6.73C6.58 17 6.45 16.87 6.45 16.72C6.45 16.68 6.46 16.65 6.47 16.61L10.37 7.33C10.45 7.13 10.65 7 10.86 7H13.11C13.33 7 13.52 7.13 13.6 7.33L17.52 16.61C17.59 16.75 17.53 16.92 17.38 16.98Z" fill="#545454"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.562 7L8.564 7.006L11.358 14.627V7.397H10.208V7.327H14.168C16.071 7.327 17.399 8.303 17.399 9.702C17.399 10.722 16.489 11.57 15.136 11.811L14.887 11.842L15.137 11.868C15.958 11.962 16.61 12.214 17.072 12.618L17.075 12.621L19.141 7H19.211L19.213 7.006L22.769 16.704H24V16.774H20.082V16.704H21.236L20.066 13.515H17.693V13.517L17.706 13.554C17.8 13.835 17.848 14.13 17.845 14.427V15.623C17.845 16.238 18.116 16.861 18.635 16.861C18.939 16.861 19.182 16.754 19.472 16.489L19.513 16.527C19.199 16.859 18.818 17 18.247 17C17.817 17 17.447 16.896 17.151 16.692L17.095 16.652C16.705 16.356 16.451 15.874 16.342 15.217L16.324 15.111L16.306 14.951L16.304 14.923L15.65 16.703H16.578V16.773H14.636V16.703H15.574L16.292 14.749V14.744C16.2843 14.6288 16.28 14.5134 16.279 14.398V13.544C16.279 12.495 15.499 11.894 14.139 11.894H12.802V16.704H13.96V16.774H9.433V16.704H10.587L9.417 13.515H6.172L5.014 16.669L5.062 16.661C6.583 16.399 7.282 15.238 7.292 14.016H7.362V16.774H0L5.465 7.397H3.268C1.446 7.397 0.622 8.804 0.609 10.207H0.54V7.327H7.174L7.134 7.397L1.709 16.704H4.563C4.63367 16.704 4.70433 16.701 4.775 16.695L4.847 16.689L4.937 16.679L8.491 7H8.562ZM18.445 9.095L17.132 12.671L17.139 12.678L17.206 12.744C17.399 12.941 17.553 13.174 17.658 13.428L17.665 13.445H20.04L18.445 9.095ZM7.797 9.095L6.198 13.445H9.392L7.797 9.095ZM13.823 7.397H12.803V11.824H14.139C15.492 11.824 15.906 11.331 15.906 9.717C15.906 8.2 15.186 7.397 13.823 7.397Z" fill="#545454"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.54 14.49C10.262 14.49 9.276 13.492 9.276 12.214C9.276 10.962 10.256 9.944 11.54 9.944C12.772 9.944 13.778 10.962 13.778 12.214C13.778 13.492 12.773 14.491 11.539 14.491L11.54 14.49ZM14.614 6.636L14.4 7.634C13.81 6.454 12.052 6.337 11.105 6.337C8.153 6.337 5.578 9.178 5.578 13.083C5.578 16.223 7.453 18.194 9.808 18.194C11.124 18.194 12.24 17.89 13.161 16.794L12.921 17.896H16.632L18.324 6.636C17.086 6.635 15.842 6.646 14.614 6.636ZM12 0C18.63 0 24 5.37 24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0Z" fill="#545454"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.1785 5.50549C5.37467 9.65528 3.73062 13.8727 2.25 18.1485M10.8875 5.75299C9.21106 9.88405 7.66628 14.0673 6.2555 18.2965" stroke="#545454" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.4975 12.956C5.14887 12.1988 7.84675 11.615 10.574 11.2085M12.0905 18.2965C13.1516 13.9924 14.6026 9.79387 16.4255 5.753C16.0174 9.5252 15.8029 13.3158 15.783 17.11C17.4723 13.1741 19.4674 9.37669 21.75 5.7525C20.7355 9.95258 19.9596 14.2067 19.426 18.4945M11.176 15.503C10.5 16.5495 9.716 16.8125 9.3875 16.393C9.1485 16.088 9.5735 15.448 9.7995 15.165C10.245 14.607 10.9455 14.3135 11.069 13.772C11.176 13.302 10.838 13.22 10.5165 13.22C10.129 13.22 9.8885 13.703 9.948 13.9285C10.023 14.6185 10.7485 16.3935 10.9615 16.805" stroke="#545454" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#545454"/>
<path d="M2 12C3.72 8.17 7.53 5.5 12 5.5C16.47 5.5 20.28 8.17 22 12C20.28 15.83 16.47 18.5 12 18.5C7.53 18.5 3.72 15.83 2 12Z" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 19.535L15.303 4.465L10.644 7.152L17.789 19.535H24ZM15.713 19.535L9.969 9.59L5.31 12.277L9.502 19.535H15.713ZM4.658 14.723L7.434 19.535H1.223L0 17.41L4.658 14.723Z" fill="#545454"/>
</svg>
            </div>
        </div>
        <div className='h-[0.1rem] bg-[#161616] w-full'></div>        
    </div>
  )
}
