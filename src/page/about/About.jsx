import React from "react";
import Aboutus from "../about/Aboutus";
import Visionmission from "./Visionmission";
import Whychoose from "./Whychoose";
// import Testimonial from "./Testimonial";
import CTAabout from "./CTAabout";
import Values from "./Values";
// import Ourstory from "./Ourstory";
// import Impact from "./Impact";
import Communitydevelopment from "./Communitydevelopment";
function About() {
  return (
    <div>
      <Aboutus />
      {/* <Ourstory /> */}
      <Visionmission />
      <CTAabout />
      <Values />
      <Whychoose />
      {/* <Impact /> */}
      <Communitydevelopment />

      {/* <Testimonial /> */}
    </div>
  );
}

export default About;
