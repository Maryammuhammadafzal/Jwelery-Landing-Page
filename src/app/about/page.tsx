import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  let about_images = [
    "/images/about-card-image1.jpg",
    "/images/about-card-image2.jpg",
    "/images/about-card-image3.jpg",
    "/images/about-card-image4.jpg",
  ];
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[90%] flex flex-col gap-6 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-sans lg:leading-14 md:leading-12 sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl  text-secondary-foreground">
            Explore Our Dazzling Creations
          </h2>
        </div>
        <div className="cards flex flex-wrap gap-4 justify-center items-center h-auto">
          {about_images.map((image, index) => (
            <div
              key={index}
              className="xs:w-[300px] group relative h-[400px] w-full"
            >
              <Image
                src={image}
                alt={`about-image-${index - 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform"
              />
              <div className="card-content bg-black/30 border-0  absolute group-hover:flex top-0 left-0 w-full h-full hidden justify-center items-center p-3">
                <div className="box relative w-full h-full bg-transparent flex items-center justify-center">
                    <div className="content w-full h-full flex flex-col justify-center items-center text-black">
                        <div className="flex flex-col justify-center items-center h-[50%] gap-3">
                            <h3 className="text-white text-2xl font-sans">Simple Earrings</h3>
                            <p className="text-white font-sans">$42.79</p>
                        </div>
                        <div className="flex h-[50%] text-white items-end justify-evenly gap-3 py-3 w-full">
                            <Link href='/' className="card-link relaive bg-transparent h-fit w-fit font-sans">Quick View</Link>
                            <Link href='/' className="card-link2 relaive bg-transparent h-fit w-fit font-sans">Add To Cart</Link>
                        </div>
                    </div>
                </div>
              </div>
             
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
  );
};

export default AboutPage;
