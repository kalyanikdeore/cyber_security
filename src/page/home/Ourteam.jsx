import React from "react";
import { FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// LeadershipSpotlight.jsx
// Usage: Place <LeadershipSpotlight /> inside any page. Ensure Tailwind & react-router-dom are configured.

const members = [
  {
    id: 1,
    name: "Dr. Aarti Sharma",
    role: "Chairman / Trustee",
    focus: "Strategic Partnerships & Vision",
    img: "https://img.freepik.com/premium-photo/confident-indian-businesswoman-modern-office-portrait_1182900-116139.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Mr. Rohan Patel",
    role: "Program Director",
    focus: "Operational Excellence & Impact",
    img: "https://domatobookco.com/testimonials/image20.jpg",
  },
  {
    id: 3,
    name: "Ms. Nisha Kulkarni",
    role: "Treasurer / CFO",
    focus: "Financial Transparency",
    img: "https://img.freepik.com/premium-photo/focused-professional-engages-with-her-laptop-enjoying-productive-moment-cozy-cafe_1247367-76957.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export default function LeadershipSpotlight() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
          Committee Members
        </span>

        <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Meet Our <span className="text-[#926b49]"> Guiding Force</span>
        </h2>

        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our work is led by a dedicated committee committed to accountability,
          transparency, and social compassion.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
        {members.map((m, idx) => (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            key={m.id}
            className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl border border-slate-100"
            style={{
              boxShadow:
                "0 10px 20px rgba(2,6,23,0.06), 0 2px 6px rgba(2,6,23,0.04)",
            }}
            aria-labelledby={`member-${m.id}-name`}
          >
            <div className="-mt-16 w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-md">
              <img
                src={m.img}
                alt={`${m.name} portrait`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  id={`member-${m.id}-name`}
                  className="text-lg font-semibold text-slate-900 mt-4"
                >
                  {m.name}
                </h3>
                <p className="text-sm text-amber-700 font-medium mt-1">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-slate-600">{m.focus}</p>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-10 text-7xl select-none">
              {idx === 0 ? "🌟" : idx === 1 ? "🎯" : "💼"}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md hover:scale-[1.01] transition"
        >
          View Full Committee <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
