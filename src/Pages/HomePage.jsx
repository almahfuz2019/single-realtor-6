import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/FeaturedListing";
import HeroSection from "@/Components/Home/HeroSection";
import Insights from "@/Components/Home/Insights";
import Neighborhood from "@/Components/Home/Neighborhood";

import Services from "@/Components/Home/Services";
import Testimonial from "@/Components/Home/Testimonial";
import WorkProcess from "@/Components/Home/WorkProcess";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Neighborhood />
      <Featured />
      <About />
      <WorkProcess />
      <Testimonial />
      <Insights/>
      <Contact/>
    </div>
  );
}
