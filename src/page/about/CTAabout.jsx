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
    <section className="bg-gray-50 py-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          <div className="px-8 py-12 lg:px-16 lg:py-10">
            <div className="text-center">
              <h2 className="text-4xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Communities
                <span className="text-[#926b49]"> Through Education</span>
              </h2>

              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Driving sustainable change through education, digital
                transformation, and community development initiatives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={redirectToGallery}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#926b49] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#7a5a3d] transition-all duration-300 shadow-lg min-w-[200px]"
              >
                View Gallery
              </motion.button>

              <motion.button
                onClick={redirectToContact}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#926b49] text-[#926b49] py-3 px-8 rounded-lg font-semibold hover:bg-[#926b49] hover:text-white transition-all duration-300 min-w-[200px]"
              >
                Connect With Us TO
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberSecurityCTA;
