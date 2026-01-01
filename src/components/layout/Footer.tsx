import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", path: "/services#web" },
    { name: "Shopify Development", path: "/services#shopify" },
    { name: "Mobile Apps", path: "/services#mobile" },
    { name: "WordPress", path: "/services#wordpress" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Why Choose Us", path: "/about#why-us" },
    { name: "Contact", path: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-section py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-2xl font-semibold">
                Hussaini <span className="text-gold-light">IT</span>
              </span>
            </Link>
            <p className="body-regular text-primary-foreground/70 mb-6 max-w-sm">
              Delivering elegant, scalable digital solutions for enterprises and
              startups worldwide. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/hussaini-it-services/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]"
  >
    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/hussaini_it_services/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-pink-500/10 hover:border-pink-500"
  >
    <Instagram className="w-4 h-4 text-pink-500" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/hussainiitservices-stack"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-gray-500/10 hover:border-gray-500"
  >
    <Github className="w-4 h-4 text-gray-500" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.link/aka7ls"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-green-500/10 hover:border-green-500"
  >
    <Phone className="w-4 h-4 text-green-500" />
  </a>
</div>

          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-gold-light">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="body-regular text-primary-foreground/70 hover:text-gold-light transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-gold-light">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="body-regular text-primary-foreground/70 hover:text-gold-light transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-gold-light">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <span className="body-regular text-primary-foreground/70">
                  hussainiitservices@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />

<ul className="body-regular text-primary-foreground/70 space-y-1">
  <li>+91 7024951915</li>
  <li>+91 9156770832</li>
</ul>

              </li>
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <span className="body-regular text-primary-foreground/70">
                  Ujjain, <br />
                  Madhya Pradesh, India
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-section py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Hussaini IT Services. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-primary-foreground/50 hover:text-gold-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-primary-foreground/50 hover:text-gold-light transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
