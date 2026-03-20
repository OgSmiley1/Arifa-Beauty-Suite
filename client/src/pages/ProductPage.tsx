import { useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PRODUCTS, CUSTOMER_REVIEWS, FAQ_ITEMS } from "@/lib/data";
import { ArrowLeft, Heart, Truck, Shield, Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const INGREDIENTS = [
  { title: "Pure Saffron Extract", desc: "Sourced from the finest fields, saffron naturally brightens and evens skin tone while providing powerful antioxidants." },
  { title: "Organic Aloe Vera", desc: "Deeply hydrates and soothes irritated skin, providing a calming base that allows active ingredients to penetrate effectively." },
  { title: "Vitamin C Complex", desc: "A stable, potent form of Vitamin C that actively targets dark spots and hyperpigmentation for visible radiance." },
];

function FAQAccordion({ items }: { items: typeof FAQ_ITEMS }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index} className="border-b border-border/50">
            <button
              className="w-full flex justify-between items-center text-left py-5 focus:outline-none group"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="font-serif text-lg tracking-wide group-hover:text-foreground/70 transition-colors">{item.question}</span>
              <motion.span
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xl font-light ml-4 flex-shrink-0"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-foreground/70 font-light leading-relaxed pb-5 pr-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const productId = parseInt(params.id || "1", 10);
  const product = PRODUCTS.find((p) => p.id === productId);
  const [activeIngredient, setActiveIngredient] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
          <p className="text-foreground/60 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/shop">
            <Button className="bg-foreground text-background rounded-none px-8 h-12 text-xs tracking-widest uppercase">
              Back to Shop
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedReviews = CUSTOMER_REVIEWS.filter((r) => r.product === product.name).slice(0, 2);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <motion.div
        className="min-h-screen pt-8 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <Link href="/shop">
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors cursor-pointer">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Shop
            </span>
          </Link>
        </div>

        {/* Product Hero */}
        <section className="container mx-auto px-4 md:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div className="relative aspect-[4/5] bg-secondary overflow-hidden" variants={itemVariants}>
              {product.badge && (
                <span className="absolute top-6 left-6 z-10 bg-foreground text-background text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <motion.div className="flex flex-col justify-center space-y-8 lg:sticky lg:top-32" variants={itemVariants}>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3 block">{product.category}</span>
                <h1 className="font-serif text-4xl md:text-5xl leading-tight text-foreground mb-4">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-600 text-sm">{"★".repeat(5)}</div>
                  <span className="text-xs text-foreground/50">({product.reviews} reviews)</span>
                </div>
                <p className="text-2xl font-light text-foreground">{product.price} AED</p>
              </div>

              <div className="h-px w-24 bg-foreground/20"></div>

              <p className="text-foreground/70 font-light leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300 flex-1">
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground rounded-none h-14 px-6 transition-all duration-300">
                  <Heart className="h-5 w-5" strokeWidth={1.5} />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">Fast Delivery</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2 border-x border-border/50">
                  <Shield className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">UAE Licensed</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Award className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">100% Authentic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="bg-secondary/50 py-32 mb-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-24">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">The Formulation</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">Purity in Every Drop</h2>
              <div className="h-px w-24 bg-foreground/20 mx-auto mt-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {INGREDIENTS.map((ing, idx) => (
                  <motion.div
                    key={idx}
                    className={`cursor-pointer transition-all duration-500 pl-8 border-l-2 ${
                      activeIngredient === idx
                        ? "border-foreground opacity-100"
                        : "border-border opacity-40 hover:opacity-70"
                    }`}
                    onClick={() => setActiveIngredient(idx)}
                    whileHover={{ x: 8 }}
                  >
                    <h3 className="text-2xl font-serif mb-3">{ing.title}</h3>
                    <p className="font-light leading-relaxed text-foreground/80">{ing.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="relative aspect-square bg-background overflow-hidden flex items-center justify-center border border-border/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIngredient}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-foreground/5 flex items-center justify-center"
                  >
                    <span className="font-serif text-[12rem] text-foreground/5 select-none leading-none">
                      {String(activeIngredient + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </AnimatePresence>
                <img
                  src={product.image}
                  alt="Product Formulation"
                  className="relative z-10 w-2/3 h-2/3 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews for this product */}
        {relatedReviews.length > 0 && (
          <motion.section className="container mx-auto px-4 md:px-8 mb-32" variants={containerVariants}>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Community</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">What Customers Say</h2>
              <div className="h-px w-24 bg-foreground/20 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedReviews.map((review) => (
                <div key={review.id} className="bg-secondary/50 p-8 border border-border/30">
                  <div className="flex text-amber-600 text-sm mb-4">{"★".repeat(review.rating)}</div>
                  <p className="font-serif italic text-lg leading-relaxed text-foreground/90 mb-6">
                    "{review.comment}"
                  </p>
                  <div>
                    <p className="font-medium text-sm">{review.name}</p>
                    <p className="text-xs text-foreground/50">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* FAQ */}
        <motion.section className="bg-background border-t border-border/50 py-24 mb-24" variants={containerVariants}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Support</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </motion.section>

        {/* Related Products */}
        <section className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">You May Also Like</span>
            <h2 className="text-3xl font-serif text-foreground">Related Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-6 border border-border/50">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-foreground/50 uppercase tracking-widest mb-1">{p.category}</p>
                    <h3 className="text-base font-serif text-foreground mb-1 group-hover:text-foreground/70 transition-colors">{p.name}</h3>
                    <p className="text-foreground font-medium">{p.price} AED</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
