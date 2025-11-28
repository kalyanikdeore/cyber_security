import React, { useState } from "react";

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#805b3a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Navanvesha Foundation's
            mission, programs, and initiatives.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-[#805b3a] ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
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
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
