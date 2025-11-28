import React from "react";
import Aboutus from "../about/Aboutus";
import Visionmission from "./Visionmission";
import Whychoose from "./Whychoose";
// import Testimonial from "./Testimonial";
import CTAabout from "./CTAabout";
import Values from "./Values";
function About() {
  return (
    <div>
      <Aboutus />
      <Visionmission />
      <Values />
      <Whychoose />

      {/* <Testimonial /> */}
      <CTAabout />
    </div>
  );
}

export default About;
