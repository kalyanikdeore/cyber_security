import {
  FaShieldAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Network Security",
        "Threat Detection",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Audit",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Security Compliance",
        "Cookie Policy",
      ],
    },
  ];

  return (
    <footer className="bg-[#805b3a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 mr-3 bg-[#faf6f2] rounded-lg flex items-center justify-center">
                <FaShieldAlt className="h-6 w-6 text-[#805b3a]" />
              </div>
              <span className="text-xl font-bold text-[#faf6f2]">
                CyberShield
              </span>
            </div>
            <p className="text-[#faf6f2] mb-4 max-w-md">
              Protecting your digital assets with cutting-edge cybersecurity
              solutions. Trust our expertise to safeguard your business from
              evolving threats.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#faf6f2] hover:text-white transition duration-300"
              >
                <FaTwitter className="h-5 w-5" />
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
                <FaGithub className="h-5 w-5" />
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#faf6f2] hover:text-white transition duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="border-t border-[#a4947d] mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <FaEnvelope className="h-5 w-5 text-[#faf6f2] mr-3" />
              <span className="text-[#faf6f2]">security@cybershield.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="h-5 w-5 text-[#faf6f2] mr-3" />
              <span className="text-[#faf6f2]">+91 94206 91974</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-5 w-5 text-[#faf6f2] mr-3" />
              <span className="text-[#faf6f2]">
                Security District, Cyber City
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#6d4d32] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#faf6f2] text-sm">
              © {currentYear} CyberShield. All rights reserved.
            </p>
            <p className="text-[#faf6f2] text-sm mt-2 md:mt-0">
              Protecting your digital world with excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
