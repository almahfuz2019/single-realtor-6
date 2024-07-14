/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#090909E5] py-12 px-4">
      <div className="max-w-[1420px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-end justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-[40%]">
            <h1 className="text-neutral text-3xl md:text-4xl lg:text-5xl font-normal leading-[40px] md:leading-[50px] lg:leading-[60px] font-merriweather">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-raleway text-[#F3E3E2CC] mt-4">
              Connect with Us Today for Personalized Assistance and Expert
              Guidance on Your Real Estate Journey. Let's Transform Your Dreams
              into Reality.
            </p>
            <button className="bg-[#88A9C3] hover:bg-[#6e8fa3] text-neutral font-medium text-lg md:text-xl lg:text-2xl font-roboto mt-6 px-6 py-3 rounded-lg">
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
            <div className="flex flex-wrap gap-2 md:gap-4 text-lg md:text-xl lg:text-2xl text-[#F3E3E2CC] font-roboto mt-4">
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
