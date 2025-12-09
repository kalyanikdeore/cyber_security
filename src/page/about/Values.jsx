import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Target,
  Heart,
  Award,
  Sparkles,
  Globe,
  HandHeart,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inclusivity",
      desc: "Ensuring that our programs reach the most marginalized and vulnerable segments.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Innovation",
      desc: "Continuously adapting the best technology-driven solutions.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Accountability",
      desc: "Maintaining stringent standards of transparency for all stakeholders.",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Compassion",
      desc: "Approaching needs with empathy and dedication to holistic well-being.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sustainability",
      desc: "Focusing on community ownership & environmental responsibility.",
    },
  ];

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F8F1E4] py-16 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute w-1 h-1 bg-[#805b3a]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-[#805b3a]/5 to-[#694c32]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-l from-[#805b3a]/5 to-[#694c32]/5 rounded-full blur-3xl"
        />
      </div>

      <section className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Heading with animations */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#805b3a]/10 to-[#694c32]/10 border border-[#805b3a]/20 mb-5 group hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-[#805b3a]" />
            </motion.div>
            <span className="text-xs font-semibold text-[#805b3a] tracking-wider">
              OUR GUIDING VALUES
            </span>
            <ChevronRight className="h-3 w-3 text-[#805b3a] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="relative">
              <span className="relative z-10 text-4xl">Core Principles</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-1 "
              />
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mb-6"
          >
            <Star className="h-3 w-3 text-[#805b3a] fill-[#805b3a]" />
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#805b3a]/30 via-[#805b3a] to-[#805b3a]/30 rounded-full" />
            <Star className="h-3 w-3 text-[#805b3a] fill-[#805b3a]" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Guiding our mission to build a skilled, empowered, and digitally
            enabled society where opportunities are accessible to all.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards with better animations */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* First Row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#805b3a]/10 hover:border-[#805b3a]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#805b3a]/10 overflow-hidden"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#805b3a]/20 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#805b3a]/20 rounded-bl-2xl" />

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="w-14 h-14 bg-gradient-to-br from-[#805b3a] via-[#8a6543] to-[#694c32] rounded-2xl flex items-center justify-center text-white mb-5 mx-auto shadow-lg group-hover:shadow-[#805b3a]/30 group-hover:scale-110 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#805b3a] transition-colors text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-sm text-gray-600 leading-relaxed text-center mb-4">
                    {feature.desc}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-gradient-to-r from-[#805b3a] to-[#694c32] rounded-t-full"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 columns (centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                variants={itemVariants}
                whileHover="hover"
                custom={index + 3}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative p-7 rounded-2xl bg-gradient-to-br from-white to-[#FFF9F0] border border-[#805b3a]/15 hover:border-[#805b3a]/35 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-[#805b3a]/15 overflow-hidden"
                >
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#805b3a]/0 via-[#805b3a]/5 to-[#805b3a]/0"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: (index + 3) * 0.2,
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-[#805b3a] via-[#8a6543] to-[#694c32] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-xl group-hover:shadow-[#805b3a]/40"
                  >
                    <Zap className="absolute h-3 w-3 text-white/60 -top-1 -right-1" />
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#805b3a] transition-colors text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {feature.desc}
                  </p>

                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl"
                    whileHover={{
                      borderColor: ["#805b3a", "#694c32", "#805b3a"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced decorative element */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4">
            <motion.div
              animate={{ width: [0, 60, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px bg-gradient-to-r from-transparent via-[#805b3a]/50 to-transparent"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex gap-1"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1.5 h-1.5 bg-[#805b3a] rounded-full"
                />
              ))}
            </motion.div>
            <motion.div
              animate={{ width: [0, 60, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-[#805b3a]/50 to-transparent"
            />
          </div>

          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-[#805b3a]/70 mt-4 font-medium tracking-wider"
          >
            BUILDING A BETTER FUTURE TOGETHER
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
