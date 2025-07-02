import Image from "next/image";
import React from "react";

const Comparision = () => {
  const comparision_data = [
    {
      image: "/images/diff-icon1.png",
      title: "Premium Quality",
    },
    {
      image: "/images/diff-icon2.png",
      title: "Ethical Sourcing",
    },
    {
      image: "/images/diff-icon3.png",
      title: "Personalized Service",
    },
    {
      image: "/images/diff-icon4.png",
      title: "Timeless Design",
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

        <div className="w-full h-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-evenly gap-14 items-center">
          {comparision_data.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-5 w-auto h-auto ">
              <Image
                src={item.image}
                alt={`icon-${index+1}`}
                width={70}
                height={70}
                className=""
              />
              <h4 className="font-sans md:text-xl xs:text-lg text-base text-black text-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparision;
