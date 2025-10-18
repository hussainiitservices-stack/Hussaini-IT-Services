import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Hussaini IT</div>
                <div className="text-xs text-gray-500 -mt-1">Digital Solutions</div>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition">Services</a>
            <a href="/portfolio" className="text-gray-700 hover:text-gray-900 transition">Portfolio</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transform transition"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              aria-label="Toggle menu" 
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pb-4 space-y-2">
          <a href="/services" onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900">Services</a>
          <a href="/portfolio" onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900">Portfolio</a>
          <a href="/about" onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900">About</a>
          <a href="/contact" onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-gray-900">Contact</a>
          <a href="/contact" onClick={() => setOpen(false)} className="block py-2">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Quote
            </button>
          </a>
        </div>
      </motion.nav>
    </header>
  );
}