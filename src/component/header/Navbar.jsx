import { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaCloud,
  FaDesktop,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Programs",
      dropdown: [
        {
          name: "Technology & Digital Transformation Programs",
          href: "/technology-digital",
          icon: <FaCloud />,
        },
        {
          name: "Education & Skill Development Programs",
          href: "/education-development",
          icon: <FaDesktop />,
        },
        {
          name: "Women Empowerment & Livelihood Training",
          href: "/women-empowerment",
          icon: <FaCloud />,
        },
        {
          name: "Health, Wellness & Community Development Programs",
          href: "/health-wellness",
          icon: <FaDesktop />,
        },
        {
          name: "Environment & Sustainability Programs",
          href: "/environment-program",
          icon: <FaCloud />,
        },
        {
          name: "Youth Leadership & Community Engagement Programs",
          href: "/youth-leadership",
          icon: <FaDesktop />,
        },
      ],
    },
    { name: "Gallery", href: "/event-gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const dropdownVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Fixed wrapper */}
      <div className="fixed w-full top-0 z-50">
        {/* Top Bar - Hidden on mobile, visible on md and above */}
        <div className="bg-[#805b3a] text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
              {/* Contact */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-sm gap-1 md:gap-6">
                {/* <div className="flex items-center gap-2">
                  <FaPhone className="w-3 h-3" />
                  <span>+91 9600129660</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-3 h-3" />
                  <span>navanveshafoundation@gmail.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://wa.me/919600129660"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="w-4 h-4 hover:text-[#faf6f2]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="w-4 h-4 hover:text-[#faf6f2]" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook className="w-4 h-4 hover:text-[#faf6f2]" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-4 h-4 hover:text-[#faf6f2]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="bg-[#faf6f2] shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-24">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-25 object-contain" />
              </Link>

              {/* Desktop Menu */}
              <div
                className="hidden md:flex items-center space-x-8 ml-auto"
                ref={dropdownRef}
              >
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div
                        className="flex items-center space-x-1 cursor-pointer group"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className="text-[#805b3a] font-medium flex items-center space-x-2 relative pb-1 px-3 py-2">
                          <span>{item.name}</span>
                          <motion.div
                            animate={{
                              rotate: activeDropdown === item.name ? 180 : 0,
                            }}
                          >
                            <FaChevronDown className="w-3 h-3" />
                          </motion.div>
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#805b3a] group-hover:w-full transition-all duration-300" />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={dropdownVariants}
                              className="absolute top-full left-0 mt-2 w-72 bg-[#805b3a] rounded-xl shadow-xl py-3 z-50"
                            >
                              {item.dropdown.map((drop) => (
                                <Link
                                  key={drop.name}
                                  to={drop.href}
                                  className="flex items-center space-x-3 px-4 py-3 text-[#faf6f2] hover:bg-[#a18467] rounded-lg"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {drop.icon}
                                  <span className="text-sm">{drop.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-[#805b3a] font-medium relative pb-1 group px-3 py-2"
                      >
                        {item.name}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#805b3a] group-hover:w-full transition-all duration-300" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden md:block ml-6">
                <Link
                  to="/contact"
                  className="bg-[#805b3a] hover:bg-[#a18467] text-white px-4 py-2 rounded-xl font-semibold transition-all"
                >
                  Enquiry Now
                </Link>
              </div>

              {/* Mobile */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden text-[#805b3a] p-2"
              >
                <FaBars className="w-7 h-7" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-full overflow-y-auto bg-[#faf6f2] z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <img src={logo} alt="Logo" className="h-14 object-contain" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#805b3a] p-2"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile nav items */}
            <div className="flex flex-col px-5 py-5 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex justify-between items-center w-full py-3 px-4 font-semibold text-[#805b3a] bg-white rounded-lg shadow-sm"
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                        >
                          <FaChevronDown />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-2 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.dropdown.map((drop) => (
                              <Link
                                key={drop.name}
                                to={drop.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 py-3 px-4 font-medium text-[#805b3a] bg-gray-50 rounded-lg"
                              >
                                {drop.icon}
                                <span className="text-sm">{drop.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 font-semibold text-[#805b3a] bg-white rounded-lg shadow-sm"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#805b3a] hover:bg-[#a18467] text-white py-4 rounded-xl font-semibold text-lg mt-4 text-center"
              >
                Enquiry Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page padding - Only for desktop */}
      <div className="hidden md:block h-32" />
    </>
  );
};

export default Navbar;
