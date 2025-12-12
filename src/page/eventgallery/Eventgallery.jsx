// Updated Products component with category hover title overlay

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  cyber_safety_programs,
  DigitalWorkshops,
  career_guidance,
  learning_corners,
  scholarships,
  community_infra_support,
  nutrition_wellness_workshop,
  health_camps,
  women_micro_entrepreneurs,
  climate_education_in_schools,
  tree_plantation_green_campus,
  soft_skills_communication,
} from "../../assets";

// Categories
const categories = [
  "All",
  "Technology & Digital Transformation Programs",
  "Education & Skill Development Programs",
  "Women Empowerment & Livelihood Training",
  "Health, Wellness & Community Development Programs",
  "Environment & Sustainability Programs",
  "Youth Leadership & Community Engagement Programs",
];

// Product List
const allProducts = [
  { src: cyber_safety_programs, category: categories[1] },
  { src: DigitalWorkshops, category: categories[1] },
  { src: career_guidance, category: categories[2] },
  { src: learning_corners, category: categories[2] },
  { src: scholarships, category: categories[2] },
  { src: community_infra_support, category: categories[4] },
  { src: nutrition_wellness_workshop, category: categories[4] },
  { src: health_camps, category: categories[4] },
  { src: women_micro_entrepreneurs, category: categories[3] },
  { src: climate_education_in_schools, category: categories[5] },
  { src: tree_plantation_green_campus, category: categories[5] },
  { src: soft_skills_communication, category: categories[6] },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  return (
    <motion.div id="gallery" className="bg-white text-black py-29">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Our <span className="text-[#805b3a]">Gallery</span>
        </h2>

        <div className="w-24 h-1 bg-[#805b3a] mx-auto mt-2 rounded-full"></div>

        <p className="text-gray-600 mt-3">
          Explore moments captured from our community development programs
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border border-[#805b3a] transition ${
              activeCategory === cat
                ? "bg-[#805b3a] text-black"
                : "text-[#805b3a] hover:bg-[#805b3a] hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Images with Hover Category Name */}
      {/* Grid Images with Hover Category Name (Bottom) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mb-10">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="relative cursor-pointer group"
          >
            <img
              src={product.src}
              alt=""
              className="rounded-xl w-full h-56 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />

            {/* Bottom Hover Name */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 rounded-b-xl opacity-0 group-hover:opacity-100 transition duration-300 p-2 text-center">
              <span className="text-white text-sm font-semibold">
                {product.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative bg-white rounded-2xl p-4 shadow-xl max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-3 -right-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✖
              </button>

              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
              >
                <FaChevronLeft size={20} />
              </button>

              <img
                src={filteredProducts[currentIndex].src}
                alt="Large Preview"
                className="max-w-full max-h-[80vh] mx-auto rounded-xl object-contain"
              />

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
              >
                <FaChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm">
                {currentIndex + 1} / {filteredProducts.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
