import React from "react";
import HomeHero from "../Components/HeroSection/homeHero";
import LabService from "../Components/ServiceSection/labService";
import About from "../Components/About/about";
import HomeVideo from "../Components/VideoSection/homeVideo";
import StepsTesting from "../Components/HomepageSection/OurTesting/stepsTesting";
export default function HomePage() {
  return (
    <><HomeHero />
    <LabService />
    <About />
    <HomeVideo/>
<StepsTesting/>
    </>     

  
  );
}
