import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code,
  ShoppingCart,
  Layout as LayoutIcon,
  FileCode,
  Smartphone,
  Apple,
  ArrowRight,
  Check,
  Search,
  Share2,
  Video,
  Palette,
} from "lucide-react";

/**
 * 👉 media:
 * - Can be an imgbb URL (https://i.ibb.co/xxx.gif)
 * - OR local asset (/assets/gifs/web.gif)
 */

const services = [
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    subtitle: "Custom & Scalable Solutions",
    description:
      "From dynamic single-page applications to complex enterprise platforms, we build web solutions that are fast, secure, and designed to scale with your business.",
    benefits: [
      "Custom architecture tailored to your needs",
      "Lightning-fast performance optimization",
      "SEO-friendly and accessible design",
      "Secure and maintainable codebase",
      "Cloud-native deployment strategies",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    media: "https://i.ibb.co/2Y5w818T/a577c4d5-0a32-4040-8361-55f182e0cbeb-7932110.gif",
  },
  {
    id: "shopify",
    icon: ShoppingCart,
    title: "Shopify Development",
    subtitle: "E-Commerce Excellence",
    description:
      "Transform your online store with custom Shopify themes, powerful apps, and seamless integrations that drive conversions and enhance customer experience.",
    benefits: [
      "Custom theme development",
      "Shopify app creation",
      "Third-party integrations",
      "Performance optimization",
      "Conversion rate optimization",
    ],
    technologies: ["Liquid", "Shopify API", "Hydrogen", "JavaScript", "GraphQL"],
    media: "https://i.ibb.co/CxdVFLh/New-Project-AD37-BAB.gif",
  },
  {
    id: "webflow",
    icon: LayoutIcon,
    title: "Webflow Development",
    subtitle: "No-Code, Pro Results",
    description:
      "Create stunning, responsive websites with Webflow's powerful visual development platform. Perfect for marketing sites, portfolios, and content-driven platforms.",
    benefits: [
      "Pixel-perfect responsive design",
      "Advanced CMS capabilities",
      "Custom interactions & animations",
      "Easy content management",
      "Fast time-to-market",
    ],
    technologies: ["Webflow", "Custom Code", "Integrations", "CMS", "Animations"],
    media: "https://i.ibb.co/8DtpQwvc/New-Project-446079-F.gif",
  },
  {
    id: "wordpress",
    icon: FileCode,
    title: "WordPress Development",
    subtitle: "Robust & Flexible",
    description:
      "Leverage the world's most popular CMS with custom themes, plugins, and optimized configurations that give you full control over your content.",
    benefits: [
      "Custom theme development",
      "Plugin development & customization",
      "WooCommerce solutions",
      "Multisite setups",
      "Security hardening",
    ],
    technologies: ["PHP", "MySQL", "REST API", "Gutenberg", "WooCommerce"],
    media: "https://i.ibb.co/DgLMPvQ9/a577c4d5-0a32-4040-8361-55f182e0cbeb-33-E959-B.gif",
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Android Development",
    subtitle: "Native & Cross-Platform",
    description:
      "Build powerful Android applications that deliver exceptional user experiences, whether native or cross-platform, optimized for the diverse Android ecosystem.",
    benefits: [
      "Native Kotlin development",
      "Cross-platform with Flutter/React Native",
      "Material Design implementation",
      "Play Store optimization",
      "Push notifications & analytics",
    ],
    technologies: ["Kotlin", "Java", "Flutter", "React Native", "Firebase"],
    media: "https://i.ibb.co/LXN51Pqx/a577c4d5-0a32-4040-8361-55f182e0cbeb-D83-BDDD.gif",
  },
  {
    id: "ios",
    icon: Apple,
    title: "iOS Development",
    subtitle: "Apple Ecosystem Excellence",
    description:
      "Create elegant iOS applications that feel right at home on Apple devices, following Apple's Human Interface Guidelines and leveraging the latest iOS features.",
    benefits: [
      "Native Swift/SwiftUI development",
      "Cross-platform capabilities",
      "Apple ecosystem integration",
      "App Store optimization",
      "Push notifications & analytics",
    ],
    technologies: ["Swift", "SwiftUI", "Objective-C", "Xcode", "TestFlight"],
    media: "https://i.ibb.co/G3bgGcLZ/New-Project-73-E8-AD0.gif",
  },
  
  {
  id: "seo",
  icon: Search,
  title: "SEO Enhancement",
  subtitle: "Visibility That Converts",
  description:
    "Boost your website’s search engine rankings with data-driven SEO strategies that improve visibility, attract qualified traffic, and drive long-term organic growth.",
  benefits: [
    "On-page & technical SEO optimization",
    "Keyword research & competitor analysis",
    "Content optimization for ranking",
    "Performance & Core Web Vitals improvement",
    "Local & global SEO strategies",
  ],
  technologies: [
    "Google Search Console",
    "Google Analytics",
    "Ahrefs",
    "SEMrush",
    "PageSpeed Insights",
  ],
  media: "https://i.ibb.co/99LYsPtv/seo-optimization.gif",
},

{
  id: "social-media",
  icon: Share2,
  title: "Social Media Management",
  subtitle: "Build. Engage. Grow.",
  description:
    "Strengthen your brand presence across social platforms with consistent content, audience engagement, and performance-focused social media strategies.",
  benefits: [
    "Content planning & creative posting",
    "Audience engagement & growth",
    "Brand voice consistency",
    "Analytics & performance tracking",
    "Paid campaign management",
  ],
  technologies: [
    "Meta Business Suite",
    "Instagram Insights",
    "Facebook Ads Manager",
    "Canva",
    "Hootsuite",
  ],
  media: "https://i.ibb.co/4hXfhz0/social-media-marketing.gif",
},

{
  id: "video-editing",
  icon: Video,
  title: "Video Editing",
  subtitle: "Scroll-Stopping Visual Stories",
  description:
    "Create high-impact video content designed for Instagram Reels, YouTube Shorts, and brand showreels that capture attention, boost engagement, and drive conversions.",
  benefits: [
    "Instagram Reels & Shorts editing",
    "Cinematic transitions & effects",
    "Color grading & sound design",
    "Trend-based edits for higher reach",
    "Brand-aligned storytelling",
  ],
  technologies: [
    "Adobe Premiere Pro",
    "After Effects",
    "CapCut",
    "DaVinci Resolve",
    "Final Cut Pro",
  ],
  media: "https://i.ibb.co/kVd63h0J/video-editing-reels.gif",
},

{
  id: "graphic-design",
  icon: Palette,
  title: "Graphic Design",
  subtitle: "Designs That Define Brands",
  description:
    "Craft visually compelling designs that build brand identity — from logos and brand kits to marketing creatives that leave a lasting impression.",
  benefits: [
    "Logo design & brand identity",
    "Social media creatives & banners",
    "Print & digital design assets",
    "Consistent visual language",
    "High-resolution export formats",
  ],
  technologies: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma",
    "Canva",
    "CorelDRAW",
  ],
  media: "https://i.ibb.co/gBw9Dbj/graphic-design-branding.gif",
},





];





const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-text text-gold-light mb-4 block">Our Services</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              End-to-End Digital Solutions
            </h1>
            <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
              From concept to deployment and beyond, we provide comprehensive
              technology services that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container-section">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT CONTENT */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>

                  <span className="label-text text-accent mb-2 block">
                    {service.subtitle}
                  </span>
                  <h2 className="heading-1 text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="body-large text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 body-regular text-foreground"
                      >
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button variant="gold" className="group">
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* RIGHT FRAME – GIF ONLY */}
                <div
                  className={`glass-card p-8 rounded-2xl bg-cream-dark ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={service.media}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container-section text-center">
          <h2 className="heading-1 text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="body-large text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            expertise and dedication.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
