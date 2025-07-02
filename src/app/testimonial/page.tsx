import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const TestimonialPage = () => {
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[85%] flex flex-col gap-16 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-sans lg:leading-14 md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl  text-secondary-foreground">
            The Ethereal Grace Difference
          </h2>
        </div>

        <div className="w-full h-auto p-3 flex justify-evenly gap-14 items-center">
          <Carousel className="w-[60%] mx-auto justify-center flex items-center">
            <CarouselContent className="w-full">
              <CarouselItem className="w-full mx-3 bg-[#FFF1EA] flex justify-center items-center flex-col">
                <div className="w-full flex flex-col gap-4 justify-center items-center min-h-[300px] ">
                  <Image
                    src="/images/quote.png"
                    alt={`quote-icon`}
                    width={60}
                    height={60}
                    className=""
                  />
                
                <p className="max-w-2xl text-center text-xl leading-8">
                  "I’ve never felt more beautiful than when wearing my necklace
                  from Ethereal Grace Jewelry. The craftsmanship is
                  extraordinary."
                </p>
                <div className="flex flex-col gap-1 justify-center items-center m-2">
                  <h5 className="font-sub text-3xl text-secondary">Sophia Grace</h5>
                  <Image
                    src="/images/border-bottom.png"
                    alt={`border-vector`}
                    width={100}
                    height={30}
                    className=""
                  />
                </div>
                </div>
              </CarouselItem>
             
            </CarouselContent>
            <CarouselPrevious  />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
