import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Shield,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

const CyberSecurityEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const categories = [
    { id: "all", name: "All Events", count: events.length },
    {
      id: "conference",
      name: "Conferences",
      count: events.filter((e) => e.category === "conference").length,
    },
    {
      id: "workshop",
      name: "Workshops",
      count: events.filter((e) => e.category === "workshop").length,
    },
    {
      id: "webinar",
      name: "Webinars",
      count: events.filter((e) => e.category === "webinar").length,
    },
    {
      id: "training",
      name: "Training",
      count: events.filter((e) => e.category === "training").length,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hello! I would like to register for "${selectedEvent.title}" on ${selectedEvent.date}. Here are my details:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`; // Replace with actual number

    window.open(whatsappUrl, "_blank");
    setShowRegistration(false);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-[#926b49] mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Future Events</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest cybersecurity conferences, workshops,
            and training sessions
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#926b49] focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-[#926b49] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onRegisterClick={handleRegisterClick}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600">
              No events found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#926b49] to-amber-700 rounded-2xl shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Cyber Security Events
            </h2>
            <p className="text-amber-100 mb-6">
              Get notified about upcoming cybersecurity events, workshops, and
              conferences directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="bg-white text-[#926b49] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistration && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Register for Event
              </h3>
              <button
                onClick={() => setShowRegistration(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-[#926b49] mb-2">
                {selectedEvent.title}
              </h4>
              <p className="text-sm text-gray-600">
                {selectedEvent.date} • {selectedEvent.time}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#926b49] focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#926b49] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#926b49] focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#926b49] focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowRegistration(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsAppRedirect}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="flex-1 bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Register via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EventCard = ({ event, index, onRegisterClick }) => {
  const getCategoryColor = (category) => {
    const colors = {
      conference: "bg-purple-100 text-purple-800",
      workshop: "bg-green-100 text-green-800",
      webinar: "bg-blue-100 text-blue-800",
      training: "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const isUpcoming = new Date(event.date) > new Date();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
      {/* Event Image */}
      <div className="relative h-48 ">
        <div className="absolute inset-0  bg-opacity-20"></div>
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
              event.category
            )}`}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
        {isUpcoming && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Upcoming
            </span>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center text-gray-500">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.attendees} attendees</span>
            </div>
          )}
        </div>

        {/* Speakers */}
        {event.speakers && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Featured Speakers:
            </p>
            <div className="flex flex-wrap gap-2">
              {event.speakers.map((speaker, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {speaker}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={() => onRegisterClick(event)}
            className="flex-1 bg-[#926b49] text-white py-2 px-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Register Now
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample Events Data
const events = [
  {
    id: 1,
    title: "Global Cyber Security Summit 2024",
    description:
      "Join world-renowned cybersecurity experts for discussions on emerging threats, AI security, and defense strategies in the digital age.",
    category: "conference",
    date: "2024-03-15",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco, CA",
    attendees: 1500,
    speakers: ["Dr. Sarah Chen", "Mike Rodriguez", "Alex Thompson"],
  },
  {
    id: 2,
    title: "Zero Trust Architecture Workshop",
    description:
      "Hands-on workshop focusing on implementing Zero Trust security models in enterprise environments.",
    category: "workshop",
    date: "2024-02-20",
    time: "1:00 PM - 5:00 PM",
    location: "Online",
    speakers: ["James Wilson", "Lisa Park"],
  },
  {
    id: 3,
    title: "Cloud Security Best Practices Webinar",
    description:
      "Learn how to secure your cloud infrastructure with proven strategies and tools from industry leaders.",
    category: "webinar",
    date: "2024-02-28",
    time: "11:00 AM - 12:30 PM",
    location: "Virtual Event",
  },
  {
    id: 4,
    title: "Advanced Penetration Testing Training",
    description:
      "Comprehensive training program covering advanced penetration testing techniques and methodologies.",
    category: "training",
    date: "2024-03-10",
    time: "10:00 AM - 4:00 PM",
    location: "New York, NY",
    attendees: 200,
    speakers: ["David Kim", "Maria Gonzalez"],
  },
  {
    id: 5,
    title: "AI & Machine Learning Security Conference",
    description:
      "Exploring the intersection of artificial intelligence and cybersecurity, focusing on securing ML systems.",
    category: "conference",
    date: "2024-04-05",
    time: "8:30 AM - 5:30 PM",
    location: "Austin, TX",
    attendees: 800,
  },
  {
    id: 6,
    title: "Incident Response Tabletop Exercise",
    description:
      "Practical tabletop exercise simulating real-world cybersecurity incidents and response procedures.",
    category: "workshop",
    date: "2024-02-25",
    time: "2:00 PM - 6:00 PM",
    location: "Chicago, IL",
    speakers: ["Robert Johnson", "Emily Chen"],
  },
];

export default CyberSecurityEvents;
