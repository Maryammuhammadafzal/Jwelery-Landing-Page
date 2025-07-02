import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
    let about_images = [
        '/images/about-card-image1.jpg',
        '/images/about-card-image2.jpg',
        '/images/about-card-image3.jpg',
        '/images/about-card-image4.jpg',
    ]
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[90%] flex flex-col gap-6 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-sans leading-14 lg:text-5xl md:text-4xl sm:text-5xl xs:text-4xl text-3xl  text-secondary-foreground">
            Explore Our Dazzling Creations
          </h2>
          <div className="cards flex flex-wrap gap-4 justify-center items-center h-auto">
           {about_images.map((image , index) => (
             <div key={index} className="xs:w-[300px] h-[400px] w-full">
              <Image
                src={image}
                alt={`about-image-${index-1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
           ))}
          </div>
          <div className="buttons flex justify-center items-center ">
            <Button className="text-secondary-foreground bg-transparent border border-secondary rounded-none font-mono px-7 py-5">
             More Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
