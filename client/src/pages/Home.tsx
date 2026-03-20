import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PRODUCTS, CUSTOMER_REVIEWS } from "@/lib/data";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

const FEATURED_PRODUCTS = PRODUCTS.slice(0, 3);

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src={FEATURED_PRODUCTS[1].image}
            alt="Arifa Cosmetics UAE"
            className="w-full h-full object-cover object-center opacity-15 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-foreground/70 uppercase tracking-[0.3em] text-xs mb-8 font-medium border border-foreground/20 px-6 py-2">
            UAE Licensed Seller
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-8 leading-[1.1]">
            Discover the Secret to <em className="italic">Flawless</em> Skin
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium henna, custom skincare mixes, and natural hair care — loved by thousands on TikTok.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link href="/shop">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto group">
                Shop The Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/results">
              <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
                See Real Results
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground/30">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-3">Scroll</span>
          <div className="w-px h-8 bg-foreground/20 animate-pulse"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center mb-20 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4">Featured</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Trending on TikTok</h2>
            <div className="h-px w-24 bg-foreground/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 border border-border/50">
                    {product.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-foreground text-background text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 h-14 text-xs tracking-widest uppercase">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-foreground/50 uppercase tracking-widest mb-2 font-medium">{product.category}</p>
                    <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-foreground/70 transition-colors">{product.name}</h3>
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <div className="flex text-amber-600 text-sm">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-xs text-foreground/50">({product.reviews})</span>
                    </div>
                    <p className="text-foreground font-medium tracking-wide">{product.price} AED</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/shop">
              <span className="inline-flex items-center gap-2 border-b border-foreground text-sm tracking-widest uppercase text-foreground hover:text-foreground/70 hover:border-foreground/70 transition-colors cursor-pointer pb-1 group">
                View All Products
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">What Our Customers Say</h2>
            <div className="h-px w-24 bg-foreground/20 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CUSTOMER_REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-background p-10 border border-border/50 flex flex-col h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="flex justify-center text-amber-600 text-lg mb-6">
                  {"★".repeat(review.rating)}
                </div>
                <p className="font-serif text-lg leading-relaxed text-foreground/90 mb-8 flex-grow italic">
                  "{review.comment}"
                </p>
                <div className="text-center">
                  <p className="font-medium text-sm tracking-wide uppercase">{review.name}</p>
                  <p className="text-xs text-foreground/50 mt-1">{review.location}</p>
                  <p className="text-xs text-foreground/50 mt-1 italic">on {review.product}</p>
                  <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center justify-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Verified Buyer
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/results">
              <span className="inline-flex items-center gap-2 border-b border-foreground text-sm tracking-widest uppercase text-foreground hover:text-foreground/70 hover:border-foreground/70 transition-colors cursor-pointer pb-1 group">
                See All Results
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-28 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 border border-foreground/20 flex items-center justify-center mb-6 group-hover:border-foreground/40 transition-colors">
                <Shield className="h-7 w-7 text-foreground/60" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 text-foreground">Premium Quality</h3>
              <div className="w-12 h-px bg-foreground/20 mb-4"></div>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs font-light">
                Sourced from the finest natural ingredients to ensure authentic, lasting results for every customer.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 border border-foreground/20 flex items-center justify-center mb-6 group-hover:border-foreground/40 transition-colors">
                <Award className="h-7 w-7 text-foreground/60" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 text-foreground">UAE Licensed</h3>
              <div className="w-12 h-px bg-foreground/20 mb-4"></div>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs font-light">
                Fully registered and licensed seller in the UAE, guaranteeing safety and authenticity in every product.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 border border-foreground/20 flex items-center justify-center mb-6 group-hover:border-foreground/40 transition-colors">
                <Users className="h-7 w-7 text-foreground/60" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 text-foreground">Trusted Community</h3>
              <div className="w-12 h-px bg-foreground/20 mb-4"></div>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs font-light">
                Join our 40K+ followers on TikTok and thousands of satisfied customers across the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Ready to Transform Your Skin?</h2>
          <p className="text-background/70 text-lg font-light mb-10 leading-relaxed">
            Join thousands of satisfied customers who discovered the power of authentic, natural beauty products.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/shop">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300">
                Shop Now
              </Button>
            </Link>
            <a href="https://wa.me/971523652588" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 hover:border-background rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
