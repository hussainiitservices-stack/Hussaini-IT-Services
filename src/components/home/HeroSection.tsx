import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Brain } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  // ✅ Smooth scroll handler
  const handleScrollDown = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Modal state
  const [activeModal, setActiveModal] = useState<
    null | "web" | "mobile" | "ai" | "global"
  >(null);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-section relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="label-text text-primary-foreground/80">
                Premium IT Solutions
              </span>
            </div>

            <h1 className="heading-display text-primary-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
              Crafting Digital
              <span className="heading-display block text-gold-light">Excellence</span>
            </h1>

            <p className="body-large text-primary-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up animation-delay-200">
              We transform visionary ideas into elegant, scalable digital
              solutions. From startups to enterprises, we deliver technology
              that drives growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up animation-delay-300">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="hero-outline" size="xl">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10 opacity-0 animate-fade-up animation-delay-400">
              <div>
                <div className="font-heading text-4xl font-semibold text-gold-light">
                  5+
                </div>
                <div className="text-sm text-primary-foreground/60 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl font-semibold text-gold-light">
                  15+
                </div>
                <div className="text-sm text-primary-foreground/60 mt-1">
                  Global Clients
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl font-semibold text-gold-light">
                  1+
                </div>
                <div className="text-sm text-primary-foreground/60 mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

{/* Visual Element */}
<div className="hidden lg:block relative opacity-0 animate-fade-up animation-delay-300">
  <div className="relative">
    <div className="glass-card bg-primary-foreground/5 backdrop-blur-xl border-primary-foreground/10 p-8 rounded-2xl">
      <div className="grid grid-cols-2 gap-6">

        {/* Web */}
        <div
          onClick={() => setActiveModal("web")}
          className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-gold/50 transition-colors duration-300 group cursor-pointer"
        >
          <Code className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-lg text-primary-foreground mb-2">
            Web Development
          </h3>
          <p className="text-sm text-primary-foreground/60">
            Custom & scalable solutions
          </p>
        </div>

        {/* Mobile */}
        <div
          onClick={() => setActiveModal("mobile")}
          className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-gold/50 transition-colors duration-300 group cursor-pointer"
        >
          <Smartphone className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-lg text-primary-foreground mb-2">
            Mobile Apps
          </h3>
          <p className="text-sm text-primary-foreground/60">
            iOS & Android
          </p>
        </div>

        {/* AI */}
        <div
          onClick={() => setActiveModal("ai")}
          className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-gold/50 transition-colors duration-300 group cursor-pointer"
        >
          <Brain className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-lg text-primary-foreground mb-2">
            AI Integration
          </h3>
          <p className="text-sm text-primary-foreground/60">
            Smart automation & AI solutions
          </p>
        </div>

        {/* Global */}
        <div
          onClick={() => setActiveModal("global")}
          className="p-6 rounded-xl bg-primary-foreground/5 border border-gold/30 hover:border-gold transition-colors duration-300 group cursor-pointer"
        >
          <Globe className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-heading text-lg text-primary-foreground mb-2">
            Global Reach
          </h3>
          <p className="text-sm text-primary-foreground/60">
            Premium digital solutions worldwide
          </p>
          {/* Clickable Star */}
{/* Clickable Star – AI Modal */}
<div
  onClick={(e) => {
    e.stopPropagation(); // 🔥 THIS IS THE FIX
    setActiveModal("ai");
  }}
  className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl 
             bg-gold/20 backdrop-blur-sm border border-gold/30 
             flex items-center justify-center 
             animate-float hover:scale-110 transition-transform 
             cursor-pointer z-10"
>
  <span className="font-heading text-xl text-gold animate-pulse">
    ✦
  </span>
</div>




        </div>

      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Scroll
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-500"
      >
        <span className="text-xs text-primary-foreground/50 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-bounce" />
        </div>
      </button> */}

      {/* MODAL */}
{activeModal && (
  <div
    className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    onClick={() => setActiveModal(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-2xl w-full glass-card bg-background border border-border rounded-2xl p-8 animate-fade-up"
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6">
        {activeModal === "web" && <Code className="w-10 h-10 text-gold" />}
        {activeModal === "mobile" && (
          <Smartphone className="w-10 h-10 text-gold" />
        )}
        {activeModal === "ai" && <Brain className="w-10 h-10 text-gold" />}
        {activeModal === "global" && <Globe className="w-10 h-10 text-gold" />}

        <h3 className="font-heading text-2xl text-foreground">
          {{
            web: "Web Development",
            mobile: "Mobile App Development",
            ai: "AI Integration",
            global: "Global Client Success",
          }[activeModal]}
        </h3>
      </div>

      {/* BODY */}
      {activeModal === "web" && (
        <div className="space-y-4 text-foreground/70">
          <p>
            We build high-performance websites that convert visitors into
            customers — fast, scalable, SEO-optimized, and brand-aligned.
          </p>
          <p>
            Your business grows through better visibility, trust, automation,
            and seamless user experience.
          </p>
          <p className="text-sm">
            <strong>Tools:</strong> React, Next.js, Webflow, WordPress, Shopify,
            Tailwind, SEO Analytics
          </p>
        </div>
      )}

      {activeModal === "mobile" && (
        <div className="space-y-4 text-foreground/70">
          <p>
            Native & cross-platform apps that keep your customers engaged,
            retained, and loyal.
          </p>
          <p>
            Apps unlock new revenue streams, improve operations, and scale your
            brand globally.
          </p>
          <p className="text-sm">
            <strong>Tools:</strong> React Native, Flutter, Firebase, Swift,
            Kotlin, App Store & Play Store optimization
          </p>
        </div>
      )}

      {activeModal === "ai" && (
        <div className="space-y-4 text-foreground/70">
          <p>
            AI transforms your business with automation, intelligence, and
            decision-making power.
          </p>
          <p>
            Reduce costs, increase conversions, and deliver smarter user
            experiences.
          </p>
          <p className="text-sm">
            <strong>Tools:</strong> Chatbots, AI Search, Recommendation Engines,
            Automation, Analytics, OpenAI APIs
          </p>
        </div>
      )}

      {activeModal === "global" && (
        <div className="space-y-4 text-foreground/70">
          <p>
            We serve global clients with consistent quality, clear communication,
            and measurable results.
          </p>
          <p>
            Our delivery model ensures satisfaction, long-term partnerships,
            and continuous growth.
          </p>

          {/* SIMPLE POSITIVE GRAPH */}
          <div className="mt-4">
            <div className="h-24 bg-gradient-to-r from-gold/30 to-gold/10 rounded-lg flex items-end p-2 gap-2">
              <div className="w-4 bg-gold rounded-sm h-6" />
              <div className="w-4 bg-gold rounded-sm h-10" />
              <div className="w-4 bg-gold rounded-sm h-14" />
              <div className="w-4 bg-gold rounded-sm h-20" />
            </div>
            <p className="text-xs mt-2 text-foreground/50">
              Client satisfaction & growth trend
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 flex justify-end">
        <Link to="/contact">
          <Button variant="gold">I want this service</Button>
        </Link>
      </div>
    </div>
  </div>
)}

    </section>
  );
};
