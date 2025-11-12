// src/pages/Portfolio.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
  // ============================================
  // CATEGORIES
  // Why: Filter projects by type
  // How: Case-insensitive matching with automatic lowercase conversion
  // Easy to Update: Add new categories here
  // ============================================
  const categories = ["All", "Static", "Frontend", "Full Stack", "Shopify", "Special Occasion"];

  // ============================================
  // PROJECTS DATA
  // Why: All project information in one place for easy management
  // How: Add new projects by copying this structure
  // Easy to Update: Just add/edit objects in this array
  // ============================================
  const projects = [
    {
      title: "Al-Hadaf Metal Coating",
      subtitle: "Business Website",
      link: "https://alhadafmetalcoating.com", // Website link
      category: "Frontend", // Will automatically handle case sensitivity
      logo: "/assets/projectlogos/alhadaf-logo.png", // Logo from public folder
      description: "Modern business website with dynamic animations and responsive design showcasing metal coating services.",
      rating: 5, // Out of 5 stars
      review: "Hussaini IT Services delivered exactly what we needed. The website is fast, beautiful, and our customers love it!",
      customerName: "Ahmed Khan",
    },
    {
      title: "Ecommerce Platform",
      subtitle: "Online Store Solution",
      link: "https://example-ecommerce.com",
      category: "Full Stack",
      logo: "/assets/projectlogos/ecommerce-logo.png",
      description: "Full stack eCommerce web app with admin dashboard, payment integration, and inventory management system.",
      rating: 5,
      review: "Outstanding work! The admin panel is intuitive and the whole system works flawlessly. Highly recommended for serious business.",
      customerName: "Priya Sharma",
    },
    {
      title: "Portfolio Website (Personal)",
      subtitle: "Creative Portfolio",
      link: "https://example-portfolio.com",
      category: "Frontend",
      logo: "/assets/projectlogos/portfolio-logo.png",
      description: "React + Tailwind personal portfolio showcasing work, skills, and contact section with smooth animations.",
      rating: 5,
      review: "They created a stunning portfolio that perfectly represents my brand. Got multiple clients just because of this website!",
      customerName: "Rahul Verma",
    },
    {
      title: "Restaurant Landing Page",
      subtitle: "Food Business Website",
      link: "https://example-restaurant.com",
      category: "Static",
      logo: "/assets/projectlogos/restaurant-logo.png",
      description: "Beautiful restaurant landing page built for online promotion and bookings with mouth-watering food gallery.",
      rating: 4,
      review: "Our online orders increased by 40% after launching this website. Clean design and super fast loading!",
      customerName: "Meera Patel",
    },
    {
      title: "Admin Dashboard",
      subtitle: "Business Management System",
      link: "https://example-dashboard.com",
      category: "Full Stack",
      logo: "/assets/projectlogos/dashboard-logo.png",
      description: "React + Node.js + MongoDB based Admin Panel for managing orders, users, and inventory with real-time updates.",
      rating: 5,
      review: "This dashboard simplified our entire business operations. Everything is now organized and easy to track. Worth every penny!",
      customerName: "Vikram Singh",
    },
    {
      title: "Creative Agency Website",
      subtitle: "Digital Agency Portfolio",
      link: "https://example-agency.com",
      category: "Frontend",
      logo: "/assets/projectlogos/agency-logo.png",
      description: "Modern frontend agency website with animations and responsive design to showcase creative services.",
      rating: 5,
      review: "The animations and design quality exceeded our expectations. Our clients are impressed and conversion rate doubled!",
      customerName: "Neha Gupta",
    },
    {
      title: "Shopify Store - Fashion Brand",
      subtitle: "E-commerce Store",
      link: "https://example-fashion-store.myshopify.com",
      category: "Shopify",
      logo: "/assets/projectlogos/fashion-logo.png",
      description: "Complete Shopify store setup with custom theme, product management, and payment gateway integration.",
      rating: 5,
      review: "They set up everything perfectly! From theme customization to product listings, the store looks professional and works great.",
      customerName: "Anjali Desai",
    },
    {
      title: "Eid Special Landing Page",
      subtitle: "Festival Campaign Website",
      link: "https://example-eid-special.com",
      category: "Special Occasion",
      logo: "/assets/projectlogos/eid-logo.png",
      description: "Quick turnaround landing page for Eid festival sale campaign with festive design and lead capture forms.",
      rating: 5,
      review: "Delivered in just 3 days! Perfect for our Eid campaign and helped us generate tons of leads. Very professional service!",
      customerName: "Zara Ahmed",
    },
    {
      title: "Diwali Campaign Website",
      subtitle: "Festival Promotion Site",
      link: "https://example-diwali.com",
      category: "Special Occasion",
      logo: "/assets/projectlogos/diwali-logo.png",
      description: "Vibrant Diwali themed website for special offers and promotions with festive animations and bright colors.",
      rating: 4,
      review: "Beautiful festive design that captured the Diwali spirit perfectly. Great for our seasonal marketing campaign!",
      customerName: "Rohan Joshi",
    },
  ];

  // ============================================
  // STATE MANAGEMENT
  // Why: Track which category is selected for filtering + hover state for preview
  // How: useState hook with default "All" + track which card is being hovered
  // ============================================
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [hoveredProject, setHoveredProject] = useState(null);

  // ============================================
  // FILTERING LOGIC
  // Why: Show only projects matching selected category
  // How: Case-insensitive comparison using toLowerCase()
  // Easy to Understand: If "All" show everything, else filter by category
  // ============================================
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // ============================================
  // STAR RATING COMPONENT
  // Why: Visual representation of customer rating
  // How: Create array of stars based on rating number
  // ============================================
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ============================================
          HERO SECTION
          Why: Eye-catching introduction to portfolio
          How: Gradient background with animated text
      ============================================ */}
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

      {/* ============================================
          FILTER BUTTONS
          Why: Let users filter projects by category
          How: Buttons that update selectedCategory state
          Easy to Update: Categories automatically generated from array
      ============================================ */}
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

      {/* ============================================
          PORTFOLIO GRID
          Why: Display filtered projects in a grid layout
          How: Map through filteredProjects and create cards
          Easy to Update: Add projects to array at top
      ============================================ */}
      <section className="py-16 px-8 md:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl"
            >
              {/* ============================================
                  IMAGE SECTION - Logo/Preview on Hover
                  Why: Show logo by default, homepage preview on hover
                  How: Use iframe for preview, toggle visibility on hover
                  Easy: Logo from public/assets/projectlogos folder
              ============================================ */}
              <div 
                className="h-56 w-full relative overflow-hidden bg-gray-100"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Organization Logo - Shows by default */}
                <div className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="max-h-32 max-w-[80%] object-contain"
                  />
                </div>
                
                {/* Website Preview - Shows on hover */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <iframe
                    src={project.link}
                    title={`${project.title} preview`}
                    className="w-full h-full pointer-events-none border-0"
                    sandbox="allow-same-origin"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                    {/* <span className="text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full">
                      Hover to preview
                    </span> */}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                {/* Title & Subtitle */}
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Category Badge */}
                <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
                
                {/* Customer Review Section */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <StarRating rating={project.rating} />
                  <p className="text-xs text-gray-600 italic mb-2 line-clamp-2">
                    "{project.review}"
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">
                    - {project.customerName}
                  </p>
                </div>
                
                {/* Visit Website Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                >
                  Visit Website →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================
          TRUST SECTION
          Why: Build credibility and trust
          How: Simple stats or guarantees
      ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">1 Year</div>
              <div className="text-gray-600">Free Support Included</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          Why: Encourage users to contact for their project
          How: Bold gradient background with clear CTA
      ============================================ */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Feature Your Project Here?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let's collaborate and turn your next idea into a stunning, high-performing website.
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