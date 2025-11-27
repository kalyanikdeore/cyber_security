import React from "react";

const EventFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: "all", name: "All Events", icon: "🎉" },
    { id: "conference", name: "Conferences", icon: "💼" },
    { id: "music", name: "Music", icon: "🎵" },
    { id: "workshop", name: "Workshops", icon: "🔧" },
    { id: "art", name: "Art & Culture", icon: "🎨" },
    { id: "sports", name: "Sports", icon: "⚽" },
    { id: "food", name: "Food & Drink", icon: "🍕" },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Browse by Category
      </h3>
      <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-red-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventFilter;
