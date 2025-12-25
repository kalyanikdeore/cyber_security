import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import axiosInstance from "../../services/api";

const WhyChooseUs = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axiosInstance.get("why-choose-us-features");

      if (response.data.success) {
        setFeatures(response.data.data);
      }
    } catch (error) {
      console.error("Why Choose Us fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">Loading...</div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#F6F7F4] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#926b49]/10 border border-[#926b49]/20 mb-4 sm:mb-5 md:mb-6"
          >
            <div className="h-3 w-3 sm:h-4 sm:w-4 text-[#926b49]" />
            <span className="text-xs sm:text-sm font-semibold text-[#926b49] tracking-wide">
              WHY CHOOSE US
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4 sm:mb-5 md:mb-6 px-2">
            Secure Your Digital <span className="text-[#926b49]">Future</span>
          </h2>

          <motion.div
            className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#af8054] to-[#af8056] mx-auto mb-4 sm:mb-5 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            We are a mission-driven partner, dedicated to building a digitally
            empowered and secure society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon] || Icons.Award;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${feature.color}20`,
                  }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                  />
                </div>

                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>

                <p className="text-sm text-gray-600">{feature.description}</p>

                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition ${feature.gradient}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
