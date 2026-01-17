import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code,
  ShoppingCart,
  Layout,
  FileCode,
  Smartphone,
  Apple,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom, scalable web applications built with modern technologies. From SPAs to enterprise platforms.",
    features: ["React & Next.js", "Node.js Backend", "Cloud Infrastructure"],
    link: "/services#web",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description:
      "Complete e-commerce solutions with custom themes, apps, and seamless integrations.",
    features: ["Custom Themes", "App Development", "Store Optimization"],
    link: "/services#shopify",
  },
  {
    icon: Layout,
    title: "Webflow Development",
    description:
      "Pixel-perfect, responsive websites with powerful CMS capabilities and animations.",
    features: ["No-Code CMS", "Custom Interactions", "SEO Optimized"],
    link: "/services#webflow",
  },
  {
    icon: FileCode,
    title: "WordPress Development",
    description:
      "Robust WordPress solutions from custom themes to complex plugin development.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce"],
    link: "/services#wordpress",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    description:
      "Native and cross-platform Android applications with exceptional user experiences.",
    features: ["Kotlin/Java", "Flutter/React Native", "Play Store Ready"],
    link: "/services#android",
  },
  {
    icon: Apple,
    title: "iOS Apps",
    description:
      "Elegant iOS applications designed with Apple's best practices and guidelines.",
    features: ["Swift/SwiftUI", "App Store Ready", "Apple Ecosystem"],
    link: "/services#ios",
  },
];

export const ServicesSection = () => {
  return (
    // ✅ ID ADDED — THIS FIXES HERO SCROLL
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="label-text text-accent mb-4 block">Our Services</span>
          <h2 className="heading-1 text-foreground mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="body-large text-muted-foreground">
            From web applications to mobile apps, we deliver end-to-end
            solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group glass-card p-8 rounded-xl hover:shadow-elegant-lg transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              <h3 className="heading-3 text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              <p className="body-regular text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
