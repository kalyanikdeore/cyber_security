import React from "react";
import { motion } from "framer-motion";

const FuturePlans = () => {
  const goals = [
    {
      id: 1,
      number: "01",
      title: "Establish 50 new Smart Classrooms",
      description: "Train 5,000 students in AI & Computational Thinking",
      icon: "🎓",
      color: "bg-white",
      borderColor: "border-[#926b49]",
      textColor: "text-[#926b49]",
      stats: [
        { label: "Smart Classrooms", value: "50", icon: "🏫" },
        { label: "Students Trained", value: "5,000", icon: "👨‍🎓" },
        {
          label: "Focus Area",
          value: "AI & Computational Thinking",
          icon: "🤖",
        },
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Empower 10,000 Women",
      description: "Achieve 30% measurable increase in average income",
      icon: "👩‍💼",
      color: "bg-white",
      borderColor: "border-[#926b49]",
      textColor: "text-[#926b49]",
      stats: [
        { label: "Women Empowered", value: "10,000", icon: "👩‍🔬" },
        { label: "Income Increase", value: "30%", icon: "📈" },
        {
          label: "Skills Development",
          value: "Livelihood Programs",
          icon: "🛠️",
        },
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Install 100 Water Units",
      description: "Conduct 500 Health Camps in underserved districts",
      icon: "💧",
      color: "bg-white",
      borderColor: "border-[#926b49]",
      textColor: "text-[#926b49]",
      stats: [
        { label: "Water Units", value: "100", icon: "🚰" },
        { label: "Health Camps", value: "500", icon: "🏥" },
        { label: "Districts Covered", value: "Underserved Areas", icon: "🗺️" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Our Future Plans & Goals
          </span>

          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Navanvesha's Goals
            <span className="text-[#926b49]"> for the Next 5 Years</span>
          </h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We are not static; we are constantly evolving our reach. Our core
            objective is to scale our successful pilot projects across new
            geographies and demographics.
          </motion.p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className={`relative h-full ${goal.color} rounded-3xl border-2 ${goal.borderColor} p-6 md:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#926b49]`}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="absolute -top-4 -left-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`relative w-16 h-16 rounded-full ${goal.color} border-4 border-white flex items-center justify-center shadow-lg`}
                  >
                    <span className={`text-2xl font-black ${goal.textColor}`}>
                      {goal.number}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-6 pt-4 flex justify-end text-2xl opacity-20"
                  whileHover={{ rotate: 12, opacity: 0.3 }}
                >
                  {goal.icon}
                </motion.div>

                <motion.h3
                  className={`text-2xl font-bold mb-4 leading-tight ${goal.textColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {goal.title}
                </motion.h3>

                <motion.p
                  className="text-gray-700 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {goal.description}
                </motion.p>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-4 ">
                  {goal.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/80"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="text-2xl">{stat.icon}</div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">
                          {stat.label}
                        </div>
                        <div className={`font-bold ${goal.textColor}`}>
                          {stat.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlans;
