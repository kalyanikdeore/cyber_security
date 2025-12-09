import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import {
  cybersafety,
  financial_literacy_programs3,
  settingup_smart_classrooms_digital_labs,
} from "../../assets";

const RecentEvents = () => {
  const events = [
    {
      id: 1,
      title: "News: Cyber Safety Drive in Pune Schools",
      date: "Oct 2024",
      description:
        "Successfully trained 1,500 students on phishing and online privacy over a three-day intensive workshop.",
      image: [cybersafety],
    },
    {
      id: 2,
      title: "Event: Women's Financial Literacy Program Launch",
      date: "Sep 2024",
      description:
        "Inaugurated our new digital financial literacy program targeting 500 women micro-entrepreneurs.",
      image: [financial_literacy_programs3],
    },
    {
      id: 3,
      title: "Success Story: Launch of the New STEM Club",
      date: "Aug 2024",
      description:
        "See how our new STEM club is inspiring young innovators with robotics and creative problem-solving challenges.",
      image: [settingup_smart_classrooms_digital_labs],
    },
  ];

  return (
    <section id="news-events" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Added wrapper width container */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Our Event
          </span>

          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Latest <span className="text-[#926b49]">Happenings</span>
          </h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            The pulse of our work: follow our recent achievements, event
            announcements, and community collaborations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-amber-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-65 object-cover"
              />

              <div className="p-5">
                <span className="text-amber-700 text-xs font-semibold uppercase">
                  {item.date}
                </span>

                <h4 className="text-lg font-bold mt-2 text-gray-800">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
