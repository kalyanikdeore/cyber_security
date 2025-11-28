import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Smartphone,
  UserCheck,
  CreditCard,
  Accessibility,
} from "lucide-react";

const TechnologyDigitalPrograms = () => {
  const initiatives = [
    {
      id: 1,
      title: "Digital Literacy Workshops",
      subtitle: "Basic → Advanced modules",
      description:
        "Empowering students, youth, and community members with essential digital skills to bridge the digital divide.",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Cyber Safety Awareness Programs",
      subtitle: "Safe & Responsible Online Behavior",
      description:
        "Creating awareness about cyber threats and promoting safe digital practices among communities.",
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "Device Donation & Digital Access Support",
      subtitle: "Connecting Everyone to Technology",
      description:
        "Providing devices and internet access to underserved communities for digital inclusion.",
      icon: Smartphone,
    },
    {
      id: 4,
      title: "Tech for Seniors Initiative",
      subtitle: "Digital Inclusion for All Ages",
      description:
        "Helping senior citizens adapt to technology with hands-on training and support.",
      icon: UserCheck,
    },
    {
      id: 5,
      title: "Digital Financial Awareness & Cyber Safety",
      subtitle: "Secure Financial Literacy",
      description:
        "Enabling communities to manage digital finances safely and confidently.",
      icon: CreditCard,
    },
    {
      id: 6,
      title: "Assistive Technology for Inclusion",
      subtitle: "Accessibility & Empowerment",
      description:
        "Providing tools and training for differently-abled individuals to thrive in a tech-driven world.",
      icon: Accessibility,
    },
  ];

  // Variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
          Programs
        </span>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technology & Digital{" "}
          <span className="text-[#926b49]">Transformation Programs</span>
        </motion.h2>

        {/* Animated Gradient Line */}
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Short Description */}
        <motion.p
          className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our programs aim to bridge the digital divide by empowering students,
          youth, and community members with essential digital skills. We help
          communities transition into a tech-enabled future through structured
          training, access to digital tools, and hands-on learning
          opportunities.
        </motion.p>

        {/* Initiatives Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#c79a6c] text-white rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <h4 className="text-[#e1a568] font-medium mb-3">
                  {item.subtitle}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyDigitalPrograms;
