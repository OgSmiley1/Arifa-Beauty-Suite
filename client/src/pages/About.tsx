import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/contact-bg.jpg" 
            alt="About Arifa Cosmetics" 
            className="w-full h-full object-cover object-center opacity-60"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-foreground uppercase tracking-[0.3em] text-sm mb-6 font-medium animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150 fill-mode-both border-b border-foreground/30 pb-2">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight animate-in slide-in-from-bottom-6 fade-in duration-700 delay-300 fill-mode-both">
            Tradition Meets Elegance
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-8">
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80">
            Arifa Cosmetics was founded with a passion for authentic beauty traditions. Based in the UAE, we specialize in high-quality, natural cosmetics that honor the heritage of our region while embracing modern skincare science.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80">
            As a licensed UAE seller, we take pride in our rigorous quality standards. From our signature pure henna paste to our custom-formulated skincare mixes, every product is crafted with care to ensure the best possible experience for our clients.
          </p>
          <div className="pt-8">
             <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300">
               Discover Our Products
             </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}