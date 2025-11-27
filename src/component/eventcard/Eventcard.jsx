import React from "react";

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      conference: "bg-blue-100 text-blue-800",
      music: "bg-purple-100 text-purple-800",
      workshop: "bg-green-100 text-green-800",
      art: "bg-pink-100 text-pink-800",
      sports: "bg-orange-100 text-orange-800",
      food: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const progress = (event.registered / event.seats) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#926b49] text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
              event.category
            )}`}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#82613e] text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
            {event.price === "Free" ? "FREE" : event.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#926b49] transition duration-300">
          {event.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-3 text-[#926b49]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">
              {formatDate(event.date)}
            </span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-3 text-[#926b49]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">{event.time}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-3 text-[#926b49]"
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
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 bg-[#926b49] hover:bg-[#82613e] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
