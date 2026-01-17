import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const showDarkNav = isScrolled || !isHomePage;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-elegant-sm">
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo – FULL REFRESH ON CLICK */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/Logo.png"
              alt="Hussaini IT Logo"
              className="
                h-36
                w-auto
                transition-all duration-300
                opacity-100
              "
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
  variant="nav"
  size="sm"
  className={`relative text-[15px] font-medium ${
    location.pathname === item.path ? "text-accent" : ""
  }`}
>

                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
<div className="hidden md:block">
  <Link to="/contact">
    <Button
      variant="gold"
      size="lg"
      className="px-3 py-1 text-base"
    >
      Get Started
    </Button>
  </Link>
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container-section py-6 flex flex-col gap-2 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location.pathname === item.path ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="gold" className="w-full mt-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
