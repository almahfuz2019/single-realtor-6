import React from "react"; // Import AOS library

// Initialize AOS
if (typeof window !== "undefined") {
  AOS.init();
}

export default function WorkProcess() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation and Needs Assessment",
      description:
        "We begin by meeting with clients to understand their unique needs, preferences, and goals. This involves discussing budget, desired property features, and any specific requirements to tailor a personalized real estate plan.",
    },
    {
      number: 2,
      title: "Property Search and Viewing",
      description:
        "We conduct a comprehensive property search based on the client's criteria, scheduling viewings, and providing detailed information on each potential home.",
    },
    {
      number: 3,
      title: "Offer and Negotiation",
      description:
        "We assist clients in making offers, negotiating terms, and ensuring they get the best possible deal on their chosen property.",
    },
    {
      number: 4,
      title: "Closing and Beyond",
      description:
        "We guide clients through the closing process, handling all paperwork and final details, and continue to offer support and advice even after the deal is closed.",
    },
  ];

  return (
    <div className="container mx-auto py-24">
      <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
        <h1
          className="text-5xl font-merriweather font-normal text-neutral"
          data-aos="fade-up"
        >
          Work Process
        </h1>
        <p
          className="text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Streamlined Steps to Your Dream Home: Our Proven Process Ensures a
          Smooth Journey from Initial Consultation to Closing and Beyond.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-start">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-neutral py-[29px] px-[49px] rounded-2xl flex items-start justify-between gap-6 ${
              index % 2 !== 0 ? "mt-28" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={`${(index + 1) * 100}`}
          >
            <p className="text-4xl font-merriweather bg-primary inline-block text-neutral px-[20px] py-[4px] rounded-lg">
              {step.number}
            </p>
            <div>
              <h5 className="font-normal text-2xl text-justify text-primary font-merriweather mb-6">
                {step.title}
              </h5>
              <p className="text-xl font-normal font-raleway text-[#14202ECC] leading-[24px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
