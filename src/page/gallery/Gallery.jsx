import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

// Cyber security
import csg from "../../assets/logo/csg.jpeg";
import csg2 from "../../assets/logo/csg2.jpeg";
import csg3 from "../../assets/logo/csg3.jpeg";
import csg4 from "../../assets/logo/csg4.jpg";

// Network Security
import ns from "../../assets/logo/ns.jpeg";
import ns2 from "../../assets/logo/ns2.jpeg";
import ns3 from "../../assets/logo/ns3.jpeg";
import ns4 from "../../assets/logo/ns4.jpeg";

// Penetration Testing
import pt1 from "../../assets/logo/pt1.jpeg";
import pt2 from "../../assets/logo/pt2.jpeg";
import pt3 from "../../assets/logo/pt3.jpeg";

const EventGallery = () => {
  const categories = [
    "All",
    "Cybersecurity",
    "Network Security",
    "Penetration Testing",
  ];

  const items = [
    // Cybersecurity
    {
      id: 1,
      category: "Cybersecurity",
      title: "Security Operations Center",
      img: csg,
    },
    {
      id: 2,
      category: "Cybersecurity",
      title: "Cyber Defense Training",
      img: csg2,
    },
    {
      id: 3,
      category: "Cybersecurity",
      title: "Threat Intelligence Workshop",
      img: csg3,
    },
    {
      id: 4,
      category: "Cybersecurity",
      title: "Incident Response Simulation",
      img: csg4,
    },

    // Network Security
    {
      id: 5,
      category: "Network Security",
      title: "Network Infrastructure Security",
      img: ns,
    },
    {
      id: 6,
      category: "Network Security",
      title: "Secure Network Architecture",
      img: ns2,
    },
    {
      id: 7,
      category: "Network Security",
      title: "Firewall & VPN Setup",
      img: ns3,
    },
    {
      id: 8,
      category: "Network Security",
      title: "Wireless Security Audit",
      img: ns4,
    },

    // Penetration Testing
    {
      id: 9,
      category: "Penetration Testing",
      title: "Vulnerability Assessment",
      img: pt1,
    },
    {
      id: 10,
      category: "Penetration Testing",
      title: "Web Application Pen Testing",
      img: pt2,
    },
    {
      id: 11,
      category: "Penetration Testing",
      title: "Network Pen Testing",
      img: pt3,
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
              onClick={(e) => e.stopPropagation()}
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
