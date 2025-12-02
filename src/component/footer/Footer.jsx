import {
  FaShieldAlt,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCloud,
  FaDesktop,
  FaHeart,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import logof from "../../assets/logo/logof.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Program",
      links: [
        {
          name: "Technology & Digital Transformation Programs",
          path: "/technology-digital",
        },
        {
          name: "Education & Skill Development Programs",
          path: "/education-development",
        },
        {
          name: "Women Empowerment & Livelihood Training",
          path: "/women-empowerment",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/event-gallery" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#805b3a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10  rounded-lg flex items-center justify-center"></div>
              <Link
                to="/"
                className="flex items-center space-x-3 cursor-pointer "
              >
                <img
                  src={logof}
                  alt="Logo"
                  className=" object-contain  h-[100px]"
                />
              </Link>
            </div>
            <p className="text-[#faf6f2] mb-4 max-w-md">
              Navanvesha Foundation is a socially driven, non-profit
              organization committed to empowering communities through
              education, digital transformation, and sustainable development
              initiatives.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#faf6f2] hover:text-white transition duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#faf6f2] hover:text-white transition duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#faf6f2] hover:text-white transition duration-300"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#faf6f2] hover:text-white transition duration-300"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-[#faf6f2]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#faf6f2] hover:text-white transition duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Location Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-[#faf6f2]">
              Location
            </h3>
            <div className="bg-[#6d4d32] rounded-lg overflow-hidden shadow-lg">
              {/* Map Container */}
              <div className="h-48 bg-gray-300 relative">
                {/* Static Map Image as Fallback */}
                <div className="w-full h-full bg-gradient-to-br from-[#8b6b4a] to-[#6d4d32] flex items-center justify-center">
                  {/* Map Container with Google Maps Embed */}
                  <div className="h-48 w-full bg-gray-300">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.711297704887!2d73.78975627624047!3d19.998138681423588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8b7c997ba5%3A0xd04a2fd3c1c87c5a!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CyberShield Nashik Location"
                      className="filter grayscale contrast-125"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info with icons */}
        <div className="border-t border-[#a4947d] mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <FaEnvelope className="h-5 w-5 text-[#faf6f2] mr-3" />
              <span className="text-[#faf6f2]">
                navanveshafoundation@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <FaPhone className="h-5 w-5 text-[#faf6f2] mr-3" />
              <span className="text-[#faf6f2]">+91 9600129660</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-5 w-5 text-[#faf6f2] mr-3" />
              <span className="text-[#faf6f2]">
                123 Security Plaza, Tech District
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#6d4d32] py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#faf6f2] text-sm">
              © {currentYear} Navanvesha Foundation. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-[#faf6f2] hover:text-white text-sm transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-[#faf6f2] hover:text-white text-sm transition duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-[#faf6f2] hover:text-white text-sm transition duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
