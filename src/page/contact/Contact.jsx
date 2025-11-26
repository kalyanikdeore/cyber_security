import React from "react";
import { FiPhoneCall, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="w-full  py-16">
      {" "}
      {/* Vista White background */}
      <div className="max-w-7xl mx-auto px-4 p-10 shadow-xl">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-[#805b3a] tracking-wide">
            {" "}
            {/* Spicy Mix for main text */}
            Contact <span className="text-[#a4947d]">Us</span>{" "}
            {/* Donkey Brown for accent */}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Start your solar journey with trusted experts. Reach out for any
            inquiries.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Information Section */}
          <div className="space-y-5">
            {/* Call */}
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#a4947d]/20">
              {" "}
              {/* Donkey Brown border with opacity */}
              <div className="bg-[#a4947d]/10 text-[#805b3a] p-3 rounded-full text-xl">
                {" "}
                {/* Donkey Brown bg, Spicy Mix text */}
                <FiPhoneCall />
              </div>
              <div>
                <h4 className="font-semibold text-[#805b3a]">Call Us</h4>{" "}
                {/* Spicy Mix */}
                <p className="text-sm text-gray-600 mt-1">
                  +91 98235 94854 <br /> +91 98227 46877
                </p>
                <p className="text-xs text-[#a4947d] font-semibold mt-1">
                  {" "}
                  {/* Donkey Brown */}
                  Speak directly with our solar experts
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#a4947d]/20">
              <div className="bg-[#a4947d]/10 text-[#805b3a] p-3 rounded-full text-xl">
                <FiMail />
              </div>
              <div>
                <h4 className="font-semibold text-[#805b3a]">Email Us</h4>
                <p className="text-sm text-gray-600">
                  security@cybershield.com
                </p>
                <p className="text-xs text-[#a4947d] font-semibold mt-1">
                  Get detailed information via email
                </p>
              </div>
            </div>

            {/* Visit */}
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-[#a4947d]/20">
              <div className="bg-[#a4947d]/10 text-[#805b3a] p-3 rounded-full text-xl">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-semibold text-[#805b3a]">Visit Us</h4>
                <p className="text-sm text-gray-600">
                  Shop No 27, Durgesh Apt, Ganesh Nagar,
                  <br /> Satpur, Nashik – 422007
                </p>
                <p className="text-xs text-[#a4947d] font-semibold mt-1">
                  Schedule an office consultation
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white shadow-md rounded-xl p-6 border border-[#a4947d]/20">
              <h4 className="font-semibold text-[#805b3a]">Connect With Us</h4>
              <p className="text-sm text-gray-600 mt-1">
                Stay updated with our latest solar projects & innovations
              </p>
              <div className="flex gap-3 mt-4">
                <a className="w-10 h-10 flex items-center justify-center bg-[#a4947d]/10 text-[#805b3a] rounded-full hover:bg-[#a4947d]/20 transition-colors">
                  <FaFacebookF />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-[#a4947d]/10 text-[#805b3a] rounded-full hover:bg-[#a4947d]/20 transition-colors">
                  <FaInstagram />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-[#a4947d]/10 text-[#805b3a] rounded-full hover:bg-[#a4947d]/20 transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#a4947d]/10">
            <h3 className="text-xl font-bold text-[#805b3a] mb-5 flex items-center gap-2">
              <FiSend className="text-[#a4947d]" /> {/* Donkey Brown icon */}
              Send Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="form-label font-semibold text-[#805b3a]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:border-[#a4947d] focus:ring-1 focus:ring-[#a4947d] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="font-semibold text-[#805b3a]">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:border-[#a4947d] focus:ring-1 focus:ring-[#a4947d] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="font-semibold text-[#805b3a]">Phone</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:border-[#a4947d] focus:ring-1 focus:ring-[#a4947d] transition-colors"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="font-semibold text-[#805b3a]">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 h-28 mt-1 focus:border-[#a4947d] focus:ring-1 focus:ring-[#a4947d] transition-colors"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#805b3a] hover:bg-[#6d4d32] text-white py-3 rounded-xl font-semibold transition-all" /* Spicy Mix button */
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
