import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

import product1 from "@assets/Screenshot_20260319-234309_TikTok_1773954622729.jpg";
import product2 from "@assets/Screenshot_20260319-234307_TikTok_1773954622753.jpg";
import product3 from "@assets/Screenshot_20260319-234303_TikTok_1773954622767.jpg";
import product4 from "@assets/Screenshot_20260319-234314_TikTok_1773954622743.jpg";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Authentic Henna Paste",
    price: 35,
    category: "Henna Art",
    image: product1,
  },
  {
    id: 2,
    name: "Pigmentation Cream Mix",
    price: 65,
    category: "Skincare",
    image: product2,
  },
  {
    id: 3,
    name: "Natural Herbal Hair Oil",
    price: 45,
    category: "Hair Care",
    image: product3,
  },
  {
    id: 4,
    name: "Luxury Skincare Bundle",
    price: 150,
    category: "Sets",
    image: product4,
  }
];

export default function Shop() {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Our Collection</h1>
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-6 text-sm tracking-widest uppercase text-foreground/60">
            <span className="text-foreground font-medium border-b border-foreground pb-1 cursor-pointer">All</span>
            <span className="hover:text-foreground cursor-pointer transition-colors pb-1">Henna Art</span>
            <span className="hover:text-foreground cursor-pointer transition-colors pb-1">Skincare</span>
            <span className="hover:text-foreground cursor-pointer transition-colors pb-1">Hair Care</span>
            <span className="hover:text-foreground cursor-pointer transition-colors pb-1">Sets</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {ALL_PRODUCTS.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 border border-border/50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 h-12 text-xs tracking-widest uppercase">
                      Quick Add
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
                  </div>
                  <p className="text-foreground font-medium">{product.price} AED</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}