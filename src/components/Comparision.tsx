import Image from "next/image";
import React from "react";

const Comparision = () => {
  return (
    <div className="flex w-full h-auto justify-center md:py-20 sm:py-14 py-8 items-center">
      <div className="w-[80%] flex flex-col gap-16 h-auto justify-center items-center">
        <div className="heading max-w-xl flex justify-center items-center text-center">
          <h2 className="font-sans lg:leading-14 md:leading-12  sm:leading-10 leading-8 lg:text-5xl sm:text-4xl xs:text-3xl text-2xl  text-secondary-foreground">
            The Ethereal Grace Difference
          </h2>
        </div>

        <div className="w-full h-auto p-3 flex flex-wrap justify-evenly gap-14 items-center">
          <div className="flex flex-col justify-center items-center gap-3 w-[205px] h-auto p-2">
            <Image
              src="/images/diff-icon1.png"
              alt={`icon`}
              width={40}
              height={40}
              className=""
            />
            <h4 className="font-sans text-xl text-black text-center">
              Premium Quality
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparision;
