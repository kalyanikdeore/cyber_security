import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../services/api";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]); // ✅ dynamic data

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ FETCH DATA FROM BACKEND
  useEffect(() => {
    axiosInstance
      .get("faqs")
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
  }, []);

  // ⬇⬇⬇ EVERYTHING BELOW IS EXACTLY THE SAME UI ⬇⬇⬇

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const answerVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Quick Answers
          </motion.span>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently <span className="text-[#926b49]"> Asked Questions</span>
          </motion.h2>

          <motion.div
            className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about Navanvesha Foundation's
            mission, programs, and initiatives.
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="mb-3 sm:mb-4 bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden transition-all duration-300 hover:shadow-md sm:hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.button
                className="w-full px-4 py-3 sm:px-6 sm:py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base sm:text-lg font-semibold text-gray-800 pr-3 sm:pr-4 text-left">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#805b3a] flex-shrink-0 ml-2"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </motion.button>

              <motion.div
                variants={answerVariants}
                initial="closed"
                animate={openIndex === index ? "open" : "closed"}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-gray-100 sm:border-gray-200">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify sm:text-left">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
