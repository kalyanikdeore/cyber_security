import React, { useEffect, useState } from "react";
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
  cyber_safety_awarness,
  DigitalWorkshops,
  tech1,
  digitaldetox,
  assistiveadaptive,
  digitalliteracyworkshops,
  techforseniors,
  cybersafety,
  cybersafteyawarness,
  devicedonation,
  cybersafteyawrness2,
  digital_financial_awareness,
  tech_for_seniors,
  tech_seniors,
  assistivetechnology2,
  assitivetechnology3,
  digital_financial_aw,
  tech_forseniors2,
  donation,
  donation2,
  cyber_safetyAwareness1,
  cyber_safetyAwareness2,
  cyber_safetyAwareness3,
  Seniors101,
  digitaldetox1,
  digitaldetox22,
  techs1,
  techs2,
} from "../../assets";

export default function TechnologyDigitalPrograms({ onCTAClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    // Force a reflow to trigger animations
    setTimeout(() => {
      document.body.clientWidth;
    }, 100);
  }, []);

  const initiatives = [
    {
      id: 1,
      title: "Digital Literacy Workshops",
      subtitle: "Basic → Advanced modules",
      icon: BookOpen,
      description:
        "We offer tiered modules from 'Digital Basics' (email, search) to 'Advanced Tools' (cloud computing, collaboration software). Our methodology is highly practical, employing a 1:1 mentor ratio where possible, focusing on confidence-building and real-world application, not just theory.",
      images: [tech1, DigitalWorkshops, digitalliteracyworkshops],
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
      images: [digitaldetox1, digitaldetox22, digitaldetox],
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
        "Our Cyber Safety Awareness Programs are designed to educate and protect individuals, communities, and organizations from rapidly growing online threats. The sessions cover essential topics such as identifying phishing and scam attempts, creating strong and secure passwords, managing privacy settings on social media and digital devices, and ensuring safe financial transactions through UPI, mobile banking, and online payments.",
      images: [
        cyber_safetyAwareness1,
        cyber_safetyAwareness2,
        cyber_safetyAwareness3,
      ],
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
        "We collect, refurbish, and distribute essential digital devices (laptops, tablets) to students and community centers. Furthermore, we support the establishment of Community Digital Hubs—shared access points with reliable internet and technical support, turning public spaces into centers of digital learning.",
      images: [devicedonation, donation, donation2],
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
      images: [techs1, techs2, Seniors101],
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
      images: [digital_financial_awareness, cybersafety, digital_financial_aw],
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
      images: [assistiveadaptive, assistivetechnology2, assitivetechnology3],
      imagePosition: "left",
      layoutType: "pyramid",
      stats: ["50+", "Assistive Devices", "100%", "Accessibility Focus"],
    },
  ];

  // Function to render different image layouts with mobile responsiveness
  const renderImageLayout = (initiative) => {
    const { images, layoutType } = initiative;

    switch (layoutType) {
      case "grid-3-even":
        return (
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg sm:rounded-xl overflow-hidden group h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
            >
              <img
                src={images[0]}
                alt={`${initiative.title} 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {images.slice(1).map((img, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden group h-32 sm:h-40 md:h-48 lg:h-56"
                >
                  <img
                    src={img}
                    alt={`${initiative.title} ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "vertical-stack":
        return (
          <div className="relative w-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`absolute rounded-lg sm:rounded-xl overflow-hidden group
                  ${
                    index === 0 &&
                    "top-0 left-0 w-2/3 h-32 sm:h-40 md:h-48 lg:h-56"
                  }
                  ${
                    index === 1 &&
                    "top-4 sm:top-6 md:top-8 left-8 sm:left-10 md:left-12 w-2/3 h-32 sm:h-40 md:h-48 lg:h-56"
                  }
                  ${
                    index === 2 &&
                    "top-8 sm:top-12 md:top-16 left-16 sm:left-20 md:left-24 w-2/3 h-32 sm:h-40 md:h-48 lg:h-56"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`${initiative.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        );

      case "featured-large":
        return (
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative rounded-lg sm:rounded-xl overflow-hidden group w-full"
              >
                <img
                  src={img}
                  alt={`${initiative.title} ${index + 1}`}
                  className="h-32 sm:h-36 md:h-40 lg:h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {index === 0 && (
                  <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-black/60 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
                    Featured
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case "masonry":
        return (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="col-span-2 relative rounded-lg sm:rounded-xl overflow-hidden bg-center group h-40 sm:h-48 md:h-56 lg:h-64"
            >
              <img
                src={images[0]}
                alt={`${initiative.title} 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {images.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden group h-20 sm:h-24 md:h-28 lg:h-32"
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

      case "diagonal":
        return (
          <div className="w-full py-2 sm:py-3 md:py-4 lg:py-6">
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-2 sm:mb-3 md:mb-4 lg:mb-6 relative h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
              {images.slice(0, 2).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`w-1/2 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 rounded-lg sm:rounded-xl overflow-hidden border-2 border-white
                    group hover:-translate-y-2 transition-transform duration-500 absolute
                    ${
                      index === 0
                        ? "rotate-[-4deg] -translate-x-8 sm:-translate-x-12 md:-translate-x-16 lg:-translate-x-20 xl:-translate-x-24 z-20"
                        : "rotate-[4deg] translate-x-8 sm:translate-x-12 md:translate-x-16 lg:translate-x-20 xl:translate-x-24 z-10"
                    }`}
                >
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <div className="w-4/5 sm:w-3/4 md:w-2/3 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 rounded-lg sm:rounded-xl overflow-hidden border-2 border-white group hover:-translate-y-2 transition-transform duration-500 rotate-[-2deg]">
                <img
                  src={images[2]}
                  alt="single-image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        );

      case "pyramid":
        return (
          <div className="w-full py-1 sm:py-2 md:py-3 lg:py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6"
            >
              <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 rounded-lg sm:rounded-xl overflow-hidden group border-2 border-white">
                <img
                  src={images[0]}
                  alt={`${initiative.title} 1`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-items-center">
              {images.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-full h-24 sm:h-32 md:h-40 lg:h-48 rounded-lg sm:rounded-xl overflow-hidden group border-2 border-white"
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
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative rounded-md sm:rounded-lg overflow-hidden h-24 sm:h-32 md:h-40 lg:h-48"
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
    <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-29 sm:py-29 md:py-26 lg:py-20">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden mb-8 sm:mb-12 md:mb-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 -left-16 sm:-left-24 md:-left-32 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#A1887F]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="relative text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl mx-auto px-3 sm:px-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full border border-[#805B3A]/30 backdrop-blur-sm"
          >
            Technology & Digital Transformation Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900 relative px-2"
          >
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              Inclusive Digital Access
            </span>
            <br />
            <span className="text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Transforming Lives Through Technology
            </span>
            <span className="absolute left-1/2 -bottom-1 sm:-bottom-2 md:-bottom-3 w-24 sm:w-32 md:w-40 h-0.5 bg-gradient-to-r from-[#805B3A] to-[#A1887F] transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-3"
          >
            Our programs bridge the digital divide by offering structured
            training, practical tools, and hands-on learning opportunities to
            <span className="font-semibold text-[#805B3A]">
              {" "}
              transform lives through technology
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 px-2"
          >
            <button
              onClick={redirectToAbout}
              className="group px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:from-[#6e4d30] hover:to-[#8d756c] flex items-center justify-center gap-1 sm:gap-2"
            >
              <span>About Us</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={redirectToContact}
              className="group px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white text-[#805B3A] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-[#805B3A]/30 flex items-center justify-center gap-1 sm:gap-2"
            >
              <span>Connect With Us</span>
              <span className="group-hover:rotate-12 transition-transform">
                🤝
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* KEY DIGITAL INITIATIVES WITH IMAGES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mt-8 sm:mt-12 md:mt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 px-2"
        >
          <div className="inline-flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4">
            <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#805B3A] to-transparent"></div>
            <span className="text-[#805B3A] font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Our Technology Digital Initiatives
            </span>
            <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-l from-[#805B3A] to-transparent"></div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3 sm:mb-4 px-2">
            Bridging the Digital Chasm:
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              {" "}
              Access, Skills, and Cyber Resilience
            </span>
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-xs sm:text-sm md:text-base px-2">
            In today's economy, digital literacy is non-negotiable. Millions
            remain excluded due to lack of access, skills, or safety awareness.
            Navanvesha directly addresses this by creating tech-enabled pathways
            for economic inclusion and responsible digital citizenship.
          </p>
        </motion.div>

        {/* Initiatives List with Images */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 px-2">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            const isImageLeft = initiative.imagePosition === "left";

            return (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                  isImageLeft ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Container */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                  className={`relative ${isImageLeft ? "" : "lg:col-start-2"}`}
                >
                  <div className="relative p-2 sm:p-3 bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                    {renderImageLayout(initiative)}
                  </div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  className={`${
                    isImageLeft ? "" : "lg:col-start-1"
                  } space-y-3 sm:space-y-4 md:space-y-6`}
                >
                  {/* Initiative Header */}
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md sm:rounded-lg bg-gradient-to-br from-[#805B3A] to-[#A1887F] text-white shadow-sm sm:shadow-md">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-1 sm:gap-2 mb-1">
                        <span className="text-xs font-medium text-[#805B3A] bg-[#805B3A]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          {initiative.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                        {initiative.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {initiative.description}
                  </p>

                  {/* Key Features */}
                  <div className="pt-1 sm:pt-2 md:pt-3">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-800 mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 bg-[#805B3A] rounded-full"></div>
                      Program Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {getProgramHighlights(initiative.id).map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-1 sm:gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-[#805B3A] rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700 text-xs sm:text-sm">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Button for each initiative */}
                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={redirectToContact}
                      className="group inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold rounded-md sm:rounded-lg hover:from-[#6e4d30] hover:to-[#8d756c] transition-all duration-300 hover:scale-105 hover:shadow-md text-xs sm:text-sm md:text-base"
                    >
                      <span>Get In Touch</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
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
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-8 sm:mt-12 md:mt-16 px-2 sm:px-3"
      >
        <div className="relative bg-gradient-to-r from-[#805B3A] to-[#A1887F] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#A1887F]/50 shadow-lg sm:shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-white rounded-full -translate-y-4 sm:-translate-y-6 md:-translate-y-8 translate-x-4 sm:translate-x-6 md:translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-white rounded-full translate-y-4 sm:translate-y-6 md:translate-y-8 -translate-x-4 sm:-translate-x-6 md:-translate-x-8"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4">
              Be a Digital Enabler
            </h3>

            <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto">
              Your support bridges the physical and skill-based gaps, providing
              essential tools and knowledge
            </p>

            {/* Buttons section */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={redirectToContact}
                className="bg-white text-[#805B3A] px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-[#FAF6F2] transition-all"
              >
                Connect With Our Team
              </motion.button>

              <button
                onClick={redirectToAbout}
                className="bg-transparent border border-white text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-white/10 transition-all"
              >
                Explore All Programs
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
      "Empowering all ages to harness technology for learning, communication, essential services",
    ],
    2: [
      "Phishing & online scam identification",
      "Online privacy and data protection",
      "Cyber hygiene & device safety practices",
    ],
    3: [
      "Overcoming hardware and connectivity poverty to ensure equitable access.",
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

  return highlights[initiativeId] || [];
}
