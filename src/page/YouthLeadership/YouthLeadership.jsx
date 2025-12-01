import React from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Lightbulb, MessageSquare } from "lucide-react";

export default function YouthLeadershipPrograms({ onCTAClick }) {
  const handleExplorePrograms = () => {
    // Option 1: Navigate to about page
    // window.location.href = '/about';

    // Option 2: Scroll to about section
    // document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

    // Option 3: Use React Router
    // navigate('/about');

    console.log("Explore Programs clicked");
  };

  const handleConnectWithUs = () => {
    // Option 1: Open contact modal
    // setShowContactModal(true);

    // Option 2: Navigate to contact page
    // window.location.href = '/contact';

    // Option 3: Scroll to contact section
    // document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

    console.log("Connect With Us clicked");
  };
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
        className="relative min-h-[600px] flex items-center justify-center  overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#805B3A]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#A1887F]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#805B3A]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative text-center space-y-8 max-w-4xl mx-auto px-6">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white text-sm font-semibold px-8 py-3 rounded-full shadow-lg border border-[#805B3A]/30 backdrop-blur-sm"
          >
            Youth Leadership
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-5xl font-extrabold leading-tight text-slate-900 relative"
          >
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              Community Engagement
            </span>
            <br />
            <span className="text-slate-800">Programs</span>
            <span className="absolute left-1/2 -bottom-4 w-48 h-1 bg-gradient-to-r from-[#805B3A] to-[#A1887F] transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our structured leadership and experiential programs equip young
            people with the skills, mindset,
            <span className="font-semibold text-[#805B3A]">
              {" "}
              and opportunities to drive positive change in their communities.
            </span>
            .
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 pt-6"
          >
            {/* About Us Button */}
            <button
              onClick={handleExplorePrograms}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#6e4d30] hover:to-[#8d756c] flex items-center gap-2"
            >
              <span>About Us</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            {/* Connect With Us Button */}
            <button
              onClick={handleConnectWithUs}
              className="group px-8 py-4 rounded-2xl bg-white text-[#805B3A] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-[#805B3A]/30 flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <span className="group-hover:rotate-12 transition-transform">
                🤝
              </span>
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Programs" },
              { number: "10K+", label: "Students" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-[#805B3A]">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
