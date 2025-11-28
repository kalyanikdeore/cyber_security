import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiShield, FiClock } from "react-icons/fi";
import { SiHackthebox } from "react-icons/si";
import about from "../../assets/logo/about.jpeg";

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

  const cyberSecurityImages = [about];

  const randomImage = useMemo(() => {
    return cyberSecurityImages[
      Math.floor(Math.random() * cyberSecurityImages.length)
    ];
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
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
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm tracking-wider font-semibold bg-[#805b3a] text-white px-4 py-1 rounded-full"
          >
            Empower • Educate • Secure
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-[#543f29] leading-tight mt-4"
          >
            About Us{" "}
            {/* <span className="text-[#805b3a]">Navanvesha Foundation</span> */}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "9rem" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-[#805b3a] mt-5 rounded-lg"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-[#5a4733] text-lg leading-relaxed"
          >
            <strong>Navanvesha</strong> means "New Exploration" or "Renewed
            Discovery." It symbolizes the spirit of curiosity, innovation, and
            continuous learning — a bridge between traditional wisdom and modern
            creativity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-5 text-[#5a4733] text-lg leading-relaxed"
          >
            Navanvesha Foundation is a socially driven, non-profit organization
            committed to empowering communities through education, digital
            transformation, and sustainable development initiatives. Rooted in
            the belief that every individual deserves appropriate knowledge to
            grow, learn, and thrive.
          </motion.p>

          {/* FEATURES */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
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

          {/* MISSION & VISION */}
          {/* <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 space-y-6"
          >
            <div className="bg-gradient-to-r from-[#f8f4f0] to-[#f0e6d8] p-6 rounded-xl border border-[#d4c5b0]">
              <h3 className="text-xl font-bold text-[#805b3a] mb-2">
                Our Mission
              </h3>
              <p className="text-[#5a4733]">
                "To empower individuals and communities through
                technology-driven education, skill development, and inclusive
                social initiatives that create sustainable and measurable
                impact."
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#f8f4f0] to-[#f0e6d8] p-6 rounded-xl border border-[#d4c5b0]">
              <h3 className="text-xl font-bold text-[#805b3a] mb-2">
                Our Vision
              </h3>
              <p className="text-[#5a4733]">
                "To build a digitally empowered, skilled, and equitable society
                where opportunities for growth and transformation are accessible
                to all."
              </p>
            </div>
          </motion.div> */}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          animate={{ y: [0, -15, 0] }}
          className="flex justify-center"
        >
          <img
            src={randomImage}
            alt="Navanvesha Foundation"
            className="w-full max-w-lg h-[450px] object-cover rounded-3xl border-[6px] border-[#b89d7e] shadow-[0_0_35px_#c6af93]"
          />
        </motion.div>
      </div>
    </section>
  );
}
