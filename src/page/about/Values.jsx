import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inclusivity",
      desc: "Ensuring that our programs reach the most marginalized and vulnerable segments of society.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Innovation",
      desc: "Continuously seeking and adapting the best and newest technology-driven solutions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accountability",
      desc: "Maintaining stringent standards of operational and financial transparency for all stakeholders.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      desc: "Approaching community needs with empathy and a dedication to holistic well-being.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainability",
      desc: "Designing programs with long-term viability, focusing on community ownership and environmental responsibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
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
                Our Values
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
              Our <span className="text-[#926b49]">Core Principles</span>
            </h2>

            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-[#af8054] to-[#af8056] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />

            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
              At Navanvesha Foundation, our values guide our journey toward
              building a digitally empowered, skilled, and equitable society for
              all.
            </p>
          </motion.div>

          {/* Updated grid: 1 → 2 → 3 → 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#926b49] transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#926b49] to-[#7a573a] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-justify">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
