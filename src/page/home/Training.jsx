import React, { useState } from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  const locations = [
    {
      id: 1,
      name: "Central Office",
      address: "Nashik",
      phone: "+91 9600129660",
      email: "navanveshafoundation@gmail.com",

      lat: 40.7128,
      lng: -74.006,
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isHovered, setIsHovered] = useState(null);

  // Simple iframe src without API key
  const getSimpleMapUrl = (location) => {
    const encodedQuery = encodeURIComponent(location.address);
    return `https://maps.google.com/maps?q=Nashik,%20Maharashtra,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6"
            variants={itemVariants}
          >
            Our Location
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
            variants={itemVariants}
          >
            Find <span className="text-[#926b49]"> Our Office</span>
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Short Description */}
          <motion.p
            className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Visit our conveniently located office for exceptional service and
            support.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Map Container - Smaller Height */}
          <motion.div className="lg:w-2/3" variants={mapVariants}>
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#926b49] to-[#82613e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                whileHover={{ opacity: 0.4 }}
              />
              <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl border border-white/20 bg-white">
                <iframe
                  src={getSimpleMapUrl(selectedLocation)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selectedLocation.name}`}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Single Location Info Section */}
          <motion.div className="lg:w-1/3" variants={cardVariants}>
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6 h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-6 bg-gradient-to-b from-[#926b49] to-[#82613e] rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800">Our Details</h3>
              </motion.div>

              {/* Single Location Card */}
              <div className="space-y-4">
                <motion.div
                  className="p-4 rounded-xl bg-gradient-to-r from-[#926b49]/10 to-[#82613e]/10 border-2 border-[#926b49]/20 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.h4
                          className="font-bold text-[#926b49] text-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          {locations[0].name}
                        </motion.h4>
                        <motion.span
                          className="px-2 py-1 bg-[#926b49]/20 text-[#926b49] text-xs rounded-full font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          Active
                        </motion.span>
                      </div>
                      <motion.p
                        className="text-gray-600 text-sm mb-3 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {locations[0].address}
                      </motion.p>

                      {/* Contact Information */}
                      <motion.div
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        <motion.div
                          className="flex items-center gap-2 text-xs text-gray-600"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 text-[#926b49]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>{locations[0].phone}</span>
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-2 text-xs text-gray-600"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 text-[#926b49]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{locations[0].email}</span>
                        </motion.div>
                      </motion.div>
                    </div>
                    <motion.div
                      className="p-2 rounded-lg bg-[#926b49]/20 text-[#926b49]"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
