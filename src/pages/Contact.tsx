import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hussainiitservices@gmail.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 7024951915 / +91 9156770832",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Ujjain,",
    description: "Madhya Pradesh, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "24/7 Support",
    description: "For critical issues",
  },
];

const APPSCRIPT_URL = "https://script.google.com/macros/s/AKfycbzDR81VzIw43HpJ4jtQc3XPnAptTyFgtGoR5p4HXYQqjlgYXqQn0zv8C9abAJyjE4Xd/exec";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const contactNo = String(formData.get("contactNo") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const budget = String(formData.get("budget") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // 🔐 VALIDATIONS
  if (name.length < 3) {
    toast({ title: "Invalid Name", description: "Please enter your full name." });
    setIsSubmitting(false);
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast({ title: "Invalid Email", description: "Please enter a valid email address." });
    setIsSubmitting(false);
    return;
  }

  if (!/^[+\d\s]{10,}$/.test(contactNo)) {
    toast({
      title: "Invalid Contact Number",
      description: "Enter a valid WhatsApp number with country code.",
    });
    setIsSubmitting(false);
    return;
  }

  if (!service) {
    toast({ title: "Service Required", description: "Please specify a service." });
    setIsSubmitting(false);
    return;
  }

  if (message.length < 10) {
    toast({
      title: "Message Too Short",
      description: "Please describe your project briefly.",
    });
    setIsSubmitting(false);
    return;
  }

  // ✅ FIXED PAYLOAD (CONTACT NO INCLUDED)
  const payload = {
    name,
    email,
    contactNo,
    company,
    service,
    budget,
    message,
  };

  try {
    await fetch(APPSCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    form.reset();
  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-text text-gold-light mb-4 block">Contact Us</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Let's Build Something Great
            </h1>
            <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch with our
              team to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="heading-2 text-foreground mb-8">Get in Touch</h2>
              <p className="body-regular text-muted-foreground mb-10">
                Whether you're a startup looking to build your first product or
                an enterprise seeking to modernize your systems, we're here to
                help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-medium text-foreground">
                        {item.title}
                      </h4>
                      <p className="body-regular text-foreground">{item.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 lg:p-10 rounded-2xl">
                <h3 className="heading-3 text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FORM UNCHANGED */}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Input
                        id="service"
                        name="service"
                        placeholder="e.g., Web Development"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactNo">Contact No (Whatsapp)</Label>
                    <Input
                      id="contactNo"
                      name="contactNo"
                      placeholder="e.g., +91 8888888888"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input
                      id="budget"
                      name="budget"
                      placeholder="e.g., $10,000 - $25,000"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-cream-dark">
        <div className="container-section text-center">
          <h2 className="heading-2 text-foreground mb-4">
            Prefer a Quick Chat?
          </h2>
          <p className="body-regular text-muted-foreground mb-8">
            Schedule a free 30-minute consultation to discuss your project
            requirements.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Call
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
