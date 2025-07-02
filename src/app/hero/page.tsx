import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='flex w-full md:h-screen h-auto justify-center items-center'>
      <div className='w-full h-full realtive'>
        <div className='fixed top-0 left-0 w-full h-[100px] z-50 flex justify-center items-center'>
            <Header/>
        </div>
        <div className='absolute top-0 pt-10 left-0 flex justify-center items-center w-full h-full'>
            <div className='w-full h-full flex md:flex-row flex-col justify-center items-center'>
                <div className='md:w-[50%] w-full flex justify-center items-center gap-8 flex-col p-2'>
                    <h6 className=''>Elegance Redefined</h6>
                </div>
                <div className='md:w-[50%] w-full'>
                    <Image src='/images/hero-image.jpg' alt='home-image' width={400} height={400} className='object-cover w-full h-full' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
