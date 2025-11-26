import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUserFriends,
  FaCity,
  FaSchool,
  FaUniversity,
  FaHands,
} from "react-icons/fa";

const ImpactSection = () => {
  const outreach = [
    {
      icon: FaSchool,
      title: "School Students",
      count: "10,000+",
      description: "Young minds educated in digital safety and AI fundamentals",
      programs: [
        "Cyber Safety Workshops",
        "AI Awareness Sessions",
        "Digital Ethics Classes",
      ],
    },
    {
      icon: FaUserFriends,
      title: "Senior Citizens",
      count: "5,000+",
      description: "Elderly population empowered with digital literacy skills",
      programs: ["Fraud Prevention", "Digital Basics", "Online Safety"],
    },
    {
      icon: FaCity,
      title: "Industry Workers",
      count: "200+",
      description: "Corporates and organizations trained in cybersecurity",
      programs: [
        "Workplace Security",
        "Data Protection",
        "Compliance Training",
      ],
    },
    {
      icon: FaUniversity,
      title: "Educational Institutes",
      count: "50+",
      description: "Colleges and universities collaborating on tech education",
      programs: [
        "Curriculum Development",
        "Faculty Training",
        "Research Projects",
      ],
    },
    {
      icon: FaChalkboardTeacher,
      title: "Workshops Conducted",
      count: "500+",
      description: "Interactive sessions across various digital topics",
      programs: [
        "Hands-on Training",
        "Awareness Programs",
        "Skill Development",
      ],
    },
    {
      icon: FaHands,
      title: "Government Collaborations",
      count: "15+",
      description: "Partnerships with government bodies for digital inclusion",
      programs: [
        "Policy Initiatives",
        "Public Campaigns",
        "Community Outreach",
      ],
    },
  ];

  return (
    <section id="impact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Social Impact
          </h2>
          <p className="text-xl text-[#805b3a] max-w-3xl mx-auto">
            Creating measurable change through education and awareness
            initiatives that reach across all sections of society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outreach.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                backgroundColor: "#f0e6d8",
                borderColor: "#805b3a",
              }}
              className="bg-white/80 rounded-2xl p-6 border border-[#a4947d]/30 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#805b3a]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-[#805b3a] text-2xl" />
              </div>
              <div className="text-3xl font-bold text-[#805b3a] mb-2">
                {item.count}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-[#805b3a] text-sm mb-4">{item.description}</p>
              <div className="space-y-2">
                {item.programs.map((program, programIndex) => (
                  <span
                    key={programIndex}
                    className="block text-black text-xs bg-[#a4947d]/10 px-2 py-1 rounded-full"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
