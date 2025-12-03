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
  Lock, // Added Lock import
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
        "Our training is infused with our core belief in empowerment and accessibility. . We don't just teach cybersecurity; we foster a spirit of Navanvesha (Renewed Discovery)—cultivating curious, adaptive security minds ready for future challenges.",
      color: "#4DB6E2",
      gradient: "from-[#4DB6E2] to-[#2E7D32]",
    },
    {
      icon: Users,
      title: "Impact-Focused Curriculum",
      description:
        "Co-created with industry leaders and academic experts, our programs are designed for real-world application. We specialize in bridging the acute skill gaps in cybersecurity. ",
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
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#F6F7F4] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4DB6E2]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#2E7D32 1px, transparent 1px),
                             linear-gradient(90deg, #2E7D32 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#926b49]/10 border border-[#926b49]/20 mb-6"
          >
            <Award className="h-4 w-4 text-[#926b49]" />
            <span className="text-sm font-semibold text-[#926b49] tracking-wide">
              WHY CHOOSE US
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            Secure Your Digital <span className=" text-[#926b49]">Future</span>
          </h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#af8054] to-[#af8056] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
            We are a mission-driven partner, dedicated to building a digitally
            empowered and secure society.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="relative bg-white rounded-2xl  text-justify p-6 shadow-lg border border-[#D9DDDC] hover:shadow-xl transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                  border: `2px solid ${feature.color}20`,
                }}
              >
                <feature.icon
                  className="h-6 w-6"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-3 group-hover:text-[#926b49] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Optional */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#D9DDDC]"
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-[#4A4A4A] font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
