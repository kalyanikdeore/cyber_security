import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Monitor,
  Clock,
  ShieldCheck,
  Server,
  Network,
  Activity,
  Cpu,
  Database,
  FileCheck,
  Cloud,
  Bug,
  Lock,
  Award,
  BookOpen,
  Heart,
  TrendingUp,
  Zap,
  GitBranch,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Mission-Driven Pedagogy",
      description:
        "Our training is infused with our core belief in empowerment and accessibility. We don't just teach cybersecurity; we foster a spirit of Navanvesha (Renewed Discovery)—cultivating curious, adaptive security minds ready for future challenges.",
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]",
    },
    {
      icon: Users,
      title: "Impact-Focused Curriculum",
      description:
        "Co-created with industry leaders and academic experts, our programs are designed for real-world application. We specialize in bridging the acute skill gaps in cybersecurity.",
      color: "#F4C430",
      gradient: "from-[#F4C430] to-[#F28B30]",
    },
    {
      icon: Heart,
      title: "Collaborative & Inclusive Approach",
      description:
        "Our focus extends to supporting underprivileged talent, ensuring opportunities in cybersecurity are accessible to all, which builds a more diverse and resilient security ecosystem.",
      color: "#2E7D32",
      gradient: "from-[#2E7D32] to-[#4DB6E2]",
    },
    {
      icon: TrendingUp,
      title: "Learning to Sustainable Practice",
      description:
        "We go beyond the classroom. Our initiatives in digital inclusion and community upliftment mean we are invested in creating a broader culture of security awareness, leading to long-term, sustainable digital safety for everyone.",
      color: "#F28B30",
      gradient: "from-[#F28B30] to-[#5D4633]",
    },
  ];

  // Updated stats for social impact
  const stats = [
    { number: "6+", label: "Focus Areas", color: "#F4C430" },
    { number: "1000+", label: "Lives Impacted", color: "#4DB6E2" },
    { number: "50+", label: "Community Programs", color: "#2E7D32" },
    { number: "100%", label: "Transparent Operations", color: "#F28B30" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F6F7F4] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#F4C430]/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#2E7D32]/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#4DB6E2]/5 rounded-full blur-2xl sm:blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#2E7D32 1px, transparent 1px),
                             linear-gradient(90deg, #2E7D32 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#926b49]/10 border border-[#926b49]/20 mb-4 sm:mb-5 md:mb-6"
          >
            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#926b49]" />
            <span className="text-xs sm:text-sm font-semibold text-[#926b49] tracking-wide">
              WHY CHOOSE US
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4 sm:mb-5 md:mb-6 px-2">
            Secure Your Digital <span className="text-[#926b49]">Future</span>
          </h2>

          <motion.div
            className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#af8054] to-[#af8056] mx-auto mb-4 sm:mb-5 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            We are a mission-driven partner, dedicated to building a digitally
            empowered and secure society.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
              className="relative bg-white rounded-xl sm:rounded-2xl text-left p-4 sm:p-5 md:p-6 shadow-md sm:shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md sm:shadow-lg group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                  border: `1px solid ${feature.color}20`,
                }}
              >
                <feature.icon
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-[#1E1E1E] mb-2 sm:mb-3 group-hover:text-[#926b49] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-10 sm:opacity-20`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Optional */}
        {/* <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-[#D9DDDC]"
            >
              <div
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-[#4A4A4A] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
