import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative py-12 md:py-24 bg-primary 2xl:h-screen overflow-hidden">
      {/* Main container */}
      <section className="max-w-[1420px] mx-auto container px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Hero image */}
          <Image
            src="https://i.ibb.co/Jkv54Ph/Rectangle-3900.png"
            height={719}
            width={602}
            alt="Hero Image"
            className="w-full lg:w-auto xl:h-[65vh]"
          />
          {/* Hero text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-[#88A9C3] font-bold text-3xl md:text-5xl leading-9 md:leading-[60px] text-center font-merriweather">
              Live the dream, Start your <br /> next chapter
            </h1>
            <p className="text-[#88A9C3CC] font-normal text-lg md:text-2xl mt-6 md:mt-10 font-raleway text-center">
              Begin your journey of home, transform your story into a successful
              chapter with our expert real estate guidance.
            </p>
            {/* Buttons */}
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-8 justify-center w-full font-roboto">
              <a
                href="#"
                className="sm:w-auto rounded-md lg:rounded-lg bg-neutral px-4 md:px-[25px] py-2 md:py-[15px] text-lg md:text-2xl font-medium text-primary shadow transition-all duration-300 ease-in-out transform"
              >
                Explore Condos
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 lg:gap-4 sm:w-auto rounded-md lg:rounded-lg border px-4 md:px-[25px] py-2 md:py-[15px] text-lg md:text-2xl font-medium text-white shadow focus:outline-none focus:ring hover:shadow-md"
              >
                <Image
                  src="https://i.ibb.co/DQJ8MYP/Mask-group-11.png"
                  height={24}
                  width={24}
                  alt="Call Icon"
                  className="h-4 w-4 md:h-auto md:w-auto"
                />
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Social media links */}
      <div className="absolute   top-1/2 right-0 transform -translate-y-1/2 hidden lg:flex lg:flex-col space-y-2 md:space-y-4 mr-2 md:mr-6">
        <Image
          src="https://i.ibb.co/8xHH32n/Frame-1000008096.png"
          height={397}
          width={43}
          alt="Follow Us with vertical line"
          className="w-4 md:w-auto"
        />
        <a href="#" className="bg-[#88A9C3] rounded p-1.5">
          <Image
            src="https://i.ibb.co/L90bYVc/Mask-group-12.png"
            height={40}
            width={40}
            alt="Facebook"
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </a>
        <a href="#" className="bg-[#88A9C3] rounded p-1.5">
          <Image
            src="https://i.ibb.co/Lxkc01C/Mask-group-13.png"
            height={40}
            width={40}
            alt="Twitter"
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </a>
        <a href="#" className="bg-[#88A9C3] rounded p-1.5">
          <Image
            src="https://i.ibb.co/Dtp1Q50/Mask-group-14.png"
            height={40}
            width={40}
            alt="Instagram"
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </a>
      </div>
    </div>
  );
}
