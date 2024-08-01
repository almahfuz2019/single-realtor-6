"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div
      id="services"
      className="bg-secondary py-12 md:py-24 text-neutral overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-8">
        <section className="grid grid-cols-1 lg:flex gap-8 md:gap-16 justify-start">
          {/* Header section with title, description, and button */}
          <div className="lg:w-[100%]" data-aos="fade-right">
            <h1 className="text-3xl md:text-[42px]  font-merriweather text-neutral">
              Services We Serve
            </h1>
            <p className="text-base md:text-xl font-raleway text-justify text-[#F3E3E2B2] mt-4 md:mt-6">
              Explore our comprehensive real estate services, including buying,
              selling, market analysis, and personalized support, to help you
              achieve your property goals with confidence.
            </p>
            <div className="flex justify-end lg:justify-start items-end">
              <button className="mt-6 md:mt-8 bg-primary px-4 md:px-5 py-2 md:py-2.5  rounded-lg text-neutral font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-neutral hover:text-primary hover:shadow-lg ">
                Get In Touch
              </button>
            </div>
          </div>
          {/* Service cards section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-primary">
            {/* Buy Home Card */}
            <div
              className="bg-neutral px-6 md:px-6 py-8 md:py-8 flex flex-col gap-2 rounded-2xl items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
            >
              <Image
                src="/Images/Buy_Home.webp"
                height={64}
                width={64}
                alt="Buy Home"
              />
              <h5 className="text-lg md:text-xl text-center font-merriweather text-primary">
                Buy Home
              </h5>
              <p className="text-sm md:text-base font-raleway text-center leading-6">
                Find Your Dream Home with Expert Guidance and Exclusive
                Listings.
              </p>
              <a
                href="#"
                className="font-roboto text-xs md:text-sm border border-primary rounded-xl px-3 md:px-4 py-1.5 md:py-2 mt-6 transition-colors duration-300 ease-in-out hover:bg-primary hover:text-neutral"
              >
                See All Condos
              </a>
            </div>
            {/* Sell Property Card */}
            <div
              className="bg-neutral px-6 md:px-6 py-8 md:py-8 flex flex-col gap-2 rounded-2xl items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
            >
              <Image
                src="/Images/Sell_Property.webp"
                height={64}
                width={64}
                alt="Sell Property"
              />
              <h5 className="text-lg md:text-xl text-center font-merriweather text-primary">
                Sell Property
              </h5>
              <p className="text-sm md:text-base font-raleway text-center leading-6">
                Maximize Your Home's Value with Expert Marketing and
                Personalized Selling Strategies.
              </p>
              <a
                href="#"
                className="font-roboto text-xs md:text-sm border border-primary rounded-xl px-3 md:px-4 py-1.5 md:py-2 mt-6 transition-colors duration-300 ease-in-out hover:bg-primary hover:text-neutral"
              >
                Add Condos
              </a>
            </div>
            {/* Market Analysis Card */}
            <div
              className="bg-neutral px-6 md:px-6 py-8 md:py-8 flex flex-col gap-2 rounded-2xl items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
            >
              <Image
                src="/Images/Market_Analysis.webp"
                height={64}
                width={64}
                alt="Market Analysis"
              />
              <h5 className="text-lg md:text-xl text-center font-merriweather text-primary">
                Market Analysis
              </h5>
              <p className="text-sm md:text-base font-raleway text-center leading-6">
                Gain Insightful Market Trends and Data to Make Informed Real
                Estate Decisions.
              </p>
              <a
                href="#"
                className="font-roboto text-xs md:text-sm border border-primary rounded-xl px-3 md:px-4 py-1.5 md:py-2 mt-6 transition-colors duration-300 ease-in-out hover:bg-primary hover:text-neutral"
              >
                See Details
              </a>
            </div>
            {/* Personalized Support Card */}
            <div
              className="bg-neutral px-6 md:px-6 py-8 md:py-8 flex flex-col gap-2 rounded-2xl items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
            >
              <Image
                src="/Images/Personalized_Support.webp"
                height={64}
                width={64}
                alt="Personalized Support"
              />
              <h5 className="text-lg md:text-xl text-center font-merriweather text-primary">
                Personalized Support
              </h5>
              <p className="text-sm md:text-base font-raleway text-center leading-6">
                Find Your Dream Home with Expert Guidance and Exclusive
                Listings.
              </p>
              <a
                href="#"
                className="font-roboto text-xs md:text-sm border border-primary rounded-xl px-3 md:px-4 py-1.5 md:py-2 mt-6 transition-colors duration-300 ease-in-out hover:bg-primary hover:text-neutral"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
