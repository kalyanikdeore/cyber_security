import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What does 'Navanvesha' mean and what is the foundation's core philosophy?",
      answer:
        "Navanvesha means 'New Exploration' or 'Renewed Discovery' and symbolizes the spirit of curiosity, innovation, and continuous learning. Our philosophy is to build a bridge between traditional wisdom and modern creativity, empowering individuals and communities through technology-driven education and sustainable development initiatives.",
    },
    {
      question: "What are the main focus areas of Navanvesha Foundation?",
      answer:
        "Our primary focus areas include: Education & Research, Technology & Innovation, Social Development & Skill Growth, Sustainability & Future Studies, and Youth Empowerment & Awareness. We work across these domains to create comprehensive impact through structured programs in digital literacy, skill development, women empowerment, health initiatives, and environmental sustainability.",
    },
    {
      question:
        "How does the foundation approach technology and digital transformation?",
      answer:
        "Our Technology & Digital Transformation Programs bridge the digital divide through Digital Literacy Workshops, Cyber Safety Awareness, Device Donation programs, Tech for Seniors initiatives, and Assistive Technology for Inclusion. We provide structured training from basic to advanced levels, ensuring communities can transition into a tech-enabled future with hands-on learning opportunities.",
    },
    {
      question:
        "What kind of educational programs does Navanvesha Foundation offer?",
      answer:
        "Our Education & Skill Development Programs include Scholarships & Academic Support, Teacher Training, Career Guidance, Library Setups, Smart Classrooms, STEM Clubs, and AI/Coding trainings. We focus on improving learning outcomes through foundational learning, creativity development, and leadership skills for children and youth.",
    },
    {
      question:
        "How can corporations and individuals partner with Navanvesha Foundation?",
      answer:
        "We collaborate with corporates, institutions, and local partners through structured CSR programs, volunteering opportunities, and community initiatives. Partnerships can focus on specific areas like digital transformation, women empowerment, environmental sustainability, or youth development. We ensure transparency, measurable impact, and community-first approach in all collaborations.",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const answerVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge - Updated with FAQ related text */}
          <motion.span
            className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Quick Answers
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently <span className="text-[#926b49]"> Asked Questions</span>
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Short Description */}
          <motion.p
            className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about Navanvesha Foundation's
            mission, programs, and initiatives.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#805b3a]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </motion.button>

              <motion.div
                variants={answerVariants}
                initial="closed"
                animate={openIndex === index ? "open" : "closed"}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
