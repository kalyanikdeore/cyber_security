import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Briefcase,
  BookMarked,
  Package,
  MonitorCog,
  Microscope,
  Cpu,
} from "lucide-react";

export default function EducationSkillDevelopment({ onCTAClick }) {
  const initiatives = [
    {
      id: 1,
      title: "Scholarships & Academic Support",
      subtitle: "Financial aid & educational assistance",
      icon: BookOpen,
      description:
        "Comprehensive scholarship programs and academic support to ensure every child has access to quality education regardless of financial constraints.",
    },
    {
      id: 2,
      title: "Teacher Training & Capacity Building",
      subtitle: "Empowering educators",
      icon: Users,
      description:
        "Professional development programs for teachers to enhance their teaching methodologies, classroom management, and subject expertise.",
    },
    {
      id: 3,
      title: "Career Guidance & Employability",
      subtitle: "Pathway to professional success",
      icon: Briefcase,
      description:
        "Structured career counseling, skill assessment, and employability training to prepare youth for the workforce and future careers.",
    },
    {
      id: 4,
      title: "Reading Clubs & Learning Spaces",
      subtitle: "Fostering love for learning",
      icon: BookMarked,
      description:
        "Establishing libraries, reading clubs, and learning corners to create engaging environments that promote reading and self-learning.",
    },
    {
      id: 5,
      title: "Educational Material Support",
      subtitle: "Resources for effective learning",
      icon: Package,
      description:
        "Providing textbooks, stationery, learning kits, and educational equipment to support comprehensive learning experiences.",
    },
    {
      id: 6,
      title: "Smart Classrooms & Digital Labs",
      subtitle: "Technology-enhanced learning",
      icon: MonitorCog,
      description:
        "Setting up modern smart classrooms and digital laboratories to integrate technology into everyday learning processes.",
    },
    {
      id: 7,
      title: "STEM Clubs",
      subtitle: "Hands-on science education",
      icon: Microscope,
      description:
        "Interactive STEM clubs that encourage curiosity, critical thinking, and practical application of science and mathematics concepts.",
    },
    {
      id: 8,
      title: "AI & Computational Thinking",
      subtitle: "Future-ready skills",
      icon: Cpu,
      description:
        "Training programs in AI, coding, and computational thinking to prepare students for the digital age and technology-driven careers.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 ">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <span className="inline-block bg-[#805B3A]/15 text-[#805B3A] text-sm font-semibold px-6 py-2 rounded-full shadow-sm border border-[#805B3A]/30">
          Education & Skill Development Programs
        </span>

        <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-slate-900 relative inline-block">
          Nurturing Foundational Learning, Creativity & Leadership
          <span className="absolute left-1/2 -bottom-2 w-40 h-[4px] bg-[#805B3A] transform -translate-x-1/2 rounded-full"></span>
        </h2>

        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Focused on improving learning outcomes through high-impact educational
          interventions that nurture foundational learning, creativity, and
          leadership skills among children and youth.
        </p>

        <div className="flex flex-wrap justify-center gap-4  mb-40">
          <button
            onClick={onCTAClick}
            className="px-6 py-3 rounded-xl bg-[#805B3A] text-white font-semibold shadow-md hover:shadow-lg transition-all hover:bg-[#6e4d30]"
          >
            Explore Programs
          </button>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-[#A1887F] text-[#805B3A] hover:bg-[#FAF6F2] font-medium shadow-sm transition"
          >
            Partner With Us
          </a>
        </div>
      </motion.div>

      {/* INITIATIVE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-20 text-center"
        >
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-[#9e6f5e] relative inline-block">
            Our Key Educational Initiatives
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-2 text-lg">
            Designed to equip children and youth with essential academic
            foundation, creative thinking, and future-ready skills.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((it, index) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="rounded-2xl border border-[#A1887F]/40 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#805B3A]/15 text-[#805B3A]">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 relative pb-1">
                      {it.title}
                    </h3>
                    <p className="text-sm text-slate-500">{it.subtitle}</p>

                    <p className="mt-3 text-sm text-slate-600">
                      {it.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="bg-[#805B3A] rounded-2xl p-10 border border-[#A1887F]/50 shadow-xl">
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Ready to Transform Education Together?
          </h3>

          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let's collaborate to create impactful educational programs that
            nurture young minds and build future leaders.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#805B3A] px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#FAF6F2] transition-all"
          >
            Connect With Our Team
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
