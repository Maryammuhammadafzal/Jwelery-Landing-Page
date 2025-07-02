import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowUpRight } from 'lucide-react';
const Slider = () => {

    const slides = [
'/images/collection-image1.jpg',
'/images/collection-image2.jpg',
'/images/collection-image3.jpg',
'/images/collection-image4.jpg',
'/images/collection-image5.jpg',
'/images/collection-image6.jpg',
    ]

      const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4, // Reduced to ensure spacing fits
  slidesToScroll: 4,
  initialSlide: 0,
  centerMode: true,
  //centerPadding: '20px', // Adjusted for spacing
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        centerPadding: '20px',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: '15px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
      },
    },
  ],
};
  return (
    <div id="features" className=" min-w-full overflow-hidden h-[500px] py-4">
      <Slider {...settings} className="w-full">
        {slides.map((item , index) => (
          <div
            key={id}
            className="w-[330px] h-[460px] mx-2 relative group font-sans" 
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
            <div className="overlay group-hover:block hidden w-full h-full bg-black/50 absolute top-0 left-0 z-10" />
            <div className="w-full h-full group-hover:flex hidden absolute top-0 left-0 justify-center items-center z-20">
              <div className="flex flex-col gap-3 text-white text-center items-center px-4">
                <div className="h-[40px] w-[40px] text-white rounded-full flex justify-center items-center border border-white">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="font-mono md:text-2xl text-lg sm:text-xl">
                  {title}
                </h3>
                <p className="md:text-base text-xs sm:text-sm">{description}</p>
                <Image
                  src="/images/line4.png"
                  alt="decorative line"
                  width={150}
                  height={20}
                  className="object-contain"
                  onError={() => console.error("Failed to load image: /images/line4.png")} // Debugging
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Slider
