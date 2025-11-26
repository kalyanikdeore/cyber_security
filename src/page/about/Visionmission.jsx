import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiFlag } from "react-icons/fi";

const VisionMission = () => {
  return (
    <section className="w-full  py-20 relative">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-[#805b3a] uppercase"
      >
        Vision & Mission
      </motion.h2>

      <p className="text-center text-[#805b3a] mt-4 text-lg max-w-2xl mx-auto">
        Empowering the future through innovation, excellence and purpose-driven
        growth.
      </p>

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
              To be a global leader in shaping a skilled generation by
              delivering advanced, future-ready solutions that inspire
              innovation and meaningful transformation.
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
              To empower individuals and organizations through education,
              technology, and opportunities, enabling them to achieve excellence
              with integrity and purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
