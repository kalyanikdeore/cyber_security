import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <div className="bg-gradient-to-r from-[#805b3a] to-[#a4947d] rounded-2xl p-8 border border-[#a4947d]/30">
        <h3 className="text-2xl md:text-3xl font-bold text-[#faf6f2] mb-4">
          Ready to Secure Your Business?
        </h3>
        <p className="text-[#faf6f2]/90 text-lg mb-6 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who trust us with their
          cybersecurity needs. Let's build your digital fortress together.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRedirect}
          className="bg-[#faf6f2] text-[#805b3a] px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-[#805b3a]/25 transition-all duration-300 hover:bg-[#f0e6d8]"
        >
          Book Your Free Consultation
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CTA;
