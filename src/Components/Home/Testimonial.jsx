import Image from "next/image";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

// Initialize AOS
if (typeof window !== "undefined") {
  AOS.init();
}

export default function Testimonial() {
  const testimonials = [
    {
      name: "Alicia Leyland",
      role: "Happy Client",
      image: "https://i.ibb.co/Xzbzvbf/Rectangle-3916.png",
    },
    {
      name: "John Doe",
      role: "Satisfied Buyer",
      image: "https://i.ibb.co/Xzbzvbf/Rectangle-3916.png",
    },
    {
      name: "Jane Smith",
      role: "Pleased Seller",
      image: "https://i.ibb.co/Xzbzvbf/Rectangle-3916.png",
    },
  ];

  return (
    <div className="bg-primary py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="w-full md:w-[45%]" data-aos="fade-right">
            <h1 className="text-5xl font-merriweather font-normal text-[#88A9C3]">
              Testimonial
            </h1>
            <p className="text-2xl font-normal text-[#88A9C3B2] font-raleway mt-3 text-justify">
              Discover What Our Clients Say: Real Stories, Real Experiences,
              Real Satisfaction – Testimonials Speak Louder Than Words.
            </p>
            <button className="bg-neutral hover:bg-[#F3E3E2CC] mt-10 px-[25px] py-[15px] rounded-lg text-primary font-medium text-2xl font-roboto">
              Contact Me
            </button>
            <br />
            <br />
            <br />
            <div className="flex flex-col gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral hover:bg-[#F3E3E2CC] flex items-center justify-start gap-4 px-6 py-4 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial`}
                    width="171"
                    height="150"
                    className="rounded-lg"
                  />
                  <div>
                    <h5 className="text-[#090909] text-2xl font-merriweather">
                      {testimonial.name}
                    </h5>
                    <p className="text-2xl font-normal font-raleway mt-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[55%]" data-aos="fade-left">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
