import React, { useEffect, useState } from "react";
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
import axiosInstance from "../../services/api";

const iconMap = {
  Lightbulb: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Users: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Target: <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Heart: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Award: <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Sparkles: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Globe: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  HandHeart: <HandHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
  Zap: <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
};

const About = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchCoreValues = async () => {
      try {
        const res = await axiosInstance.get("core-values");
        const data = res.data.map((item) => ({
          title: item.title,
          desc: item.desc,
          icon: iconMap[item.icon] || <Star className="w-4 h-4" />,
        }));
        setFeatures(data);
      } catch (error) {
        console.error("Failed to fetch core values:", error);
      }
    };

    fetchCoreValues();
  }, []);

  // Your existing motion variants and UI code
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 80 },
    },
  };
  const cardHoverVariants = {
    hover: {
      y: -4,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F8F1E4] py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background animations omitted for brevity (keep your existing UI) */}

      <section className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Your existing heading code here */}
        </motion.div>

        {/* Core Values Cards */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-[#805b3a]/10 hover:border-[#805b3a]/30 transition-all duration-300 shadow-sm hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#805b3a]/10 overflow-hidden"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#805b3a] via-[#8a6543] to-[#694c32] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 md:mb-5 mx-auto shadow-md sm:shadow-lg group-hover:shadow-[#805b3a]/30 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#805b3a] transition-colors text-center">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center mb-3 sm:mb-4">
                    {feature.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-[#FFF9F0] border border-[#805b3a]/15 hover:border-[#805b3a]/35 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#805b3a]/15 overflow-hidden"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#805b3a] via-[#8a6543] to-[#694c32] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 mx-auto shadow-lg sm:shadow-xl group-hover:shadow-[#805b3a]/40">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#805b3a] transition-colors text-center">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                    {feature.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
