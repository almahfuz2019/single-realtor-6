"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
if (typeof window !== "undefined") {
  AOS.init();
}

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-secondary py-12 md:py-24 text-neutral">
      <div className="max-w-[1420px] mx-auto px-4 md:px-8 lg:px-16">
        <section className="grid grid-cols-1 lg:flex gap-8 md:gap-16 justify-start">
          {/* Header section with title, description, and button */}
          <div className="lg:w-[100%]" data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl font-merriweather text-neutral">
              Services We Serve
            </h1>
            <p className="text-lg md:text-2xl font-raleway mt-3 text-justify text-[#F3E3E2B2]">
              Explore our comprehensive real estate services, including buying,
              selling, market analysis, and personalized support, to help you
              achieve your property goals with confidence.
            </p>
            <button className="bg-primary mt-6 md:mt-10 px-4 md:px-6 py-2 md:py-3 rounded-lg text-neutral text-lg md:text-2xl font-roboto">
              Get In Touch
            </button>
          </div>
          {/* Service cards section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-primary">
            {/* Buy Home Card */}
            <div
              className="bg-neutral px-6 md:px-8 py-8 md:py-10 flex flex-col gap-2 rounded-2xl items-center"
              data-aos="fade-up"
            >
              <Image
                src="https://i.ibb.co/Bgxy096/Mask-group-15.png"
                height={64}
                width={64}
                alt="Buy Home"
              />
              <h5 className="text-xl md:text-2xl text-center font-merriweather text-primary">
                Buy Home
              </h5>
              <p className="text-base md:text-xl font-raleway text-center leading-6">
                Find Your Dream Home with Expert Guidance and Exclusive
                Listings.
              </p>
              <a
                href="#"
                className="font-roboto text-sm md:text-base border border-primary rounded-xl px-4 md:px-6 py-2 md:py-3 mt-6"
              >
                See All Condos
              </a>
            </div>
            {/* Sell Property Card */}
            <div
              className="bg-neutral px-6 md:px-8 py-8 md:py-10 flex flex-col gap-2 rounded-2xl items-center"
              data-aos="fade-up"
            >
              <Image
                src="https://i.ibb.co/kGcRrNB/Mask-group-16.png"
                height={64}
                width={64}
                alt="Sell Property"
              />
              <h5 className="text-xl md:text-2xl text-center font-merriweather text-primary">
                Sell Property
              </h5>
              <p className="text-base md:text-xl font-raleway text-center leading-6">
                Maximize Your Home's Value with Expert Marketing and
                Personalized Selling Strategies.
              </p>
              <a
                href="#"
                className="font-roboto text-sm md:text-base border border-primary rounded-xl px-4 md:px-6 py-2 md:py-3 mt-6"
              >
                Add Condos
              </a>
            </div>
            {/* Market Analysis Card */}
            <div
              className="bg-neutral px-6 md:px-8 py-8 md:py-10 flex flex-col gap-2 rounded-2xl items-center"
              data-aos="fade-up"
            >
              <Image
                src="https://i.ibb.co/17Zwkyf/Mask-group-17.png"
                height={64}
                width={64}
                alt="Market Analysis"
              />
              <h5 className="text-xl md:text-2xl text-center font-merriweather text-primary">
                Market Analysis
              </h5>
              <p className="text-base md:text-xl font-raleway text-center leading-6">
                Gain Insightful Market Trends and Data to Make Informed Real
                Estate Decisions.
              </p>
              <a
                href="#"
                className="font-roboto text-sm md:text-base border border-primary rounded-xl px-4 md:px-6 py-2 md:py-3 mt-6"
              >
                See Details
              </a>
            </div>
            {/* Personalized Support Card */}
            <div
              className="bg-neutral px-6 md:px-8 py-8 md:py-10 flex flex-col gap-2 rounded-2xl items-center"
              data-aos="fade-up"
            >
              <Image
                src="https://i.ibb.co/LNX7Z66/Mask-group-18.png"
                height={64}
                width={64}
                alt="Personalized Support"
              />
              <h5 className="text-xl md:text-2xl text-center font-merriweather text-primary">
                Personalized Support
              </h5>
              <p className="text-base md:text-xl font-raleway text-center leading-6">
                Find Your Dream Home with Expert Guidance and Exclusive
                Listings.
              </p>
              <a
                href="#"
                className="font-roboto text-sm md:text-base border border-primary rounded-xl px-4 md:px-6 py-2 md:py-3 mt-6"
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
