import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../services/api";
const FuturePlans = () => {
  // 1. State to hold the API data
  const [goals, setGoals] = useState([]);
  // 2. State to manage loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Fetch data on component mount
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        setLoading(true);
        // ✅ This calls your Laravel route: /api/future-plans
        const response = await axiosInstance.get("/future-plans");
        // ✅ This sets your API data to the 'goals' state
        setGoals(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching future plans:", err);
        setError("Failed to load data. Please try again later.");
        // Optionally, keep an empty array for 'goals' on error
        setGoals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, []); // Empty dependency array ensures this runs once

  // Show a loading message
  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#926b49]"></div>
          <p className="mt-4 text-gray-600">Loading future plans...</p>
        </div>
      </section>
    );
  }

  // Show an error message
  if (error) {
    return (
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto text-center py-20">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-[#926b49] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#805b3a] transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // Show this if the API call succeeds but returns no data
  if (goals.length === 0) {
    return (
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto text-center py-20">
          <p className="text-gray-700">No future plans to display yet.</p>
        </div>
      </section>
    );
  }

  // Main render with dynamic data
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header (This remains the same as your original code) */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6">
            Our Future Plans & Goals
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 px-2">
            Navanvesha's Goals
            <span className="text-[#926b49]"> for the Next 5 Years</span>
          </h2>
          <motion.div
            className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We are not static; we are constantly evolving our reach. Our core
            objective is to scale our successful pilot projects across new
            geographies and demographics.
          </motion.p>
        </motion.div>

        {/* Goals Grid - Now renders data from the 'goals' state */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className={`relative h-full ${goal.color} rounded-2xl sm:rounded-3xl border-2 ${goal.border_color} p-5 sm:p-6 md:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-2xl hover:shadow-[#926b49]/20`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${goal.color} border-2 sm:border-3 md:border-4 border-white flex items-center justify-center shadow-md sm:shadow-lg`}
                  >
                    <span
                      className={`text-lg sm:text-xl md:text-2xl font-black ${goal.text_color}`}
                    >
                      {goal.number}
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  className="mb-4 sm:mb-6 pt-2 sm:pt-4 flex justify-end text-xl sm:text-2xl opacity-20"
                  whileHover={{ rotate: 12, opacity: 0.3 }}
                >
                  {goal.icon || "📋"}
                </motion.div>
                <motion.h3
                  className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight ${goal.text_color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {goal.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {goal.description}
                </motion.p>
                {/* Stats */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {JSON.parse(goal.stats).map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-2 sm:p-3 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/80"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="text-xl sm:text-2xl flex-shrink-0">
                        {stat.icon || "📊"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          {stat.label}
                        </div>
                        <div
                          className={`font-bold text-sm sm:text-base truncate ${goal.text_color}`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* Mobile Call to Action */}
        <motion.div
          className="mt-10 sm:mt-12 md:hidden text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm mb-3">
            Want to help us achieve these goals?
          </p>
          <a
            href="/get-involved"
            className="inline-flex items-center gap-2 bg-[#926b49] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#805b3a] transition-colors"
          >
            Get Involved
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlans;
