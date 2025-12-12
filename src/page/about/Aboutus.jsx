import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiClock } from "react-icons/fi";
import { SiHackthebox } from "react-icons/si";

import { about11, innovation, scholership2 } from "../../assets";

export default function AboutCyberSecurity() {
  const features = [
    {
      id: 1,
      icon: <FiShield className="w-5 h-5" />,
      title: "Education & Research",
    },
    {
      id: 2,
      icon: <SiHackthebox className="w-5 h-5" />,
      title: "Technology & Innovation",
    },
    {
      id: 3,
      icon: <FiClock className="w-5 h-5" />,
      title: "Youth Empowerment",
    },
  ];

  return (
    <section className="py-30 md:py-20 px-4 md:px-6 md:pt-30">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stacked layout */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Mobile header */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm tracking-wider font-semibold bg-[#805b3a] text-white px-4 py-1 rounded-full inline-block mb-4"
            >
              Empower • Educate • Secure
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-[#543f29] leading-tight"
            >
              About Us
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "9rem" }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-[#805b3a] mt-3 rounded-lg"
            />
          </motion.div>

          {/* Mobile images - single column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <motion.img
              src={about11}
              alt="About Navanvesha Foundation"
              className="w-full h-64 object-cover rounded-2xl shadow-[0_0_15px_#c6af93]"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src={scholership2}
                alt="Scholarship program"
                className="w-full h-48 object-cover rounded-xl shadow-[0_0_10px_#c6af93]"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              />
              <motion.img
                src={innovation}
                alt="Innovation showcase"
                className="w-full h-48 object-cover rounded-xl shadow-[0_0_10px_#c6af93]"
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3.8 }}
              />
            </div>
          </motion.div>

          {/* Mobile content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#5a4733] text-base leading-relaxed text-justify"
            >
              Navanvesha Foundation is a socially driven, non-profit
              organization committed to empowering communities through
              education, digital transformation, and sustainable development
              initiatives. Rooted in the belief that every individual deserves
              appropriate knowledge to grow, learn, and thrive, the foundation
              designs and delivers high-impact CSR programs in collaboration
              with corporates, institutions, and local partners.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="mt-4 text-[#5a4733] text-base leading-relaxed text-justify"
            >
              We specialize in creating pathways for growth by bridging skill
              gaps, supporting underprivileged communities, and fostering
              innovation-driven learning environments. Through structured
              programs in technology education, youth development, community
              upliftment, and digital inclusion, Navanvesha Foundation works
              towards creating long-term, measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="mt-4 text-[#5a4733] text-base leading-relaxed text-justify"
            >
              Our approach integrates capacity building, digital literacy,
              employability enhancement, health & well-being initiatives, and
              environmental sustainability, ensuring holistic development at the
              grassroots level.
            </motion.p>

            {/* Mobile features */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white rounded-xl border border-[#c1b6a4] shadow-sm p-3"
                >
                  <div className="p-2 bg-[#805b3a] text-white rounded-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-[#543f29] font-semibold text-sm">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: Original layout (hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm tracking-wider font-semibold bg-[#805b3a] text-white px-4 py-1 rounded-full"
            >
              Empower • Educate • Secure
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-[#543f29] leading-tight mt-4"
            >
              About Us
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "9rem" }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-[#805b3a] mt-5 rounded-lg"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-[#5a4733] text-lg leading-relaxed text-justify"
            >
              Navanvesha Foundation is a socially driven, non-profit
              organization committed to empowering communities through
              education, digital transformation, and sustainable development
              initiatives. Rooted in the belief that every individual deserves
              appropriate knowledge to grow, learn, and thrive, the foundation
              designs and delivers high-impact CSR programs in collaboration
              with corporates, institutions, and local partners.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="mt-5 text-[#5a4733] text-lg leading-relaxed text-justify"
            >
              We specialize in creating pathways for growth by bridging skill
              gaps, supporting underprivileged communities, and fostering
              innovation-driven learning environments. Through structured
              programs in technology education, youth development, community
              upliftment, and digital inclusion, Navanvesha Foundation works
              towards creating long-term, measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="mt-5 text-[#5a4733] text-lg leading-relaxed text-justify"
            >
              Our approach integrates capacity building, digital literacy,
              employability enhancement, health & well-being initiatives, and
              environmental sustainability, ensuring holistic development at the
              grassroots level.
            </motion.p>

            {/* FEATURES */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18, duration: 0.6 }}
                  className="flex items-center gap-4 bg-white rounded-xl border border-[#c1b6a4] shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all p-4"
                >
                  <div className="p-3 bg-[#805b3a] text-white rounded-lg shadow-md">
                    {feature.icon}
                  </div>
                  <h4 className="text-[#543f29] font-semibold text-md">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 items-center"
          >
            <div className="flex flex-col gap-4">
              <motion.img
                src={scholership2}
                className="w-full h-56 object-cover rounded-2xl shadow-[0_0_25px_#c6af93] hover:scale-105 transition-all duration-500"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
              <motion.img
                src={innovation}
                className="w-full h-56 object-cover rounded-2xl shadow-[0_0_25px_#c6af93] hover:scale-105 transition-all duration-500"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </div>

            <motion.img
              src={about11}
              className="w-full h-[460px] object-cover rounded-3xl shadow-[0_0_35px_#c6af93] hover:scale-105 transition-all duration-500"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
