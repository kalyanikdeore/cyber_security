import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../../services/api";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
const APP_URL = import.meta.env.VITE_APP_URL || "http://127.0.0.1:8000";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([{ id: "all", name: "All" }]);
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch data from the main endpoint
      const response = await axiosInstance.get("/gallery");

      if (response.data.success) {
        // Set categories with "All" option
        const categoryOptions = [
          { id: "all", name: "All" },
          ...response.data.categories.map((cat) => ({
            id: cat.id,
            name: cat.name,
          })),
        ];

        setCategories(categoryOptions);

        // Set galleries with proper image URLs
        const galleryData = response.data.galleries.map((gallery) => ({
          id: gallery.id,
          src: gallery.image_url ? `${APP_URL}${gallery.image_url}` : "",
          category: gallery.category?.name || "Uncategorized",
          category_id: gallery.gallery_category_id,
          alt: `Gallery Image ${gallery.id}`,
          created_at: gallery.created_at,
        }));

        setGalleries(galleryData);
      } else {
        setError(response.data.message || "Failed to load gallery data");
      }
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
      setError("Unable to connect to server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // Filter galleries based on active category
  const filteredGalleries =
    activeCategory === "all"
      ? galleries
      : galleries.filter((gallery) => gallery.category_id == activeCategory);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredGalleries.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredGalleries.length - 1 : prev - 1
    );
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentIndex(0); // Reset to first image when category changes
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-[#805b3a] mx-auto mb-3" />
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md p-4">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchGalleryData}
            className="px-5 py-2 bg-[#805b3a] text-white rounded-full hover:bg-[#6d4a32] transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="gallery" className="py-12 md:py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Our <span className="text-[#805b3a]">Gallery</span>
        </h2>
        <div className="w-16 h-1 bg-[#805b3a] mx-auto mb-3"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore moments from our community programs
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm md:text-base border transition ${
              activeCategory === cat.id
                ? "bg-[#805b3a] text-white border-[#805b3a]"
                : "border-[#805b3a] text-[#805b3a] hover:bg-[#805b3a] hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredGalleries.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No images available in this category</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
            {filteredGalleries.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal(index)}
                className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                  <p className="text-sm truncate">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-gray-500 text-sm mt-6">
            Showing {filteredGalleries.length} image
            {filteredGalleries.length !== 1 ? "s" : ""}
          </div>
        </>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {showModal && filteredGalleries.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              >
                ✕
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Main image */}
              <img
                src={filteredGalleries[currentIndex].src}
                alt={filteredGalleries[currentIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded"
              />

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full"
              >
                <FaChevronRight size={20} />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {filteredGalleries.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
