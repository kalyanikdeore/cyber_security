import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaLeaf,
  FaEnvelope,
} from "react-icons/fa";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2070&q=80",
      title: "Technology & Education",
      subtitle: "Empowering Futures with Digital Skills & Innovation. ",
      description:
        "Bridging the digital chasm to create a digitally literate and skilled generation..",
      icon: FaGraduationCap,
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2071&q=80",
      title: "Livelihood & Empowerment",
      subtitle: "Fueling Economic Autonomy for Women.",
      description:
        " Providing the tools, skills, and support for women to achieve financial independence and leadership.",
      icon: FaLaptopCode,
    },
    {
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2070&q=80",
      title: "Community & Environment",
      subtitle: "Sustainable Well-being for Healthier Communities.",
      description:
        "Driving change through accessible healthcare, essential infrastructure, and environmental stewardship.",
      icon: FaHandsHelping,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const goToSlide = (index) => setCurrentSlide(index);

  const handleContactUs = () => {
    window.location.href = "/contact";
  };

  const handleAboutUs = () => {
    window.location.href = "/about";
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const IconComponent = slides[currentSlide].icon;

  return (
    <section className="relative h-[79vh] min-h-[500px] max-h-[700px] overflow-hidden">
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
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#805b3a]/40 to-[#a4947d]/60"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 h-full flex items-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-[#faf6f2]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.div variants={textVariants} className="mb-4">
                    <IconComponent className="text-[#a4947d] text-3xl" />
                  </motion.div>

                  <motion.h1
                    variants={textVariants}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
                  >
                    {slides[currentSlide].title}
                    <motion.span
                      variants={textVariants}
                      className="block text-[#a4947d] mt-1 text-lg md:text-xl lg:text-2xl"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    variants={textVariants}
                    className="text-base md:text-lg text-[#faf6f2]/90 mb-6 leading-relaxed max-w-2xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    variants={textVariants}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      onClick={handleAboutUs}
                      className="bg-gradient-to-r from-[#805b3a] to-[#a4947d] hover:from-[#805b3a]/90 hover:to-[#a4947d]/90 text-[#faf6f2] px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#805b3a]/25 flex items-center space-x-2 group text-sm"
                    >
                      <span>About Us</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>

                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      onClick={handleContactUs}
                      className="border-2 border-[#a4947d] text-[#a4947d] hover:bg-[#a4947d]/20 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group backdrop-blur-sm text-sm"
                    >
                      <FaEnvelope className="text-[#a4947d]" />
                      <span>Get In Touch</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#a4947d] w-6"
                  : "bg-[#faf6f2]/50 hover:bg-[#faf6f2]/80"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(128, 91, 58, 0.7)" }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 text-[#faf6f2]/80 hover:text-[#faf6f2] bg-[#805b3a]/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
      >
        <svg
          className="w-4 h-4"
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
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 text-[#faf6f2]/80 hover:text-[#faf6f2] bg-[#805b3a]/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
      >
        <svg
          className="w-4 h-4"
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
    </section>
  );
};

export default HeroSection;
