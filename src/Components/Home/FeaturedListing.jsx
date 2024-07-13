"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const cardData = {
  forBuy: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    // Add more items as needed
  ],
  forSell: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    // Add more items as needed
  ],

  forRent: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    // Add more items as needed
  ],
  forSelli: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/BfrHHDR/Rectangle-3914.png",
    },
    // Add more items as needed
  ],
};

const itemsPerPage = 6;

export default function Featured() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tabIndex) => {
    setCurrentTab(tabIndex);
    setCurrentPage(1);
  };

  const getPaginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getTotalPages = (data) => {
    return Math.ceil(data.length / itemsPerPage);
  };

  const getAllData = () => {
    return [...cardData.forBuy, ...cardData.forSell, ...cardData.forRent];
  };

  const currentData = () => {
    switch (currentTab) {
      case 0:
        return getAllData();
      case 1:
        return cardData.forBuy;
      case 2:
        return cardData.forSell;
      case 3:
        return cardData.forRent;
      default:
        return getAllData();
    }
  };

  const productCount = () => {
    switch (currentTab) {
      case 0:
        return `${getAllData().length}`;
      case 1:
        return `${cardData.forBuy.length}`;
      case 2:
        return `${cardData.forSell.length}`;
      case 3:
        return `${cardData.forRent.length}`;

      default:
        return `${getAllData().length}`;
    }
  };

  return (
    <div className="">
      <section className="container overflow-hidden mx-auto py-32 lg:py-[218px] px-4 font-raleway">
        {/* Header section */}
        <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h1 className="text-5xl font-merriweather font-normal text-neutral">
            Featured Properties
          </h1>
          <p className="text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3 text-center">
            Explore Our Curated Selection of Homes: Handpicked Properties
            Offering Exceptional Value, Stunning Designs, and Ideal Locations
            for Every Lifestyle and Budget.
          </p>
        </header>
        <h5 className="text-neutral text-4xl font-medium font-raleway mb-6">
          Latest Sold
        </h5>
        <div>
          <div className="flex flex-col md:flex-row items-center   mx-auto   rounded-lg">
            <div className="relative w-full rounded-3xl overflow-hidden">
              <Image
                src="https://i.ibb.co/Q82MMCm/Rectangle-3913.png"
                alt="Mediterranean Sealine Cottage"
                width="963"
                height="572"
                className="rounded-lg"
              />
            </div>
            <div className="bg-[#F8E7E0] -ml-28 relative z-10 p-6 rounded-lg md:w-1/2 py-14 px-8 text-center flex flex-col gap-4 font-raleway ">
              <p className="text-2xl font-raleway font-medium text-[#9C2D41]">
                $5,555,555
              </p>
              <p className="text-[#14202E] font-normal text-2xl font-merriweather">
                Mediterranean Sealine Cottage
              </p>
              <p className="text-[#14202E] flex items-center justify-center text-xl">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13 21.314l-4.657-4.657a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                1/2A House, 42 Trudo Road, Toronto
              </p>
              <p className="text-primary text-2xl">
                3 Bed | 2 Bath | 1980 Sq-meter
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-10"></div>
        <div className="mx-auto mt-20">
          <h5 className="text-neutral text-4xl font-medium font-raleway mb-6">
            All Condos
          </h5>
          <Tabs selectedIndex={currentTab} onSelect={handleTabChange}>
            <TabList className="flex lg:space-x-4 text-xl  font-normal text-black mb-6">
              <Tab
                selectedClassName="bg-neutral rounded text-primary"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-neutral border-transparent text-neutral"
              >
                All
              </Tab>
              <Tab
                selectedClassName="bg-neutral rounded text-primary"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-neutral border-transparent text-neutral"
              >
                Buy
              </Tab>
              <Tab
                selectedClassName="bg-neutral rounded text-primary"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-neutral border-transparent text-neutral"
              >
                Sell
              </Tab>

              <Tab
                selectedClassName="bg-neutral rounded text-primary"
                className="px-4 py-2 cursor-pointer border-b-2 hover:border-neutral border-transparent text-neutral"
              >
                Rent
              </Tab>
            </TabList>
            <div className="flex justify-between items-center border py-4 border-x-0">
              <p className="text-xl text-neutral">
                {productCount()} Listings Found
              </p>
              <div className="flex items-center text-xl font-normal">
                <span className="mr-2 hidden md:block text-neutral">
                  Go to the page:
                </span>
                <span className="mr-2 block md:hidden">Pages:</span>
                <select
                  value={currentPage}
                  onChange={(e) => handlePageChange(Number(e.target.value))}
                  className="border rounded px-2 py-1"
                >
                  {Array.from({ length: getTotalPages(currentData()) }).map(
                    (_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                {getPaginatedData(getAllData()).map((card, index) => (
                  <div key={index}>
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden group font-r aleway"
                      data-aos="fade-up"
                    >
                      <Image
                        src={card.imgSrc}
                        alt={card.name}
                        width={449}
                        height={489}
                        className="w-full h-auto transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pt-32 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-[#F3E3E299] p-4  w-full text-center text-primary">
                          <div className="flex justify-between items-center text-[28px] font-semibold">
                            <p>{card.price}</p>
                            <p>Rent</p>
                          </div>
                          <div className="mb-2 flex justify-between mt-4 ">
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal ">
                              <Image
                                src="https://i.ibb.co/7X7Z8vR/image-37-1.png"
                                alt="bed"
                                height="24"
                                width="24"
                              />
                              {card.beds} Beds
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/Bn41CjT/image-38-1.png"
                                alt="bath"
                                height="24"
                                width="24"
                              />
                              {card.baths} Baths
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/5FWq6jL/image-39-1.png"
                                alt="area"
                                height="24"
                                width="24"
                              />
                              {card.measurement} Sq/Ft
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col gap-5 mt-4">
                      <h5 className="font-normal text-2xl text-neutral text-center">
                        {card.name}
                      </h5>
                      <p className="font-normal text-xl text-[#F3E3E2B2] text-center flex items-center gap-2">
                        <Image
                          src="https://i.ibb.co/2KX39VN/Mask-group-19.png"
                          height="24"
                          width="24"
                          alt=""
                        />{" "}
                        12/A House, 42 Trudo Road, Toronto
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {getPaginatedData(cardData.forBuy).map((card, index) => (
                  <div key={index}>
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden group font-r aleway"
                      data-aos="fade-up"
                    >
                      <Image
                        src={card.imgSrc}
                        alt={card.name}
                        width={449}
                        height={489}
                        className="w-full h-auto transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pt-32 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-[#F3E3E299] p-4  w-full text-center text-primary">
                          <div className="flex justify-between items-center text-[28px] font-semibold">
                            <p>{card.price}</p>
                            <p>Rent</p>
                          </div>
                          <div className="mb-2 flex justify-between mt-4 ">
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal ">
                              <Image
                                src="https://i.ibb.co/7X7Z8vR/image-37-1.png"
                                alt="bed"
                                height="24"
                                width="24"
                              />
                              {card.beds} Beds
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/Bn41CjT/image-38-1.png"
                                alt="bath"
                                height="24"
                                width="24"
                              />
                              {card.baths} Baths
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/5FWq6jL/image-39-1.png"
                                alt="area"
                                height="24"
                                width="24"
                              />
                              {card.measurement} Sq/Ft
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col gap-5 mt-4">
                      <h5 className="font-normal text-2xl text-neutral text-center">
                        {card.name}
                      </h5>
                      <p className="font-normal text-xl text-[#F3E3E2B2] text-center flex items-center gap-2">
                        <Image
                          src="https://i.ibb.co/2KX39VN/Mask-group-19.png"
                          height="24"
                          width="24"
                          alt=""
                        />{" "}
                        12/A House, 42 Trudo Road, Toronto
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {getPaginatedData(cardData.forSell).map((card, index) => (
                  <div key={index}>
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden group font-r aleway"
                      data-aos="fade-up"
                    >
                      <Image
                        src={card.imgSrc}
                        alt={card.name}
                        width={449}
                        height={489}
                        className="w-full h-auto transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pt-32 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-[#F3E3E299] p-4  w-full text-center text-primary">
                          <div className="flex justify-between items-center text-[28px] font-semibold">
                            <p>{card.price}</p>
                            <p>Rent</p>
                          </div>
                          <div className="mb-2 flex justify-between mt-4 ">
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal ">
                              <Image
                                src="https://i.ibb.co/7X7Z8vR/image-37-1.png"
                                alt="bed"
                                height="24"
                                width="24"
                              />
                              {card.beds} Beds
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/Bn41CjT/image-38-1.png"
                                alt="bath"
                                height="24"
                                width="24"
                              />
                              {card.baths} Baths
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/5FWq6jL/image-39-1.png"
                                alt="area"
                                height="24"
                                width="24"
                              />
                              {card.measurement} Sq/Ft
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col gap-5 mt-4">
                      <h5 className="font-normal text-2xl text-neutral text-center">
                        {card.name}
                      </h5>
                      <p className="font-normal text-xl text-[#F3E3E2B2] text-center flex items-center gap-2">
                        <Image
                          src="https://i.ibb.co/2KX39VN/Mask-group-19.png"
                          height="24"
                          width="24"
                          alt=""
                        />{" "}
                        12/A House, 42 Trudo Road, Toronto
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {getPaginatedData(cardData.forRent).map((card, index) => (
                  <div key={index}>
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden group font-r aleway"
                      data-aos="fade-up"
                    >
                      <Image
                        src={card.imgSrc}
                        alt={card.name}
                        width={449}
                        height={489}
                        className="w-full h-auto transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pt-32 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-[#F3E3E299] p-4  w-full text-center text-primary">
                          <div className="flex justify-between items-center text-[28px] font-semibold">
                            <p>{card.price}</p>
                            <p>Rent</p>
                          </div>
                          <div className="mb-2 flex justify-between mt-4 ">
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal ">
                              <Image
                                src="https://i.ibb.co/7X7Z8vR/image-37-1.png"
                                alt="bed"
                                height="24"
                                width="24"
                              />
                              {card.beds} Beds
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/Bn41CjT/image-38-1.png"
                                alt="bath"
                                height="24"
                                width="24"
                              />
                              {card.baths} Baths
                            </p>
                            <p className="flex items-center gap-2 text-lg md:text-2xl  font-normal">
                              <Image
                                src="https://i.ibb.co/5FWq6jL/image-39-1.png"
                                alt="area"
                                height="24"
                                width="24"
                              />
                              {card.measurement} Sq/Ft
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col gap-5 mt-4">
                      <h5 className="font-normal text-2xl text-neutral text-center">
                        {card.name}
                      </h5>
                      <p className="font-normal text-xl text-[#F3E3E2B2] text-center flex items-center gap-2">
                        <Image
                          src="https://i.ibb.co/2KX39VN/Mask-group-19.png"
                          height="24"
                          width="24"
                          alt=""
                        />{" "}
                        12/A House, 42 Trudo Road, Toronto
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
          {/* pagination  */}
          <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center mt-20 border border-x-0 pt-4 border-b-0">
            <p className="text-xl text-neutral">
              {productCount()} Listings Found
            </p>
            <div className="flex flex-wrap gap-y-5 text-xl text-black">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 border rounded bg-neutral  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 border rounded bg-neutral disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: getTotalPages(currentData()) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`mx-1 px-3 py-1 border rounded ${
                      currentPage === index + 1
                        ? "bg-neutral rounded text-primary"
                        : "text-neutral "
                    }`}
                  >
                    {index + 1}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(getTotalPages(currentData()))}
                disabled={currentPage === getTotalPages(currentData())}
                className="mx-1 px-3 py-1 border rounded bg-neutral  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === getTotalPages(currentData())}
                className="mx-1 px-3 py-1 border rounded bg-neutral disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="flex items-center text-xl font-normal">
              <span className="mr-2 hidden md:block text-neutral">
                Go to the page:
              </span>
              <span className="mr-2 block md:hidden">Pages:</span>
              <select
                value={currentPage}
                onChange={(e) => handlePageChange(Number(e.target.value))}
                className="border rounded px-2 py-1 bg-neutral text-primary"
              >
                {Array.from({ length: getTotalPages(currentData()) }).map(
                  (_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
