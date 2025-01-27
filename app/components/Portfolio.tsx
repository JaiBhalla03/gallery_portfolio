import React from 'react'

export default function Portfolio() {
  return (
    <div>
        <div className='w-[0.15rem] h-full bg-[#161616] absolute left-1/2 -translate-x-1/2'></div>
        <div className='px-12 py-20'>
            <div className='flex items-center gap-4'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
                    PORTFOLIO
                </div>
        </div>
        <div className='h-[0.15rem] bg-[#161616] w-full'></div>        
    </div>
  )
}
