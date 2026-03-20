import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useSearch } from "wouter";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function Shop() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCategory = params.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="pt-8 pb-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Collection</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Our Products</h1>
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-10"></div>
          <div className="flex flex-wrap justify-center gap-6 text-sm tracking-widest uppercase">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-1 transition-colors duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "text-foreground font-medium border-b border-foreground"
                    : "text-foreground/50 hover:text-foreground border-b border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/50 font-light text-lg">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredProducts.map((product) => (
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
                        <Button className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 h-12 text-xs tracking-widest uppercase">
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
          )}
        </div>
      </section>
    </Layout>
  );
}
