import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Apple,
  ArrowRight,
  Check,
  Search,
  Share2,
  Video,
  Palette,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

// ─── Web Dev sub-platforms ───────────────────────────────────────────────────
const webPlatforms = [
  {
    label: "React / Next.js",
    desc: "Lightning-fast SPAs and SSR apps built with modern React and Next.js architecture.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    label: "WordPress",
    desc: "Custom themes, plugin development, WooCommerce stores, and hardened security.",
    tags: ["PHP", "MySQL", "REST API", "WooCommerce"],
  },
  {
    label: "Webflow",
    desc: "Pixel-perfect visual builds with advanced CMS, animations, and zero-code flexibility.",
    tags: ["Webflow", "CMS", "Interactions", "Custom Code"],
  },
  {
    label: "Shopify",
    desc: "Custom Shopify themes, apps, and store optimization for high-converting e-commerce experiences.",
    tags: ["Shopify", "Liquid", "JavaScript", "Theme Customization"],
  },
];

// ─── All services ─────────────────────────────────────────────────────────────
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
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "WordPress", "Webflow", "PostgreSQL", "AWS"],
    media: "https://i.ibb.co/2Y5w818T/a577c4d5-0a32-4040-8361-55f182e0cbeb-7932110.gif",
    hasWebPlatforms: true,
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
      "Boost your website's search engine rankings with data-driven SEO strategies that improve visibility, attract qualified traffic, and drive long-term organic growth.",
    benefits: [
      "On-page & technical SEO optimization",
      "Keyword research & competitor analysis",
      "Content optimization for ranking",
      "Performance & Core Web Vitals improvement",
      "Local & global SEO strategies",
    ],
    technologies: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush", "PageSpeed Insights"],
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
    technologies: ["Meta Business Suite", "Instagram Insights", "Facebook Ads Manager", "Canva", "Hootsuite"],
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
    technologies: ["Adobe Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve", "Final Cut Pro"],
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
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva", "CorelDRAW"],
    media: "https://i.ibb.co/gBw9Dbj/graphic-design-branding.gif",
  },
];

// ─── Platform Accordion ───────────────────────────────────────────────────────
const PlatformAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
        borderRadius: "16px",
        border: "1px solid rgba(201,168,76,0.18)",
        overflow: "hidden",
        background: "rgba(201,168,76,0.03)",
      }}
    >
      {/* Header pill */}
      <div
        style={{
          padding: "10px 18px",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--accent, #c9a84c)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent, #c9a84c)",
            fontWeight: 700,
          }}
        >
          Platforms we build on
        </span>
      </div>

      {/* Rows */}
      {webPlatforms.map((p, i) => (
        <div
          key={p.label}
          style={{
            borderBottom:
              i < webPlatforms.length - 1
                ? "1px solid rgba(201,168,76,0.10)"
                : "none",
          }}
        >
          {/* Trigger */}
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 18px",
              background: open === i ? "rgba(201,168,76,0.06)" : "transparent",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color:
                  open === i
                    ? "var(--accent, #c9a84c)"
                    : "var(--foreground)",
                transition: "color 0.2s",
              }}
            >
              {p.label}
            </span>
            <ChevronDown
              style={{
                width: 15,
                height: 15,
                color: "var(--accent, #c9a84c)",
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                flexShrink: 0,
                marginLeft: 8,
              }}
            />
          </button>

          {/* Expandable content */}
          <div
            style={{
              maxHeight: open === i ? 160 : 0,
              overflow: "hidden",
              transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div style={{ padding: "0 18px 14px" }}>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "var(--muted-foreground)",
                  marginBottom: 10,
                  lineHeight: 1.65,
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      padding: "3px 10px",
                      borderRadius: 999,
                      background: "rgba(201,168,76,0.10)",
                      color: "var(--accent, #c9a84c)",
                      letterSpacing: "0.04em",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
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

                  {/* ── Platform accordion — Web Dev only ── */}
                  {service.hasWebPlatforms && <PlatformAccordion />}

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
