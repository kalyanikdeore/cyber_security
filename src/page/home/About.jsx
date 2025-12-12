import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CTA from "../cta/CTA";
import about2 from "../../assets/about/about_us_1.png";
import about1 from "../../assets/TechnologyDigitalTransformationPrograms/cyber_safety_programs.jpeg";
import about3 from "../../assets/EducationSkilldevelopementprograms/learning_corners.jpeg";
const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            About Navanvesha Foundation
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Navanvesha means{" "}
            <span className="text-[#926b49]">
              "New Exploration" or "Renewed Discovery."
            </span>
          </motion.h2>

          <motion.div
            className="h-1 w-16 md:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            whileInView={{ width: "10%" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          />

          {/* Short Description */}
          <motion.p
            className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            It symbolizes the spirit of curiosity, innovation, and continuous
            learning — a bridge between traditional wisdom and modern
            creativity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Description */}
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="text-[#805b3a] text-base md:text-lg leading-relaxed text-justify">
                Navanvesha Foundation is a socially driven, non-profit
                organization committed to empowering communities through
                education, digital transformation, and sustainable development
                initiatives.
              </p>
              <p className="text-[#805b3a] text-base md:text-lg leading-relaxed text-justify">
                Rooted in the belief that every individual deserves appropriate
                knowledge to grow, learn, and thrive, we design and deliver
                high-impact CSR programs in collaboration with corporates,
                institutions, and local partners.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              className="space-y-3 md:space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h4 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 text-justify">
                Our Core Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: FaGraduationCap, text: "Education & Research" },
                  { icon: FaUsers, text: "Technology & Innovation" },
                  {
                    icon: FaChartLine,
                    text: "Social Development & Skill Growth",
                  },
                  {
                    icon: FaHandshake,
                    text: "Sustainability & Future Studies",
                  },
                  { icon: FaHandshake, text: "Youth Empowerment & Awareness" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "#f0e6d8",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 md:space-x-3 p-3 rounded-lg border border-[#a4947d]/30 bg-white/50"
                  >
                    <feature.icon className="text-[#805b3a] text-base md:text-lg" />
                    <span className="text-black font-medium text-sm md:text-base">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { number: "1,00,000+", label: "Lives Touched" },
                { number: "6", label: "Core Pillars" },
                { number: "100+", label: "Partners" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f0e6d8",
                    transition: { duration: 0.2 },
                  }}
                  className="text-center p-3 md:p-4 rounded-xl border border-[#a4947d]/30 bg-white/50"
                >
                  <div className="text-xl md:text-3xl font-bold text-[#805b3a] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-black text-xs md:text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Side - Mobile Responsive */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Image Grid Container */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-[600px]">
              {/* First Row: Single column spanning both columns */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="col-span-2 row-span-1"
              >
                <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-4 border-[#a4947d]/20">
                  <img
                    src={about2}
                    alt="Navanvesha Foundation Community Impact"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
                </div>
              </motion.div>

              {/* Second Row: Two columns */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="col-span-1 row-span-1"
              >
                <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-4 border-[#a4947d]/20">
                  <img
                    src={about1}
                    alt="Navanvesha Foundation Education Programs"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="col-span-1 row-span-1"
              >
                <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-2 md:border-4 border-[#a4947d]/20">
                  <img
                    src={about3}
                    alt="Navanvesha Foundation Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Background Decorative Elements - Hidden on mobile, shown on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="hidden md:block absolute -top-4 -right-4 w-24 h-24 bg-[#805b3a]/20 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="hidden md:block absolute -bottom-4 -left-4 w-32 h-32 bg-[#a4947d]/10 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 md:mt-16"
        >
          <CTA />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
