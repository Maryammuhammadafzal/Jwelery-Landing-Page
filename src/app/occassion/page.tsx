import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OccassionPage = () => {
  let occassion_data = [
    {
      subTitle: "Engagement & Weddings",
      title:
        "Begin your journey with pieces that symbolize love and commitment.",
        image: '/images/occassion-image1.jpg'
    },
    {
      subTitle: "Anniversaries",
      title: "Celebrate milestones with timeless jewelry.",
      image: '/images/occassion-image2.jpg'
    },
    {
      subTitle: "Birthdays",
      title: "Give the gift of sparkle and elegance.",
      image: '/images/occassion-image3.jpg'
    },
    {
      subTitle: "Everyday Elegance",
      title: "Add a touch of luxury to your daily life.",
      image: '/images/occassion-image4.jpg'
    },
  ];
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-full flex flex-col gap-6 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-sans lg:leading-14 md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl  text-secondary-foreground">
            Shop By Occasion
          </h2>
        </div>

        <div className="cards flex w-full h-auto flex-col justify-center items-center">
          {occassion_data.map((item, index) => (
            <div key={index} className="flex md:flex-row flex-col w-full h-auto ">
              <div className={`md:w-[50%] bg-[#FFF1EA] px-3 max-md:p-3 h-[350px] w-full flex justify-center items-center gap-8 flex-col ${index === 1 && 'md:order-2' } ${index === 3 && 'md:order-2' }`}>
                <div className="max-w-xl flex flex-col gap-4">
                  <h6 className="sm:text-2xl text-xl font-sub text-secondary ">
                    {item.subTitle}
                  </h6>
                  <h3 className="font-sans lg:leading-12 md:leading-10  leading-8 lg:text-4xl sm:text-3xl xs:text-2xl text-xl  text-secondary-foreground">
                    {item.title}
                  </h3>
                  <div className="buttons flex gap-5 flex-wrap ">
                    <Button className="text-secondary-foreground bg-secondary border border-secondary rounded-none font-mono px-7 py-5">
                      Shop Now
                    </Button>
                    <Button className="text-secondary-foreground bg-transparent border border-secondary rounded-none font-mono px-7 py-5">
                      Explore More
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`md:w-[50%] w-full  md:h-full flex h-[50%] ${index === 1 && 'md:order-1' } ${index === 3 && 'md:order-1' }`}>
                <Image
                  src={item.image}
                  alt={`occassion-image-${index+1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full md:h-[500px] h-[350px] md:object-center object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OccassionPage;
