import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CUSTOMER_REVIEWS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Results() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Community</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Real Results from the Arifa Community</h1>
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-8"></div>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Don't just take our word for it. Explore the authentic feedback from our thousands of satisfied customers across the UAE.
          </p>
        </div>
      </section>

      {/* As Seen On TikTok Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Social Proof</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">As Seen on TikTok</h2>
            <p className="text-foreground/60 font-light">Join our community of over 40,000 followers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Viral Pigmentation Results", views: "2.4M Views", likes: "150K Likes" },
              { title: "Henna Art Showcase", views: "1.8M Views", likes: "98K Likes" },
              { title: "Hair Oil Transformation", views: "950K Views", likes: "72K Likes" },
            ].map((video, idx) => (
              <div key={idx} className="bg-background border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[9/16] bg-secondary/50 flex flex-col items-center justify-center text-center p-6">
                  <svg className="w-12 h-12 mx-auto mb-4 text-foreground/30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                  <p className="font-serif text-lg mb-2">{video.title}</p>
                  <p className="text-xs text-foreground/50 mb-6">{video.views} &bull; {video.likes}</p>
                  <a href="https://www.tiktok.com/@arifa.cosmetics" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground rounded-none text-xs uppercase tracking-widest w-full transition-all">
                      Watch on TikTok
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Verified Reviews</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Customer Testimonials</h2>
            <div className="h-px w-16 bg-foreground/20 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CUSTOMER_REVIEWS.map((review) => (
              <div key={review.id} className="bg-secondary/30 p-8 border border-border/30 flex flex-col h-full hover:shadow-md transition-all duration-300">
                <div className="flex text-amber-600 text-sm mb-4">
                  {"★".repeat(review.rating)}
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-foreground/90 flex-grow mb-6">
                  "{review.comment}"
                </p>
                <div className="pt-4 border-t border-border/30">
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-foreground/50 mt-0.5">{review.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-foreground/40 italic">on {review.product}</p>
                    <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Verified
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/shop">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300 group">
                Shop The Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
