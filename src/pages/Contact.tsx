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
    content: "info@hussainiitservices.com",
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
  content: "303 Talbot Lane,",
  description: "Sunnyvale, Texas, USA 75182",
},

  {
    icon: Clock,
    title: "Business Hours",
    content: "24/7 Support",
    description: "For critical issues",
  },
];

const APPSCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxuiTg6waMewMZpePx5mlEFvCY-znrOPTTJU1nXgniB7cbqeCEwSRhiUqOWBoq8vuI/exec";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ ADDED: Device-based Schedule Call handler
  const handleScheduleCall = () => {
    const phoneNumber = "917024951915";
    const message = "Hello, I want to schedule a 30-minute consultation.";

    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:+${phoneNumber}`;
    } else {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phoneCode = String(formData.get("phoneCode") || "").trim();
    const contactNo = String(formData.get("contactNo") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const currency = String(formData.get("currency") || "INR");


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

    if (!phoneCode) {
  toast({
    title: "Phone Code Required",
    description: "Please select a country code.",
  });
  setIsSubmitting(false);
  return;
}

if (!/^\d{6,15}$/.test(contactNo)) {
  toast({
    title: "Invalid Contact Number",
    description: "Enter a valid WhatsApp number without country code.",
  });
  setIsSubmitting(false);
  return;
}


    if (!currency) {
  toast({
    title: "Currency Required",
    description: "Please select a currency for your budget.",
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

    const payload = {
      name,
      email,
      phoneCode,
      contactNo,
      company,
      service,
      budget,
      currency,
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
  <Label htmlFor="contactNo">Contact No (WhatsApp)</Label>

  <div className="flex gap-3">
    {/* Phone Code Dropdown */}
    <select
      name="phoneCode"
      className="h-12 w-28 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      defaultValue="+91"
    >
      <option value="+91">🇮🇳 +91</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+971">🇦🇪 +971</option>
      <option value="+61">🇦🇺 +61</option>
    </select>

    {/* Phone Number Input */}
    <Input
      id="contactNo"
      name="contactNo"
      placeholder="e.g., 8888888888"
      className="h-12 flex-1"
    />
  </div>
</div>


                  <div className="space-y-2">
  <Label htmlFor="budget">Budget Range</Label>

  <div className="flex gap-3">
    {/* Currency Dropdown */}
    <select
      name="currency"
      className="h-12 w-28 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      defaultValue="INR"
    >
      <option value="INR">₹ INR</option>
      <option value="USD">$ USD</option>
      <option value="EUR">€ EUR</option>
      <option value="GBP">£ GBP</option>
      <option value="AED">AED</option>
    </select>

    {/* Budget Input */}
    <Input
      id="budget"
      name="budget"
      placeholder="e.g., 10,000 - 25,000"
      className="h-12 flex-1"
    />
  </div>
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

          {/* ✅ UPDATED BUTTON ONLY */}
          <Button
            variant="outline"
            size="lg"
            onClick={handleScheduleCall}
          >
            Schedule a Call
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;


