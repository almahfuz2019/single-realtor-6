import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="relative py-12 md:py-24 bg-primary 2xl:h-screen overflow-hidden"
    >
      {/* Main container */}
      <section className="max-w-screen-xl mx-auto container px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Hero image */}
          <Image
            src="/Images/hero_Section_Model.webp"
            height={719}
            width={602}
            alt="Hero Image"
            className="w-full lg:w-auto xl:h-[65vh]"
          />
          {/* Hero text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-[#88A9C3] font-bold text-3xl md:text-5xl leading-8 md:leading-[50px] text-center font-merriweather">
              Live the dream, Start your <br /> next chapter
            </h1>
            <p className="text-[#88A9C3CC] font-normal text-base md:text-xl mt-4 md:mt-8 font-raleway text-center">
              Begin your journey of home, transform your story into a successful
              chapter with our expert real estate guidance.
            </p>
            {/* Buttons */}
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center w-full font-roboto">
              <a
                href="#services"
                className="bg-neutral px-4 md:px-5 py-2 md:py-2.5  rounded-lg text-primary font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out    "
              >
                Explore Condos
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 lg:gap-3 sm:w-auto rounded-md lg:rounded-lg border  text-white shadow focus:outline-none focus:ring  px-4 md:px-5 py-2 md:py-2.5    font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-[#2B4257] hover:text-neutral hover:shadow-lg "
              >
                <Image
                  src="/Images/Call_Icon_For_Button.webp"
                  height={20}
                  width={20}
                  alt="Call Icon"
                  className="h-4 w-4 md:h-5 md:w-auto "
                />
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Social media links */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:flex lg:flex-col space-y-2 md:space-y-3 mr-2 md:mr-4">
        <Image
          src="/Images/FollowUs.webp"
          height={397}
          width={43}
          alt="Follow Us with vertical line"
          className="w-4 md:w-auto 2xl:block hidden"
        />
        <a
          href="https://www.facebook.com/"
          className="bg-[#88A9C3] rounded flex items-center justify-center py-1 px-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <Image
            src="/Images/Hero_Facebook_Icon.webp"
            height={40}
            width={40}
            alt="Facebook"
            className=""
          />
        </a>
        <a
          href="https://x.com/"
          className="bg-[#88A9C3] rounded flex items-center justify-center py-1 px-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <Image
            src="/Images/Hero_twitter_Icon.webp"
            height={40}
            width={40}
            alt="Twitter"
            className=""
          />
        </a>
        <a
          href="https://www.instagram.com/"
          className="bg-[#88A9C3] rounded flex items-center justify-center py-1 px-1 transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <Image
            src="/Images/Hero_Instagram_Icon.webp"
            height={40}
            width={40}
            alt="Instagram"
            className=""
          />
        </a>
      </div>
    </div>
  );
}
