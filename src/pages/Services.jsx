// src/pages/Services.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  // STATE MANAGEMENT
  // Why: To handle tab switching between different service categories
  // How: useState hook tracks which tab is active (individual, maintenance, combo)
  const [activeTab, setActiveTab] = useState("individual");

  // ============================================
  // SERVICE DATA STRUCTURE
  // Why: Centralized data makes it EASY TO UPDATE prices, features, timelines
  // How: Organized in categories matching your PDF structure
  // ============================================

  // INDIVIDUAL SERVICES (One-time development)
  const individualServices = [
    {
      title: "Static Website",
      price: "₹10,000 - ₹20,000",
      timeline: "2-5 days",
      description: "Perfect for portfolio, landing pages, and simple business websites",
      features: [
        "Portfolio/Landing Page",
        "Single page design",
        "Responsive layout",
        "Contact form",
        "Basic SEO",
      ],
      color: "from-blue-500 to-indigo-600",
      icon: "📄",
    },
    {
      title: "Multi-Page Website",
      price: "₹25,000 - ₹50,000",
      timeline: "1-2 weeks",
      description: "Complete business website with multiple pages and advanced features",
      features: [
        "Company/Business Site",
        "5-10 pages",
        "Advanced UI design",
        "Lead generation forms",
        "Google Maps integration",
      ],
      color: "from-teal-500 to-cyan-600",
      icon: "🌐",
    },
    {
      title: "Full Stack Website",
      price: "₹50,000 - ₹1,30,000+",
      timeline: "3-6 weeks",
      description: "Complete solution with frontend, backend, and database",
      features: [
        "E-commerce/HRMS/CRM",
        "Complete backend",
        "User authentication",
        "Admin dashboard",
        "Database management",
      ],
      color: "from-purple-600 to-pink-600",
      icon: "⚡",
    },
    {
      title: "Shopify Development",
      price: "₹25,000 - ₹80,000",
      timeline: "1-3 weeks",
      description: "Professional Shopify store setup and customization",
      features: [
        "Store development",
        "Theme customization",
        "Product setup assistance",
        "Payment integration",
        "Basic SEO setup",
        "Training provided",
      ],
      color: "from-green-500 to-emerald-600",
      icon: "🛒",
      note: "Note: Client manages Shopify subscription separately",
    },
  ];

  // MAINTENANCE PACKAGES (Development + 1 Year Support)
  const maintenancePackages = [
    {
      title: "Static Website Package",
      price: "₹1,00,000/year",
      timeline: "Complete package",
      description: "Development + 1 year complete maintenance and support",
      features: [
        "Complete development",
        "1 year hosting included",
        "Regular updates",
        "Content modifications",
        "Technical support",
        "Security updates",
      ],
      color: "from-blue-600 to-indigo-700",
      badge: "BEST VALUE",
    },
    {
      title: "Frontend Website Package",
      price: "₹1,90,000/year",
      timeline: "Complete package",
      description: "Multi-page development with ongoing maintenance",
      features: [
        "Multi-page development",
        "1 year hosting included",
        "Data collection forms",
        "Lead management",
        "Monthly maintenance",
        "Performance optimization",
      ],
      color: "from-teal-600 to-cyan-700",
      badge: "POPULAR",
    },
    {
      title: "Full Stack Website Package",
      price: "₹3,50,000/year",
      timeline: "Complete package",
      description: "Complete full stack solution with premium support",
      features: [
        "Complete development",
        "1 year hosting included",
        "Frontend + Backend",
        "Database management",
        "Priority support",
        "Regular backups",
      ],
      color: "from-purple-700 to-pink-700",
      badge: "PREMIUM",
    },
  ];

  // SEO SERVICES
  const seoServices = [
    {
      title: "Basic SEO",
      price: "₹48,000 - ₹84,000/year",
      description: "Perfect for small businesses and static sites",
      features: [
        "Small business / static sites",
        "5-10 keyword targeting",
        "On-page optimization",
        "Google Analytics setup",
        "Monthly reports",
        "Basic link building",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Standard SEO",
      price: "₹96,000 - ₹1,44,000/year",
      description: "For dynamic websites with content marketing",
      features: [
        "Dynamic websites",
        "15-25 keyword targeting",
        "Content marketing",
        "2-4 blogs per month",
        "Advanced analytics",
        "Backlink creation",
      ],
      color: "from-orange-600 to-red-600",
    },
    {
      title: "Advanced SEO",
      price: "₹1,80,000 - ₹3,00,000/year",
      description: "Enterprise-level SEO for e-commerce and large sites",
      features: [
        "E-commerce / full stack sites",
        "40+ keyword targeting",
        "Aggressive link building",
        "Product-level SEO",
        "Competitor analysis",
        "Priority support",
      ],
      color: "from-orange-700 to-red-700",
    },
  ];

  // DIGITAL MARKETING & CONTENT
  const marketingServices = [
    {
      title: "Complete Digital Marketing",
      price: "₹1,25,000/year",
      description: "Full-service digital marketing, social media, and content creation",
      features: [
        "Graphics & Video Editing",
        "Social Media Management",
        "Digital Marketing Campaigns",
        "20-25 designs/videos per month",
        "Facebook & Instagram ads",
        "Google Ads management",
        "Monthly analytics reports",
      ],
      details: [
        "Logo, posters, banners, brochures",
        "Social media creatives (Instagram, Facebook, LinkedIn)",
        "Account management & daily posting",
        "Hashtag strategy & engagement",
      ],
      color: "from-pink-600 to-rose-600",
    },
    {
      title: "Basic Content Writing",
      price: "₹30,000/year",
      description: "Essential content writing services for your business",
      features: [
        "4 blog posts per month",
        "Website content writing",
        "Product descriptions",
        "Social media captions",
        "SEO-optimized content",
        "Basic research included",
      ],
      color: "from-violet-600 to-purple-600",
    },
    {
      title: "Premium Content Writing",
      price: "₹60,000/year",
      description: "Advanced content creation with in-depth research",
      features: [
        "8-10 blog posts per month",
        "In-depth articles",
        "White papers & case studies",
        "Email newsletters",
        "Advanced SEO optimization",
        "Industry research & analysis",
      ],
      color: "from-violet-700 to-purple-700",
    },
  ];

  // COMBO PACKAGES (Best deals)
  const comboPackages = [
    {
      title: "Complete Business Growth Package",
      price: "₹5,00,000/year",
      originalPrice: "₹6,00,000",
      savings: "Save up to 20%",
      description: "Everything you need to dominate your market",
      features: [
        "Your choice of website (Static/Frontend/Full Stack)",
        "1 year complete maintenance",
        "Hosting included for 1 year",
        "SEO optimization (Standard plan)",
        "Complete digital marketing & social media",
        "Graphics & video editing",
        "Monthly content writing (4-8 blogs)",
        "Priority 24/7 support",
        "Quarterly strategy meetings",
        "Performance analytics dashboard",
      ],
      color: "from-indigo-600 via-purple-600 to-pink-600",
      badge: "MOST POPULAR",
      highlight: true,
    },
    {
      title: "E-Commerce Success Package",
      price: "₹2,80,000/year",
      originalPrice: "₹3,40,000",
      savings: "Save ₹60,000",
      description: "Complete Shopify store with full marketing support",
      features: [
        "Complete Shopify store development",
        "Full digital marketing & social media",
        "Graphics designing & video editing",
        "Monthly content writing (4 blogs)",
        "Store maintenance & updates",
        "Product listing support",
        "Monthly performance reports",
        "Ad campaign management",
        "Customer engagement support",
      ],
      color: "from-green-600 via-emerald-600 to-teal-600",
      note: "Note: Shopify subscription (₹2,099/month) separate",
    },
    {
      title: "Digital Presence Booster",
      price: "₹2,50,000/year",
      originalPrice: "₹3,00,000",
      savings: "Save ₹50,000",
      description: "Perfect for existing websites - maximize your online presence",
      features: [
        "Standard SEO plan (15-25 keywords)",
        "Complete social media management",
        "Digital marketing campaigns",
        "Google & Facebook ads management",
        "Graphics & video content (20-25/month)",
        "Monthly content writing (6-8 blogs)",
        "Monthly analytics & reports",
        "Strategy planning sessions",
        "Competitor analysis",
      ],
      color: "from-blue-600 via-cyan-600 to-teal-600",
      badge: "BEST FOR GROWTH",
    },
  ];

  // ============================================
  // ANIMATION VARIANTS
  // Why: Reusable animation configs for consistent feel
  // How: Framer Motion variants for different animation types
  // ============================================
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // ============================================
  // RENDER FUNCTIONS
  // Why: Keep JSX clean and organized
  // How: Separate functions for different card types
  // ============================================

  // Render service card (for individual services)
  const renderServiceCard = (service, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-2xl shadow-xl relative overflow-hidden`}
    >
      {/* Icon */}
      <div className="text-5xl mb-4">{service.icon}</div>
      
      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
      <p className="text-sm mb-4 opacity-90">{service.description}</p>
      
      {/* Price & Timeline */}
<div className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
  <div className="text-3xl font-bold mb-1 text-black">{service.price}</div>
  <div className="text-sm opacity-90 text-black">⏱️ {service.timeline}</div>
</div>

      
      {/* Features */}
      <ul className="mb-6 space-y-2 text-sm">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 text-green-300 text-lg">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Note if exists */}
      {service.note && (
        <div className="mb-4 text-xs bg-yellow-400 bg-opacity-20 p-3 rounded-lg">
          ℹ️ {service.note}
        </div>
      )}
      
      <button className="w-full bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
        Get Started →
      </button>
    </motion.div>
  );

  // Render maintenance package card (with badge)
  const renderMaintenanceCard = (pkg, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-gradient-to-br ${pkg.color} text-white p-8 rounded-2xl shadow-xl relative overflow-hidden`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
          {pkg.badge}
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
      <p className="text-sm mb-4 opacity-90">{pkg.description}</p>
      
      {/* Price */}
      <div className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-3xl font-bold text-black">{pkg.price}</div>
      </div>
      
      {/* Features */}
      <ul className="mb-6 space-y-2 text-sm">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 text-green-300 text-lg">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
        Choose Package →
      </button>
    </motion.div>
  );

  // Render combo package card (with savings highlight)
  const renderComboCard = (combo, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-gradient-to-br ${combo.color} text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden ${
        combo.highlight ? 'ring-4 ring-yellow-400' : ''
      }`}
    >
      {/* Badge */}
      {combo.badge && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
          {combo.badge}
        </div>
      )}
      
      <h3 className="text-3xl font-bold mb-3">{combo.title}</h3>
      <p className="text-base mb-6 opacity-90">{combo.description}</p>
      
      {/* Price Section */}
      <div className="mb-6 bg-white bg-opacity-20 p-5 rounded-xl backdrop-blur-sm text-black">
        {combo.originalPrice && (
          <div className="text-lg line-through opacity-70 mb-1 text-black">
            {combo.originalPrice}
          </div>
        )}
        <div className="text-4xl font-bold mb-2 text-black">{combo.price}</div>
        <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold inline-block">
          {combo.savings}
        </div>
      </div>
      
      {/* Features */}
      <ul className="mb-6 space-y-3 text-sm">
        {combo.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 text-green-300 text-xl">✓</span>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Note if exists */}
      {combo.note && (
        <div className="mb-4 text-xs bg-yellow-400 bg-opacity-20 p-3 rounded-lg">
          ℹ️ {combo.note}
        </div>
      )}
      
      <button className="w-full bg-white text-blue-700 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl text-lg">
        Get This Package →
      </button>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ============================================
          HERO SECTION
          Why: Eye-catching introduction to services
          How: Gradient background with animated text
      ============================================ */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto px-4"
          >
            Professional digital solutions from ₹10,000 to complete business packages. 
            All prices include GST | One year support included
          </motion.p>
        </div>
      </section>

      {/* ============================================
          TAB NAVIGATION
          Why: Easy navigation between service categories
          How: State-based tab switching with smooth transitions
      ============================================ */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-2 md:space-x-4 justify-center">
            {[
              { id: "individual", label: "Individual Services", icon: "🚀" },
              { id: "maintenance", label: "Maintenance Packages", icon: "🔧" },
              { id: "seo", label: "SEO Services", icon: "📈" },
              { id: "marketing", label: "Marketing & Content", icon: "📱" },
              { id: "combo", label: "Combo Packages", icon: "💎" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INDIVIDUAL SERVICES SECTION
          Why: One-time development services
          How: Grid layout with animated cards
      ============================================ */}
      {activeTab === "individual" && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4 md:px-8 lg:px-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Individual Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One-time development services perfect for getting your business online quickly
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {individualServices.map((service, index) => renderServiceCard(service, index))}
          </motion.div>
        </motion.section>
      )}

      {/* ============================================
          MAINTENANCE PACKAGES SECTION
          Why: Development + 1 year support bundles
          How: Cards with badges for popular options
      ============================================ */}
      {activeTab === "maintenance" && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4 md:px-8 lg:px-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Development + Maintenance Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete solutions with 1 year hosting, maintenance, and support included
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {maintenancePackages.map((pkg, index) => renderMaintenanceCard(pkg, index))}
          </motion.div>
        </motion.section>
      )}

      {/* ============================================
          SEO SERVICES SECTION
          Why: Search engine optimization packages
          How: Three-tier pricing structure
      ============================================ */}
      {activeTab === "seo" && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4 md:px-8 lg:px-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              SEO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Boost your online visibility with our comprehensive SEO packages
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-2xl shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 opacity-90">{service.description}</p>
                
                <div className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-black">{service.price}</div>
                </div>
                
                <ul className="mb-6 space-y-2 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-300 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-white text-orange-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
                  Choose Plan →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* ============================================
          MARKETING & CONTENT SECTION
          Why: Digital marketing and content services
          How: Cards with detailed feature breakdowns
      ============================================ */}
      {activeTab === "marketing" && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4 md:px-8 lg:px-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Digital Marketing & Content Writing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Grow your brand with professional marketing and content creation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-2xl shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 opacity-90">{service.description}</p>
                
                <div className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-black">{service.price}</div>
                </div>
                
                <ul className="mb-4 space-y-2 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-300 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {service.details && (
                  <div className="mb-6 text-xs opacity-80 space-y-1">
                    {service.details.map((detail, i) => (
                      <div key={i}>• {detail}</div>
                    ))}
                  </div>
                )}
                
                <button className="w-full bg-white text-pink-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
                  Get Started →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* ============================================
          COMBO PACKAGES SECTION
          Why: Best value bundles with multiple services
          How: Large cards with savings highlights
      ============================================ */}
      {activeTab === "combo" && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4 md:px-8 lg:px-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Save More with Combo Packages! 💎
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Get multiple services bundled together at special rates - Save up to 20%!
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          >
            {comboPackages.map((combo, index) => renderComboCard(combo, index))}
          </motion.div>
        </motion.section>
      )}

      {/* ============================================
          FINAL CTA SECTION
          Why: Encourage users to take action
          How: Bold gradient background with clear CTA
      ============================================ */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            We also offer customized development packages tailored to your business requirements.
            Let's discuss your project idea and build something amazing together.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10 text-sm"
          >
            <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">✓</span> Free Initial Consultation
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">✓</span> Flexible Payment Plans
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">✓</span> Money-Back Guarantee
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="mr-2">✓</span> 24/7 Support Available
            </div>
          </motion.div>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
          >
            Contact Us Now →
          </motion.a>
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
    </div>
  );
};

export default Services;