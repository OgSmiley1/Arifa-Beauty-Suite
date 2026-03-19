import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/">
              <span className="font-serif text-2xl tracking-widest cursor-pointer">
                ARIFA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  className={`text-sm tracking-widest uppercase cursor-pointer hover:text-primary transition-colors ${
                    location === link.path
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 absolute right-4 md:static">
            <button className="text-foreground hover:text-primary transition-colors hidden md:block">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/admin">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                <User className="h-5 w-5" />
              </span>
            </Link>
            <button className="text-foreground hover:text-primary transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border/50 animate-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base tracking-wider uppercase cursor-pointer ${
                    location === link.path
                      ? "text-primary font-medium"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}