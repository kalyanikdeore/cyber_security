import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../services/api";

import {
  FaUsers,
  FaLaptopCode,
  FaBriefcase,
  FaHeartbeat,
  FaLeaf,
} from "react-icons/fa";

const iconMap = {
  FaUsers,
  FaLaptopCode,
  FaBriefcase,
  FaHeartbeat,
  FaLeaf,
};

export default function HolisticApproach() {
  const [pillars, setPillars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("community-developments")
      .then((res) => {
        setPillars(res.data.data || res.data);
      })
      .catch((err) => {
        console.error("Community Development API Error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading Community Development...
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold mb-6">
          Our Holistic Approach
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Approach to
          <span className="text-[#926b49]"> Community Development</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Navanvesha's methodology is unique because we recognize that social
          problems are interconnected. We integrate solutions across key pillars
          to ensure development is holistic and lasting.
        </p>

        {/* Mobile */}
        <div className="flex flex-col gap-6 md:hidden">
          {pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || FaUsers;

            return (
              <motion.div
                key={pillar.id}
                className="bg-white p-5 rounded-xl shadow-lg"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10" style={{ color: pillar.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {pillars.slice(0, 3).map((pillar, index) => {
              const Icon = iconMap[pillar.icon] || FaUsers;

              return (
                <motion.div
                  key={pillar.id}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      className="w-10 h-10"
                      style={{ color: pillar.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-8 max-w-4xl mx-auto">
            {pillars.slice(3).map((pillar, index) => {
              const Icon = iconMap[pillar.icon] || FaUsers;

              return (
                <motion.div
                  key={pillar.id}
                  className="bg-white p-6 rounded-xl shadow-lg flex-1 max-w-md"
                  custom={index + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      className="w-10 h-10"
                      style={{ color: pillar.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
