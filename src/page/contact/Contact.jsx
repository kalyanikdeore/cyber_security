import React, { useState, useEffect } from "react";
import { FiPhoneCall, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import axiosInstance from "../../services/api";

/* ================= SOCIAL ICON CONFIG ================= */
const SOCIAL_CONFIG = [
  { key: "facebook_url", icon: <FaFacebookF />, label: "Facebook" },
  { key: "instagram_url", icon: <FaInstagram />, label: "Instagram" },
  { key: "youtube_url", icon: <FaYoutube />, label: "YouTube" },
  { key: "twitter_url", icon: <FaTwitter />, label: "Twitter / X" },
  { key: "linkedin_url", icon: <FaLinkedin />, label: "LinkedIn" },
];

const ContactSection = () => {
  /* ================= STATE ================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [redirecting, setRedirecting] = useState(false);

  /* ================= FETCH CONTACT INFO ================= */
  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const res = await axiosInstance.get("/information");
      if (res.data?.success) {
        setContactInfo(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch contact info:", error);
    }
  };

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // First API call: Save message to database
      const res = await axiosInstance.post("/contact", formData);

      if (!res.data?.success) {
        setStatus({
          type: "error",
          message: res.data?.message || "Failed to submit message.",
        });
        return;
      }

      // Check if WhatsApp number is available
      if (!contactInfo?.whatsapp_number) {
        setStatus({
          type: "success",
          message: "Message submitted successfully! We'll contact you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        return;
      }

      // Prepare WhatsApp message
      const text = encodeURIComponent(
        `Hello, I would like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`
      );

      const whatsappUrl = `https://wa.me/${contactInfo.whatsapp_number}?text=${text}`;

      setStatus({
        type: "success",
        message: "Message submitted successfully. Redirecting to WhatsApp…",
      });

      // Open WhatsApp after delay
      setRedirecting(true);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setRedirecting(false);
      }, 1200);

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ================= CONTACT DETAILS ================= */
  const contactItems = contactInfo
    ? [
        {
          icon: <FiPhoneCall />,
          title: "Call Us",
          value: contactInfo.phone,
          note: "Mon–Sat | Business Hours",
        },
        {
          icon: <FiMail />,
          title: "Email Us",
          value: contactInfo.email,
          note: "We reply within 24 hours",
        },
        {
          icon: <FiMapPin />,
          title: "Visit Us",
          value: contactInfo.address,
          note: contactInfo.working_hours,
        },
      ]
    : [];

  /* ================= SOCIAL LINKS (DYNAMIC) ================= */
  const socialLinks =
    contactInfo &&
    SOCIAL_CONFIG.filter(
      (item) => contactInfo[item.key] && contactInfo[item.key].trim() !== ""
    ).map((item) => ({
      icon: item.icon,
      url: contactInfo[item.key],
      label: item.label,
    }));

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= STATUS MESSAGE ================= */}
        {status.message && (
          <div
            className={`mb-6 p-4 rounded-lg text-center ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.message}
            {redirecting && (
              <div className="text-sm mt-1">Opening WhatsApp…</div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ================= LEFT CONTACT INFO ================= */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#805b3a] flex items-center gap-2">
              <FiSend /> Contact Information
            </h3>

            {contactItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow flex gap-4"
              >
                <div className="text-2xl text-[#805b3a]">{item.icon}</div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.note}</p>
                </div>
              </div>
            ))}

            {/* ================= SOCIAL MEDIA ================= */}
            {socialLinks?.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Follow Us
                </h4>

                <div className="flex gap-3">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-10 h-10 flex items-center justify-center
                                 rounded-full bg-[#805b3a] text-white
                                 hover:scale-105 hover:opacity-90 transition"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-[#805b3a] mb-6">
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded h-28"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#805b3a] text-white py-3 rounded font-medium hover:bg-[#6b4d32] transition-colors disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
