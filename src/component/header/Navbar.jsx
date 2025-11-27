import { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
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
    { name: "About Us", href: "/about" },
    {
      name: "Our Work",
      dropdown: [
        { name: "Cloud Security", href: "/cloud-security", icon: <FaCloud /> },
        {
          name: "Endpoint Protection",
          href: "/Endpoint-Protection",
          icon: <FaDesktop />,
        },
        { name: "Data Encryption", href: "/encryption", icon: <FaLock /> },
        { name: "Compliance", href: "/compliance", icon: <FaShieldVirus /> },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Recent Event", href: "/recent-event", icon: <FaCloud /> },
        { name: "Future Event", href: "/Future-event", icon: <FaDesktop /> },
      ],
    },
    {
      name: "Gallery",
      dropdown: [
        { name: "Photo Gallery", href: "/photo-gallery", icon: <FaCloud /> },
        { name: "Event Gallery", href: "/event-gallery", icon: <FaDesktop /> },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  const dropdownVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  // Close dropdown when clicking outside
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
      <nav className="bg-[#faf6f2] fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <img src={logo} alt="Logo" className="h-16 object-contain" />
            </Link>

            {/* Desktop Menu - Align Right */}
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
                      <button className="text-[#805b3a] font-medium flex items-center space-x-2 relative pb-1">
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
                            className="absolute top-full left-0 mt-2 w-56 bg-[#805b3a] rounded-xl shadow-xl py-3 z-50"
                          >
                            {item.dropdown.map((drop) => (
                              <Link
                                key={drop.name}
                                to={drop.href}
                                className="flex items-center space-x-3 px-4 py-3 text-[#faf6f2] hover:bg-[#a18467] transition-all rounded-lg"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {drop.icon}
                                <span>{drop.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-[#805b3a] font-medium relative pb-1 group"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#805b3a] group-hover:w-full transition-all duration-300" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:block ml-6">
              <button className="bg-[#805b3a] hover:bg-[#a18467] text-white px-6 py-3 rounded-xl font-semibold transition-all">
                Free Audit
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#805b3a] p-2 rounded-lg"
            >
              <FaBars className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-full bg-[#faf6f2] shadow-2xl z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-300">
              <img src={logo} alt="Logo" className="h-14 object-contain" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#805b3a] p-2 rounded-lg"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-3 px-5 py-5">
              {navItems.map((item) => (
                <div key={item.name} className="w-full">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex justify-between items-center w-full py-3 font-semibold text-[#805b3a]"
                      >
                        {item.name}
                        <motion.span
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                        >
                          <FaChevronDown />
                        </motion.span>
                      </button>

                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="ml-4 space-y-2"
                        >
                          {item.dropdown.map((drop) => (
                            <Link
                              key={drop.name}
                              to={drop.href}
                              className="flex items-center space-x-2 py-2 text-[#805b3a] font-medium"
                              onClick={() => setIsOpen(false)}
                            >
                              {drop.icon}
                              <span>{drop.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="py-3 block font-semibold text-[#805b3a]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <button className="bg-[#805b3a] hover:bg-[#a18467] text-white w-full py-3 rounded-xl mt-4 font-semibold">
                Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* spacing below navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
