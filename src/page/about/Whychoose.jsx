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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Why <span className="text-[#926b49]">Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
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
