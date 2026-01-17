import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-1 text-primary-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-gold-light">Digital Presence?</span>
          </h2>
          <p className="body-large text-primary-foreground/70 mb-10">
            Partner with us to build exceptional digital products. From concept
            to deployment, we bring your vision to life with precision and
            elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="hero-outline" size="xl">
                Explore Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/50 mb-6 uppercase tracking-widest">
              Trusted Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {["React", "Node.js", "AWS", "Shopify", "WordPress", "Flutter"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="font-heading text-xl text-primary-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
