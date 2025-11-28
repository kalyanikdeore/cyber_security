import React from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Lightbulb, MessageSquare } from "lucide-react";

export default function YouthLeadershipPrograms({ onCTAClick }) {
  const initiatives = [
    {
      id: 1,
      title: "Leadership Workshops & Personality Development",
      subtitle: "Building confident leaders",
      icon: Users,
      description:
        "Interactive sessions focusing on self-awareness, decision-making, team building, and developing leadership qualities for real-world impact.",
    },
    {
      id: 2,
      title: "Volunteering & Community Action Programs",
      subtitle: "Hands-on community service",
      icon: HeartHandshake,
      description:
        "Structured volunteering opportunities that allow youth to engage directly with community needs and drive meaningful social change.",
    },
    {
      id: 3,
      title: "Innovation & Problem-Solving Challenges",
      subtitle: "Creative solution development",
      icon: Lightbulb,
      description:
        "Competitions and hackathons that challenge young minds to identify community problems and develop innovative, sustainable solutions.",
    },
    {
      id: 4,
      title: "Soft Skills & Communication Training",
      subtitle: "Effective communication mastery",
      icon: MessageSquare,
      description:
        "Comprehensive training in public speaking, negotiation, emotional intelligence, and interpersonal skills for professional success.",
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
          Youth Leadership
        </span>
        <br />
        <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-slate-900 relative inline-block">
          Community Engagement Programs
          <span className="absolute left-1/2 -bottom-2 w-40 h-[4px] bg-[#805B3A] transform -translate-x-1/2 rounded-full"></span>
        </h2>

        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Our structured leadership and experiential programs equip young people
          with the skills, mindset, and opportunities to drive positive change
          in their communities.
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
            Join Leadership Program
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
            Our Key Initiatives
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-2 text-lg">
            Designed to develop leadership capabilities, community engagement
            skills, and innovative problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
            Ready to Develop the Next Generation of Leaders?
          </h3>

          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let's collaborate to empower youth with leadership skills, community
            engagement experience, and innovative thinking capabilities.
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
