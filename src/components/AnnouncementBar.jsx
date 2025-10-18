import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

export default function AnnouncementBar({
  message = "🔥 Launch offer: 20% off website packages — limited time!",
}) {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          role="region"
          aria-live="polite"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">
              <p className="text-sm md:text-base font-medium">
                {message}
              </p>
              <button
                onClick={dismiss}
                aria-label="Dismiss announcement"
                className="ml-4 p-2 rounded-md hover:bg-white/10 transition"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}