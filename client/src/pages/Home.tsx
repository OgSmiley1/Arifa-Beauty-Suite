import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Radiance Vitamin C Serum",
    price: 85,
    category: "Skincare",
    image: "/src/assets/images/product-serum.jpg",
  },
  {
    id: 2,
    name: "Hydrating Body Lotion",
    price: 45,
    category: "Body Care",
    image: "/src/assets/images/product-lotion.jpg",
  }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero1.jpg" 
            alt="Luxury cosmetics" 
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000 zoom-in-100"
          />
          <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-background uppercase tracking-[0.3em] text-sm mb-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150 fill-mode-both">
            New Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-background mb-6 leading-tight animate-in slide-in-from-bottom-6 fade-in duration-700 delay-300 fill-mode-both drop-shadow-lg">
            Embrace Your<br />Natural Radiance
          </h1>
          <p className="text-background/90 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500 fill-mode-both">
            Discover our new line of botanical skincare designed to nourish, protect, and illuminate.
          </p>
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700 delay-700 fill-mode-both">
            <Link href="/shop">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 h-14 text-sm tracking-widest uppercase transition-all duration-300">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Discover Our Lines</h2>
            <div className="h-px w-16 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="group cursor-pointer overflow-hidden relative h-[500px]">
              <img 
                src="/src/assets/images/product-serum.jpg" 
                alt="Skincare" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-serif text-background mb-2">Skincare</h3>
                <span className="text-background text-sm tracking-widest uppercase flex items-center border-b border-transparent group-hover:border-background transition-all w-max pb-1">
                  Explore <span className="ml-2">→</span>
                </span>
              </div>
            </div>
            
            <div className="group cursor-pointer overflow-hidden relative h-[500px]">
              <img 
                src="/src/assets/images/product-lotion.jpg" 
                alt="Body Care" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-serif text-background mb-2">Body Care</h3>
                <span className="text-background text-sm tracking-widest uppercase flex items-center border-b border-transparent group-hover:border-background transition-all w-max pb-1">
                  Explore <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Trending Now</h2>
              <div className="h-px w-16 bg-primary"></div>
            </div>
            <Link href="/shop">
              <span className="text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors cursor-pointer mt-6 md:mt-0 flex items-center">
                View All <span className="ml-2">→</span>
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button className="w-full rounded-none bg-background text-foreground hover:bg-primary hover:text-primary-foreground h-12 text-xs tracking-widest uppercase">
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{product.category}</p>
                    <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-foreground font-medium">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl text-primary font-serif">1</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Cruelty Free</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We never test on animals. Our products are 100% cruelty-free and ethically sourced.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl text-primary font-serif">2</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Natural Ingredients</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Formulated with the highest quality botanical extracts and natural elements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl text-primary font-serif">3</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Sustainable Packaging</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Our materials are recyclable, minimizing our footprint on the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}