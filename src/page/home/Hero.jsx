import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaLeaf,
  FaPlay,
  FaUsers,
  FaGlobe,
  FaHeart,
  FaStar,
  FaTrophy,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import axiosInstance from "../../services/api";

const iconComponents = {
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaLeaf,
  FaEnvelope,
  FaPlay,
  FaArrowRight,
  FaUsers,
  FaGlobe,
  FaHeart,
  FaStar,
  FaTrophy,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaHandshake,
};

const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch hero slides from backend
  const fetchSlides = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/hero-slides");
      console.log("Backend response:", response.data);

      // Use raw array response directly
      const apiSlides = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];

      apiSlides.forEach((slide, index) =>
        console.log(`Slide ${index}:`, slide)
      );

      // Sort if needed
      apiSlides.sort((a, b) => (a.slide_order || 0) - (b.slide_order || 0));

      setSlides(apiSlides);
      setError(null);
    } catch (err) {
      console.error("Error fetching slides:", err);
      setError(err.message || "Failed to load slides");
      setSlides([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  // Auto slide
  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const handleAboutUs = () => (window.location.href = "/about");
  const handleContactUs = () => (window.location.href = "/contact");

  if (loading)
    return (
      <section className="relative h-[79vh] flex items-center justify-center bg-gradient-to-r from-[#805b3a] to-[#a4947d]">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          Loading slides...
        </div>
      </section>
    );

  if (slides.length === 0)
    return (
      <section className="relative h-[79vh] flex items-center justify-center bg-gradient-to-r from-[#805b3a] to-[#a4947d]">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">No Slides Available</h2>
          <button
            onClick={fetchSlides}
            className="bg-white text-[#805b3a] px-6 py-2 rounded-lg font-semibold"
          >
            Retry
          </button>
        </div>
      </section>
    );

  const currentSlideData = slides[currentSlide];
  const IconComponent =
    iconComponents[currentSlideData.icon_class] || FaGraduationCap;

  return (
    <section className="relative h-[79vh] overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8 } }}
          className="absolute inset-0"
        >
          <img
            src={currentSlideData.image_url || currentSlideData.image_path}
            alt={currentSlideData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-8">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-white">
            <div>
              <IconComponent className="text-[#a4947d] text-3xl mb-4" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                {currentSlideData.title}
                <span className="block text-[#a4947d] text-xl lg:text-2xl mt-1">
                  {currentSlideData.subtitle}
                </span>
              </h1>
              <p className="text-base lg:text-lg mb-6">
                {currentSlideData.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={handleAboutUs}
                  className="bg-gradient-to-r from-[#805b3a] to-[#a4947d] px-5 py-2 rounded-lg flex items-center gap-2"
                >
                  About Us <FaArrowRight />
                </button>
                <button
                  onClick={handleContactUs}
                  className="border px-5 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEnvelope /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-[#a4947d] w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-[#805b3a]/50 p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-[#805b3a]/50 p-2 rounded-full"
          >
            &gt;
          </button>
        </>
      )}

      {/* Error message */}
      {error && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
          Error: {error}
          <button onClick={fetchSlides} className="ml-2 underline">
            Retry
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
