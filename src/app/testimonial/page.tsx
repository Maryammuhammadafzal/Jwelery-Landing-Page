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
  const testimonial_data = [
    {
      name: "Sophia Grace",
      testimonial:
        '"I’ve never felt more beautiful than when wearing my necklace from Ethereal Grace Jewelry. The craftsmanship is extraordinary."',
    },
    {
      name: "Sophia Grace",
      testimonial:
        '"I’ve never felt more beautiful than when wearing my necklace from Ethereal Grace Jewelry. The craftsmanship is extraordinary."',
    },
    {
      name: "Sophia Grace",
      testimonial:
        '"I’ve never felt more beautiful than when wearing my necklace from Ethereal Grace Jewelry. The craftsmanship is extraordinary."',
    },
    {
      name: "Sophia Grace",
      testimonial:
        '"I’ve never felt more beautiful than when wearing my necklace from Ethereal Grace Jewelry. The craftsmanship is extraordinary."',
    },
  ];
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[85%] flex flex-col gap-16 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-sans lg:leading-14 md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl  text-secondary-foreground">
            The Ethereal Grace Difference
          </h2>
        </div>

        <div className="w-full h-auto flex justify-evenly gap-14 items-center">
          <Carousel className="lg:w-[80%] w-[98%] mx-auto justify-center flex items-center">
            <CarouselContent className="w-full mx-auto">
              {testimonial_data.map((item, index) => (
                <CarouselItem className="w-full lg:px-20 md:px-14 sm:px-10 px-6 mx-auto flex justify-center items-center flex-col">
                  <div className="w-full flex flex-col bg-[#FFF1EA] gap-4 justify-center items-center p-3 min-h-[300px] ">
                    <Image
                      src="/images/quote.png"
                      alt={`quote-icon`}
                      width={60}
                      height={60}
                      className=""
                    />

                    <p className="max-w-2xl text-center md:text-xl sm:text-lg text-base sm:leading-6 md:leading-8">
                      {`${item.testimonial}`}
                    </p>
                    <div className="flex flex-col gap-1 justify-center items-center m-2">
                      <h5 className="font-sub text-3xl text-secondary">
                        {item.name}
                      </h5>
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
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:hidden flex" />
            <CarouselNext  className="max-sm:hidden flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
