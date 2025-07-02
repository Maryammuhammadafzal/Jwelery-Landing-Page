"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MySlider = () => {
  const slides = [
    { image: "/images/collection-image1.jpg" },
    { image: "/images/collection-image2.jpg" },
    { image: "/images/collection-image3.jpg" },
    { image: "/images/collection-image4.jpg" },
    { image: "/images/collection-image5.jpg" },
    { image: "/images/collection-image6.jpg" },
  ];

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6, // Reduced to ensure spacing fits
    slidesToScroll: 6,
    initialSlide: 0,
    centerMode: true,
    //centerPadding: '20px', // Adjusted for spacing
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div id="features" className=" min-w-full overflow-hidden h-[330px] py-4">
      <Slider {...settings} className="w-full">
        {slides.map((item, index) => (
          <div key={index} className="w-[230px] h-[270px] mx-2 p-2">
            <Image
              src={item.image}
              alt="image"
              width={230}
              height={270}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
