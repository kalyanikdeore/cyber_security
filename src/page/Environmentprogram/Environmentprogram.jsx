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

export default function EnvironmentSustainabilityPrograms({ onCTAClick }) {
  const initiatives = [
    {
      id: 1,
      title: "Tree Plantation & Green Campus Initiatives",
      subtitle: "Creating sustainable spaces",
      icon: BookOpen,
      description:
        "Large-scale tree planting drives and campus greening projects to enhance biodiversity and environmental quality.",
    },
    {
      id: 2,
      title: "Waste Segregation & Recycling Awareness",
      subtitle: "Proper waste management",
      icon: ShieldCheck,
      description:
        "Educational programs on waste segregation, recycling practices, and reducing landfill contributions.",
    },
    {
      id: 3,
      title: "Climate Education in Schools",
      subtitle: "Building eco-conscious generations",
      icon: Smartphone,
      description:
        "Interactive workshops and curriculum integration to teach students about climate change and sustainability.",
    },
    {
      id: 4,
      title: "Energy Conservation Drives",
      subtitle: "Reducing carbon footprint",
      icon: UserCheck,
      description:
        "Community campaigns promoting energy-efficient practices and renewable energy adoption.",
    },
    {
      id: 5,
      title: "Clean & Green Community Campaigns",
      subtitle: "Neighborhood transformation",
      icon: CreditCard,
      description:
        "Local clean-up drives and community gardening initiatives to create cleaner, greener living spaces.",
    },
    {
      id: 6,
      title: "Sustainable Practices Awareness",
      subtitle: "Eco-friendly lifestyle",
      icon: Accessibility,
      description:
        "Promoting sustainable habits like composting, water conservation, and reducing single-use plastics.",
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
          Environment & Sustainability Programs
        </span>

        <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-slate-900 relative inline-block">
          Promoting Environmental Consciousness and Sustainable Practices
          <span className="absolute left-1/2 -bottom-2 w-40 h-[4px] bg-[#805B3A] transform -translate-x-1/2 rounded-full"></span>
        </h2>

        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          We promote environmental consciousness and sustainable practices
          through awareness drives and community-action programs.
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
            Join Our Campaign
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
            Our Key Environmental Initiatives
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-2 text-lg">
            Designed to create sustainable communities through environmental
            awareness and actionable conservation programs.
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
            Ready to Make a Positive Environmental Impact?
          </h3>

          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let's collaborate to create sustainable, eco-friendly communities
            through environmental awareness and conservation efforts.
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
