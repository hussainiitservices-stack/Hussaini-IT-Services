// src/pages/Portfolio.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
  const categories = ["All", "Static", "Frontend", "Full Stack"];

  const projects = [
    {
      title: "Business Portfolio Website",
      category: "Static",
      img: "https://cdn.dribbble.com/users/1162077/screenshots/5457273/media/bcfb08e0215a5dc5bda0b6e5e7c4b4e2.gif",
      desc: "A single-page responsive business website built using HTML, Tailwind CSS, and Vite.",
    },
    {
      title: "Ecommerce Platform",
      category: "Full Stack",
      img: "https://cdn.dribbble.com/users/24711/screenshots/16144168/media/56f761cd517ee1a66a8d967cb931c15f.gif",
      desc: "Full stack eCommerce web app with admin dashboard and payment integration.",
    },
    {
      title: "Portfolio Website (Personal)",
      category: "Frontend",
      img: "https://cdn.dribbble.com/users/32512/screenshots/16862248/media/4d77d79984b9430da7360c24a0175df1.gif",
      desc: "React + Tailwind personal portfolio showcasing work, skills, and contact section.",
    },
    {
      title: "Restaurant Landing Page",
      category: "Static",
      img: "https://cdn.dribbble.com/users/61921/screenshots/15192937/media/1a1c6ec7cc0937e89d3e8cfb6b2c20ed.gif",
      desc: "Beautiful restaurant landing page built for online promotion and bookings.",
    },
    {
      title: "Admin Dashboard (Full Stack)",
      category: "Full Stack",
      img: "https://cdn.dribbble.com/users/32512/screenshots/17172726/media/73d2d6e94f83bfa7a6abdfef390bc4ee.gif",
      desc: "React + Node.js + MongoDB based Admin Panel for managing orders, users, and inventory.",
    },
    {
      title: "Creative Agency Website",
      category: "Frontend",
      img: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/5d0f6b704f77a30cc73ec2e2482364ad.gif",
      desc: "Modern frontend agency website with animations and responsive design.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Explore some of our recent works crafted with creativity, precision, and performance.
        </motion.p>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-8 md:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.desc}</p>
                <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Feature Your Project Here?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let’s collaborate and turn your next idea into a stunning, high-performing website.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
