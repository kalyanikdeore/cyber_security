import React, { useState } from "react";

const EventGallery = () => {
  const categories = [
    "All",
    "Cybersecurity",
    "Network Security",
    "Penetration Testing",
  ];

  const items = [
    {
      id: 7,
      category: "Cybersecurity",
      title: "Security Operations Center",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    // {
    //   id: 8,
    //   category: "Cybersecurity",
    //   title: "Threat Intelligence Dashboard",
    //   img: "https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=800&h=600&fit=crop",
    // },
    {
      id: 9,
      category: "Network Security",
      title: "Network Infrastructure Security",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    // {
    //   id: 10,
    //   category: "Network Security",
    //   title: "Firewall Configuration",
    //   img: "https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=800&h=600&fit=crop",
    // },
    {
      id: 11,
      category: "Penetration Testing",
      title: "Vulnerability Assessment",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
    // {
    //   id: 12,
    //   category: "Penetration Testing",
    //   title: "Ethical Hacking Workshop",
    //   img: "https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=800&h=600&fit=crop",
    // },
    {
      id: 13,
      category: "Cybersecurity",
      title: "Cyber Defense Training",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
    {
      id: 14,
      category: "Network Security",
      title: "Secure Network Architecture",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#805b3a] mb-10">
          Event Gallery
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border-2 transition-all font-medium ${
                selectedCategory === category
                  ? "bg-[#805b3a] text-white border-[#805b3a]"
                  : "border-[#a4947d] text-[#805b3a] hover:bg-[#805b3a] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalData(item)}
              className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer bg-white"
            >
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-[#faf6f2] rounded-2xl max-w-2xl w-full p-5 relative shadow-2xl animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setModalData(null)}
              className="absolute top-3 right-3 text-[#805b3a] text-2xl hover:text-black"
            >
              ✕
            </button>

            <img
              src={modalData.img}
              alt={modalData.title}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />

            <h3 className="text-2xl font-bold text-[#805b3a]">
              {modalData.title}
            </h3>
            <p className="text-lg text-[#a4947d] mt-1">{modalData.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventGallery;
