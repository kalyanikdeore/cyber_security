import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShieldVirus,
  FaUserShield,
  FaRobot,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";

const TrainingSection = () => {
  const programs = [
    {
      icon: FaShieldVirus,
      title: "Cyber Security Fundamentals",
      audience: "All Audiences",
      duration: "2-4 Weeks",
      focus:
        "Basic cybersecurity principles, threat awareness, and protection strategies",
      level: "Beginner to Intermediate",
    },
    {
      icon: FaRobot,
      title: "AI & Machine Learning",
      audience: "Students & Professionals",
      duration: "4-8 Weeks",
      focus:
        "Practical AI applications, ethical considerations, and implementation",
      level: "Intermediate to Advanced",
    },
    {
      icon: FaUserShield,
      title: "Cyber Fraud Prevention",
      audience: "Senior Citizens & General Public",
      duration: "1-2 Days",
      focus:
        "Identifying and preventing online scams, financial fraud protection",
      level: "Beginner",
    },
    {
      icon: FaLaptopCode,
      title: "Digital Content Ethics",
      audience: "Youth & Students",
      duration: "1-3 Weeks",
      focus:
        "Responsible digital citizenship, copyright awareness, online behavior",
      level: "All Levels",
    },
    {
      icon: FaGraduationCap,
      title: "Computer Education",
      audience: "All Age Groups",
      duration: "Flexible",
      focus: "Digital literacy, basic computing skills, software proficiency",
      level: "Beginner",
    },
    {
      icon: FaHandsHelping,
      title: "Social Welfare Tech",
      audience: "Community Workers",
      duration: "2-4 Weeks",
      focus: "Using technology for social good, community digital empowerment",
      level: "Intermediate",
    },
  ];

  return (
    <section id="training" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Training Programs
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Specialized{" "}
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
            Tailored educational initiatives designed to address specific needs
            of different demographic groups in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#f0e6d8",
                borderColor: "#805b3a",
              }}
              className="bg-white/80 rounded-2xl p-6 border border-[#a4947d]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#805b3a]/10 rounded-xl flex items-center justify-center shrink-0">
                  <program.icon className="text-[#805b3a] text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {program.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-[#805b3a] text-sm font-medium">
                        Audience:
                      </span>
                      <p className="text-black text-sm">{program.audience}</p>
                    </div>
                    <div>
                      <span className="text-[#805b3a] text-sm font-medium">
                        Duration:
                      </span>
                      <p className="text-black text-sm">{program.duration}</p>
                    </div>
                    <div>
                      <span className="text-[#805b3a] text-sm font-medium">
                        Level:
                      </span>
                      <p className="text-black text-sm">{program.level}</p>
                    </div>
                  </div>
                  <p className="text-[#805b3a] text-sm leading-relaxed">
                    {program.focus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
