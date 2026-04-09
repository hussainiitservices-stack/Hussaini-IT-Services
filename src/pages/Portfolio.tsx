import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Al hadaf Metal Coating - Industrial Business Website",
    category: "Web Development",
    description:
      "Corporate website for an industrial metal coating company, featuring service descriptions, client testimonials, and a blog section.",
    results: ["Digital Growth", "99.9% uptime achieved", "100% SEO optimization"],
    technologies: ["React", "Node.js", "GoogleSheets API"],
    image: "bg-white/85 backdrop-blur-md",
    logo: "https://i.ibb.co/hRR7GYb0/logo.png",
    website: "https://www.alhadafmetalcoating.com/",
  },
  {
    id: 2,
    title: "Burhani Guards - Ujjain Performance tracking Web Application",
    category: "Web Development",
    description:
      "Custom web application for managing and tracking security personnel performance, attendance, and reporting.",
    results: ["Best App for tracking ", "3s average load time", "100% user satisfaction"],
    technologies: ["React", "Node.js", "MongoDB"],
    image: "bg-white/85 backdrop-blur-md",
    logo: "https://i.ibb.co/Rp8BZbJF/Logo.png",
  },
  {
    id: 3,
    title: "Himmat oilfield Shopify  ecommerce App",
    category: "Shopify Development",
    description:
      "Ecommerce app for oilfield equipment and supplies, featuring product catalog, shopping cart, and secure checkout.",
    results: ["5 star rating", "30% increase in Customer engagement"],
    technologies: ["Shopify Plus", "Liquid", "Javascript"],
    image: "bg-white/85 backdrop-blur-md",
    logo: "https://i.ibb.co/dwgHs75z/White-OILFIELD-EQUIPMENT-TRADING-Co-LLC.png",
  },
  {
    id: 4,
    title: "Safinat Safinaas - Ecom Web Application",
    category: "Webflow + Custom Code",
    description:
      "Ecommerce web application for a fashion retailer, featuring dynamic product listings, user reviews, and personalized recommendations.",
    results: ["2000+ products listed", "50% reduction in inquiry time", "Mobile-first design"],
    technologies: ["Webflow", "Custom Code", "Product Analysing"],
    image: "bg-white/85 backdrop-blur-md",
    logo: "https://i.ibb.co/HDvZKLPG/big-logo-scaled-1-3.png",
    website: "https://safinatgroup.com/",
  },
  {
    id: 5,
    title: "Crochet art - Portfolio Website",
    category: "Web Development",
    description:
      "Portfolio website for a crochet artist, showcasing their work, blog, and an online store for handmade items.",
    results: ["150% increase in online sales", "High-resolution image gallery", "Integrated blog"],
    technologies: ["React", "Node", "GoogleSheets API"],
    image: "bg-white/85 backdrop-blur-md",
    logo: "https://i.ibb.co/7J2zSp4y/Whats-App-Image-2025-12-30-at-12-09-39-PM.jpg",
    website:
      "https://knot-in-thread.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  },
  {
    id: 6,
    title: "Business Expense & Inventory Tracker",
    category: "Web Development",
    description:
      "A smart business expense tracker designed to monitor cash flow, manage inventory, and analyze financial performance using dynamic calculations and real-time data handling.",
    results: [
      "Accurate tracking of income & expenses",
      "Automated inventory value calculations",
      "Clear financial insights through dynamic reports",
    ],
    technologies: ["React", "Node.js", "Google Sheets API"],
    image: "bg-white/85 backdrop-blur-md",
    logo: "https://i.ibb.co/YTypYT0q/favicon.png",
    website: "https://namak-para.vercel.app/",
  },
  {
  id: 7,
  title: "Portfolio Website – Advance Cinematics",
  category: "Portfolio",
  description:
    "A cinematic and performance-optimized portfolio website built for a Senior Video Editor, Motion Graphics Designer, and Cinematographer. Designed to showcase high-quality visual work with seamless media integration and a premium, professional look.",
  results: [
    "Strong personal brand presence with cinematic UI",
    "Smooth showcase of video work via Vimeo & YouTube",
    "Fast-loading, responsive portfolio optimized for clients",
  ],
  technologies: [
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Google Drive",
    "Vimeo",
    "YouTube",
    "ImgBB",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/FkMvKzfR/Gemini-Generated-Image-3vghq83vghq83vgh.png",
  website: "https://advancecinematics.com/",
},
{
  id: 8,
  title: "Business Website – Saifuddin and Sons Homestay",
  category: "Hospitality",
  description:
    "A modern, conversion-focused homestay website developed for Saifuddin and Sons Homestay in Ujjain, located near the Mahakal Temple. Designed to highlight comfortable rooms, amenities, prime location advantages, and seamless booking inquiries with a clean, trustworthy, and welcoming interface.",
  results: [
    "Strong online presence for Mahakal Temple visitors",
    "Clear showcase of rooms, amenities, and location benefits",
    "Fast-loading, mobile-responsive website optimized for direct inquiries",
  ],
  technologies: [
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Google Drive",
    "ImgBB",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/S4NhWJd6/Logo.png",
  website: "https://www.saifuddinandsonshomestay.in/",
},
{
  id: 9,
  title: "Social Media Management – AADTRA",
  category: "Digital Marketing",
  description:
    "Strategic social media management for AADTRA, focusing on building a strong industrial brand presence across LinkedIn and other digital platforms. Content strategy centered around engineering excellence, product showcases, industry insights, and B2B credibility to attract decision-makers in Oil & Gas, Power, and Infrastructure sectors.",
  results: [
    "Consistent LinkedIn authority building in industrial sector",
    "Professional product and project showcase posts",
    "Increased engagement from B2B clients and industry professionals",
  ],
  technologies: [
    "LinkedIn Marketing",
    "Content Strategy",
    "Canva",
    "Meta Business Suite",
    "Analytics & Insights",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/ZkyXf3g/Aadtra-logo.png",
  website: "https://aadtra.com/",
},
{
  id: 10,
  title: "Social Media Management – Gulfpole",
  category: "Digital Marketing",
  description:
    "Complete social media handling for Gulfpole, positioning the brand as a trusted manufacturer of poles and structural solutions. Focused on LinkedIn B2B growth, industrial awareness posts, manufacturing highlights, and infrastructure project visibility to strengthen market authority across GCC and international sectors.",
  results: [
    "Enhanced industrial brand credibility",
    "Structured LinkedIn content strategy for B2B reach",
    "Increased visibility among contractors and infrastructure companies",
  ],
  technologies: [
    "LinkedIn Marketing",
    "Content Planning",
    "Graphic Design",
    "Meta Ads",
    "Performance Tracking",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/YTYMFwzZ/gulfpole-logofinal.jpg",
  website: "https://gulfpole.com/",
},
{
  id: 11,
  title: "Social Media Management – Airprome",
  category: "Digital Marketing",
  description:
    "End-to-end social media strategy for Airprome, highlighting HVAC, air movement, and industrial ventilation solutions. Focused on educating the market, showcasing technical expertise, and building authority across LinkedIn and other platforms to attract contractors, consultants, and industrial buyers.",
  results: [
    "Stronger B2B brand positioning in HVAC sector",
    "Educational and technical awareness content",
    "Improved engagement from industry professionals and project managers",
  ],
  technologies: [
    "LinkedIn Marketing",
    "Content Strategy",
    "Brand Positioning",
    "Meta Platforms",
    "Analytics & Reporting",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/67qsKXpB/airpro-logo.jpg",
  website: "https://airprome.com/",
},
{
  id: 12,
  title: "Website Development – Badshah Property",
  category: "Web Development",
  description:
    "Developed a modern real estate website for Badshah Property, focused on showcasing property listings, improving user experience, and generating high-quality leads. The platform is optimized for local SEO and designed to build trust among buyers and sellers.",
  results: [
    "Professional online presence for real estate business",
    "Improved lead generation through optimized UI/UX",
    "Better local SEO visibility for property searches",
  ],
  technologies: [
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Google Drive",
    "ImgBB",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/Y4ZTP1yp/Whats-App-Image-2026-04-07-at-4-17-09-PM.jpg",
  website: "https://www.badshahproperty.in/",
},
{
  id: 13,
  title: "Website Development – 84 Mahadev Tours & Travels",
  category: "Web Development",
  description:
    "Built a complete travel and taxi booking platform for 84 Mahadev Tours & Travels, including dedicated taxi service functionality. The website is designed for fast bookings, clear service presentation, and strong local SEO targeting Ujjain यात्रियों and tourists.",
  results: [
    "Integrated taxi and travel booking experience",
    "Increased customer inquiries and direct bookings",
    "Improved visibility for Ujjain taxi and tour searches",
  ],
  technologies: [
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Google Drive",
    "ImgBB",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/c5ptnXg/LOGO.png",
  website: "https://www.84mahadevtravels.com/",
},
{
  id: 14,
  title: "Social Media Management – Saifuddin & Sons",
  category: "Digital Marketing",
  description:
    "Managed end-to-end social media strategy for Saifuddin & Sons, focusing on building a strong brand presence in the metal and coating industry. Created engaging content to showcase products, highlight finishing quality, and attract B2B clients through consistent posting and targeted messaging.",
  results: [
    "Stronger brand visibility in metal and coating industry",
    "Consistent engagement through product-focused content",
    "Improved inquiries from contractors and business clients",
  ],
  technologies: [
    "Content Strategy",
    "Instagram Marketing",
    "Facebook Marketing",
    "Brand Positioning",
    "Analytics & Reporting",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/8L9dSBLQ/SAIFUDDIN-1.png",
  website: "",
},
{
  id: 15,
  title: "Website Development – Mahakal Bike Rental Service",
  category: "Web Development",
  description:
    "Built a complete bike rental booking platform for Mahakal Bike Rental Service in Ujjain, designed for tourists and pilgrims visiting Mahakal. The website focuses on quick bookings, easy bike selection, and strong local SEO targeting Ujjain यात्रियों and travelers.",
  results: [
    "Seamless bike rental booking experience",
    "Increased direct inquiries and rental bookings",
    "Improved visibility for Ujjain bike rental and tourist searches",
  ],
  technologies: [
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Google Drive",
    "ImgBB",
  ],
  image: "bg-white/85 backdrop-blur-md",
  logo: "https://i.ibb.co/BKG3XFLK/1-logo.png",
  website: "https://www.bikerentservicesinujjain.in/",
},

];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-text text-gold-light mb-4 block">Portfolio</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Our Work Speaks for Itself
            </h1>
            <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries
              and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-elegant-lg transition-all duration-500"
              >
                {/* Image */}
                <div
                  className={`aspect-video ${project.image} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="relative group/logo">
                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
className="max-h-53 max-w-[260px] opacity-90 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100"
                          loading="lazy"
                        />

                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover/logo:opacity-100 group-hover/logo:translate-y-0 transition-all duration-300">
                          <ExternalLink className="w-5 h-5 text-white/90" />
                        </div>
                      </a>
                    ) : (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
className="max-h-53 max-w-[260px] opacity-60 object-contain cursor-not-allowed transition-all duration-300 ease-out hover:scale-105 hover:opacity-80"
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="heading-3 text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="body-regular text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-dark">
        <div className="container-section text-center">
          <h2 className="heading-1 text-foreground mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="body-large text-muted-foreground mb-10 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it and discuss how
            we can help.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
