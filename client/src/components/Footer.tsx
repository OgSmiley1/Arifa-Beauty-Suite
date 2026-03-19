import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-widest">ARIFA</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Luxury skincare crafted with botanical ingredients for radiant, healthy skin.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">All Products</span></Link></li>
              <li><Link href="/shop?category=skincare"><span className="hover:text-primary transition-colors cursor-pointer">Skincare</span></Link></li>
              <li><Link href="/shop?category=body"><span className="hover:text-primary transition-colors cursor-pointer">Body Care</span></Link></li>
              <li><Link href="/shop?category=sets"><span className="hover:text-primary transition-colors cursor-pointer">Gift Sets</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-wider">About</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">Our Story</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span></Link></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Ingredients</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Sustainability</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 tracking-wider">Newsletter</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-b border-background/30 px-0 py-2 text-sm focus:outline-none focus:border-background flex-grow transition-colors"
              />
              <button type="submit" className="border-b border-background/30 py-2 px-4 text-sm font-medium hover:text-primary hover:border-primary transition-colors uppercase tracking-wider">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} Arifa Cosmetics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-background cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-background cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}