import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Smartphone,
  UserCheck,
  CreditCard,
  Accessibility,
  BatteryCharging,
} from "lucide-react";
import axiosInstance from "../../services/api";

export default function TechnologyDigitalPrograms({ onCTAClick }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    fetchAllData();
  }, []);

  // Fetch all data using axios
  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Use axios instance to fetch programs
      const response = await axiosInstance.get("/education-programs");

      console.log("API Response:", response); // Debug log

      // Handle different response structures
      if (response && response.data) {
        const responseData = response.data;

        // Handle new API structure with success flag
        if (responseData.success && Array.isArray(responseData.data)) {
          setPrograms(responseData.data);
        } else if (Array.isArray(responseData)) {
          // If response.data is directly an array
          setPrograms(responseData);
        } else if (responseData.data && Array.isArray(responseData.data)) {
          // Laravel pattern: response.data.data is an array
          setPrograms(responseData.data);
        } else if (
          responseData.programs &&
          Array.isArray(responseData.programs)
        ) {
          // If response has a 'programs' property
          setPrograms(responseData.programs);
        } else if (
          responseData.initiatives &&
          Array.isArray(responseData.initiatives)
        ) {
          // If response has an 'initiatives' property
          setPrograms(responseData.initiatives);
        } else {
          console.warn("Unexpected response structure:", responseData);
          setError("Unexpected data format received from server");
          setPrograms(getStaticPrograms());
        }
      } else {
        throw new Error("Empty response from server");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(
        `Failed to load programs: ${
          error.message || "Please check your connection"
        }`
      );
      // Fallback to static data if API fails
      setPrograms(getStaticPrograms());
    } finally {
      setLoading(false);
    }
  };

  // Static fallback data
  const getStaticPrograms = () => {
    return [
      {
        id: 1,
        title: "Digital Literacy Workshops",
        subtitle: "Basic → Advanced modules",
        icon: "BookOpen",
        description:
          "We offer tiered modules from 'Digital Basics' (email, search) to 'Advanced Tools' (cloud computing, collaboration software).",
        images: ["/images/tech1.jpg", "/images/digital-workshops.jpg"],
        image_position: "left",
        layout_type: "grid-3-even",
        stats: [
          { value: "500+", label: "Workshops" },
          { value: "98%", label: "Satisfaction Rate" },
        ],
        program_highlights: [
          "Empowering all ages to harness technology for learning, communication, essential services",
        ],
      },
    ];
  };

  // Function to get Icon component from string
  const getIconComponent = (iconName) => {
    const iconMap = {
      BookOpen: BookOpen,
      ShieldCheck: ShieldCheck,
      Smartphone: Smartphone,
      UserCheck: UserCheck,
      CreditCard: CreditCard,
      Accessibility: Accessibility,
      BatteryCharging: BatteryCharging,
    };
    return iconMap[iconName] || BookOpen;
  };

  // UPDATED: Helper function to extract image URL from different formats
  const getImageUrl = (img) => {
    if (!img) return "";

    // If already a full URL, return as is
    if (img.startsWith("http")) {
      return img;
    }

    // If starts with /, it's already a path
    if (img.startsWith("/")) {
      return img;
    }

    // If it's just a filename, construct the full URL
    // Assuming your backend serves files from /uploads/technology-programs/
    // You can adjust the base URL as needed
    if (img.includes(".")) {
      // Has file extension like .jpeg, .jpg, .png
      // If image path includes technology-programs folder
      if (img.includes("technology-programs/")) {
        // Remove any leading slashes and ensure proper format
        const cleanPath = img.replace(/^\/+/, "");
        return `http://127.0.0.1:8000/uploads/${cleanPath}`;
      }

      // Default uploads path
      return `http://127.0.0.1:8000/uploads/technology-programs/${img}`;
    }

    // Return empty string if not a valid image
    return "";
  };

  // UPDATED: Function to safely get images array from program
  const getProgramImages = (program) => {
    const images = program.images;

    if (!images) return [];

    // If images is already an array, process each item
    if (Array.isArray(images)) {
      return images
        .map((img) => {
          // Extract URL from image object or use the string
          if (typeof img === "object" && img !== null) {
            // Handle different possible object structures
            if (img.url) {
              return getImageUrl(img.url);
            } else if (img.path) {
              return getImageUrl(img.path);
            } else if (img.image) {
              return getImageUrl(img.image);
            }
            // If object has a string value, use it
            const stringValue = Object.values(img).find(
              (v) => typeof v === "string"
            );
            if (stringValue) {
              return getImageUrl(stringValue);
            }
          }
          // If img is a string
          if (typeof img === "string") {
            return getImageUrl(img);
          }
          return "";
        })
        .filter((url) => url.trim() !== ""); // Remove empty strings
    }

    // If images is a string (JSON), try to parse it
    if (typeof images === "string") {
      try {
        const parsed = JSON.parse(images);
        if (Array.isArray(parsed)) {
          return parsed.map((img) => getImageUrl(img));
        }
        return [];
      } catch (e) {
        console.warn("Failed to parse images JSON:", e);
        return [];
      }
    }

    return [];
  };

  // Function to render different image layouts with mobile responsiveness
  const renderImageLayout = (program) => {
    const images = getProgramImages(program);
    const layoutType = program.layout_type || "default";

    if (images.length === 0) {
      // Fallback image if no images provided
      return (
        <div className="relative rounded-lg sm:rounded-xl overflow-hidden group h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-gradient-to-br from-[#805B3A]/20 to-[#A1887F]/20 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-[#805B3A]/40" />
          <span className="absolute bottom-4 text-sm text-[#805B3A]/60 font-medium">
            {program.title}
          </span>
        </div>
      );
    }

    switch (layoutType) {
      case "grid-3-even":
        return (
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg sm:rounded-xl overflow-hidden group h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
            >
              <img
                src={images[0]}
                alt={`${program.title} 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {images.slice(1, 3).map((img, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden group h-32 sm:h-40 md:h-48 lg:h-56"
                >
                  <img
                    src={img}
                    alt={`${program.title} ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "vertical-stack":
        return (
          <div className="relative w-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
            {images.slice(0, 3).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`absolute rounded-lg sm:rounded-xl overflow-hidden group
                  ${
                    index === 0 &&
                    "top-0 left-0 w-2/3 h-32 sm:h-40 md:h-48 lg:h-56"
                  }
                  ${
                    index === 1 &&
                    "top-4 sm:top-6 md:top-8 left-8 sm:left-10 md:left-12 w-2/3 h-32 sm:h-40 md:h-48 lg:h-56"
                  }
                  ${
                    index === 2 &&
                    "top-8 sm:top-12 md:top-16 left-16 sm:left-20 md:left-24 w-2/3 h-32 sm:h-40 md:h-48 lg:h-56"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`${program.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        );

      case "featured-large":
        return (
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {images.slice(0, 3).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative rounded-lg sm:rounded-xl overflow-hidden group w-full"
              >
                <img
                  src={img}
                  alt={`${program.title} ${index + 1}`}
                  className="h-32 sm:h-36 md:h-40 lg:h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {index === 0 && (
                  <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-black/60 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
                    Featured
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case "masonry":
        return (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="col-span-2 relative rounded-lg sm:rounded-xl overflow-hidden bg-center group h-40 sm:h-48 md:h-56 lg:h-64"
            >
              <img
                src={images[0]}
                alt={`${program.title} 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {images.slice(1, 3).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden group h-20 sm:h-24 md:h-28 lg:h-32"
                >
                  <img
                    src={img}
                    alt={`${program.title} ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        // Default grid layout
        return (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {images.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="relative rounded-md sm:rounded-lg overflow-hidden h-24 sm:h-32 md:h-40 lg:h-48"
              >
                <img
                  src={img}
                  alt={`${program.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        );
    }
  };

  // Function to safely get stats array from program
  const getProgramStats = (program) => {
    const stats = program.stats;

    if (!stats) return [];

    // If stats is already an array, return it
    if (Array.isArray(stats)) {
      return stats;
    }

    // If stats is a string (JSON), try to parse it
    if (typeof stats === "string") {
      try {
        const parsed = JSON.parse(stats);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.warn("Failed to parse stats JSON:", e);
        return [];
      }
    }

    return [];
  };

  // Function to safely get highlights array from program - handles object format
  const getProgramHighlights = (program) => {
    const highlights = program.program_highlights;

    if (!highlights) return [];

    // If highlights is already an array, process it
    if (Array.isArray(highlights)) {
      return highlights
        .map((item) => {
          // If item is an object with 'highlight' property, extract it
          if (typeof item === "object" && item !== null && item.highlight) {
            return item.highlight;
          }
          // If item is already a string, return it
          if (typeof item === "string") {
            return item;
          }
          // If item is an object, try to stringify it
          if (typeof item === "object") {
            return JSON.stringify(item);
          }
          // Fallback to empty string
          return "";
        })
        .filter((item) => item.trim() !== "");
    }

    // If highlights is a string (JSON), try to parse it
    if (typeof highlights === "string") {
      try {
        const parsed = JSON.parse(highlights);
        if (Array.isArray(parsed)) {
          return parsed
            .map((item) => {
              if (typeof item === "object" && item !== null && item.highlight) {
                return item.highlight;
              }
              if (typeof item === "string") {
                return item;
              }
              return "";
            })
            .filter((item) => item.trim() !== "");
        }
        return [];
      } catch (e) {
        console.warn("Failed to parse highlights JSON:", e);
        return [];
      }
    }

    return [];
  };

  // All buttons redirect to contact page
  const redirectToContact = () => {
    window.location.href = "/contact";
  };

  const redirectToAbout = () => {
    window.location.href = "/about";
  };

  // Function to handle retry fetching data
  const handleRetry = () => {
    fetchAllData();
  };

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* STATIC HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden mb-8 sm:mb-12 md:mb-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 -left-16 sm:-left-24 md:-left-32 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[#A1887F]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="relative text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl mx-auto px-3 sm:px-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full border border-[#805B3A]/30 backdrop-blur-sm"
          >
            Education & Skill Development Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900 relative px-2"
          >
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              Empowering Through
            </span>
            <br />
            <span className="text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Education & Skill Development
            </span>
            <span className="absolute left-1/2 -bottom-1 sm:-bottom-2 md:-bottom-3 w-24 sm:w-32 md:w-40 h-0.5 bg-gradient-to-r from-[#805B3A] to-[#A1887F] transform -translate-x-1/2 rounded-full"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-3"
          >
            Designed to equip children and youth with essential academic
            foundation, creative thinking, and future-ready skills. and
            <span className="font-semibold text-[#805B3A]">
              {" "}
              leadership skills among children and youth.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 px-2"
          >
            <button
              onClick={redirectToAbout}
              className="group px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:from-[#6e4d30] hover:to-[#8d756c] flex items-center justify-center gap-1 sm:gap-2"
            >
              <span>About Us</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={redirectToContact}
              className="group px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white text-[#805B3A] font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-[#805B3A]/30 flex items-center justify-center gap-1 sm:gap-2"
            >
              <span>Connect With Us</span>
              <span className="group-hover:rotate-12 transition-transform">
                🤝
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* DYNAMIC KEY DIGITAL INITIATIVES WITH IMAGES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mt-8 sm:mt-12 md:mt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 px-2"
        >
          <div className="inline-flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4">
            <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#805B3A] to-transparent"></div>
            <span className="text-[#805B3A] font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Our Educational Initiatives
            </span>
            <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-l from-[#805B3A] to-transparent"></div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-3 sm:mb-4 px-2">
            Igniting Potential:
            <span className="bg-gradient-to-r from-[#805B3A] to-[#A1887F] bg-clip-text text-transparent">
              {" "}
              Transforming Classrooms into Innovation Labs
            </span>
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-xs sm:text-sm md:text-base px-2">
            Education must evolve from textbook knowledge to future-ready skill
            acquisition. Navanvesha focuses on holistic learning, combining
            foundational literacy with cutting-edge technological skills to
            create confident, job-ready youth.
          </p>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 bg-red-50 rounded-lg mb-8 mx-2"
          >
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-[#805B3A] text-white rounded-lg hover:bg-[#6e4d30] transition-colors text-sm"
            >
              Retry Loading
            </button>
          </motion.div>
        )}

        {/* Dynamic Initiatives List with Images */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#805B3A]"></div>
            <p className="mt-4 text-slate-600">Loading programs...</p>
          </div>
        ) : (
          <div className="space-y-12 sm:space-y-16 md:space-y-20 px-2">
            {programs.length > 0 ? (
              programs.map((program, index) => {
                const Icon = getIconComponent(program.icon);
                const isImageLeft = program.image_position === "left";
                const programStats = getProgramStats(program);
                const programHighlights = getProgramHighlights(program);

                return (
                  <motion.div
                    key={program.id || index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                      isImageLeft ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    {/* Image Container */}
                    <motion.div
                      initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                      className={`relative ${
                        isImageLeft ? "" : "lg:col-start-2"
                      }`}
                    >
                      <div className="relative p-2 sm:p-3 bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                        {renderImageLayout(program)}
                      </div>
                    </motion.div>

                    {/* Content Container */}
                    <motion.div
                      initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                      animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                      className={`${
                        isImageLeft ? "" : "lg:col-start-1"
                      } space-y-3 sm:space-y-4 md:space-y-6`}
                    >
                      {/* Initiative Header */}
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                        <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center rounded-md sm:rounded-lg bg-gradient-to-br from-[#805B3A] to-[#A1887F] text-white shadow-sm sm:shadow-md">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>

                        <div>
                          <div className="flex items-center gap-1 sm:gap-2 mb-1">
                            <span className="text-xs font-medium text-[#805B3A] bg-[#805B3A]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                              {program.subtitle || "Digital Program"}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                            {program.title || "Untitled Program"}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {program.description || "No description available."}
                      </p>

                      {/* Stats */}
                      {programStats.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3">
                          {programStats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center border border-slate-100"
                            >
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#805B3A]">
                                {stat.value || "0"}
                              </div>
                              <div className="text-xs sm:text-sm text-slate-600">
                                {stat.label || "Stat"}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Program Highlights */}
                      {programHighlights.length > 0 && (
                        <div className="pt-1 sm:pt-2 md:pt-3">
                          <h4 className="text-sm sm:text-base font-semibold text-slate-800 mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                            <div className="w-1.5 h-1.5 bg-[#805B3A] rounded-full"></div>
                            Program Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                            {programHighlights.map(
                              (highlight, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-1 sm:gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-[#805B3A] rounded-full flex-shrink-0"></div>
                                  <span className="text-slate-700 text-xs sm:text-sm">
                                    {highlight}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Button for each initiative */}
                      <div className="pt-3 sm:pt-4">
                        <button
                          onClick={redirectToContact}
                          className="group inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#805B3A] to-[#A1887F] text-white font-semibold rounded-md sm:rounded-lg hover:from-[#6e4d30] hover:to-[#8d756c] transition-all duration-300 hover:scale-105 hover:shadow-md text-xs sm:text-sm md:text-base"
                        >
                          <span>Get In Touch</span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600">
                  No programs available at the moment.
                </p>
                <button
                  onClick={handleRetry}
                  className="mt-4 px-4 py-2 bg-[#805B3A] text-white rounded-lg hover:bg-[#6e4d30] transition-colors text-sm"
                >
                  Refresh
                </button>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* STATIC CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-8 sm:mt-12 md:mt-16 px-2 sm:px-3"
      >
        <div className="relative bg-gradient-to-r from-[#805B3A] to-[#A1887F] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#A1887F]/50 shadow-lg sm:shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-white rounded-full -translate-y-4 sm:-translate-y-6 md:-translate-y-8 translate-x-4 sm:translate-x-6 md:translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-white rounded-full translate-y-4 sm:translate-y-6 md:translate-y-8 -translate-x-4 sm:-translate-x-6 md:-translate-x-8"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4">
              Invest in Potential
            </h3>

            <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto">
              Your funding equips a classroom or secures a student's future.
            </p>

            {/* Buttons section */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={redirectToContact}
                className="bg-white text-[#805B3A] px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-[#FAF6F2] transition-all"
              >
                Connect With Our Team
              </motion.button>

              <button
                onClick={redirectToAbout}
                className="bg-transparent border border-white text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-white/10 transition-all"
              >
                Customize Our Program
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
