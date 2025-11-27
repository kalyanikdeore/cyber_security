import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiFlag } from "react-icons/fi";

const VisionMission = () => {
  return (
    <section className="w-full  py-20 relative">
      {/* Section heading */}
      <div className="text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
          OUR VISION & MISSION
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Building a<span className="text-[#926b49]"> Secure Tomorrow</span>
        </h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Short Description */}
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Delivering comprehensive cybersecurity protection with advanced
          monitoring and rapid threat response.
        </p>
      </div>

      {/* Vertical Line */}
      <div className="relative max-w-4xl mx-auto mt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#a4947d] rounded-full"></div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full mb-20"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-[#805b3a] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
            <FiTarget size={28} />
          </div>

          <div className="bg-white border border-[#a4947d] shadow-xl rounded-2xl p-10 mt-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-[#805b3a] text-center mb-4">
              Our Vision
            </h3>
            <p className="text-[#805b3a] text-center leading-relaxed">
              “To build a digitally empowered, skilled, and equitable society
              where opportunities for growth and transformation are accessible
              to all.”
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-[#805b3a] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
            <FiFlag size={28} />
          </div>

          <div className="bg-white border border-[#a4947d] shadow-xl rounded-2xl p-10 mt-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-[#805b3a] text-center mb-4">
              Our Mission
            </h3>
            <p className="text-[#805b3a] text-center leading-relaxed">
              “To empower individuals and communities through technology-driven
              education, skill development, and inclusive social initiatives
              that create sustainable and measurable impact.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
