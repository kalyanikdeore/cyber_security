import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiClock, FiCheckCircle } from "react-icons/fi";
import { SiHackthebox } from "react-icons/si";

export default function AboutCyberSecurity() {
  const features = [
    {
      id: 1,
      icon: <FiShield className="w-6 h-6" />,
      title: "Zero Trust Architecture",
      desc: "Least privilege and continuous verification to reduce attack surface.",
    },
    {
      id: 2,
      icon: <SiHackthebox className="w-6 h-6" />,
      title: "Threat Hunting",
      desc: "Proactive threat discovery using telemetry and security intelligence.",
    },
    {
      id: 3,
      icon: <FiClock className="w-6 h-6" />,
      title: "Incident Response",
      desc: "Fast response restoring operations with automation and expertise.",
    },
  ];

  // Array of random cybersecurity images
  const cyberSecurityImages = [
    "https://cdn.pixabay.com/photo/2022/05/28/10/53/cyber-security-7225809_1280.png",
    "https://cdn.pixabay.com/photo/2021/08/04/13/06/cyber-security-6521593_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/01/26/16/42/security-6969883_1280.png",
    "https://cdn.pixabay.com/photo/2021/09/27/11/12/security-6660682_1280.png",
    "https://cdn.pixabay.com/photo/2021/08/31/10/58/security-6588162_1280.png",
    "https://cdn.pixabay.com/photo/2021/01/29/08/44/security-5960112_1280.png",
    "https://cdn.pixabay.com/photo/2021/09/07/07/11/cyber-security-6602874_1280.png",
    "https://cdn.pixabay.com/photo/2021/08/17/12/25/security-6553318_1280.png",
  ];

  // Function to get a random image from the array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * cyberSecurityImages.length);
    return cyberSecurityImages[randomIndex];
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#805b3a]">
            About Us — Cyber Security
          </h2>

          <p className="mt-4 text-[#805b3a] leading-relaxed">
            We help businesses secure digital assets through modern cyber
            defense, real-time threat monitoring, and security automation. Our
            mission is to protect organizations from evolving cyber risks and
            ensure digital trust.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex gap-4 bg-white border border-[#a4947d] p-4 rounded-xl shadow-sm"
              >
                <div className="p-3 rounded-lg bg-[#805b3a] text-white">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#805b3a]">{f.title}</h4>
                  <p className="text-sm mt-1 text-[#805b3a]">{f.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-7 flex gap-4">
            <button className="bg-[#805b3a] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#6d4d32] transition-colors">
              Get Security Assessment
            </button>
            <button className="border border-[#a4947d] px-6 py-3 rounded-full font-semibold text-[#805b3a] hover:bg-white transition-colors">
              Our Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <motion.img
            key={getRandomImage()} // This ensures the image updates on re-render
            src={getRandomImage()}
            alt="Cyber Security"
            className="w-full max-w-md object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
