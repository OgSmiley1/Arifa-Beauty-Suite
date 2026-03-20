import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import product1 from "@assets/Screenshot_20260319-234309_TikTok_1773954622729.jpg";
import product2 from "@assets/Screenshot_20260319-234307_TikTok_1773954622753.jpg";
import product3 from "@assets/Screenshot_20260319-234303_TikTok_1773954622767.jpg";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Authentic Henna Paste",
    price: 35,
    category: "Henna Art",
    image: product1,
    rating: "5.0",
    reviews: 342
  },
  {
    id: 2,
    name: "Pigmentation Cream Mix",
    price: 65,
    category: "Skincare",
    image: product2,
    rating: "4.9",
    reviews: 521
  },
  {
    id: 3,
    name: "Natural Herbal Hair Oil",
    price: 45,
    category: "Hair Care",
    image: product3,
    rating: "5.0",
    reviews: 189
  }
];

const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Amina S.",
    location: "Dubai, UAE",
    comment: "I saw their TikToks and decided to try the pigmentation cream. The results are unbelievable! My skin has never looked clearer. Hamza's mixes are pure magic.",
  },
  {
    id: 2,
    name: "Fatima R.",
    location: "Abu Dhabi, UAE",
    comment: "Their henna paste gives the deepest, richest color I've ever seen. It lasted so long for my sister's wedding. Excellent customer service too!",
  },
  {
    id: 3,
    name: "Mariam K.",
    location: "Sharjah, UAE",
    comment: "The herbal hair oil has completely stopped my hair fall. It's so rare to find authentic, natural products like these in the UAE. Forever a loyal customer!",
  }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src={product2} 
            alt="Arifa Cosmetics UAE" 
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000 zoom-in-100 opacity-20 blur-sm mix-blend-multiply"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-10">
          <span className="text-foreground uppercase tracking-[0.3em] text-sm mb-6 font-medium animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150 fill-mode-both border-b border-foreground/30 pb-2">
            UAE Licensed Seller
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight animate-in slide-in-from-bottom-6 fade-in duration-700 delay-300 fill-mode-both">
            Discover the Secret to Flawless Skin, Loved by Thousands on TikTok
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500 fill-mode-both">
            Experience our premium selection of authentic henna, custom skincare mixes, and natural hair care products. 
          </p>
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700 delay-700 fill-mode-both flex gap-4 flex-col sm:flex-row">
            <Link href="/shop">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto">
                Shop The Collection
              </Button>
            </Link>
            <Link href="/results">
              <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
                See TikTok Results
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Trending on TikTok</h2>
            <div className="h-px w-24 bg-foreground/20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 border border-border/50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 h-14 text-xs tracking-widest uppercase">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-foreground/60 uppercase tracking-widest mb-2 font-medium">{product.category}</p>
                    <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-foreground/70 transition-colors">{product.name}</h3>
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <div className="flex text-amber-600 text-sm">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-xs text-foreground/60">({product.reviews})</span>
                    </div>
                    <p className="text-foreground font-medium">{product.price} AED</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/shop">
              <span className="inline-block border-b border-foreground text-sm tracking-widest uppercase text-foreground hover:text-foreground/70 transition-colors cursor-pointer pb-1">
                View All Products
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">What Our Customers Say</h2>
            <div className="h-px w-24 bg-foreground/20 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {CUSTOMER_REVIEWS.map((review) => (
              <div key={review.id} className="bg-background p-10 border border-border flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center text-amber-600 text-lg mb-6">
                  {"★".repeat(5)}
                </div>
                <p className="font-serif text-lg leading-relaxed text-foreground mb-8 flex-grow">
                  "{review.comment}"
                </p>
                <div>
                  <p className="font-medium text-sm tracking-wide uppercase">{review.name}</p>
                  <p className="text-xs text-foreground/60 mt-1">{review.location}</p>
                  <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center justify-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Verified Buyer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values / Social Proof */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-xl mb-4 text-foreground">Premium Quality</h3>
              <div className="w-12 h-px bg-foreground/30 mb-4"></div>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                Sourced from the finest natural ingredients to ensure authentic, lasting results for our clients.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-xl mb-4 text-foreground">UAE Licensed</h3>
              <div className="w-12 h-px bg-foreground/30 mb-4"></div>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                Fully registered and licensed seller in the UAE, guaranteeing safety and authenticity in every product.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-xl mb-4 text-foreground">Trusted Community</h3>
              <div className="w-12 h-px bg-foreground/30 mb-4"></div>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                Join our 40K+ followers on TikTok and our growing community of highly satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}