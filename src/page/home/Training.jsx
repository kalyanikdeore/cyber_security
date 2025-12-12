import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MapSection = () => {
  const navigate = useNavigate();

  const locations = [
    {
      id: 1,
      name: "Central Office",
      address: "Nashik, Maharashtra, India",
      phone: "+91 9600129660",
      email: "navanveshafoundation@gmail.com",
      lat: 40.7128,
      lng: -74.006,
    },
  ];

  const [selectedLocation] = useState(locations[0]);

  // Simple iframe src without API key
  const getSimpleMapUrl = (location) => {
    const encodedQuery = encodeURIComponent(location.address);
    return `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold tracking-wide mb-6">
            Our Location
          </span>

          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Find <span className="text-[#926b49]"> Our Office</span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#926b49] to-[#82613e] mx-auto mb-6" />

          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Visit our conveniently located office for exceptional service and
            support.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="lg:w-2/3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#926b49] to-[#82613e] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl border border-white/20 bg-white">
                <iframe
                  src={getSimpleMapUrl(selectedLocation)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selectedLocation.name}`}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-1/3">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-6 bg-gradient-to-b from-[#926b49] to-[#82613e] rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Our Details
                  </h3>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {/* Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#926b49]/10 to-[#82613e]/10 border-2 border-[#926b49]/20 shadow-lg flex-1 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-[#926b49] text-lg">
                            {locations[0].name}
                          </h4>
                          <span className="px-2 py-1 bg-[#926b49]/20 text-[#926b49] text-xs rounded-full font-medium">
                            Active
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {locations[0].address}
                        </p>
                      </div>

                      <div className="p-2 rounded-lg bg-[#926b49]/20 text-[#926b49] ml-2 hover:rotate-3 transition-all">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-600 hover:translate-x-1 transition-all">
                        <svg
                          className="w-4 h-4 text-[#926b49]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="truncate">{locations[0].phone}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600 hover:translate-x-1 transition-all">
                        <svg
                          className="w-4 h-4 text-[#926b49]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="truncate">{locations[0].email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-6 pt-6 border-t border-gray-200/50">
                <button
                  onClick={handleContactUs}
                  className="w-full py-3 bg-gradient-to-r from-[#926b49] to-[#82613e] text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
