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
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            About Navanvesha Foundation
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
            Navanvesha means{" "}
            <span className="text-[#926b49]">
              "New Exploration" or "Renewed Discovery."
            </span>
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
            It symbolizes the spirit of curiosity, innovation, and continuous
            learning — a bridge between traditional wisdom and modern
            creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side - UNCHANGED */}
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
              <p className="text-[#805b3a] text-lg leading-relaxed text-justify">
                Navanvesha Foundation is a socially driven, non-profit
                organization committed to empowering communities through
                education, digital transformation, and sustainable development
                initiatives.
              </p>
              <p className="text-[#805b3a] text-lg leading-relaxed text-justify">
                Rooted in the belief that every individual deserves appropriate
                knowledge to grow, learn, and thrive, we design and deliver
                high-impact CSR programs in collaboration with corporates,
                institutions, and local partners.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-semibold text-black mb-4 text-justify">
                Our Core Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  {
                    icon: FaHandshake,
                    text: "Youth Empowerment & Awareness",
                  },
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
            {/* <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3  text-[#805b3a] font-semibold rounded-full shadow-lg transition duration-300"
              >
                About Us
              </Link>
            </div> */}

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6"
            >
              {[
                { number: "1,00,000+ ", label: " Lives Touched" },
                { number: "6", label: "Core  Pillars " },
                { number: "100+", label: "Partners" },
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

          {/* Image Side - UPDATED with 3-image grid */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Grid Container */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
              {/* First Row: Single column spanning both columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-2 row-span-1"
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#a4947d]/20">
                  <img
                    src={about2} // Your first image
                    alt="Navanvesha Foundation Community Impact"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
                </div>
              </motion.div>

              {/* Second Row: Two columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-span-1 row-span-1"
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#a4947d]/20">
                  <img
                    src={about1} // Your second image
                    alt="Navanvesha Foundation Education Programs"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="col-span-1 row-span-1"
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#a4947d]/20">
                  <img
                    src={about3} // Your third image
                    alt="Navanvesha Foundation Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#805b3a]/10 to-transparent"></div>
                </div>
              </motion.div>
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
