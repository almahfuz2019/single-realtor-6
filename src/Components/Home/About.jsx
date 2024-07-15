import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="bg-primary">
      <div className="max-w-[1420px] mx-auto py-12 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-20">
          <div className="w-full lg:w-[75%]">
            {/* Header section with title and description */}
            <header className="grid grid-cols-1  gap-8 items-center  mb-12">
              <div data-aos="fade-right">
                <h1 className="text-3xl md:text-5xl font-merriweather text-[#88A9C3]">
                  About Me
                </h1>
                <p className="text-lg md:text-2xl text-[#88A9C3CC] font-raleway mt-3">
                  Passionate Real Estate Professional Committed to Helping You
                  Find Your Dream Home with Personalized Service, Local
                  Expertise, and a Dedication to Excellence.
                </p>
              </div>
              <div
                className="flex justify-start sm:justify-end lg:justify-start"
                data-aos="fade-left"
              >
                <button className="bg-neutral px-4 md:px-6 py-2 md:py-3 rounded-lg text-primary font-medium text-lg md:text-2xl font-roboto">
                  Contact Me
                </button>
              </div>
            </header>
          </div>
          <div className="w-full md:w-auto">
            <div
              className="grid grid-cols-2 gap-4 md:gap-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Stats Section */}
              {[
                { value: "10", label: "Years of experience in real estate" },
                { value: "500+", label: "Real estate transactions till now" },
                { value: "1k+", label: "Happy clients" },
                { value: "1B+", label: "Total revenue achieved" },
              ].map((stat, index) => (
                <div key={index}>
                  <h5 className="text-3xl md:text-5xl font-bold text-center mb-3 text-neutral font-merriweather">
                    {stat.value}
                  </h5>
                  <p className="text-lg md:text-2xl font-normal leading-[25px] text-center text-[#88A9C3CC] font-raleway">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image and Bio Section */}
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20 mt-16">
          <div className="w-full " data-aos="fade-right">
            <Image
              src="https://i.ibb.co/Xzbzvbf/Rectangle-3916.png"
              alt="Mediterranean Sealine Cottage"
              width={488}
              height={526}
              className="rounded-lg w-full h-auto "
            />
            <div className="flex justify-start items-center gap-4 mt-4">
              <Image
                src="https://i.ibb.co/4Fr4YXj/Rectangle-3917.png"
                alt="Mediterranean Sealine Cottage"
                width={232}
                height={200}
                className="rounded-lg w-full h-auto sm:w-[190px] sm:h-[200px] object-cover  2xl:h-full 2xl:w-full"
              />
              <Image
                src="https://i.ibb.co/4Fr4YXj/Rectangle-3917.png"
                alt="Mediterranean Sealine Cottage"
                width={232}
                height={200}
                className="rounded-lg w-full h-auto sm:w-[190px] sm:h-[200px] 2xl:h-full 2xl:w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-[170%]" data-aos="fade-left">
            <p className="text-lg md:text-2xl font-raleway text-[#88A9C3CC] text-justify leading-7 md:leading-[29px] mb-10">
              Meet Sarah Thompson, A dedicated and experienced real estate
              professional with over a decade of experience in the industry.
              Sarah's passion for helping clients find their dream homes is
              evident in her personalized approach and unwavering commitment to
              excellence. She specializes in residential properties, with a keen
              focus on first-time homebuyers, luxury estates, and investment
              properties.
              <br />
              <br />
              Sarah's in-depth knowledge of the local market, combined with her
              strong negotiation skills, ensures that her clients receive the
              best possible deals. She is known for her attention to detail,
              responsiveness, and ability to make the buying or selling process
              smooth and stress-free. Her clients appreciate her honest advice,
              tailored strategies, and her ability to listen to their unique
              needs and preferences.
              <br />
              <br />
              In addition to her professional expertise, Sarah is an active
              member of the community. She volunteers with local charities and
              participates in neighborhood events, fostering strong connections
              and staying informed about the latest market trends. When she's
              not working, Sarah enjoys exploring the outdoors, spending time
              with her family, and discovering new restaurants and cultural
              activities in the area.
              <br />
              <br />
              Whether you're looking to buy, sell, or invest, Sarah Thompson is
              the trusted real estate advisor you need to turn your real estate
              dreams into reality.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://i.ibb.co/wND4fHR/Frame-1000008263.png"
                  alt="Personalized Approach"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <p className="text-lg md:text-2xl font-raleway text-[#88A9C3CC] text-justify leading-7 md:leading-[29px]">
                  Personalized Approach
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="https://i.ibb.co/wND4fHR/Frame-1000008263.png"
                  alt="Strong Community Connections"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <p className="text-lg md:text-2xl font-raleway text-[#88A9C3CC] text-justify leading-7 md:leading-[29px]">
                  Strong Community Connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
