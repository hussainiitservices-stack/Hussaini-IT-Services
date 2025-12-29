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
    image: "bg-gradient-to-br from-blue-900 to-indigo-800",
  },
  {
    id: 2,
    title: "Burhani Guards - Ujjain Performance tracking Web Application",
    category: "Web Development",
    description:
      "Custom web application for managing and tracking security personnel performance, attendance, and reporting.",
    results: ["Best App for tracking ", "3s average load time", "100% user satisfaction"],
    technologies: ["React", "Node.js", "MongoDB"],
    image: "bg-gradient-to-br from-amber-900 to-orange-800",
  },
  {
    id: 3,
    title: "Himmat oilfield Shopify  ecommerce App",
    category: "Shopify Development",
    description:
      "Ecommerce app for oilfield equipment and supplies, featuring product catalog, shopping cart, and secure checkout.",
    results: ["5 star rating", "30% increase in Customer engagement"],
    technologies: ["Shopify Plus", "Liquid", "Javascript"],
    image: "bg-gradient-to-br from-emerald-900 to-teal-800",
  },
  // {
  //   id: 4,
  //   title: "SaaS Marketing Platform",
  //   category: "Web Development",
  //   description:
  //     "All-in-one marketing automation platform with email campaigns, analytics, and customer journey mapping.",
  //   results: ["200% user growth", "Enterprise-ready scaling", "Multi-language support"],
  //   technologies: ["Next.js", "TypeScript", "GraphQL"],
  //   image: "bg-gradient-to-br from-purple-900 to-violet-800",
  // },
  // {
  //   id: 5,
  //   title: "Restaurant Ordering System",
  //   category: "WordPress + Mobile",
  //   description:
  //     "Integrated ordering system with WordPress backend, customer-facing mobile apps, and kitchen management dashboard.",
  //   results: ["60% faster order processing", "25% increase in repeat customers", "Seamless POS integration"],
  //   technologies: ["WordPress", "Flutter", "REST API"],
  //   image: "bg-gradient-to-br from-red-900 to-rose-800",
  // },
  {
    id: 4,
    title: "Safinat Safinaas - Ecom Web Application",
    category: "Webflow + Custom Code",
    description:
      "Ecommerce web application for a fashion retailer, featuring dynamic product listings, user reviews, and personalized recommendations.",
    results: ["2000+ products listed", "50% reduction in inquiry time", "Mobile-first design"],
    technologies: ["Webflow", "Custom Code", "Product Analysing"],
    image: "bg-gradient-to-br from-slate-800 to-zinc-700",
  },
  {
    id: 5,
    title: "crochet art - Portfolio Website",
    category: "Web Development",
    description:
      "Portfolio website for a crochet artist, showcasing their work, blog, and an online store for handmade items.",
    results: ["150% increase in online sales", "High-resolution image gallery", "Integrated blog"],
    technologies: ["React", "Node", "GoogleSheets API"],
    image: "bg-gradient-to-br from-pink-900 to-fuchsia-800",
  }
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
                  <span className="font-heading text-6xl text-white/20 group-hover:scale-110 transition-transform duration-500">
                    {project.id.toString().padStart(2, "0")}
                  </span>
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

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
                      >
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
