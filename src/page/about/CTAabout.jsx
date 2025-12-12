import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CyberSecurityCTA = () => {
  const navigate = useNavigate();

  const redirectToGallery = () => {
    navigate("/event-gallery");
  };

  const redirectToContact = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-gray-50 py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-hidden"
        >
          <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-16 lg:py-10">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6 px-2">
                Empowering Communities
                <span className="text-[#926b49]"> Through Education</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
                Driving sustainable change through education, digital
                transformation, and community development initiatives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.button
                onClick={redirectToGallery}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#926b49] text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold hover:bg-[#7a5a3d] transition-all duration-300 shadow-md sm:shadow-lg w-full sm:w-auto min-w-[140px] sm:min-w-[200px] text-sm sm:text-base"
              >
                View Gallery
              </motion.button>

              <motion.button
                onClick={redirectToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#926b49] sm:border-2 text-[#926b49] py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold hover:bg-[#926b49] hover:text-white transition-all duration-300 w-full sm:w-auto min-w-[140px] sm:min-w-[200px] text-sm sm:text-base"
              >
                Connect With Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberSecurityCTA;
