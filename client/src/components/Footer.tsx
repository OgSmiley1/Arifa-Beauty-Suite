import { useState } from "react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      setSubscribed(true);
      setEmail("");
    } catch {
      // silently handle
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="space-y-6 md:col-span-1">
            <h3 className="font-serif text-3xl tracking-[0.15em]">ARIFA</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs font-light">
              Authentic beauty, premium henna, and custom skincare crafted with care in the UAE. Trusted by thousands.
            </p>
            <div className="pt-2 space-y-1">
              <p className="text-xs text-background/50 tracking-widest uppercase mb-2">Contact</p>
              <p className="text-sm text-background/80">WhatsApp: +971 52 365 2588</p>
              <p className="text-sm text-background/80">Call: 0561121834</p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.tiktok.com/@arifa.cosmetics" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
              <a href="https://wa.me/971523652588" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:contact@arifacosmetics.ae" className="text-background/50 hover:text-background transition-colors" aria-label="Email">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Shop</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link href="/shop"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">All Products</span></Link></li>
              <li><Link href="/shop?category=Henna Art"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Henna Art</span></Link></li>
              <li><Link href="/shop?category=Skincare"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Skincare Mixes</span></Link></li>
              <li><Link href="/shop?category=Hair Care"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Hair Care</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Information</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link href="/about"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Our Story</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Contact Us</span></Link></li>
              <li><Link href="/results"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Real Results</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">FAQ</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Newsletter</h4>
            <p className="text-background/70 text-sm mb-6 font-light">
              Subscribe to receive updates, access to exclusive deals, and new arrivals.
            </p>
            {subscribed ? (
              <p className="text-sm text-background/80 font-light">Thank you for subscribing!</p>
            ) : (
              <form className="flex flex-col space-y-4" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="bg-transparent border-b border-background/30 px-0 py-2 text-sm focus:outline-none focus:border-background transition-colors font-light placeholder:text-background/30"
                  required
                />
                <button type="submit" className="self-start text-xs tracking-[0.2em] uppercase border-b border-background hover:text-background/70 hover:border-background/70 transition-colors pb-1">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-background/40">
          <p>&copy; {new Date().getFullYear()} Arifa Cosmetics. UAE Licensed Seller. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-background/80 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-background/80 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
