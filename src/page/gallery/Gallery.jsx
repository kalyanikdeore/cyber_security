import React, { useState } from "react";
import {
  cyber_safety_programs,
  cyber_safety_awarness,
  DigitalWorkshops,
  assistive_technology,
  career_guidance,
  learning_corners,
  library_setup_reading_club,
  scholarships,
  community_infra_support,
  nutrition_wellness_workshop,
  health_camps,
  self_help_group_strengthening,
  women_micro_entrepreneurs,
  climate_education_in_schools,
  energy_conservation_drives,
  tree_plantation_green_campus,
  innovation_problem_solving,
  leadership_personality_workshops,
  soft_skills_communication,
} from "../../assets";

const categories = [
  "All",
  "Technology & Digital Transformation Programs",
  "Education & Skill Development Programs",
  "Women Empowerment & Livelihood Training",
  "Health, Wellness & Community Development Programs",
  "Environment & Sustainability Programs",
  "Youth Leadership & Community Engagement Programs",
];

const galleryImages = [
  { src: cyber_safety_programs, category: categories[1] },
  { src: cyber_safety_awarness, category: categories[1] },
  { src: DigitalWorkshops, category: categories[1] },
  { src: assistive_technology, category: categories[1] },
  { src: career_guidance, category: categories[2] },
  { src: learning_corners, category: categories[2] },
  { src: library_setup_reading_club, category: categories[2] },
  { src: scholarships, category: categories[2] },
  { src: community_infra_support, category: categories[4] },
  { src: nutrition_wellness_workshop, category: categories[4] },
  { src: health_camps, category: categories[4] },
  { src: self_help_group_strengthening, category: categories[3] },
  { src: women_micro_entrepreneurs, category: categories[3] },
  { src: climate_education_in_schools, category: categories[5] },
  { src: energy_conservation_drives, category: categories[5] },
  { src: tree_plantation_green_campus, category: categories[5] },
  { src: innovation_problem_solving, category: categories[6] },
  { src: leadership_personality_workshops, category: categories[6] },
  { src: soft_skills_communication, category: categories[6] },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="mx-auto px-6 md:px-16 py-8">
      <h2
        className="text-3xl font-bold text-center mb-6"
        style={{ color: "#3b2561" }}
      >
        Gallery & Highlights
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border font-semibold transition ${
              selectedCategory === cat ? "text-white" : "hover:text-white"
            }`}
            style={{
              backgroundColor:
                selectedCategory === cat ? "#366457" : "transparent",
              borderColor: "#366457",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Images Grid - 1 row 4 columns */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt=""
            className="w-full h-48 sm:h-56 object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-8">
        <button
          className="px-6 py-3 text-white rounded-lg shadow-lg transition font-semibold"
          style={{ backgroundColor: "#b21969" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          View Full Gallery
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            {/* Close Icon */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-500 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              className="max-w-3xl w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
