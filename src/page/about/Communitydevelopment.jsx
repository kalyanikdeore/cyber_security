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
    icon: <FaUsers className="text-[#926b49] w-10 h-10" />,
    title: "Capacity Building",
    description:
      "Training local leaders, educators, and community members to sustain programs independently.",
  },
  {
    icon: <FaLaptopCode className="text-[#926b49] w-10 h-10" />,
    title: "Digital Literacy",
    description:
      "Ensuring basic to advanced technology skills are available to all ages.",
  },
  {
    icon: <FaBriefcase className="text-[#926b49] w-10 h-10" />,
    title: "Employability Enhancement",
    description:
      "Linking training directly to economic opportunities through skill development and mentorship.",
  },
  {
    icon: <FaHeartbeat className="text-[#926b49] w-10 h-10" />,
    title: "Health & Well-being",
    description:
      "Incorporating mental wellness and basic health services into community initiatives.",
  },
  {
    icon: <FaLeaf className="text-[#926b49] w-10 h-10" />,
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Our Holistic
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Approach to
            <span className="text-[#926b49]"> Community Development</span>
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
            Navanvesha's methodology is unique because we recognize that social
            problems are interconnected. We integrate solutions across six key
            pillars to ensure development is holistic and lasting.
          </p>
        </div>

        {/* First row: 3 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mb-8">
          {pillars.slice(0, 3).map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
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

        {/* Second row: 2 cards closer together and centered */}
        <div className="flex justify-center gap-6">
          {pillars.slice(3).map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-md w-full"
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
      </div>
    </section>
  );
}
