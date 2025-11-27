import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

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
    {
      id: 9,
      category: "Network Security",
      title: "Network Infrastructure Security",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      id: 11,
      category: "Penetration Testing",
      title: "Vulnerability Assessment",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#f7f5f0] border border-[#926b49]/30 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(146, 107, 73, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Award className="text-[#926b49]" />
              <span className="text-sm font-semibold text-[#926b49]">
                Gallery
              </span>
            </motion.div>
          </motion.div>

          <motion.h2 className="text-4xl font-bold text-[#805b3a] mt-2">
            Explore Our Gallery
          </motion.h2>
          <motion.div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-[#805b3a] to-[#b08d6e] rounded-full" />
          <p className="text-lg text-[#a4947d] mt-4 max-w-2xl mx-auto">
            Discover our latest cybersecurity events, workshops, and training
            sessions
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border-2 font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#805b3a] text-white border-[#805b3a]"
                  : "border-[#a4947d] text-[#805b3a] hover:bg-[#805b3a] hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setModalData(item)}
              className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer bg-white"
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-64 sm:h-72 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="bg-[#faf6f2] rounded-2xl max-w-2xl w-full p-5 relative shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
            >
              <button
                onClick={() => setModalData(null)}
                className="absolute top-3 right-3 text-[#805b3a] text-2xl hover:text-black bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                ✕
              </button>

              <motion.img
                src={modalData.img}
                alt={modalData.title}
                className="w-full h-80 sm:h-96 object-cover rounded-xl mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <h3 className="text-xl font-semibold text-[#805b3a]">
                {modalData.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
