"use client";
import Image from "next/image";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Alicia Leyland",
      role: "Happy Client",
      image: "/Images/ClientImage1.webp",
    },
    {
      name: "John Doe",
      role: "Satisfied Buyer",
      image: "/Images/ClientImage1.webp",
    },
    {
      name: "Jane Smith",
      role: "Pleased Seller",
      image: "/Images/ClientImage1.webp",
    },
  ];

  return (
    <div
      id="testimonial"
      className="bg-primary py-12 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <h1 className="text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-merriweather font-normal text-[#88A9C3]">
              Testimonial
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#88A9C3B2] font-raleway mt-3 text-justify">
              Discover What Our Clients Say: Real Stories, Real Experiences,
              Real Satisfaction – Testimonials Speak Louder Than Words.
            </p>

            <div
              className="flex justify-start sm:justify-end lg:justify-start mt-8 lg:mt-0"
              data-aos="fade-left"
            >
              <button className="bg-neutral px-4 md:px-5 py-2 md:py-2.5 mt-6 md:mt-10 rounded-lg text-primary font-medium text-base md:text-xl font-roboto transition-all duration-300 ease-in-out hover:bg-[#2B4257] hover:text-neutral hover:shadow-lg ">
                Contact Me
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral hover:bg-[#F3E3E2CC] flex items-center justify-start gap-4 px-4 md:px-5 py-4 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial`}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h5 className="text-[#090909] text-base sm:text-lg md:text-xl font-merriweather">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm sm:text-base md:text-lg font-normal font-raleway mt-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[55%]" data-aos="fade-left">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
