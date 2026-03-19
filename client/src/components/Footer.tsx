import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="space-y-6 md:col-span-1">
            <h3 className="font-serif text-3xl tracking-widest">ARIFA</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs font-light">
              Authentic beauty, premium henna, and custom skincare crafted with care in the UAE.
            </p>
            <div className="pt-2">
              <p className="text-xs text-background/50 tracking-widest uppercase mb-1">Contact</p>
              <p className="text-sm text-background/80">WhatsApp: +971 52 365 2588</p>
              <p className="text-sm text-background/80">Call: 0561121834</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Shop</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link href="/shop"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">All Products</span></Link></li>
              <li><Link href="/shop?category=henna"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Henna Art</span></Link></li>
              <li><Link href="/shop?category=skincare"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Skincare Mixes</span></Link></li>
              <li><Link href="/shop?category=creams"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Face & Body</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Information</h4>
            <ul className="space-y-4 text-sm text-background/80 font-light">
              <li><Link href="/about"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Our Story</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Contact Us</span></Link></li>
              <li><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">Shipping & Returns</span></Link></li>
              <li><span className="hover:text-background transition-colors cursor-pointer border-b border-transparent hover:border-background/30 pb-0.5">FAQ</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50">Newsletter</h4>
            <p className="text-background/70 text-sm mb-6 font-light">
              Subscribe to receive updates, access to exclusive deals, and new arrivals.
            </p>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-background/30 px-0 py-2 text-sm focus:outline-none focus:border-background transition-colors font-light placeholder:text-background/30"
              />
              <button type="submit" className="self-start text-xs tracking-[0.2em] uppercase border-b border-background hover:text-background/70 hover:border-background/70 transition-colors pb-1">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-background/40">
          <p>&copy; {new Date().getFullYear()} Arifa Cosmetics. UAE Licensed Seller.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-background/80 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-background/80 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}