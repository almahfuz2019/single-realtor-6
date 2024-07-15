/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#090909E5] py-12 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-20 items-start lg:items-end justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-[70%]">
            <Image
              data-aos="fade-up"
              className="-mt-12 mb-8"
              src="https://i.ibb.co/vmqW2Cg/Frame-1000008324.png"
              height="140"
              width="240"
              alt="footer logo"
            />
            <h1 className="text-neutral text-3xl md:text-4xl lg:text-5xl font-normal leading-[40px] md:leading-[50px] lg:leading-[60px] font-merriweather">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-raleway text-[#F3E3E2CC] mt-4">
              Connect with Us Today for Personalized Assistance and Expert
              Guidance on Your Real Estate Journey. Let's Transform Your Dreams
              into Reality.
            </p>
            <button className="bg-[#88A9C3] hover:bg-[#6e8fa3] text-black  text-lg md:text-xl lg:text-2xl font-roboto mt-6 px-[26px] py-[16px] rounded-xl font-roboto font-semibold">
              Let's Talk
            </button>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-auto">
            <div className="flex gap-4 mb-6">
              <a href="#">
                <Image
                  src="https://i.ibb.co/HCQd3Zg/Frame-456-7.png"
                  height="48"
                  width="48"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <Image
                  src="https://i.ibb.co/HCQd3Zg/Frame-456-7.png"
                  height="48"
                  width="48"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <Image
                  src="https://i.ibb.co/HCQd3Zg/Frame-456-7.png"
                  height="48"
                  width="48"
                  alt="Instagram"
                />
              </a>
            </div>
            <h1 className="text-neutral text-3xl md:text-4xl lg:text-5xl font-normal leading-[40px] md:leading-[50px] lg:leading-[60px] font-merriweather">
              Quick Links
            </h1>
            <div className="flex flex-wrap gap-4  text-lg md:text-xl lg:text-2xl text-[#F3E3E2CC] font-roboto mt-4">
              <a href="#" className="hover:text-neutral">
                Home
              </a>
              <a href="#" className="hover:text-neutral">
                About Me
              </a>
              <a href="#" className="hover:text-neutral">
                Services
              </a>
              <a href="#" className="hover:text-neutral">
                Featured Property
              </a>
              <a href="#" className="hover:text-neutral">
                Neighborhood
              </a>
              <a href="#" className="hover:text-neutral">
                Testimonial
              </a>
              <a href="#" className="hover:text-neutral">
                Insights
              </a>
              <a href="#" className="hover:text-neutral">
                Contact
              </a>
              <a href="#" className="hover:text-neutral">
                Work Process
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
