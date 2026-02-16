import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";


/* =========================
   CLIENT MARQUEE CONFIG
========================= */
const clientMarqueeSettings = {
  speed: 380, // seconds (lower = faster)
  direction: "left", // "left" | "right"
  logoSize: 64, // px
  gap: 48, // px
};

const clients = [
  {
    name: "",
    logo: "https://i.ibb.co/hRR7GYb0/logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/Rp8BZbJF/Logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/dwgHs75z/White-OILFIELD-EQUIPMENT-TRADING-Co-LLC.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/HDvZKLPG/big-logo-scaled-1-3.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/7J2zSp4y/Whats-App-Image-2025-12-30-at-12-09-39-PM.jpg",
  },

  {
    name: "",
    logo: "https://i.ibb.co/YTypYT0q/favicon.png",
  },
   
  {
    name: "",
    logo: "https://i.ibb.co/FkMvKzfR/Gemini-Generated-Image-3vghq83vghq83vgh.png",
  },

/* ================================================================================================================================================== */
  {
    name: "",
    logo: "https://i.ibb.co/hRR7GYb0/logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/Rp8BZbJF/Logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/dwgHs75z/White-OILFIELD-EQUIPMENT-TRADING-Co-LLC.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/HDvZKLPG/big-logo-scaled-1-3.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/7J2zSp4y/Whats-App-Image-2025-12-30-at-12-09-39-PM.jpg",
  },

  {
    name: "",
    logo: "https://i.ibb.co/YTypYT0q/favicon.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/FkMvKzfR/Gemini-Generated-Image-3vghq83vghq83vgh.png",
  },
/* ================================================================================================================================================== */
  {
    name: "",
    logo: "https://i.ibb.co/hRR7GYb0/logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/Rp8BZbJF/Logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/dwgHs75z/White-OILFIELD-EQUIPMENT-TRADING-Co-LLC.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/HDvZKLPG/big-logo-scaled-1-3.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/7J2zSp4y/Whats-App-Image-2025-12-30-at-12-09-39-PM.jpg",
  },

  {
    name: "",
    logo: "https://i.ibb.co/YTypYT0q/favicon.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/FkMvKzfR/Gemini-Generated-Image-3vghq83vghq83vgh.png",
  },
/* ================================================================================================================================================== */
  {
    name: "",
    logo: "https://i.ibb.co/hRR7GYb0/logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/Rp8BZbJF/Logo.png",
  },
  {
    name: "",
    logo: "https://i.ibb.co/dwgHs75z/White-OILFIELD-EQUIPMENT-TRADING-Co-LLC.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/HDvZKLPG/big-logo-scaled-1-3.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/7J2zSp4y/Whats-App-Image-2025-12-30-at-12-09-39-PM.jpg",
  },

  {
    name: "",
    logo: "https://i.ibb.co/YTypYT0q/favicon.png",
  },

  {
    name: "",
    logo: "https://i.ibb.co/FkMvKzfR/Gemini-Generated-Image-3vghq83vghq83vgh.png",
  },
/* ================================================================================================================================================== */
];

/* ========================= */

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
  const [activeClient, setActiveClient] = useState<{
    name?: string;
    logo: string;
  } | null>(null);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Client Served Marquee */}
<div
  className="border-t border-primary-foreground/10 py-10 overflow-hidden"
  style={{
    background:
      "linear-gradient(135deg, hsl(43 74% 49%) 0%, hsl(43 74% 60%) 100%)",
  }}
>
  <div style={{ width: "100%", overflow: "hidden" }}>
    <div
      style={{
        display: "flex",
        width: "max-content",
        gap: clientMarqueeSettings.gap,
        animation: `marquee ${clientMarqueeSettings.speed}s linear infinite`,
        animationDirection:
          clientMarqueeSettings.direction === "right" ? "reverse" : "normal",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.animationPlayState = "paused")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.animationPlayState = "running")
      }
    >
      {[...clients, ...clients].map((client, index) => (
        <div
          key={index}
          onClick={() => setActiveClient(client)}
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            minWidth: clientMarqueeSettings.logoSize + 40,
          }}
        >
          <img
            src={client.logo}
            alt={client.name || "Client Logo"}
            style={{
              width: clientMarqueeSettings.logoSize,
              height: clientMarqueeSettings.logoSize,
              objectFit: "contain",
              opacity: 0.85,
              transition: "opacity 0.3s ease",
            }}
          />
          {client.name && (
            <span
              style={{
                marginTop: 6,
                fontSize: 12,
                opacity: 0.6,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {client.name}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
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
                  <Link to={link.path} className="body-regular text-primary-foreground/70 hover:text-gold-light transition">
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
                  <Link to={link.path} className="body-regular text-primary-foreground/70 hover:text-gold-light transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-gold-light">
              Contact
            </h4>

            <ul className="space-y-4">
              {/* Email */}
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a
                  href="mailto:info@hussainiitservices.com"
                  className="hover:text-gold-light"
                >
                  info@hussainiitservices.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <ul className="space-y-1">
                  <li>
                    <a href="tel:+917648839878" className="hover:text-gold-light">
                      +91 7024951915
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919156770832" className="hover:text-gold-light">
                      +91 9156770832
                    </a>
                  </li>
                </ul>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <a
                  href="https://maps.app.goo.gl/qJMvibnfPYVS2h2PA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light"
                >
                  Kamri marg, <br />
                  ujjain M.P 456006
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      



      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-section py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Hussaini IT Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-primary-foreground/50">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm text-primary-foreground/50">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeClient && (
        <div
          onClick={() => setActiveClient(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              padding: 24,
              borderRadius: 12,
              textAlign: "center",
              maxWidth: 320,
              width: "100%",
            }}
          >
            <img
              src={activeClient.logo}
              style={{ maxHeight: 140, margin: "0 auto 16px" }}
            />
            {activeClient.name && (
              <h3 style={{ color: "#d4af37" }}>{activeClient.name}</h3>
            )}
          </div>
        </div>
      )}

      <style>
  {`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}
</style>


    </footer>
  );
};