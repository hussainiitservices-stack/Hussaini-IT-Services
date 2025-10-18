// src/pages/Services.jsx
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Static One Page Website",
      price: "₹2,999",
      duration: "1 Week Delivery",
      description:
        "A clean, professional single-page website ideal for startups, portfolios, or small businesses looking for a quick online presence.",
      features: [
        "Responsive Design",
        "1 Year Free Hosting",
        "SEO Friendly",
        "Fast Loading Speed",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Frontend Web Development",
      price: "₹6,999",
      duration: "2 Weeks Delivery",
      description:
        "Beautiful, modern, and interactive frontend websites built with React + Tailwind CSS to make your business stand out.",
      features: [
        "Dynamic UI with Animations",
        "Mobile Optimized",
        "API Integration",
        "Google Analytics Setup",
      ],
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "Full Stack Website (Frontend + Backend)",
      price: "₹12,999",
      duration: "3–4 Weeks Delivery",
      description:
        "Complete full stack solutions built using MERN stack with database integration, admin dashboard, and full customization.",
      features: [
        "MERN Stack Integration",
        "Admin Dashboard",
        "Payment Gateway Support",
        "Scalable Cloud Deployment",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Website Maintenance & Support",
      price: "₹1,499 /month",
      duration: "Monthly Plan",
      description:
        "Keep your website secure, updated, and optimized with our ongoing maintenance and support packages.",
      features: [
        "24/7 Support",
        "Monthly Backup",
        "Performance Optimization",
        "Bug Fixes & Updates",
      ],
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-2xl mx-auto"
        >
          We provide full-fledged digital solutions — from static web pages to complete full-stack systems with ongoing maintenance.
        </motion.p>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-2xl shadow-xl relative overflow-hidden`}
            >
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm mb-4 opacity-90">{service.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">{service.price}</span>
                <p className="text-sm opacity-80">{service.duration}</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-300">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We also offer customized development packages tailored to your business requirements.
          Let's discuss your project idea and build something amazing together.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default Services;
