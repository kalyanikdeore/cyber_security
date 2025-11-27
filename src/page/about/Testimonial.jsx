import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Award, ChevronRight } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const clientTestimonials = [
  {
    name: "Sarah Chen",
    project: "Enterprise Security Audit",
    quote:
      "The comprehensive security audit transformed our organization's cybersecurity posture. Their team identified critical vulnerabilities we had missed for years. The detailed reporting and remediation guidance were exceptional.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    project: "Incident Response",
    quote:
      "When we faced a sophisticated ransomware attack, their incident response team was phenomenal. They contained the threat within hours and helped us recover critical data. True cybersecurity partners.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    project: "Cloud Security Implementation",
    quote:
      "Our migration to cloud infrastructure was seamless thanks to their security expertise. They implemented robust cloud security controls that exceeded compliance requirements while maintaining performance.",
    rating: 5,
  },
  {
    name: "James Wilson",
    project: "Security Training Program",
    quote:
      "The cybersecurity awareness training significantly improved our team's threat detection capabilities. Phishing attempts dropped by 85% within the first quarter. The engaging content made security memorable.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    project: "Compliance Framework",
    quote:
      "They helped us achieve SOC 2 Type II compliance with exceptional diligence. The framework they built not only met compliance standards but actually strengthened our security architecture.",
    rating: 5,
  },
  {
    name: "David Kim",
    project: "Threat Intelligence",
    quote:
      "The threat intelligence service provided actionable insights that prevented multiple potential breaches. Their proactive approach to emerging threats has become invaluable to our security operations.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const clientsRef = useRef(null);

  const scrollClients = (direction) => {
    if (clientsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8  mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Client Testimonials */}
        <div className="mt-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f5f0] border border-[#926b49]/30 mb-6"
            >
              <Award className="h-4 w-4 text-[#926b49]" />
              <span className="text-sm font-semibold text-[#926b49] tracking-wide">
                Client Testimonials
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
              Trusted by Security{" "}
              <span className="text-[#926b49]">Leaders</span>
            </h2>

            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            />

            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
              Discover why enterprises worldwide trust our cybersecurity
              solutions to protect their digital assets and maintain business
              continuity.
            </p>
          </motion.div>

          <div className="relative">
            <button
              onClick={() => scrollClients("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#deb897] hover:bg-[#efe4d8] text-white p-3 rounded-full shadow-lg hidden md:block transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollClients("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#deb897] hover:bg-[#efe4d8] text-white p-3 rounded-full shadow-lg hidden md:block transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={clientsRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {clientTestimonials.map((client, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] sm:min-w-[380px] bg-white rounded-xl shadow-md overflow-hidden border border-[#f7f5f0] hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#926b49] flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {client.name}
                        </h4>
                        <p className="text-sm text-[#82613e] font-medium">
                          {client.project}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      "{client.quote}"
                    </p>
                    <div className="flex gap-1 text-[#926b49]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < client.rating ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
