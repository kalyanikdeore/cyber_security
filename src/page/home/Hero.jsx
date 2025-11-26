import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaCloud,
  FaUserShield,
  FaArrowRight,
  FaPlay,
  FaExternalLinkAlt,
} from "react-icons/fa";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Unsplash images for cybersecurity theme
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Advanced Cybersecurity",
      subtitle: "Protect Your Digital Assets",
      description:
        "Enterprise-grade security solutions to safeguard your business from evolving cyber threats with 24/7 monitoring.",
      buttonText: "Get Protected",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Cloud Security",
      subtitle: "Secure Your Cloud Infrastructure",
      description:
        "Comprehensive cloud security solutions ensuring your data remains protected across all platforms and services.",
      buttonText: "Secure Cloud",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Network Protection",
      subtitle: "Fortify Your Digital Perimeter",
      description:
        "Advanced network security solutions to protect your infrastructure from unauthorized access and cyber attacks.",
      buttonText: "Secure Network",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Data Encryption",
      subtitle: "End-to-End Protection",
      description:
        "Military-grade encryption solutions to protect your sensitive data both at rest and in transit.",
      buttonText: "Encrypt Data",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Threat Intelligence",
      subtitle: "Stay Ahead of Cyber Threats",
      description:
        "Proactive threat intelligence and advanced analytics to predict and prevent security breaches before they happen.",
      buttonText: "Learn More",
    },
  ];

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Animation variants
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featureVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay gradient - updated colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#805b3a]/40 to-[#a4947d]/60"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-[#faf6f2]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* Title */}
                  <motion.h1
                    variants={textVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                  >
                    {slides[currentSlide].title}
                    <motion.span
                      variants={textVariants}
                      className="block text-[#a4947d] mt-2"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={textVariants}
                    className="text-xl text-[#faf6f2]/90 mb-8 leading-relaxed max-w-2xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    variants={textVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="bg-gradient-to-r from-[#805b3a] to-[#a4947d] hover:from-[#805b3a]/90 hover:to-[#a4947d]/90 text-[#faf6f2] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl shadow-[#805b3a]/25 flex items-center space-x-3 group"
                    >
                      <span>{slides[currentSlide].buttonText}</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>

                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      className="border-2 border-[#a4947d] text-[#a4947d] hover:bg-[#a4947d]/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 group backdrop-blur-sm"
                    >
                      <FaPlay className="text-[#a4947d]" />
                      <span>Watch Demo</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#a4947d] w-8"
                  : "bg-[#faf6f2]/50 hover:bg-[#faf6f2]/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(128, 91, 58, 0.7)" }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-[#faf6f2]/80 hover:text-[#faf6f2] bg-[#805b3a]/50 backdrop-blur-sm p-4 rounded-full transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(128, 91, 58, 0.7)" }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-[#faf6f2]/80 hover:text-[#faf6f2] bg-[#805b3a]/50 backdrop-blur-sm p-4 rounded-full transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#faf6f2]/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
