import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaHeart,
} from "react-icons/fa";
import CTA from "../cta/CTA";
import axiosInstance from "../../services/api";

/* ICON MAP */
const iconMap = {
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaHeart,
};

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("home-about-section")
      .then((res) => {
        if (res.data.status) {
          setAboutData(res.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!aboutData) return null;

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center">
          <motion.span className="inline-block px-4 py-2 bg-[#926b49]/10 border rounded-full text-[#926b49] text-sm font-semibold mb-6">
            {aboutData.badge_title}
          </motion.span>

          <div className="mb-6">
            <motion.h2 className="text-2xl md:text-4xl font-bold mb-2">
              {aboutData.main_heading}{" "}
              <span className="text-[#926b49]">{aboutData.highlight_text}</span>
            </motion.h2>

            {/* Short border line */}
            <motion.div
              className="h-1 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 md:mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }} // mobile
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {aboutData.short_description}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#805b3a] mb-4">{aboutData.description_one}</p>
            <p className="text-[#805b3a] mb-8">{aboutData.description_two}</p>

            {/* FOCUS AREAS */}
            {/* <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {aboutData.focus_areas?.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 border rounded-lg"
                  >
                    {Icon && <Icon className="text-[#805b3a]" />}
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div> */}
            {/* FOCUS AREAS */}
            <div className="mb-10">
              {/* Heading */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Our Core Focus Areas
              </h3>

              {/* Focus Area Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {aboutData.focus_areas?.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3  border border-[#e4ba94]  rounded-lg hover:shadow-md transition"
                    >
                      {Icon && <Icon className="text-[#805b3a]" size={20} />}
                      <span className="font-medium text-gray-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STATS */}
            {/* <div className="grid grid-cols-3 gap-4">
              {aboutData.stats?.map((stat, index) => (
                <div key={index} className="text-center p-4 border rounded-xl">
                  <div className="text-2xl font-bold text-[#805b3a]">
                    {stat.number}
                  </div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <img
              src={aboutData.image_one}
              alt="About top"
              className="col-span-2 h-full object-cover rounded-xl"
            />
            <img
              src={aboutData.image_two}
              alt="About bottom left"
              className="h-full object-cover rounded-xl"
            />
            <img
              src={aboutData.image_three}
              alt="About bottom right"
              className="h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-46">
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
