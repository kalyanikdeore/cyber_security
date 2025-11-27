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
      title: "Zero Trust Architecture",
    },
    {
      id: 2,
      icon: <SiHackthebox className="w-5 h-5" />,
      title: "Threat Hunting & Analysis",
    },
    {
      id: 3,
      icon: <FiClock className="w-5 h-5" />,
      title: "Real-Time Risk Monitoring",
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
            About Us —{" "}
            <span className="text-[#805b3a]">Navanvesha Foundation</span>
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
            Navanvesha Foundation is a socially driven organization dedicated to
            empowering communities through education, digital transformation,
            cybersecurity awareness, and skills development. Our goal is to
            build a secure digital future by spreading knowledge and creating
            real impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-5 text-[#5a4733] text-lg leading-relaxed"
          >
            We work to bridge technological skill gaps, support youth and
            underprivileged groups, and provide hands-on cybersecurity training
            for a safer digital environment.
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

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-5 text-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#805b3a]">10K+</h3>
              <p className="text-sm text-[#5a4733]">Students Trained</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#805b3a]">120+</h3>
              <p className="text-sm text-[#5a4733]">Workshops Conducted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#805b3a]">85+</h3>
              <p className="text-sm text-[#5a4733]">Institutions Partnered</p>
            </div>
          </motion.div>
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
            alt="Cyber Security"
            className="w-full max-w-lg h-[450px] object-cover rounded-3xl border-[6px] border-[#b89d7e] shadow-[0_0_35px_#c6af93]"
          />
        </motion.div>
      </div>
    </section>
  );
}
