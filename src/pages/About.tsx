import { Layout } from "@/components/layout";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue the highest standards in every line of code, every design decision, and every client interaction.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open communication and honest feedback form the foundation of our client relationships.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your team, invested in your success as much as our own.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "Deadlines are sacred. We deliver what we promise, when we promise it.",
  },
];

const milestones = [
  // { year: "2016", event: "Founded with a vision to deliver premium IT solutions" },
  // { year: "2018", event: "Expanded to serve international clients across 10+ countries" },
  // { year: "2020", event: "Launched mobile development division" },
  // { year: "2022", event: "Reached 100+ successful project deliveries" },
  { year: "2024", event: "Born from a vision to take small businesses digital—and grow together through innovation." },
  { year: "2025", event: "By 2025, we proudly delivered 5 major full-stack projects and industry-leading SEO strategies that fueled measurable business growth for our clients." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-text text-gold-light mb-4 block">About Us</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Building Digital Excellence Since 2024
            </h1>
            <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
              We are a team of passionate technologists, designers, and strategists
              dedicated to transforming businesses through exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="glass-card p-10 rounded-2xl">
              <span className="label-text text-accent mb-4 block">Our Mission</span>
              <h2 className="heading-2 text-foreground mb-6">
                Empowering Businesses Through Technology
              </h2>
              <p className="body-regular text-muted-foreground">
                To deliver elegant, scalable, and innovative digital solutions that
                empower businesses to thrive in an increasingly connected world. We
                bridge the gap between complex technology and business success.
              </p>
            </div>

            <div className="glass-card p-10 rounded-2xl">
              <span className="label-text text-accent mb-4 block">Our Vision</span>
              <h2 className="heading-2 text-foreground mb-6">
                The Future of Digital Partnership
              </h2>
              <p className="body-regular text-muted-foreground">
                To become the most trusted technology partner for businesses worldwide,
                known for our unwavering commitment to quality, innovation, and client
                success. We envision a world where technology amplifies human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-dark">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="label-text text-accent mb-4 block">Our Values</span>
            <h2 className="heading-1 text-foreground mb-6">
              Principles That Guide Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl bg-background shadow-elegant-sm hover:shadow-elegant-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-3 text-foreground mb-3">{value.title}</h3>
                <p className="body-regular text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="label-text text-accent mb-4 block">Our Journey</span>
            <h2 className="heading-1 text-foreground mb-6">
              Milestones of Growth
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-8 pb-12 last:pb-0 relative"
              >
                {/* Line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[39px] top-12 w-0.5 h-full bg-border" />
                )}

                {/* Year */}
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="font-heading text-xl font-semibold text-gold-light">
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-5">
                  <p className="body-large text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
