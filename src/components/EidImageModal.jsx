import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function EidImageModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("eidImageModalSeen");
    if (!seen) {
      setIsOpen(true);
      sessionStorage.setItem("eidImageModalSeen", "true");
    }
  }, []);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Auto close (6 sec)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* ✨ Side Sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: [0, 1, 0], y: [-20, -80] }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
            }}
            className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[1px]"
            style={{
              left: i % 2 === 0 ? "5%" : "95%",
              top: `${10 + i * 6}%`,
            }}
          />
        ))}
      </div>

      {/* Modal Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-[90%] max-w-md md:max-w-lg lg:max-w-xl"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 bg-white text-gray-700 rounded-full p-2 shadow-lg hover:scale-110 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Your Image */}
        <img
          src="https://i.ibb.co/k6V8zD50/Eid-Mubarak-Instagram-Post-Hussaini-it-services.png" // 🔁 PUT YOUR IMGBB LINK HERE
          alt="Eid Mubarak Hussaini IT Services"
          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}