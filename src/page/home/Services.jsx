import { motion } from "framer-motion";
import {
  FaUsers,
  FaSchool,
  FaBuilding,
  FaUserGraduate,
  FaShieldAlt,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";

import {
  cybersafety,
  assistivetechnology2,
  devicedonation,
  // Seniors101,
  digitalliteracyworkshops,
  career_guidance,
  ai_coding_computational_training,
  scholership2,
  Readingclubs,
  women_micro_entrepreneurs,
  financialprogram,
  financial_literacy_programs3,
  self_help_group_strengthening,
  health_camps99,
  nutrition_wellness_workshop,
  amentalwellness,
  sanitation_clean_water,
  treeplan99,
  waste2,
  cleengreen,
  treeplan,
  leadership,
  volunteering_community_action_programs3,
  innovation,
  soft_skills_communication,
  climateeducation,
  energy_conservation_drives,
} from "../../assets";

const ServicesSection = () => {
  const services = [
    {
      icon: FaSchool,
      title: "Technology & Digital Transformation Programs",
      description:
        "Our Technology & Digital Transformation Programs aim to bridge the digital divide by empowering students, youth, and community members with essential digital skills.",
      features: [
        "Digital Literacy Workshops (Basic to Advanced modules)",
        "Digital Detox",
        "Cyber Safety Awareness Programs",
        "Device Donation & Digital Access Support",
        "Tech for Seniors Initiative",
        "Digital Financial Awareness & Cyber Safety Program",
        "Assistive Technology for Inclusion Program",
      ],
      href: "/technology-digital",
      images: [
        digitalliteracyworkshops,
        cybersafety,
        assistivetechnology2,
        // Seniors101,
        devicedonation,
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
      href: "/education-development",
      images: [
        scholership2,
        career_guidance,
        ai_coding_computational_training,
        Readingclubs,
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
      href: "/women-empowerment",
      images: [
        financialprogram,
        women_micro_entrepreneurs,
        self_help_group_strengthening,
        financial_literacy_programs3,
      ],
    },
    {
      icon: FaUsers,
      title: "Health, Wellness & Community Development Programs",
      description:
        "Our health and community initiatives ensure holistic development through accessible healthcare services, awareness campaigns, and community infrastructure development.",
      features: [
        "Health Camps (General, Eye, Dental, Women's Health)",
        "Nutrition & Wellness Workshops",
        "Adolescent Health & Mental Wellness Programs",
        "Sanitation & Clean Water Awareness",
        "Community Infrastructure Support (Toilets, Purifiers, Clean Drinking Water Units)",
      ],
      href: "/health-wellness",
      images: [
        health_camps99,
        nutrition_wellness_workshop,
        amentalwellness,
        sanitation_clean_water,
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
      href: "/environment-program",
      images: [
        treeplan99,
        waste2,
        climateeducation,
        energy_conservation_drives,
      ],
    },
    {
      icon: FaBrain,
      title: "Youth Leadership & Community Engagement Programs",
      description:
        "Empowering youth to become change-makers, innovators, and community leaders through structured leadership and experiential programs.",
      features: [
        "Leadership Workshops & Personality Development",
        "Volunteering & Community Action Programs",
        "Innovation & Problem-Solving Challenges",
        "Soft Skills & Communication Training",
      ],
      href: "/youth-leadership",
      images: [
        leadership,
        volunteering_community_action_programs3,
        innovation,
        soft_skills_communication,
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-8 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-4 sm:mb-6">
            What We Do - Our Goals & Program Pillars
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 px-2">
            Our Six
            <span className="text-[#926b49]"> Pillars of Transformation</span>
          </h2>

          <motion.div
            className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Explore the comprehensive areas where we are dedicated to creating
            long-term, sustainable change.
          </p>
        </div>

        {/* Services Grid - Mobile: Stacked, Desktop: 2-column alternating */}
        <div className="space-y-12 sm:space-y-14">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl  overflow-hidden ${
                index % 2 === 0
                  ? "sm:bg-gradient-to-br sm:from-white sm:to-gray-50"
                  : ""
              }`}
            >
              {/* Mobile Layout - Stacked */}
              <div className="block lg:hidden">
                {/* Content Section (Top on mobile) */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#805b3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-[#805b3a] text-2xl sm:text-3xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-5">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#805b3a] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-800 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-base sm:text-xl font-semibold text-[#805b3a] hover:underline"
                  >
                    Learn More <FaArrowRight className="text-sm sm:text-lg" />
                  </a>
                </div>

                {/* Image Gallery (Bottom on mobile) */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      <img
                        src={service.images[0]}
                        alt=""
                        className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                      />
                      <img
                        src={service.images[2]}
                        alt=""
                        className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      <img
                        src={service.images[1]}
                        alt=""
                        className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                      />
                      <img
                        src={service.images[3]}
                        alt=""
                        className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - 2-column alternating */}
              <div className="hidden lg:block">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-8 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* IMAGE SECTION */}
                  <div
                    className={`${
                      index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src={service.images[0]}
                        alt=""
                        className="w-full h-48 object-cover rounded-2xl shadow-md"
                      />
                      <img
                        src={service.images[1]}
                        alt=""
                        className="w-full h-48 object-cover rounded-2xl shadow-md"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <img
                        src={service.images[2]}
                        alt=""
                        className="w-full h-48 object-cover rounded-2xl shadow-md"
                      />
                      <img
                        src={service.images[3]}
                        alt=""
                        className="w-full h-48 object-cover rounded-2xl shadow-md"
                      />
                    </div>
                  </div>

                  {/* CONTENT SECTION */}
                  <div
                    className={`${
                      index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#805b3a]/10 rounded-xl flex items-center justify-center">
                        <service.icon className="text-[#805b3a] text-3xl" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-7">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#805b3a] rounded-full mt-2" />
                          <span className="text-gray-800 text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xl font-semibold text-[#805b3a] hover:underline"
                    >
                      Learn More <FaArrowRight className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
