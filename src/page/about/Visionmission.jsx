import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiTarget, FiFlag } from "react-icons/fi";
import axiosInstance from "../../services/api";

const VisionMission = () => {
  const [data, setData] = useState(null);

  // Fetch data from backend API
  useEffect(() => {
    axiosInstance
      .get("vision-mission") // calls http://127.0.0.1:8000/api/vision-mission
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching vision & mission:", err));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // If data is not loaded yet, show nothing or a loader
  if (!data) return null;

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 relative px-4 sm:px-6">
      {/* Section heading */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.span
          className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6"
          variants={itemVariants}
        >
          {data.badge}
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4"
          variants={itemVariants}
        >
          {data.heading}
        </motion.h2>

        <motion.div
          className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 sm:mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Short Description */}
        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2"
          variants={itemVariants}
        >
          {data.description}
        </motion.p>
      </motion.div>

      {/* Vertical Line */}
      <div className="relative max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16">
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-[#a4947d] rounded-full"></div>

        {/* Vision Card */}
        <motion.div
          className="relative w-full mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 sm:-top-6 bg-[#805b3a] text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md sm:shadow-lg">
            <FiTarget size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>

          <div className="bg-white border border-[#a4947d] shadow-lg sm:shadow-xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#805b3a] text-center mb-3 sm:mb-4">
              {data.vision_title}
            </h3>
            <p className="text-[#805b3a] text-center leading-relaxed text-sm sm:text-base md:text-lg">
              {data.vision_text}
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 sm:-top-6 bg-[#805b3a] text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md sm:shadow-lg">
            <FiFlag size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>

          <div className="bg-white border border-[#a4947d] shadow-lg sm:shadow-xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#805b3a] text-center mb-3 sm:mb-4">
              {data.mission_title}
            </h3>
            <p className="text-[#805b3a] text-center leading-relaxed text-sm sm:text-base md:text-lg">
              {data.mission_text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
