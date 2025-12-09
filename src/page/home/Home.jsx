import React from "react";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ServicesSection from "./Services";
import TrainingSection from "./Training";
import ImpactSection from "./Impact";
import CTAHome from "./CTAHome";
import Gallery from "./Gallery";
import OurFuture from "./OurFuture";
import RecentEvents from "./RecentEvents";
// import Ourteam from "./Ourteam";

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
      <OurFuture />
      <CTAHome />
      <RecentEvents />
      {/* <Ourteam /> */}

      <Gallery />
    </div>
  );
}

export default Home;
