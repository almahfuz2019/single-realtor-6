import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const insightsData = [
  {
    title: "Transaction Triumph Tales",
    description:
      "Explore inspiring stories of successful real estate transactions and learn valuable tips from experienced professionals.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Neighborhood Narratives",
    description:
      "Delve into detailed descriptions of the most sought-after neighborhoods and what makes them unique.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Market Movement",
    description:
      "Stay updated with the latest market trends and insights to make informed real estate decisions.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
  {
    title: "Homeowner Highlights",
    description:
      "Read about the experiences of homeowners and get inspired by their journeys in the real estate world.",
    imageUrl: "https://i.ibb.co/p3gm9Nf/Rectangle-3922.png",
    link: "#",
  },
];

export default function Insights() {

  return (
    <div className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 justify-between items-end px-4 md:px-8">
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl font-merriweather font-normal text-neutral">
              Insights
            </h1>
            <p className="text-lg md:text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3 text-justify">
              Explore vibrant communities, discover hidden gems, and find the
              perfect neighborhood that matches your lifestyle with our expert
              local insights.
            </p>
          </div>
          <div className="flex justify-end" data-aos="fade-left">
            <button className="bg-primary mt-6 md:mt-10 px-6 md:px-[25px] py-3 md:py-[15px] rounded-lg text-neutral font-medium text-lg md:text-2xl font-roboto">
              See all
            </button>
          </div>
        </div>
      </div>
      <Marquee speed={60} pauseOnHover={true}>
        <div
          className="flex gap-5 justify-start items-center w-full flex-nowrap"
          data-aos="zoom-in"
        >
          {insightsData.map((insight, index) => (
            <div key={index} className="max-w-xs md:max-w-[457px]">
              <Image
                src={insight.imageUrl}
                height={458}
                width={457}
                alt={insight.title}
                className="w-full"
              />
              <div className="flex flex-col gap-2 mt-4">
                <h5 className="text-neutral text-xl md:text-2xl font-normal font-merriweather">
                  {insight.title}
                </h5>
                <p className="text-[#F3E3E2B2] text-base md:text-xl font-raleway">
                  {insight.description}
                </p>
                <a
                  className="text-lg md:text-2xl font-medium font-roboto text-neutral underline underline-offset-4"
                  href={insight.link}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mr-5"></div>
      </Marquee>
    </div>
  );
}
