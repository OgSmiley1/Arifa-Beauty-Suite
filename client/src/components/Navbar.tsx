import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Results", path: "/results" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/">
              <span className="font-serif text-3xl tracking-widest cursor-pointer text-foreground">
                ARIFA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  className={`text-xs tracking-[0.2em] uppercase cursor-pointer hover:text-foreground transition-colors ${
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
            <button className="text-foreground hover:text-foreground/70 transition-colors hidden md:block">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link href="/admin">
              <span className="text-foreground hover:text-foreground/70 transition-colors cursor-pointer hidden md:block">
                <User className="h-5 w-5" strokeWidth={1.5} />
              </span>
            </Link>
            <button className="text-foreground hover:text-foreground/70 transition-colors relative">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[9px] w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <span
                  onClick={() => setIsOpen(false)}
                  className={`block text-center text-sm tracking-[0.2em] uppercase cursor-pointer ${
                    location === link.path
                      ? "text-foreground font-medium"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="pt-6 border-t border-border flex justify-center space-x-8">
              <Link href="/admin">
                <span className="text-xs tracking-widest uppercase text-foreground/60 hover:text-foreground cursor-pointer" onClick={() => setIsOpen(false)}>
                  Admin Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}