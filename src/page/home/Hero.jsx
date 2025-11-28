import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaLeaf,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated slides for Navanvesha Foundation
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Navanvesha Foundation",
      subtitle: "New Exploration, Renewed Discovery",
      description:
        "Empowering communities through technology-driven education, skill development, and inclusive social initiatives for sustainable impact.",
      buttonText: "Join Our Mission",
      icon: FaGraduationCap,
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Education & Skill Development",
      subtitle: "Building Future Leaders",
      description:
        "High-impact educational interventions nurturing foundational learning, creativity, and leadership skills among children and youth.",
      buttonText: "Explore Programs",
      icon: FaLaptopCode,
    },
    {
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Women Empowerment",
      subtitle: "Creating Financial Independence",
      description:
        "Enabling women to gain financial independence and leadership opportunities through skill-based training and entrepreneurship development.",
      buttonText: "Support Women",
      icon: FaHandsHelping,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Digital Transformation",
      subtitle: "Bridging the Digital Divide",
      description:
        "Empowering students, youth, and community members with essential digital skills for a tech-enabled future.",
      buttonText: "Digital Literacy",
      icon: FaLaptopCode,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Environment & Sustainability",
      subtitle: "Green Future Initiatives",
      description:
        "Promoting environmental consciousness and sustainable practices through awareness drives and community-action programs.",
      buttonText: "Go Green",
      icon: FaLeaf,
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

  // Handle button clicks
  const handleContactUs = () => {
    // Redirect to contact page or scroll to contact section
    window.location.href = "/contact";
    // Alternatively, you can use:
    // navigate('/contact'); if using React Router
  };

  const handleAboutUs = () => {
    // Redirect to about page or scroll to about section
    window.location.href = "/about";
    // Alternatively, you can use:
    // navigate('/about'); if using React Router
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

  const IconComponent = slides[currentSlide].icon;

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

      {/* Top Navigation Buttons */}
      <div className="absolute top-8 right-8 z-30 flex gap-4">
        {/* <motion.button
          onClick={handleAboutUs}
          whileHover="hover"
          variants={buttonVariants}
          className="bg-[#805b3a] hover:bg-[#805b3a]/90 text-[#faf6f2] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#805b3a]/25 flex items-center space-x-2 backdrop-blur-sm"
        >
          <FaUser className="text-sm" />
          <span>About Us</span>
        </motion.button> */}

        {/* <motion.button
          onClick={handleContactUs}
          whileHover="hover"
          variants={buttonVariants}
          className="bg-[#a4947d] hover:bg-[#a4947d]/90 text-[#faf6f2] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#a4947d]/25 flex items-center space-x-2 backdrop-blur-sm"
        >
          <FaEnvelope className="text-sm" />
          <span>Contact Us</span>
        </motion.button> */}
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
                  {/* Icon */}
                  <motion.div variants={textVariants} className="mb-6">
                    <IconComponent className="text-[#a4947d] text-4xl" />
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    variants={textVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                  >
                    {slides[currentSlide].title}
                    <motion.span
                      variants={textVariants}
                      className="block text-[#a4947d] mt-2 text-2xl md:text-3xl lg:text-4xl"
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
                      <span>Watch Our Story</span>
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
