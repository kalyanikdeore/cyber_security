import React from "react";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ServicesSection from "./Services";
import TrainingSection from "./Training";
import ImpactSection from "./Impact";
import CTAHome from "./CTAHome";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* Map */}
      <TrainingSection />
      {/* faq */}
      <ImpactSection />
      <CTAHome />
    </div>
  );
}

export default Home;
