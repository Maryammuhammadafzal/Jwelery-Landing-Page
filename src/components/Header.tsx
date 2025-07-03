import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-full  bg-secondary rounded-br-2xl flex justify-center items-center rounded-bl-2xl">
      <div className="lg:w-[90%] w-full px-3 h-full flex justify-between items-center">
        <a href="/" className="logo w-auto h-auto">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </a>
        <nav className="w-auto h-auto px-2 flex justify-center items-center">
          <ul className="md:flex hidden gap-2 lg:gap-4 h-auto w-full items-center font-mono justify-center">
            <li className="p-2 text-center">
              <a href="/" className="lg:text-xl text-lg text-white">
                Home
              </a>
            </li>
            <li className="p-2 text-center">
              <a href="/" className="lg:text-xl text-lg text-white">
                About Us
              </a>
            </li>
            <li className="p-2 text-center">
              <a href="/" className="lg:text-xl text-lg text-white">
                Collection
              </a>
            </li>
            <li className="p-2 text-center">
              <a href="/" className="lg:text-xl text-lg text-white">
                Occasions
              </a>
            </li>
            <li className="p-2 text-center">
              <a href="/" className="lg:text-xl text-lg text-white">
                Testimonials
              </a>
            </li>
            <li className="p-2 text-center">
              <Button className="text-secondary-foreground bg-white hover:border border-secondary rounded-none font-mono px-7 py-5">
                Contact Now
              </Button>
            </li>
          </ul>
          <div className="p-2 md:hidden flex justify-center bg-white rounded-xl text-black items-center w-auto h-auto">
            <MenuIcon size={20} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
