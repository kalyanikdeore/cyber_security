// WhyChooseUs.jsx
import React from "react";
import { Shield, Zap, Users, TrendingUp, Clock, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Zero-Trust Security",
      description:
        "Continuous identity verification & minimal-access protection.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI-Driven Threats",
      description:
        "Detect and react to attacks instantly with smart automation.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Security Experts",
      description: "Team of certified professionals with global experience.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Predictive Defense",
      description: "Forecast cyber risks and block threats before they occur.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Lightning Deployment",
      description: "Security setup & onboarding in hours—not weeks.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Compliance Ready",
      description: "GDPR, HIPAA, ISO 27001 & SOC2 certified standards.",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#805b3a] tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#805b3a] to-[#a4947d] bg-clip-text text-transparent">
              Our Cybersecurity
            </span>
          </h2>
          <p className="text-lg text-black mt-4 max-w-2xl mx-auto">
            Intelligent, reliable & future-proof security for every enterprise.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-[#a4947d] shadow-xl hover:shadow-[#805b3a]/20 hover:border-[#805b3a] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#805b3a]/10 text-[#805b3a] group-hover:bg-[#805b3a] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-black transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-black-base leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Bottom Line */}
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#805b3a] to-[#a4947d] mt-5 rounded-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
