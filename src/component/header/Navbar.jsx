import { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCaretRight,
  FaLock,
  FaCloud,
  FaDesktop,
  FaShieldVirus,
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

    { name: "About Us", href: "about" },
    {
      name: "Our Work",
      href: "#solutions",
      dropdown: [
        {
          name: "Cloud Security",
          href: "#cloud",
          icon: <FaCloud className="w-4 h-4" />,
        },
        {
          name: "Endpoint Protection",
          href: "#endpoint",
          icon: <FaDesktop className="w-4 h-4" />,
        },
        {
          name: "Data Encryption",
          href: "#encryption",
          icon: <FaLock className="w-4 h-4" />,
        },
        {
          name: "Compliance",
          href: "#compliance",
          icon: <FaShieldVirus className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Events",
      href: "#events",
      dropdown: [
        {
          name: "Recent Event",
          href: "recent-event",
          icon: <FaCloud className="w-4 h-4" />,
        },
        {
          name: "Future Event",
          href: "Future-event",
          icon: <FaDesktop className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Gallery",
      href: "#gallery",
      dropdown: [
        {
          name: "Photo Gallery",
          href: "photo-gallery",
          icon: <FaCloud className="w-4 h-4" />,
        },
        {
          name: "Event Gallery",
          href: "event-gallery",
          icon: <FaDesktop className="w-4 h-4" />,
        },
      ],
    },
    { name: "Contact Us", href: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="bg-[#faf6f2] fixed w-full top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* <div className="flex items-center space-x-3 cursor-pointer">
              <img src={logo} alt="Logo" className="h- w-20 object-cover" />
            </div> */}

            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <img src={logo} alt="Logo" className="h- w-20 object-cover" />
            </Link>
            {/* Desktop Menu */}
            <div
              className="hidden md:flex items-center space-x-8"
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
                      <button className="text-[#805b3a] font-medium transition-all duration-300 flex items-center space-x-2 relative pb-1">
                        <span>{item.name}</span>

                        <motion.div
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                        >
                          <FaChevronDown className="w-3 h-3" />
                        </motion.div>

                        {/* underline animation */}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#805b3a] group-hover:w-full transition-all duration-300"></span>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute top-full left-0 mt-2 w-56 bg-[#805b3a] rounded-xl shadow-2xl py-3 z-50"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 px-4 py-3 text-[#faf6f2] hover:bg-[#a18467] transition-all duration-200 rounded-lg"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.icon}
                                <span className="text-sm font-medium">
                                  {dropdownItem.name}
                                </span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-[#805b3a] font-medium relative pb-1 group"
                    >
                      {item.name}

                      {/* underline */}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#805b3a] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button className="bg-[#805b3a] hover:bg-[#a18467] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Free Audit
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#805b3a] p-3 hover:bg-[#a18467]/40 rounded-xl"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      <div className="h-20" />
    </>
  );
};

export default Navbar;
