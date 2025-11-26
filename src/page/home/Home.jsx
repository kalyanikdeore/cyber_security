import React from "react";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ServicesSection from "./Services";
import TrainingSection from "./Training";
import ImpactSection from "./Impact";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <ImpactSection />
    </div>
  );
}

export default Home;
