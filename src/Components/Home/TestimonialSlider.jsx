/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const TestimonialSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    
    slides: {
      perView: 1,
      spacing:30
    },
  });

  return (
    <div className="">
      {/* Header section */}
      <div className="flex justify-end pr-10 mb-8 gap-4 mt-4 overflow-hidden">
        <Image
          onClick={() => instanceRef.current.prev()}
          src="/Images/left_Arrow.webp"
          height="50"
          width="50"
          alt="Client"
          className="rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 p-0.5"
        />
        <Image
          onClick={() => instanceRef.current.next()}
          src="/Images/right_arrow.webp"
          height="50"
          width="50"
          alt="Client"
          className="rounded-full cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 p-0.5"
        />
      </div>
      <div ref={sliderRef} className="keen-slider ">
        <div className="keen-slider__slide px-12 py-20 bg-neutral rounded-lg shadow-md">
          <p className="text-2xl font-normal font-merriweather border-b-1 border border-x-0 border-primary pb-5 border-t-0">
            Working with Sarah Thompson was a game-changer! Their expertise and
            dedication made finding our dream home a breeze. They truly listened
            to our needs and went above and beyond to exceed our expectations.
            We couldn't be happier with the outcome. If you're looking for a
            reliable and knowledgeable realtor, look no further. Highly
            recommended!
          </p>
          <div className="flex justify-center gap-2 mt-5  ">
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>{" "}
        <div className="keen-slider__slide px-12 py-20 bg-neutral rounded-lg shadow-md">
          <p className="text-2xl font-normal font-merriweather border-b-1 border border-x-0 border-primary pb-5 border-t-0">
            Working with Sarah Thompson was a game-changer! Their expertise and
            dedication made finding our dream home a breeze. They truly listened
            to our needs and went above and beyond to exceed our expectations.
            We couldn't be happier with the outcome. If you're looking for a
            reliable and knowledgeable realtor, look no further. Highly
            recommended!
          </p>
          <div className="flex justify-center gap-2 mt-5  ">
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
            <Image
              src="/Images/star.webp"
              height="35"
              width="35"
              alt="Client"
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>{" "}
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
