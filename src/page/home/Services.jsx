import { motion } from "framer-motion";
import {
  FaUsers,
  FaSchool,
  FaBuilding,
  FaUserGraduate,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: FaSchool,
      title: "School Programs",
      description:
        "Interactive cybersecurity and AI education for students with age-appropriate curriculum and hands-on activities.",
      features: [
        "Digital Literacy",
        "Cyber Safety",
        "AI Basics",
        "Ethical Computing",
      ],
    },
    {
      icon: FaBuilding,
      title: "Corporate Training",
      description:
        "Workplace-focused cybersecurity awareness and AI implementation strategies for industry professionals.",
      features: [
        "Threat Prevention",
        "Data Security",
        "AI Ethics",
        "Compliance",
      ],
    },
    {
      icon: FaUserGraduate,
      title: "Institute Workshops",
      description:
        "Advanced technical training and research collaborations with educational institutions.",
      features: [
        "Research Programs",
        "Technical Skills",
        "Curriculum Development",
        "Industry Partnerships",
      ],
    },
    {
      icon: FaUsers,
      title: "Senior Citizen Programs",
      description:
        "Specialized digital literacy and cyber fraud prevention workshops for senior citizens.",
      features: [
        "Online Safety",
        "Fraud Prevention",
        "Digital Basics",
        "Support Networks",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Government Initiatives",
      description:
        "Collaborative programs with government organizations for nationwide digital safety awareness.",
      features: [
        "Policy Support",
        "Public Awareness",
        "Capacity Building",
        "Digital Inclusion",
      ],
    },
    {
      icon: FaBrain,
      title: "Youth Empowerment",
      description:
        "Future-focused programs preparing youth for careers in AI and cybersecurity.",
      features: [
        "Career Guidance",
        "Skill Development",
        "Mentorship",
        "Innovation Labs",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Training Programs
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[#926b49]">Training Programs</span>
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
            Empowering diverse audiences through specialized education in AI,
            cybersecurity, and digital responsibility across all segments of
            society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                backgroundColor: "#f0e6d8",
                borderColor: "#805b3a",
              }}
              className="bg-white/80 rounded-2xl p-6 border border-[#a4947d]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#805b3a]/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-[#805b3a] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-[#805b3a] mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-[#805b3a] rounded-full"></div>
                    <span className="text-black text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
