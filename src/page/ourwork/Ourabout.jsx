// AboutSection.jsx
import React from "react";
import mainImg from "../../assets/logo/ev1.webp"; // replace with your main image
import smallImg1 from "../../assets/logo/small1.webp"; // replace with small image 1
import smallImg2 from "../../assets/logo/small2.webp"; // replace with small image 2

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto px-4 py-16">
      {/* Images */}
      <div className="relative flex-shrink-0">
        {/* Main Image */}
        <img
          src={mainImg}
          alt="Main"
          className="rounded-lg shadow-lg w-72 md:w-96 lg:w-[400px] z-10"
        />
        {/* Top small image */}
        <img
          src={smallImg1}
          alt="Small Top"
          className="absolute -top-5 -left-5 w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md border-2 border-white"
        />
        {/* Bottom small image */}
        <img
          src={smallImg2}
          alt="Small Bottom"
          className="absolute -bottom-5 -right-5 w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md border-2 border-white"
        />
        {/* Optional colored outline */}
        <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg pointer-events-none"></div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-left">
        <p className="text-green-600 font-semibold mb-2">NGO For Cyber Crime</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are?</h2>
        <p className="text-gray-700 mb-4">
          At Sarvothanam we aim to make the digital world a safe haven for
          everyone. As we see a significant rise in online malpractices like
          digital fraud, phishing and cybercrimes, we established an NGO for
          cyber crime to rescue people from any digital threats existing. Our
          primary objective lies in raising awareness, educating and uplifting
          individuals to stay safe online.. This mission is reflected in the
          name of our NGO-Sarvothanam, which means "upliftment of all”.
        </p>
        <p className="text-gray-700">
          We provide computer education, digital training and awareness programs
          to identify digital dangers and how to rescue themselves from that.
          Our goal is to create the most impactful cyber security NGO in India
          where everyone can confidently use the internet without the fear of
          any digital threats.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
