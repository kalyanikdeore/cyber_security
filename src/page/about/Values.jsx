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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoreValues = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("core-values");
        console.log("API Response:", res.data); // Debug log

        // Process and sort by order
        const data = res.data
          .sort((a, b) => a.order - b.order) // Sort by order field
          .map((item) => ({
            id: item.id,
            title: item.title,
            desc: item.desc,
            icon: item.icon ? (
              iconMap[item.icon] || <Star className="w-4 h-4" />
            ) : (
              <Star className="w-4 h-4" />
            ),
            order: item.order,
          }));

        setFeatures(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch core values:", error);
        setError("Failed to load core values");
        // Fallback data in case API fails
        setFeatures([
          {
            id: 1,
            title: "Innovation",
            desc: "Driving creative solutions and forward-thinking approaches",
            icon: iconMap.Lightbulb || <Star className="w-4 h-4" />,
            order: 1,
          },
          {
            id: 2,
            title: "Collaboration",
            desc: "Working together to achieve common goals",
            icon: iconMap.Users || <Star className="w-4 h-4" />,
            order: 2,
          },
          {
            id: 3,
            title: "Excellence",
            desc: "Striving for the highest quality in everything we do",
            icon: iconMap.Award || <Star className="w-4 h-4" />,
            order: 3,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCoreValues();
  }, []);

  // Motion variants
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

  if (loading) {
    return (
      <div className="min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F8F1E4] py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#805b3a]"></div>
          <p className="mt-4 text-gray-600">Loading core values...</p>
        </div>
      </div>
    );
  }

  if (error && features.length === 0) {
    return (
      <div className="min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F8F1E4] py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-[#FFF9F0] via-white to-[#F8F1E4] py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background animations can be added here */}

      <section className="max-w-6xl mx-auto relative z-10">
        {/* Heading Section */}
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

        {/* Core Values Cards */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* First row - up to 3 items */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {features.slice(0, 3).map((feature) => (
                <motion.div
                  key={feature.id}
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
          )}

          {/* Second row - items 4+ */}
          {features.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
              {features.slice(3).map((feature) => (
                <motion.div
                  key={feature.id}
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
          )}
        </motion.div>

        {/* Show message if no core values */}
        {features.length === 0 && !loading && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No core values found. Please add some from the admin panel.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
