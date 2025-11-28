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
      title: "Technology & Digital Transformation Programs",
      description:
        "Our Technology & Digital Transformation Programs aim to bridge the digital divide by empowering students, youth, and community members with essential digital skills. ",
      features: [
        "Digital Literacy Workshops (Basic to Advanced modules)",
        "Cyber Safety Awareness Programs",
        "Device Donation & Digital Access Support",
        "Tech for Seniors Initiative",
        "Digital Financial Awareness & Cyber Safety Program",
        "Assistive Technology for Inclusion Program",
      ],
    },
    {
      icon: FaBuilding,
      title: "Education & Skill Development Programs",
      description:
        "Focused on improving learning outcomes, Navanvesha Foundation designs high-impact educational interventions that nurture foundational learning, creativity, and leadership skills among children and youth.",
      features: [
        "Scholarships & Academic Support",
        "Teacher Training & Capacity Building programs",
        "Career Guidance & Employability Programs",
        "Reading Clubs, Library Setups & Learning Corners",
        "Equipment and educational material support",
        "Setting up Smart Classrooms & Digital Labs",
        "STEM Clubs",
        "AI, Coding & Computational Thinking trainings",
      ],
    },
    {
      icon: FaUserGraduate,
      title: "Women Empowerment & Livelihood Training",
      description:
        "We enable women to gain financial independence and leadership opportunities through skill-based training, entrepreneurship development, and community support initiatives.",
      features: [
        "Financial Literacy Programs",
        "Digital Awareness Programs",
        "Self-Help Group (SHG) Strengthening",
        "Digital Skills for homemakers and Women Micro-Entrepreneurs",
      ],
    },
    {
      icon: FaUsers,
      title: "Health, Wellness & Community Development Programs",
      description:
        "Our health and community initiatives ensure holistic development through accessible healthcare services, awareness campaigns, and community infrastructure development.",
      features: [
        "Health Camps (General, Eye, Dental, Women’s Health)",
        "Nutrition & Wellness Workshops",
        "Adolescent Health & Mental Wellness Programs",
        "Sanitation & Clean Water Awareness",
        "Community Infrastructure Support (Toilets, Purifiers, Clean Drinking Water Units)",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Environment & Sustainability Programs",
      description:
        "We promote environmental consciousness and sustainable practices through awareness drives and community-action programs.",
      features: [
        "Tree Plantation & Green Campus Initiatives",
        "Waste Segregation & Recycling Awareness",
        "Climate Education in Schools",
        "Energy Conservation Drives",
        "Clean & Green Community Campaigns",
      ],
    },
    {
      icon: FaBrain,
      title: "Youth Leadership & Community Engagement Programs",
      description:
        "Empowering youth to become change-makers, innovators, and community leaders through structured leadership and experiential programs.",
      features: [
        "Leadership Workshops & Personality Developmen",
        "Volunteering & Community Action Programs",
        "Innovation & Problem-Solving Challenges",
        "Soft Skills & Communication Training",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Services
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
