import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='flex w-full md:h-screen h-auto md:mb-20 sm:mb-14 mb-8 justify-center items-center'>
      <div className='w-full h-full realtive'>
        <div className='fixed top-0 left-0 w-full h-[100px] z-50 flex justify-center items-center'>
            <Header/>
        </div>
        <div className='absolute top-0 pt-10 left-0 flex justify-center items-center w-full h-full'>
            <div className='w-full h-full flex md:flex-row flex-col justify-center items-center'>
                <div className='md:w-[50%] bg-[#FFF1EA] h-full w-full flex justify-center items-center gap-8 flex-col'>
                   <div className='max-w-xl flex flex-col gap-4'>
                     <h6 className='sm:text-2xl text-xl font-sub text-secondary '>Elegance Redefined</h6>
                    <h1 className='font-sans leading-14 lg:text-5xl md:text-4xl sm:text-5xl xs:text-4xl text-3xl  text-secondary-foreground'>Experience the Timeless Elegance of Ethereal Grace Jewelry</h1>
                   <div className="buttons flex gap-5 flex-wrap ">
                    <Button className='text-secondary-foreground bg-secondary border border-secondary rounded-none font-mono px-7 py-5'>Shop Now</Button>
                    <Button className='text-secondary-foreground bg-transparent border border-secondary rounded-none font-mono px-7 py-5'>Explore More</Button>
                   </div>
                   </div>
                </div>
                <div className='md:w-[50%] h-full w-full'>
                    <Image src='/images/hero-image.jpg' alt='home-image' width={400} height={400} className='object-cover w-full h-full' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
