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
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "Inclusivity",
      desc: "Ensuring that our programs reach the most marginalized and vulnerable segments.",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "Innovation",
      desc: "Continuously adapting the best technology-driven solutions.",
    },
    {
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "Accountability",
      desc: "Maintaining stringent standards of transparency for all stakeholders.",
    },
    {
      icon: <HandHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "Compassion",
      desc: "Approaching needs with empathy and dedication to holistic well-being.",
    },
    {
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "Sustainability",
      desc: "Focusing on community ownership & environmental responsibility.",
    },
  ];

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F8F1E4] py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#805b3a]/20 rounded-full"
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
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-10 -left-10 sm:-top-20 sm:-left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-[#805b3a]/5 to-[#694c32]/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -bottom-10 -right-10 sm:-bottom-20 sm:-right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-gradient-to-l from-[#805b3a]/5 to-[#694c32]/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl"
        />
      </div>

      <section className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Heading with animations */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#805b3a]/10 to-[#694c32]/10 border border-[#805b3a]/20 mb-4 sm:mb-5 group hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#805b3a]" />
            </motion.div>
            <span className="text-xs font-semibold text-[#805b3a] tracking-wider">
              OUR GUIDING VALUES
            </span>
            <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#805b3a] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 sm:group-hover:translate-x-1" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
          >
            <span className="relative">
              <span className="relative z-10 text-3xl sm:text-4xl">
                Core Principles
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute bottom-1"
              />
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mb-4 sm:mb-5 md:mb-6"
          >
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#805b3a] fill-[#805b3a]" />
            <div className="h-0.5 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-[#805b3a]/30 via-[#805b3a] to-[#805b3a]/30 rounded-full" />
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#805b3a] fill-[#805b3a]" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-4"
          >
            Guiding our mission to build a skilled, empowered, and digitally
            enabled society where opportunities are accessible to all.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards with better animations */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* First Row - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
                  className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-[#805b3a]/10 hover:border-[#805b3a]/30 transition-all duration-300 shadow-sm hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#805b3a]/10 overflow-hidden"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-[#805b3a]/20 rounded-tr-xl sm:rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b border-l border-[#805b3a]/20 rounded-bl-xl sm:rounded-bl-2xl" />

                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#805b3a] via-[#8a6543] to-[#694c32] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 md:mb-5 mx-auto shadow-md sm:shadow-lg group-hover:shadow-[#805b3a]/30 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#805b3a] transition-colors text-center"
                    whileHover={{ scale: 1.03 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center mb-3 sm:mb-4">
                    {feature.desc}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#805b3a] to-[#694c32] rounded-t-full"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - Mobile: 1 column, Tablet: 2 columns (centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
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
                  className="relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-[#FFF9F0] border border-[#805b3a]/15 hover:border-[#805b3a]/35 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#805b3a]/15 overflow-hidden"
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
                      y: [0, -3, 0],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: (index + 3) * 0.2,
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#805b3a] via-[#8a6543] to-[#694c32] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 mx-auto shadow-lg sm:shadow-xl group-hover:shadow-[#805b3a]/40"
                  >
                    <Zap className="absolute h-2 w-2 sm:h-3 sm:w-3 text-white/60 -top-0.5 -right-0.5 sm:-top-1 sm:-right-1" />
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#805b3a] transition-colors text-center"
                    whileHover={{ scale: 1.03 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                    {feature.desc}
                  </p>

                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 border border-2 sm:border-2 border-transparent rounded-xl sm:rounded-2xl"
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
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 sm:gap-4">
            <motion.div
              animate={{ width: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px bg-gradient-to-r from-transparent via-[#805b3a]/50 to-transparent"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex gap-1"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -2, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#805b3a] rounded-full"
                />
              ))}
            </motion.div>
            <motion.div
              animate={{ width: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-[#805b3a]/50 to-transparent"
            />
          </div>

          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-[#805b3a]/70 mt-3 sm:mt-4 font-medium tracking-wider"
          >
            BUILDING A BETTER FUTURE TOGETHER
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
