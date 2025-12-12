import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptopCode,
  FaBriefcase,
  FaHeartbeat,
  FaLeaf,
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaUsers className="text-[#926b49] w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Capacity Building",
    description:
      "Training local leaders, educators, and community members to sustain programs independently.",
  },
  {
    icon: <FaLaptopCode className="text-[#926b49] w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Digital Literacy",
    description:
      "Ensuring basic to advanced technology skills are available to all ages.",
  },
  {
    icon: <FaBriefcase className="text-[#926b49] w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Employability Enhancement",
    description:
      "Linking training directly to economic opportunities through skill development and mentorship.",
  },
  {
    icon: <FaHeartbeat className="text-[#926b49] w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Health & Well-being",
    description:
      "Incorporating mental wellness and basic health services into community initiatives.",
  },
  {
    icon: <FaLeaf className="text-[#926b49] w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Environmental Stewardship",
    description:
      "Promoting eco-conscious practices, sanitation, and sustainability at the grassroots level.",
  },
];

export default function HolisticApproach() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6">
            Our Holistic Approach
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 px-2">
            Approach to
            <span className="text-[#926b49]"> Community Development</span>
          </h2>

          <motion.div
            className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Short Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2 sm:px-4">
            Navanvesha's methodology is unique because we recognize that social
            problems are interconnected. We integrate solutions across key
            pillars to ensure development is holistic and lasting.
          </p>
        </div>

        {/* Mobile: Single column */}
        <div className="flex flex-col space-y-6 md:hidden">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tablet & Desktop: Grid layout */}
        <div className="hidden md:block">
          {/* First row: 3 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center mb-6 md:mb-8">
            {pillars.slice(0, 3).map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second row: 2 cards centered with custom spacing */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {pillars.slice(3).map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex-1 max-w-md"
                custom={index + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  