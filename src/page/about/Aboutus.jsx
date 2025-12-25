import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiShield, FiClock } from "react-icons/fi";
import { SiHackthebox } from "react-icons/si";
import axiosInstance from "../../services/api";

export default function AboutCyberSecurity() {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAboutSections();
  }, []);

  const fetchAboutSections = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/about-sections");

      if (response.data.success) {
        setAboutData(response.data.data);
      } else {
        setError("Failed to fetch about sections");
      }
    } catch (err) {
      setError("Error fetching about sections: " + err.message);
      console.error("Error fetching about sections:", err);
    } finally {
      setLoading(false);
    }
  };

  // Static features as they are hardcoded in the backend
  const staticFeatures = [
    {
      id: 1,
      icon: <FiShield className="w-5 h-5" />,
      title: "Education & Research",
    },
    {
      id: 2,
      icon: <SiHackthebox className="w-5 h-5" />,
      title: "Technology & Innovation",
    },
    {
      id: 3,
      icon: <FiClock className="w-5 h-5" />,
      title: "Youth Empowerment",
    },
    {
      id: 4,
      icon: <FiClock className="w-5 h-5" />,
      title: "Youth Empowerment",
    },
  ];

  // Function to get proper image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";

    // If image path already starts with /uploads or http, return as is
    if (imagePath.startsWith("/uploads/") || imagePath.startsWith("http")) {
      return imagePath;
    }

    // Otherwise, prepend /uploads/ to the path
    return `/uploads/${imagePath}`;
  };

  // If no data or loading, show loading state
  if (loading) {
    return (
      <section className="py-30 md:py-20 px-4 md:px-6 md:pt-30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#805b3a] mx-auto"></div>
            <p className="mt-4 text-[#5a4733]">Loading about section...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-30 md:py-20 px-4 md:px-6 md:pt-30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20 text-red-500">
            <p>{error}</p>
            <button
              onClick={fetchAboutSections}
              className="mt-4 px-4 py-2 bg-[#805b3a] text-white rounded-lg hover:bg-[#6b4d32] transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  // If no data from API, show default/fallback content
  if (!aboutData || aboutData.length === 0) {
    return renderDefaultContent();
  }

  // Render the first active about section (or multiple if needed)
  const section = aboutData[0];

  return (
    <section className="py-30 md:py-20 px-4 md:px-6 md:pt-30">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stacked layout */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Mobile header */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm tracking-wider font-semibold bg-[#805b3a] text-white px-4 py-1 rounded-full inline-block mb-4"
            >
              {section.tagline || "Empower • Educate • Secure"}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-[#543f29] leading-tight"
            >
              {section.title || "About Us"}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "9rem" }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-[#805b3a] mt-3 rounded-lg"
            />
          </motion.div>

          {/* Mobile images - single column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {section.main_image && (
              <motion.img
                src={getImageUrl(section.main_image)}
                alt="About Navanvesha Foundation"
                className="w-full h-64 object-cover rounded-2xl shadow-[0_0_15px_#c6af93]"
              />
            )}
            <div className="grid grid-cols-2 gap-4">
              {section.secondary_image1 && (
                <motion.img
                  src={getImageUrl(section.secondary_image1)}
                  alt="Secondary image 1"
                  className="w-full h-48 object-cover rounded-xl"
                />
              )}
              {section.secondary_image2 && (
                <motion.img
                  src={getImageUrl(section.secondary_image2)}
                  alt="Secondary image 2"
                  className="w-full h-48 object-cover rounded-xl"
                />
              )}
            </div>
          </motion.div>

          {/* Mobile content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {section.paragraph1 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-[#5a4733] text-base leading-relaxed text-justify"
              >
                {section.paragraph1}
              </motion.p>
            )}

            {section.paragraph2 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="mt-4 text-[#5a4733] text-base leading-relaxed text-justify"
              >
                {section.paragraph2}
              </motion.p>
            )}

            {section.paragraph3 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="mt-4 text-[#5a4733] text-base leading-relaxed text-justify"
              >
                {section.paragraph3}
              </motion.p>
            )}

            {/* Mobile features */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              {section.features?.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-3 bg-white rounded-xl border border-[#c1b6a4] shadow-sm p-3"
                >
                  <div className="p-2 bg-[#805b3a] text-white rounded-lg">
                    {/* You might want to map icon names to actual components */}
                    {staticFeatures.find((f) => f.id === feature.id)?.icon || (
                      <FiShield className="w-5 h-5" />
                    )}
                  </div>
                  <h4 className="text-[#543f29] font-semibold text-sm">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: Original layout (hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm tracking-wider font-semibold bg-[#805b3a] text-white px-4 py-1 rounded-full"
            >
              {section.tagline || "Empower • Educate • Secure"}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-[#543f29] leading-tight mt-4"
            >
              {section.title || "About Us"}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "9rem" }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-[#805b3a] mt-5 rounded-lg"
            />

            {section.paragraph1 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-6 text-[#5a4733] text-lg leading-relaxed text-justify"
              >
                {section.paragraph1}
              </motion.p>
            )}

            {section.paragraph2 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="mt-5 text-[#5a4733] text-lg leading-relaxed text-justify"
              >
                {section.paragraph2}
              </motion.p>
            )}

            {section.paragraph3 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="mt-5 text-[#5a4733] text-lg leading-relaxed text-justify"
              >
                {section.paragraph3}
              </motion.p>
            )}

            {/* FEATURES */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {section.features?.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18, duration: 0.6 }}
                  className="flex items-center gap-4 bg-white rounded-xl border border-[#c1b6a4] shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all p-4"
                >
                  <div className="p-3 bg-[#805b3a] text-white rounded-lg shadow-md">
                    {staticFeatures.find((f) => f.id === feature.id)?.icon || (
                      <FiShield className="w-5 h-5" />
                    )}
                  </div>
                  <h4 className="text-[#543f29] font-semibold text-md">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 items-center"
          >
            <div className="flex flex-col gap-4">
              {section.secondary_image1 && (
                <motion.img
                  src={getImageUrl(section.secondary_image1)}
                  alt="About us image 1"
                  className="w-full h-56 object-cover rounded-2xl shadow-[0_0_25px_#c6af93] hover:scale-105 transition-all duration-500"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
              )}
              {section.secondary_image2 && (
                <motion.img
                  src={getImageUrl(section.secondary_image2)}
                  alt="About us image 2"
                  className="w-full h-56 object-cover rounded-2xl shadow-[0_0_25px_#c6af93] hover:scale-105 transition-all duration-500"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
              )}
            </div>

            {section.main_image && (
              <motion.img
                src={getImageUrl(section.main_image)}
                alt="About Navanvesha Foundation"
                className="w-full h-[460px] object-cover rounded-3xl shadow-[0_0_35px_#c6af93] hover:scale-105 transition-all duration-500"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4.5 }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Default/fallback content function
function renderDefaultContent() {
  return (
    <section className="py-30 md:py-20 px-4 md:px-6 md:pt-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-20">
          <p className="text-[#5a4733]">
            No about content available. Please add content in the admin panel.
          </p>
        </div>
      </div>
    </section>
  );
}
