import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Smartphone,
  UserCheck,
  CreditCard,
  Accessibility,
  BatteryCharging,
} from "lucide-react";

import {
  DigitalWorkshops,
  digitalaccess,
  digitaldetox,
  assistiveadaptive,
  digitalfinancialawarness,
  digitalliteracyworkshops,
  techforseniors,
  assitivetechnology,
  cybersafety,
  cybersafteyawarness,
  devicedonation,
} from "../../assets";

export default function TechnologyDigitalPrograms({ onCTAClick }) {
  const initiatives = [
    {
      id: 1,
      title: "Digital Literacy Workshops",
      subtitle: "Basic → Advanced modules",
      icon: BookOpen,
      description:
        "We offer tiered modules from 'Digital Basics' (email, search) to 'Advanced Tools' (cloud computing, collaboration software). Our methodology is highly practical, employing a 1:1 mentor ratio where possible, focusing on confidence-building and real-world application, not just theory.",
      images: [digitalaccess, DigitalWorkshops, digitalliteracyworkshops],
      imagePosition: "left",
      layoutType: "grid-3-even",
      stats: ["500+", "Workshops", "98%", "Satisfaction Rate"],
    },
    {
      id: 7,
      title: "Digital Detox",
      subtitle: "Balancing digital life",
      icon: BatteryCharging,
      description:
        "A guided initiative encouraging healthy and mindful technology usage by helping students, youth, and community members balance their digital habits. The program focuses on reducing screen dependency, promoting real-world interactions, and building awareness about safe, productive, and responsible use of technology for a healthier digital lifestyle.",
      images: [digitaldetox, cybersafteyawarness, techforseniors],
      imagePosition: "right",
      layoutType: "vertical-stack",
      stats: ["2K+", "Participants", "40%", "Screen Time Reduction"],
    },
    {
      id: 2,
      title: "Cyber Safety Awareness Programs",
      subtitle: "Protecting people online",
      icon: ShieldCheck,
      description:
        "Our Cyber Safety Awareness Programs are designed to educate and protect individuals, communities, and organizations from rapidly growing online threats. The sessions cover essential topics such as identifying phishing and scam attempts, creating strong and secure passwords, managing privacy settings on social media and digital devices, and ensuring safe financial transactions through UPI, mobile banking, and online payments",
      images: [cybersafety, cybersafteyawarness, digitalfinancialawarness],
      imagePosition: "left",
      layoutType: "featured-large",
      stats: ["200+", "Sessions", "95%", "Security Awareness"],
    },
    {
      id: 3,
      title: "Device Donation & Digital Access Support",
      subtitle: "Bridging the access gap",
      icon: Smartphone,
      description:
        " We collect, refurbish, and distribute essential digital devices (laptops, tablets) to students and community centers. Furthermore, we support the establishment of Community Digital Hubs—shared access points with reliable internet and technical support, turning public spaces into centers of digital learning. ",
      images: [devicedonation, digitalaccess, digitalliteracyworkshops],
      imagePosition: "right",
      layoutType: "masonry",
      stats: ["1K+", "Devices Donated", "15+", "Community Partners"],
    },
    {
      id: 4,
      title: "Tech for Seniors Initiative",
      subtitle: "Simple, patient-led learning",
      icon: UserCheck,
      description:
        "Dedicated sessions crafted to simplify technology adoption for older community members, focusing on communication (video calls with family), access to government services, and online health resources, combating social isolation.",
      images: [techforseniors, assitivetechnology, digitaldetox],
      imagePosition: "left",
      layoutType: "horizontal-stack",
      stats: ["300+", "Seniors Trained", "100%", "Personalized Sessions"],
    },
    {
      id: 5,
      title: "Digital Financial Awareness & Cyber Safety Program",
      subtitle: "Safe digital transactions",
      icon: CreditCard,
      description:
        "Workshops on UPI, payments, budgeting apps & spotting financial scams for all ages.",
      images: [digitalfinancialawarness, cybersafety, digitalaccess],
      imagePosition: "right",
      layoutType: "diagonal",
      stats: ["150+", "Financial Workshops", "₹50K+", "Scams Prevented"],
    },
    {
      id: 6,
      title: "Assistive Technology for Inclusion Program",
      subtitle: "Accessibility-first tools",
      icon: Accessibility,
      description:
        "True transformation means leaving no one behind. We identify individuals with disabilities and provide specialized assistive technology (e.g., screen readers, adaptive devices) and customized training to enable them to engage fully in education and livelihood opportunities.",
      images: [assistiveadaptive, assitivetechnology, digitalliteracyworkshops],
      imagePosition: "left",
      layoutType: "pyramid",
      stats: ["50+", "Assistive Devices", "100%", "Accessibility Focus"],
    },
  ];

  // Function to render different image layouts
  const renderImageLayout = (initiative) => {
    const { images, layoutType } = initiative;

    switch (layoutType) {
      case "grid-3-even":
        return (
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden  group h-56 sm:h-44"
            >
              <img
                src={images[0]}
                alt={`${initiative.title} 1`}
                className="w-full h-54 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.slice(1).map((img, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden  group h-56 sm:h-64"
                >
                  <img
                    src={img}
                    alt={`${initiative.title} ${index + 2}`}
                    className=" sm:w-78 h-40 sm:h-46 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "vertical-stack":
        return (
          <div className="relative w-full min-h-[200px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`absolute rounded-xl overflow-hidden  group
            ${index === 0 && "top-0 left-0 w-2/3 h-56 sm:h-64"}
            ${index === 1 && "top-24 left-24 sm:left-48 w-2/3 h-56 sm:h-64"}
            ${index === 2 && "top-48 left-48 sm:left-80 w-2/3 h-56 sm:h-64"}
          `}
              >
                <img
                  src={img}
                  alt={`${initiative.title} ${index + 1}`}
                  className="  sm:w-78 h-40 sm:h-46 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        );

      case "featured-large":
        return (
          <div className="space-y-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative rounded-xl overflow-hidden group ${
                  index === 0
                    ? "w-[30rem] sm:w-[32rem]"
                    : "w-[30rem] sm:w-[32rem]"
                }`}
              >
                <img
                  src={img}
                  alt={`${initiative.title} ${index + 1}`}
                  className="h-30 sm:h-44 w-130 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {index === 0 && (
                  <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case "masonry":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sm:col-span-2 relative rounded-xl overflow-hidden bg-center group sm:w-full h-60 sm:h-72"
            >
              <img
                src={images[0]}
                alt={`${initiative.title} 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              {images.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden group h-48 sm:h-56"
                >
                  <img
                    src={img}
                    alt={`${initiative.title} ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "horizontal-stack":
        return (
          <div className="flex flex-col sm:flex-row gap-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 relative rounded-xl overflow-hidden  group h-44 sm:h-64"
              >
                <img
                  src={img}
                  alt={`${initiative.title} ${index + 1}`}
                  className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {index + 1}/3
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "diagonal":
        return (
          <div className="w-full py-4">
            <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6 relative h-44 sm:h-56">
              {images.slice(0, 2).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`w-1/2 sm:w-70 h-44 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden  border-2 sm:border-[3px] border-white
              group hover:-translate-y-2 transition-transform duration-500 absolute
              ${
                index === 0
                  ? "sm:rotate-[-0deg] -translate-x-1/4 sm:-translate-x-42 z-20"
                  : "sm:rotate-[0deg] translate-x-1/4 sm:translate-x-42 z-10"
              }`}
                >
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className=" sm:w-78 h-40 sm:h-46 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <div className="w-full sm:w-94 h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden   border-2 sm:border-[4px] border-white group hover:-translate-y-2 transition-transform duration-500 sm:rotate-[-0deg]">
                <img
                  src={images[2]}
                  alt="single-image"
                  className="w-full  h-40 sm:h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        );

      case "pyramid":
        return (
          <div className="w-full py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full flex justify-center mb-4"
            >
              <div className="w-full sm:w-78 h-40 sm:h-46 rounded-lg sm:rounded-xl overflow-hidden  group border-2 sm:border-4 border-white">
                <img
                  src={images[0]}
                  alt={`${initiative.title} 1`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 justify-items-center">
              {images.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full h-40 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden  group border-2 sm:border-4 border-white"
                >
                  <img
                    src={img}
                    alt={`${initiative.title} ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden  h-44 sm:h-56"
              >
                <img
                  src={img}
                  alt={`${initiative.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        );
    }
  };

  // All buttons redirect to contact page
  const redirectToContact = () => {
    window.location.href = "/contact";
  };

  const redirectToAbout = () => {
    window.location.href = "/about";
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-[400px] sm:min-h-[600px] flex items-center justify-center overflow-hidden mb-12 sm:mb-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#A1887F]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="relative text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white text-xs sm:text-sm font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-full  border border-[#805B3A]/30 backdrop-blur-sm"
          >
            Technology & Digital Transformation Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 relative"
          >
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              Inclusive Digital Access
            </span>
            <br />
            <span className="text-slate-800 text-xl sm:text-4xl md:text-5xl">
              Transforming Lives Through Technology
            </span>
            <span className="absolute left-1/2 -bottom-2 sm:-bottom-4 w-32 sm:w-48 h-0.5 sm:h-1 bg-gradient-to-r from-[#805B3A] to-[#A1887F] transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our programs bridge the digital divide by offering structured
            training, practical tools, and hands-on learning opportunities to
            <span className="font-semibold text-[#805B3A]">
              {" "}
              transform lives through technology
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 sm:pt-6"
          >
            {/* Button 1 - About Us */}
            <button
              onClick={redirectToAbout}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold text-sm sm:text-base   transition-all duration-300 hover:scale-105 hover:from-[#6e4d30] hover:to-[#8d756c] flex items-center gap-2"
            >
              <span>About Us</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            {/* Button 2 - Connect With Us */}
            <button
              onClick={redirectToContact}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-[#805B3A] font-semibold text-sm sm:text-base  transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-[#805B3A]/30 flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <span className="group-hover:rotate-12 transition-transform">
                🤝
              </span>
            </button>

            {/* Button 3 - Get In Touch (New) */}
            <button
              onClick={redirectToContact}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#6e4d30] to-[#805B3A] text-white font-semibold text-sm sm:text-base  transition-all duration-300 hover:scale-105 hover:from-[#5a3d26] hover:to-[#6e4d30] flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <span className="group-hover:translate-y-[-2px] transition-transform">
                📞
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* KEY DIGITAL INITIATIVES WITH IMAGES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#805B3A] to-transparent"></div>
            <span className="text-[#805B3A] font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Our Digital Initiatives
            </span>
            <div className="w-6 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-l from-[#805B3A] to-transparent"></div>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-4 sm:mb-6">
            Bridging the Digital Chasm:
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              {" "}
              Access, Skills, and Cyber Resilience
            </span>
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-lg">
            In today's economy, digital literacy is non-negotiable. Millions
            remain excluded due to lack of access, skills, or safety awareness.
            Navanvesha directly addresses this by creating tech-enabled pathways
            for economic inclusion and responsible digital citizenship.
          </p>
        </motion.div>

        {/* Initiatives List with Images */}
        <div className="space-y-16 sm:space-y-24">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            const isImageLeft = initiative.imagePosition === "left";

            return (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  isImageLeft ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Container */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${isImageLeft ? "" : "lg:col-start-2"}`}
                >
                  <div className="relative p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl ">
                    {renderImageLayout(initiative)}

                    {/* Layout Badge */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                      {initiative.layoutType.replace("-", " ")}
                    </div>

                    {/* Initiative Badge */}
                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold  z-10">
                      Initiative #{index + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`${isImageLeft ? "" : "lg:col-start-1"}`}
                >
                  <div className="space-y-4 sm:space-y-6">
                    {/* Initiative Header */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#805B3A] to-[#A1887F] text-white ">
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                          <span className="text-xs sm:text-sm font-medium text-[#805B3A] bg-[#805B3A]/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                            {initiative.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                          {initiative.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Key Features */}
                    <div className="pt-2 sm:pt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#805B3A] rounded-full"></div>
                        Program Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {getProgramHighlights(initiative.id).map(
                          (feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-1 sm:gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-[#805B3A] rounded-full"></div>
                              <span className="text-slate-700 text-xs sm:text-sm">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Button 4-10: Get In Touch button for each initiative */}
                    <div className="pt-4 sm:pt-6">
                      <button
                        onClick={redirectToContact}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold rounded-lg hover:from-[#6e4d30] hover:to-[#8d756c] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <span>Get In Touch</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-20"
      >
        <div className="relative bg-gradient-to-r from-[#805B3A] to-[#A1887F] rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-[#A1887F]/50  sm:shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full -translate-y-16 translate-x-16 sm:-translate-y-32 sm:translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full translate-y-16 -translate-x-16 sm:translate-y-32 sm:-translate-x-32"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
      Be a Digital Enabler
            </h3>

            <p className="text-white/90 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Your support bridges the physical and skill-based gaps, providing essential tools and knowledge
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {/* Button 11 - Connect With Our Team */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={redirectToContact}
                className="bg-white text-[#805B3A] px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg  hover:bg-[#FAF6F2] transition-all"
              >
                Connect With Our Team
              </motion.button>

              {/* Button 12 - Explore All Programs */}
              <button
                onClick={redirectToAbout}
                className="bg-transparent border border-white sm:border-2 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:bg-white/10 transition-all"
              >
                Explore All Programs
              </button>

              {/* Button 13 - Get In Touch (Final) */}
              <button
                onClick={redirectToContact}
                className="bg-gradient-to-r from-[#6e4d30] to-[#805B3A] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:from-[#5a3d26] hover:to-[#6e4d30] transition-all hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Helper function to get program highlights based on initiative ID
function getProgramHighlights(initiativeId) {
  const highlights = {
    1: [
      "Empowering all ages to harness technology for learning",
      "communication",
      "essential services",
    ],
    2: [
      "Phishing & online scam identification",
      "Online privacy and data protection",
      "Cyber hygiene & device safety practices",
    ],
    3: [
      " Overcoming hardware and connectivity poverty to ensure equitable access.  ",
    ],
    4: [
      "Patient-led Learning Approach",
      "Simple Interface Training",
      "Video Call Assistance",
      "Essential Apps Guidance",
    ],
    5: [
      "UPI Payment Security",
      "Financial Scam Prevention",
      "Budgeting Tool Training",
      "Safe Transaction Practices",
    ],
    6: [
      "Ensuring equitable digital participation for every member of the community",
    ],
    7: [
      "Screen Time Management",
      "Digital Wellness Sessions",
      "Real-world Activity Planning",
      "Mindful Tech Usage",
    ],
  };

  return (
    highlights[initiativeId] ||
    [
      // "Customized Learning",
      // "Practical Application",
      // "Expert Guidance",
      // "Continuous Support",
    ]
  );
}
