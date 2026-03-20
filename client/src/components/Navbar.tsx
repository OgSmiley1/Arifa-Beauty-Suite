import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "@/lib/cart";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Results", path: "/results" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-background/98 backdrop-blur-md shadow-sm border-b border-border/50"
        : "bg-background/90 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-foreground/70 transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/">
              <span className="font-serif text-3xl tracking-[0.15em] cursor-pointer text-foreground hover:text-foreground/80 transition-colors">
                ARIFA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  className={`text-xs tracking-[0.2em] uppercase cursor-pointer hover:text-foreground transition-colors duration-300 ${
                    location === link.path
                      ? "text-foreground font-medium border-b border-foreground pb-1"
                      : "text-foreground/60"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 absolute right-4 md:static">
            <button className="text-foreground/60 hover:text-foreground transition-colors hidden md:block" aria-label="Search">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link href="/admin">
              <span className="text-foreground/60 hover:text-foreground transition-colors cursor-pointer hidden md:block" aria-label="Admin">
                <User className="h-5 w-5" strokeWidth={1.5} />
              </span>
            </Link>
            <button className="text-foreground/60 hover:text-foreground transition-colors relative" aria-label="Shopping bag">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[9px] w-4 h-4 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-background border-b border-border px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span
                className={`block text-center py-3 text-sm tracking-[0.2em] uppercase cursor-pointer transition-colors ${
                  location === link.path
                    ? "text-foreground font-medium"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex justify-center space-x-8">
            <Link href="/admin">
              <span className="text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground cursor-pointer transition-colors">
                Admin Portal
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
