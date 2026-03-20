import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PRODUCTS } from "@/lib/data";
import { Shield, Award, Leaf, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-8 pb-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <span className="text-foreground/50 uppercase tracking-[0.3em] text-xs mb-6 block font-medium">
            Our Story
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-foreground mb-8 leading-[1.1]">
            Tradition Meets <em className="italic">Elegance</em>
          </h1>
          <div className="h-px w-24 bg-foreground/20 mx-auto"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] bg-secondary overflow-hidden border border-border/50">
              <img
                src={PRODUCTS[0].image}
                alt="Arifa Cosmetics Story"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">The Beginning</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">A Passion for Authentic Beauty</h2>
              </div>
              <p className="text-lg font-light leading-relaxed text-foreground/70">
                Arifa Cosmetics was born from a deep passion for authentic beauty traditions. Based in the UAE, we specialize in high-quality, natural cosmetics that honor the rich heritage of our region while embracing the best of modern skincare science.
              </p>
              <p className="text-lg font-light leading-relaxed text-foreground/70">
                Every product in our collection is carefully crafted using time-tested formulas passed down through generations, enhanced with the finest natural ingredients available today. From our signature pure henna paste to our custom-formulated skincare mixes, quality and authenticity are at the heart of everything we do.
              </p>
              <div className="h-px w-24 bg-foreground/20"></div>
              <p className="text-lg font-light leading-relaxed text-foreground/70">
                As a licensed UAE seller, we take immense pride in our rigorous quality standards. Our growing community of over 40,000 TikTok followers and thousands of satisfied customers is a testament to the effectiveness of our products and the trust we've built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Natural Ingredients", desc: "We source only the finest natural ingredients, ensuring every product is pure, safe, and effective." },
              { icon: Shield, title: "UAE Licensed", desc: "Fully registered and licensed, adhering to the highest safety and quality standards in the UAE." },
              { icon: Heart, title: "Community First", desc: "Our customers are family. We listen, adapt, and continuously improve based on real feedback." },
              { icon: Award, title: "Proven Results", desc: "Thousands of verified transformations shared by our community on TikTok and beyond." },
            ].map((value, idx) => (
              <div key={idx} className="bg-background p-8 border border-border/30 text-center hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-6 w-6 text-foreground/60" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg mb-3">{value.title}</h3>
                <p className="text-foreground/60 text-sm font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Experience the Difference</h2>
          <p className="text-foreground/60 text-lg font-light mb-10 leading-relaxed">
            Discover why thousands trust Arifa Cosmetics for their beauty needs.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/shop">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300">
                Discover Our Products
              </Button>
            </Link>
            <Link href="/results">
              <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground rounded-none px-12 h-14 text-xs tracking-[0.2em] uppercase transition-all duration-300">
                See Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
