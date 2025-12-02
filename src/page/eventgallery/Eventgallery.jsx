import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Award, ChevronRight } from "lucide-react";
// Cloud Security
import confernce1 from "../../assets/logo/confernce1.jpeg";
import confernce2 from "../../assets/logo/confernce2.jpeg";
import cs1 from "../../assets/logo/cs1.jpeg";
import cs2 from "../../assets/logo/cs2.jpeg";
import cs3 from "../../assets/logo/cs3.jpeg";
// Digital Forensics
import df from "../../assets/logo/df.jpeg";
import df1 from "../../assets/logo/df1.jpeg";
import df2 from "../../assets/logo/df2.jpeg";
import df3 from "../../assets/logo/df3.jpeg";
// Security Awareness
import sa from "../../assets/logo/sa.jpeg";
import sa2 from "../../assets/logo/sa2.jpeg";
import sa3 from "../../assets/logo/sa3.jpeg";
// Incident Response
import ir from "../../assets/logo/ir.png";
import ir2 from "../../assets/logo/ir2.jpeg";
import ir4 from "../../assets/logo/ir4.jpeg";
// Threat Intelligence
// import ti1 from "../../assets/logo/ti1.jpeg";
// import ti2 from "../../assets/logo/ti2.jpeg";
// import ti3 from "../../assets/logo/ti3.jpeg";
// import ti4 from "../../assets/logo/ti4.jpeg";

const EventGallery = () => {
  const items = [
    // Threat Intelligence Items
    // {
    //   id: 1,
    //   category: "Threat Intelligence",
    //   title: "Advanced Threat Analysis",
    //   img: ti1,
    // },
    // {
    //   id: 2,
    //   category: "Threat Intelligence",
    //   title: "Threat Intelligence Summit",
    //   img: ti2,
    // },
    // {
    //   id: 3,
    //   category: "Threat Intelligence",
    //   title: "Malware Analysis Deep Dive",
    //   img: ti3,
    // },
    // {
    //   id: 4,
    //   category: "Threat Intelligence",
    //   title: "Cyber Threat Conference",
    //   img: ti4,
    // },
    // // Cloud Security Items
    // {
    //   id: 5,
    //   category: "Cloud Security",
    //   title: "Cloud Infrastructure Protection",
    //   img: cs1,
    // },
    // {
    //   id: 6,
    //   category: "Cloud Security",
    //   title: "Cloud Security Conference",
    //   img: cs2,
    // },
    {
      id: 7,
      category: "Cloud Security",
      title: "Zero Trust Architecture",
      img: cs3,
    },
    {
      id: 8,
      category: "Cloud Security",
      title: "Security Conference 2024",
      img: confernce1,
    },
    {
      id: 9,
      category: "Cloud Security",
      title: "Cloud Security Workshop",
      img: confernce2,
    },
    // Incident Response Items
    {
      id: 10,
      category: "Incident Response",
      title: "Emergency Response Training",
      img: ir,
    },
    {
      id: 11,
      category: "Incident Response",
      title: "Incident Response Drill",
      img: ir2,
    },
    {
      id: 12,
      category: "Incident Response",
      title: "Crisis Management Drill",
      img: ir4,
    },
    // Security Awareness Items
    {
      id: 13,
      category: "Security Awareness",
      title: "Phishing Simulation Workshop",
      img: sa,
    },
    {
      id: 14,
      category: "Security Awareness",
      title: "Security Training Session",
      img: sa2,
    },
    {
      id: 15,
      category: "Security Awareness",
      title: "Awareness Program Launch",
      img: sa3,
    },
    // Digital Forensics Items
    {
      id: 16,
      category: "Digital Forensics",
      title: "Cyber Crime Investigation",
      img: df,
    },
    {
      id: 17,
      category: "Digital Forensics",
      title: "Forensic Analysis Lab",
      img: df1,
    },
    {
      id: 18,
      category: "Digital Forensics",
      title: "Digital Evidence Workshop",
      img: df2,
    },
    {
      id: 19,
      category: "Digital Forensics",
      title: "Forensic Tools Training",
      img: df3,
    },
  ];

  const [modalData, setModalData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset current image index when modal opens
  useEffect(() => {
    if (modalData) {
      const initialIndex = items.findIndex((item) => item.id === modalData.id);
      setCurrentImageIndex(initialIndex >= 0 ? initialIndex : 0);
    }
  }, [modalData]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setModalData(null);
    setCurrentImageIndex(0);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalData) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData, currentImageIndex]);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered Client Testimonials with Enhanced Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#f7f5f0] border border-[#926b49]/30 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(146, 107, 73, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Award className=" text-[#926b49]" />
            </motion.div>
            <motion.span
              className="text-sm font-semibold text-[#926b49] "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Gallery
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Enhanced Title Section with Framer Motion */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block relative"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#805b3a] to-[#b08d6e] relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore Our Gallery
            </motion.h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#805b3a] to-[#b08d6e] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </motion.div>
          <motion.p
            className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Explore our comprehensive cybersecurity programs
          </motion.p>
        </motion.div>

        {/* Enhanced Gallery Grid - Showing all images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => setModalData(item)}
              className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-80">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-[#805b3a] rounded-full text-sm font-medium mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div> */}

                {/* Hover Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State - Removed since we're always showing all images */}
      </div>

      {/* Enhanced Modal with Carousel */}
      {modalData && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Close Button - Top Right */}
            <motion.button
              onClick={closeModal}
              className="absolute top-6 right-6 z-50 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>

            {/* Modal Content */}
            <div className="relative h-full">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px]">
                <motion.img
                  key={currentImageIndex}
                  src={items[currentImageIndex].img}
                  alt={items[currentImageIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image Info Overlay */}
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-[#805b3a] rounded-full text-sm font-medium mb-2">
                      {items[currentImageIndex].category}
                    </span>
                    <h3 className="text-2xl font-bold">
                      {items[currentImageIndex].title}
                    </h3>
                    <p className="text-gray-200 mt-1">
                      {currentImageIndex + 1} of {items.length}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="lg:hidden flex justify-center space-x-2 pb-6 bg-gray-50">
              {items.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-[#805b3a] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default EventGallery;
