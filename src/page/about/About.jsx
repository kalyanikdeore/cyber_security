import React from "react";
import Aboutus from "../about/Aboutus";
import Visionmission from "./Visionmission";
import Whychoose from "./Whychoose";
// import Testimonial from "./Testimonial";
import CTAabout from "./CTAabout";
import Values from "./Values";
// import Ourstory from "./Ourstory";
// import Impact from "./Impact";
function About() {
  return (
    <div>
      <Aboutus />
      {/* <Ourstory /> */}
      <Visionmission />
      <Values />
      <Whychoose />
      {/* <Impact /> */}

      {/* <Testimonial /> */}
      <CTAabout />
    </div>
  );
}

export default About;
