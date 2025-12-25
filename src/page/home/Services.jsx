import { motion } from "framer-motion";
import {
  FaUsers,
  FaSchool,
  FaBuilding,
  FaUserGraduate,
  FaShieldAlt,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/api";

// Import fallback images
import {
  cybersafety,
  assistivetechnology2,
  devicedonation,
  digitalliteracyworkshops,
  career_guidance,
  ai_coding_computational_training,
  scholership2,
  Readingclubs,
  women_micro_entrepreneurs,
  financialprogram,
  financial_literacy_programs3,
  self_help_group_strengthening,
  health_camps99,
  nutrition_wellness_workshop,
  amentalwellness,
  sanitation_clean_water,
  treeplan99,
  waste2,
  climateeducation,
  energy_conservation_drives,
  leadership,
  volunteering_community_action_programs3,
  innovation,
  soft_skills_communication,
} from "../../assets";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get API URL from environment
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  // Fallback images
  const fallbackImages = [
    cybersafety,
    assistivetechnology2,
    devicedonation,
    digitalliteracyworkshops,
    career_guidance,
    ai_coding_computational_training,
    scholership2,
    Readingclubs,
    women_micro_entrepreneurs,
    financialprogram,
    financial_literacy_programs3,
    self_help_group_strengthening,
    health_camps99,
    nutrition_wellness_workshop,
    amentalwellness,
    sanitation_clean_water,
    treeplan99,
    waste2,
    climateeducation,
    energy_conservation_drives,
    leadership,
    volunteering_community_action_programs3,
    innovation,
    soft_skills_communication,
  ];

  // Map icon names to actual components
  const iconMap = {
    FaUsers,
    FaSchool,
    FaBuilding,
    FaUserGraduate,
    FaShieldAlt,
    FaBrain,
  };

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/services");
        setServices(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Helper function to get icon component
  const getIconComponent = (iconName) => {
    return iconMap[iconName] || FaBuilding;
  };

  // Helper function to get image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;

    // If it's already a full URL, return it
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // If it's a local asset, return it
    if (imagePath.includes("assets")) {
      return imagePath;
    }

    // Otherwise, construct URL from API
    return `${API_URL}/uploads/${imagePath}`;
  };

  // Helper function to get images array (up to 4 images)
  const getServiceImages = (serviceImages, index) => {
    const images = [];

    // Add images from API (up to 4)
    if (serviceImages && serviceImages.length > 0) {
      for (let i = 0; i < Math.min(serviceImages.length, 4); i++) {
        const url = getImageUrl(serviceImages[i]);
        if (url) {
          images.push(url);
        }
      }
    }

    // Fill remaining slots with fallback images if needed
    const startIndex = (index * 4) % fallbackImages.length;
    while (images.length < 4) {
      images.push(
        fallbackImages[(startIndex + images.length) % fallbackImages.length]
      );
    }

    return images.slice(0, 4); // Ensure exactly 4 images
  };

  // Helper function to get features array
  const getFeatures = (features) => {
    if (Array.isArray(features)) {
      // Check if features is array of objects (like [{feature: "value"}])
      if (features.length > 0 && typeof features[0] === "object") {
        return features.map((item) => item.feature || item.value || "");
      }
      // If it's array of strings
      return features;
    }
    return [];
  };

  // Loading state
  if (loading) {
    return (
      <section
        id="services"
        className="py-8 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#926b49] mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section
        id="services"
        className="py-8 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <div className="text-red-500 text-lg mb-2">⚠️</div>
            <p className="text-gray-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-[#926b49] text-white rounded-lg hover:bg-[#805b3a] transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  // No services state
  if (services.length === 0) {
    return (
      <section
        id="services"
        className="py-8 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-600">
              No services available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      className="py-8 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-4 sm:mb-6">
            What We Do - Our Goals & Program Pillars
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 px-2">
            Our{" "}
            <span className="text-[#926b49]">Pillars of Transformation</span>
          </h2>

          <motion.div
            className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Explore the comprehensive areas where we are dedicated to creating
            long-term, sustainable change.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 sm:space-y-14">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            const serviceImages = getServiceImages(service.images, index);
            const features = getFeatures(service.features);

            return (
              <div
                key={service.id || index}
                className={`bg-white rounded-2xl overflow-hidden ${
                  index % 2 === 0
                    ? "sm:bg-gradient-to-br sm:from-white sm:to-gray-50"
                    : ""
                }`}
              >
                {/* Mobile Layout - Stacked */}
                <div className="block lg:hidden">
                  {/* Content Section (Top on mobile) */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#805b3a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-[#805b3a] text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* 4 Images Grid on Mobile */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        <img
                          src={serviceImages[0]}
                          alt={`${service.title} - Image 1`}
                          className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[0];
                          }}
                        />
                        <img
                          src={serviceImages[2]}
                          alt={`${service.title} - Image 3`}
                          className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[2];
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        <img
                          src={serviceImages[1]}
                          alt={`${service.title} - Image 2`}
                          className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[1];
                          }}
                        />
                        <img
                          src={serviceImages[3]}
                          alt={`${service.title} - Image 4`}
                          className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[3];
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-5">
                      {features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#805b3a] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-800 text-sm sm:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={service.page_path}
                      className="inline-flex items-center gap-2 text-base sm:text-xl font-semibold text-[#805b3a] hover:underline"
                    >
                      Learn More <FaArrowRight className="text-sm sm:text-lg" />
                    </a>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-8 ${
                      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* 4 Images Grid on Desktop */}
                    <div
                      className={`${
                        index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          src={serviceImages[0]}
                          alt={`${service.title} - Image 1`}
                          className="w-full h-48 object-cover rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[0];
                          }}
                        />
                        <img
                          src={serviceImages[1]}
                          alt={`${service.title} - Image 2`}
                          className="w-full h-48 object-cover rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[1];
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <img
                          src={serviceImages[2]}
                          alt={`${service.title} - Image 3`}
                          className="w-full h-48 object-cover rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[2];
                          }}
                        />
                        <img
                          src={serviceImages[3]}
                          alt={`${service.title} - Image 4`}
                          className="w-full h-48 object-cover rounded-2xl shadow-md"
                          onError={(e) => {
                            const target = e.target;
                            target.src = fallbackImages[3];
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={`${
                        index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-[#805b3a]/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="text-[#805b3a] text-3xl" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-700 text-lg mb-5 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-7">
                        {features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#805b3a] rounded-full mt-2" />
                            <span className="text-gray-800 text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={service.page_path}
                        className="inline-flex items-center gap-2 text-xl font-semibold text-[#805b3a] hover:underline"
                      >
                        Learn More <FaArrowRight className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
