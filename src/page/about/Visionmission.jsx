import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiFlag } from "react-icons/fi";

const VisionMission = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

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
          OUR VISION & MISSION
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4"
          variants={itemVariants}
        >
          Building a<span className="text-[#926b49]"> Secure Tomorrow</span>
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
          Delivering comprehensive cybersecurity protection with advanced
          monitoring and rapid threat response.
        </motion.p>
      </motion.div>

      {/* Vertical Line - Only show on medium screens and above */}
      <div className="relative max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16">
        {/* Hide vertical line on mobile, show on tablet and above */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-[#a4947d] rounded-full"></div>

        {/* Vision Card */}
        <motion.div
          className="relative w-full mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {/* Icon - Position differently for mobile vs desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 sm:-top-6 bg-[#805b3a] text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md sm:shadow-lg">
            <FiTarget size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>

          <div className="bg-white border border-[#a4947d] shadow-lg sm:shadow-xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#805b3a] text-center mb-3 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-[#805b3a] text-center leading-relaxed text-sm sm:text-base md:text-lg">
              "To build a digitally empowered, skilled, and equitable society
              where opportunities for growth and transformation are accessible
              to all."
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
          {/* Icon - Position differently for mobile vs desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 sm:-top-6 bg-[#805b3a] text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md sm:shadow-lg">
            <FiFlag size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>

          <div className="bg-white border border-[#a4947d] shadow-lg sm:shadow-xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#805b3a] text-center mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-[#805b3a] text-center leading-relaxed text-sm sm:text-base md:text-lg">
              "To empower individuals and communities through technology-driven
              education, skill development, and inclusive social initiatives
              that create sustainable and measurable impact."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
