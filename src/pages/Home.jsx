// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-blue-600">Hussaini IT Services</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Empowering your business with cutting-edge web solutions — from static pages to full-stack systems, all crafted with precision.
          </p>
          <Link
            to="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            Explore Our Services
          </Link>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="Hussaini IT Services"
          className="w-full md:w-1/2 mt-8 md:mt-0 rounded-lg"
        />
      </section>

      {/* Service Highlights */}
      <section className="py-16 px-8 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Key Offerings</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Static One Page Website",
              desc: "Perfect for startups or small businesses looking for a clean, fast, and affordable online presence.",
            },
            {
              title: "Frontend Web Development",
              desc: "Dynamic and responsive designs that help your business attract and engage customers effectively.",
            },
            {
              title: "Full Stack Website",
              desc: "Complete frontend + backend solutions, built for scalability and business growth.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Website?</h2>
        <p className="text-lg mb-6">
          Let Hussaini IT Services turn your ideas into a professional online presence.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
