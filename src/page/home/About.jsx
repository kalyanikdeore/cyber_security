import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaHeart,
} from "react-icons/fa";
import CTA from "../cta/CTA";

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
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            About Navanvesha Foundation
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
            Empowering Communities Through{" "}
            <span className="text-[#926b49]">Sustainable Change</span>
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Short Description */}
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Bridging traditional wisdom with modern innovation to create lasting
            impact through education, digital transformation, and community
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* <h3 className="text-2xl font-bold text-black">
                Our Mission & Vision
              </h3> */}
              <p className="text-[#805b3a] text-lg leading-relaxed">
                Navanvesha Foundation is a socially driven, non-profit
                organization committed to empowering communities through
                education, digital transformation, and sustainable development
                initiatives.
              </p>
              <p className="text-[#805b3a] text-lg leading-relaxed">
                Rooted in the belief that every individual deserves appropriate
                knowledge to grow, learn, and thrive, we design and deliver
                high-impact CSR programs in collaboration with corporates,
                institutions, and local partners.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-semibold text-black mb-4">
                Our Core Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FaGraduationCap, text: "Technology Education" },
                  { icon: FaUsers, text: "Youth Development" },
                  { icon: FaChartLine, text: "Sustainable Development" },
                  { icon: FaHandshake, text: "Community Upliftment" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "#f0e6d8" }}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-[#a4947d]/30 bg-white/50 transition-all duration-300"
                  >
                    <feature.icon className="text-[#805b3a] text-lg" />
                    <span className="text-black font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
            >
              {[
                { number: "50+", label: "CSR Programs" },
                { number: "100K+", label: "Lives Impacted" },
                { number: "25+", label: "Corporate Partners" },
                { number: "15+", label: "Cities Reached" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#f0e6d8" }}
                  className="text-center p-4 rounded-xl border border-[#a4947d]/30 bg-white/50 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#805b3a] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-black text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#a4947d]/20">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Navanvesha Foundation Community Empowerment"
                className="w-full h-[600px] object-cover"
              />
              {/* Image overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
            </div>

            {/* Background Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#805b3a]/20 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#a4947d]/10 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>

        <CTA />
      </div>
    </section>
  );
};

export default AboutSection;
