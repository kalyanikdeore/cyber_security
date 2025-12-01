import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Smartphone,
  UserCheck,
  CreditCard,
  Accessibility,
  BatteryCharging,
} from "lucide-react";

export default function TechnologyDigitalPrograms({ onCTAClick }) {
  const initiatives = [
    {
      id: 1,
      title: "Digital Literacy Workshops ",
      subtitle: "Basic → Advanced modules",
      icon: BookOpen,
      description:
        "Hands-on learning paths that take learners from computer basics to practical digital skills for education and work.",
    },
    {
      id: 7,
      title: "Digital Detox",
      subtitle: "Balancing digital life",
      icon: BatteryCharging, // You might want to choose a different icon
      description:
        "Programs and workshops focused on mindful technology use, reducing screen time, and promoting digital wellbeing.",
    },
    {
      id: 2,
      title: "Cyber Safety Awareness Programs",
      subtitle: "Protecting people online",
      icon: ShieldCheck,
      description:
        "Practical sessions on safe passwords, phishing awareness, secure social use, and privacy best practices.",
    },
    {
      id: 3,
      title: "Device Donation & Digital Access Support",
      subtitle: "Bridging the access gap",
      icon: Smartphone,
      description:
        "Refurbished device programs and connectivity partnerships so communities can actually use digital tools.",
    },
    {
      id: 4,
      title: "Tech for Seniors Initiative",
      subtitle: "Simple, patient-led learning",
      icon: UserCheck,
      description:
        "Low-pressure classes helping older adults use phones, messengers, video calls, and essential apps.",
    },
    {
      id: 5,
      title: "Digital Financial Awareness & Cyber Safety Program",
      subtitle: "Safe digital transactions",
      icon: CreditCard,
      description:
        "Workshops on UPI, payments, budgeting apps & spotting financial scams for all ages.",
    },
    {
      id: 6,
      title: "Assistive Technology for Inclusion Program",
      subtitle: "Accessibility-first tools",
      icon: Accessibility,
      description:
        "Intro to assistive devices, screen readers, voice input & adaptive interfaces enabling inclusion.",
    },
  ];

  // Redirect functions
  const handleExplorePrograms = () => {
    window.location.href = "/about"; // Change to your desired URL
  };

  const handleRequestWorkshop = () => {
    window.location.href = "/workshop-request"; // Change to your desired URL
  };

  const handleConnectTeam = () => {
    window.location.href = "/contact"; // Change to your desired URL
  };

  const handleConnectWithUs = () => {
    window.location.href = "/contact"; // Change to your desired URL
  };

  const handleLearnMore = (initiativeId) => {
    // Redirect to specific program detail pages
    const programUrls = {
      1: "/programs/digital-literacy",
      2: "/programs/cyber-safety",
      3: "/programs/device-donation",
      4: "/programs/tech-for-seniors",
      5: "/programs/financial-awareness",
      6: "/programs/assistive-technology",
    };
    window.location.href = programUrls[initiativeId] || "/programs";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 ">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-[600px] flex items-center justify-center  overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#805B3A]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#A1887F]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#805B3A]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative text-center space-y-8 max-w-4xl mx-auto px-6">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white text-sm font-semibold px-8 py-3 rounded-full shadow-lg border border-[#805B3A]/30 backdrop-blur-sm"
          >
            Technology & Digital Transformation Programs
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-4xl font-extrabold leading-tight text-slate-900 relative"
          >
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              Inclusive Digital Access
            </span>
            <br />
            <span className="text-slate-800">
              Transforming Lives Through Technology
            </span>
            <span className="absolute left-1/2 -bottom-4 w-48 h-1 bg-gradient-to-r from-[#805B3A] to-[#A1887F] transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our programs bridge the digital divide by offering structured
            training, practical tools, and hands-on learning opportunities to
            <span className="font-semibold text-[#805B3A]">
              {" "}
              transform lives through technology
            </span>
            .
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 pt-6"
          >
            {/* About Us Button */}
            <button
              onClick={handleExplorePrograms}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#6e4d30] hover:to-[#8d756c] flex items-center gap-2"
            >
              <span>About Us</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            {/* Connect With Us Button */}
            <button
              onClick={handleConnectWithUs}
              className="group px-8 py-4 rounded-2xl bg-white text-[#805B3A] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-[#805B3A]/30 flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <span className="group-hover:rotate-12 transition-transform">
                🤝
              </span>
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Programs" },
              { number: "10K+", label: "Students" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-[#805B3A]">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* INITIATIVE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-20 text-center"
        >
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-[#9e6f5e] relative inline-block">
            Our Key Digital Initiatives
          </h2>

          <p className="text-slate-600 max-w-5xl mx-auto mt-2 text-lg">
            Our Technology & Digital Transformation Programs aim to bridge the
            digital divide by empowering students, youth, and community members
            with essential digital skills. We help communities transition into a
            tech-enabled future by offering structured training, access to
            digital tools, and hands-on learning opportunities.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((it, index) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="rounded-2xl border border-[#A1887F]/40 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#805B3A]/15 text-[#805B3A]">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 relative pb-1">
                      {it.title}
                    </h3>
                    <p className="text-sm text-slate-500">{it.subtitle}</p>

                    <p className="mt-3 text-sm text-slate-600 mb-4">
                      {it.description}
                    </p>

                    {/* <button
                      onClick={() => handleLearnMore(it.id)}
                      className="text-[#805B3A] hover:text-[#6e4d30] font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      Learn More →
                    </button> */}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="bg-[#805B3A] rounded-2xl p-10 border border-[#A1887F]/50 shadow-xl">
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Ready to Start Your Digital Empowerment Journey?
          </h3>

          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let's collaborate to create inclusive, future-ready communities
            through technology and innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConnectTeam}
              className="bg-white text-[#805B3A] px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#FAF6F2] transition-all"
            >
              Connect With Our Team
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
