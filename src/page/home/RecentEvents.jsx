import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../services/api";

const RecentEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get("/events");

      // ✅ HANDLE BOTH API RESPONSE TYPES
      if (Array.isArray(response.data)) {
        // when API returns plain array
        setEvents(response.data);
      } else if (response.data?.data) {
        // when API returns { success, data }
        setEvents(response.data.data);
      } else {
        setEvents([]);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Error loading events. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold">Latest Happenings</h2>
        <p className="mt-4 text-gray-600">Loading events...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold">Latest Happenings</h2>
        <p className="mt-4 text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[#926b49]/10 border border-[#926b49]/30 rounded-full text-[#926b49] text-sm font-semibold mb-4">
            Our Events
          </span>

          <h2 className="text-3xl font-bold text-gray-900">
            Latest <span className="text-[#926b49]">Happenings</span>
          </h2>

          <motion.div
            className="h-1 w-20 bg-[#926b49] mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {events.length === 0 ? (
          <p className="text-center text-gray-600">
            No events found. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-amber-200"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  <div className="h-52 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <div className="p-5">
                  <span className="text-amber-700 text-xs font-semibold uppercase">
                    {formatDate(item.date)}
                  </span>

                  <h4 className="text-lg font-bold mt-2 text-gray-800">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
