import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Insights() {
  return (
    <div className="py-24 mx-auto">
      <div className="grid grid-cols-2 mb-10 container mx-auto justify-between items-end gap-20">
        <div className="">
          <h1 className="text-5xl font-merriweather font-normal text-neutral">
            Insights
          </h1>
          <p className="text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3 text-justify">
            Explore vibrant communities, discover hidden gems, and find the
            perfect neighborhood that matches your lifestyle with our expert
            local insights.
          </p>
        </div>
        <div className="flex justify-end">
          <button className="bg-primary mt-10 px-[25px] py-[15px] rounded-lg text-neutral font-medium text-2xl font-roboto">
            See all
          </button>
        </div>
      </div>
      <Marquee speed={60} pauseOnHover="true">
        <div className="flex gap-5 justify-start items-center w-full flex-nowrap">
          <div className="max-w-[457px]">
            <Image
              src="https://i.ibb.co/p3gm9Nf/Rectangle-3922.png"
              height="458"
              width="457"
              alt="Client"
              className="w-full"
            />
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-neutral text-2xl font-normal font-merriweather">
                Transaction Triumph Tales
              </h5>
              <p className="text-[#F3E3E2B2] text-xl font-raleway">
                Explore inspiring stories of successful real estate transactions
                and learn valuable tips from experienced professionals.
              </p>
              <a
                className="text-2xl font-medium font-roboto text-neutral underline underline-offset-4"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
          {/* Repeat the card structure for other cards */}
          <div className="max-w-[457px]">
            <Image
              src="https://i.ibb.co/p3gm9Nf/Rectangle-3922.png"
              height="458"
              width="457"
              alt="Client"
              className="w-full"
            />
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-neutral text-2xl font-normal font-merriweather">
                Transaction Triumph Tales
              </h5>
              <p className="text-[#F3E3E2B2] text-xl font-raleway">
                Explore inspiring stories of successful real estate transactions
                and learn valuable tips from experienced professionals.
              </p>
              <a
                className="text-2xl font-medium font-roboto text-neutral underline underline-offset-4"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
          <div className="max-w-[457px]">
            <Image
              src="https://i.ibb.co/p3gm9Nf/Rectangle-3922.png"
              height="458"
              width="457"
              alt="Client"
              className="w-full"
            />
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-neutral text-2xl font-normal font-merriweather">
                Transaction Triumph Tales
              </h5>
              <p className="text-[#F3E3E2B2] text-xl font-raleway">
                Explore inspiring stories of successful real estate transactions
                and learn valuable tips from experienced professionals.
              </p>
              <a
                className="text-2xl font-medium font-roboto text-neutral underline underline-offset-4"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
          <div className="max-w-[457px]">
            <Image
              src="https://i.ibb.co/p3gm9Nf/Rectangle-3922.png"
              height="458"
              width="457"
              alt="Client"
              className="w-full"
            />
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-neutral text-2xl font-normal font-merriweather">
                Transaction Triumph Tales
              </h5>
              <p className="text-[#F3E3E2B2] text-xl font-raleway">
                Explore inspiring stories of successful real estate transactions
                and learn valuable tips from experienced professionals.
              </p>
              <a
                className="text-2xl font-medium font-roboto text-neutral underline underline-offset-4"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
          {/* Repeat for other cards */}
        </div>
        <div className="mr-5"></div>
      </Marquee>
    </div>
  );
}
