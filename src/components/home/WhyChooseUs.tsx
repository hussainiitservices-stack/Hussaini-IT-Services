import { Shield, Clock, Users, Award, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Industry-standard security practices protecting your data and applications.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed timelines with transparent progress tracking and communication.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert developers assigned to your project from start to finish.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and code reviews ensuring exceptional product quality.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for critical issues and ongoing maintenance.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business demands.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="label-text text-accent mb-4 block">
              Why Choose Us
            </span>
            <h2 className="heading-1 text-foreground mb-6">
              Trusted by Startups & Enterprises Alike
            </h2>
            <p className="body-large text-muted-foreground mb-8">
              We combine technical excellence with business acumen to deliver
              solutions that drive real results. Our commitment to quality and
              partnership sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-medium text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="glass-card p-10 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="heading-2 mb-8">Our Track Record</h3>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="font-heading text-5xl font-bold text-gold-light mb-2">
                    98%
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="font-heading text-5xl font-bold text-gold-light mb-2">
                    5+
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="font-heading text-5xl font-bold text-gold-light mb-2">
                    2+
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    Countries Served
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="font-heading text-5xl font-bold text-gold-light mb-2">
                    50+
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    Team Members
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
};
