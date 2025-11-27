import React from "react";
import { FiPhoneCall, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 p-10 shadow-xl">
        {/* Section heading */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Contact<span className="text-[#926b49]"> Us</span>
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
          >
            Start your solar journey with trusted experts. Reach out for any
            inquiries.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Info Section */}
          <div className="space-y-5">
            {[
              {
                icon: <FiPhoneCall />,
                title: "Call Us",
                desc: "+91 94206 91974",
                sub: "Speak directly with our solar experts",
              },
              {
                icon: <FiMail />,
                title: "Email Us",
                desc: "security@cybershield.com",
                sub: "Get detailed information via email",
              },
              {
                icon: <FiMapPin />,
                title: "Visit Us",
                desc: "Security District, Cyber City",
                sub: "Schedule an office consultation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#a4947d]/20"
              >
                <div className="bg-[#a4947d]/10 text-[#805b3a] p-3 rounded-full text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#805b3a]">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  <p className="text-xs text-[#a4947d] font-semibold mt-1">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl p-6 border border-[#a4947d]/20"
            >
              <h4 className="font-semibold text-[#805b3a]">Connect With Us</h4>
              <p className="text-sm text-gray-600 mt-1">
                Stay updated with our latest solar projects & innovations
              </p>
              <div className="flex gap-3 mt-4">
                {[<FaFacebookF />, <FaInstagram />, <FaYoutube />].map(
                  (icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 flex items-center justify-center bg-[#a4947d]/10 text-[#805b3a] rounded-full hover:bg-[#a4947d]/20 transition-colors"
                    >
                      {icon}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 border border-[#a4947d]/10"
          >
            <h3 className="text-xl font-bold text-[#805b3a] mb-5 flex items-center gap-2">
              <FiSend className="text-[#a4947d]" /> Send Message
            </h3>

            <form className="space-y-5">
              {["Full Name", "Email", "Phone"].map((label, i) => (
                <div key={i}>
                  <label className="font-semibold text-[#805b3a]">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:border-[#a4947d] focus:ring-1 focus:ring-[#a4947d] transition-colors"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  />
                </div>
              ))}

              <div>
                <label className="font-semibold text-[#805b3a]">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 h-28 mt-1 focus:border-[#a4947d] focus:ring-1 focus:ring-[#a4947d] transition-colors"
                  placeholder="Write your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-[#805b3a] hover:bg-[#6d4d32] text-white py-3 rounded-xl font-semibold transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
