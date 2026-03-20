// Filename: src/pages/ProductPage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

import product1 from "@assets/Screenshot_20260319-234309_TikTok_1773954622729.jpg";

// --- MOCK DATA ---
const product = {
  id: 'prod_01',
  name: 'Radiant Glow Pigmentation Cream',
  price: '150 AED',
  description:
    'A luxurious, fast-absorbing cream formulated with a blend of ancient herbal extracts and modern science. Designed to target hyperpigmentation and uneven skin tone, revealing a brighter, more radiant complexion. UAE Licensed and suitable for most skin types.',
  mainImage: product1,
  tiktokVideoUrl: 'https://www.tiktok.com/@arifa.cosmetics/video/7312345678901234567',
  results: [
    {
      id: 'res_01',
      beforeImage: 'https://images.unsplash.com/photo-1590518335031-15582f6e5229?q=80&w=400&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1615397323631-50e50337c768?q=80&w=400&auto=format&fit=crop',
      customerQuote: '"This is the only thing that has ever worked on my dark spots. I saw a difference in just 3 weeks!"',
    },
    {
      id: 'res_02',
      beforeImage: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=400&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&auto=format&fit=crop',
      customerQuote: '"My skin feels so smooth and looks so much brighter. I finally feel confident without makeup."',
    },
  ],
  faq: [
    {
      question: 'How long until I see results?',
      answer: 'While many users report seeing a difference within 2-3 weeks, consistent use for at least 30-45 days is recommended for significant results.',
    },
    {
      question: 'Is it suitable for sensitive skin?',
      answer: 'Our cream is formulated with natural ingredients. However, we always recommend performing a patch test on a small area of skin 24 hours before full application.',
    },
    {
      question: 'Is this product officially licensed?',
      answer: 'Yes. All Arifa Cosmetics products are fully licensed and approved within the UAE, adhering to the highest safety and quality standards.',
    },
  ],
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// --- FAQ ACCORDION COMPONENT ---
const FAQAccordion = ({ faq }: { faq: typeof product.faq }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faq.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div 
            key={index} 
            className="border-b border-border/50 pb-4"
            variants={itemVariants}
          >
            <button
              className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="font-serif text-lg tracking-wide">{item.question}</span>
              <motion.span 
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xl font-light ml-4"
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
                  <p className="text-foreground/70 font-light leading-relaxed pb-4 pr-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function ProductPage() {
  const [activeIngredient, setActiveIngredient] = useState(0);

  // A simple component to embed a TikTok video mock.
  const TikTokEmbed = ({ url }: { url: string }) => (
    <div className="aspect-[9/16] bg-secondary border border-border/50 relative overflow-hidden flex items-center justify-center group cursor-pointer h-[500px]">
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
      <div className="text-center z-10 p-6">
        <svg className="w-12 h-12 mx-auto mb-4 text-foreground opacity-80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
        </svg>
        <p className="font-serif text-lg tracking-wide mb-2">Watch Real Results</p>
        <span className="text-xs uppercase tracking-[0.2em] border-b border-foreground/30 pb-1">Play Video</span>
      </div>
    </div>
  );

  return (
    <Layout>
      <motion.div
        className="min-h-screen pt-32 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === SECTION 1: THE LUXURY VIEW === */}
        <section className="container mx-auto px-4 md:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div className="relative aspect-[4/5] bg-secondary p-8" variants={itemVariants}>
              <img 
                src={product.mainImage} 
                alt={product.name} 
                className="w-full h-full object-cover shadow-2xl" 
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-background border border-border flex flex-col items-center justify-center rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}>
                 <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
                    <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    <text className="text-[10px] uppercase tracking-[0.2em] fill-foreground font-medium">
                      <textPath href="#curve"> • Licensed in UAE • 100% Authentic </textPath>
                    </text>
                  </svg>
                  <span className="font-serif text-2xl">A</span>
              </div>
            </motion.div>
            
            <motion.div className="flex flex-col justify-center space-y-8" variants={itemVariants}>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Arifa Signature</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4">{product.name}</h1>
                <p className="text-2xl font-light text-foreground">{product.price}</p>
              </div>
              
              <div className="h-px w-24 bg-foreground/20"></div>
              
              <p className="text-foreground/80 font-light leading-relaxed text-lg">
                {product.description}
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300 flex-1">
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  Wishlist
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-8">
                <div className="text-center">
                  <p className="font-serif text-lg mb-1">Authentic</p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">Ingredients</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="font-serif text-lg mb-1">UAE</p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">Licensed</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-lg mb-1">Fast</p>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50">Delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* === SECTION 2: SCROLLYTELLING INGREDIENTS === */}
        <section className="bg-secondary py-32 mb-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-24">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">The Formulation</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">Purity in Every Drop</h2>
              <div className="h-px w-24 bg-foreground/20 mx-auto mt-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Interactive Left Side */}
              <div className="space-y-12">
                {[
                  { title: "Pure Saffron Extract", desc: "Sourced directly from the finest fields, saffron naturally brightens and evens skin tone while providing powerful antioxidants." },
                  { title: "Organic Aloe Vera", desc: "Deeply hydrates and soothes irritated skin, providing a calming base that allows active ingredients to penetrate without redness." },
                  { title: "Vitamin C Complex", desc: "A stable, potent form of Vitamin C that actively targets dark spots and hyperpigmentation for visible radiance." }
                ].map((ing, idx) => (
                  <motion.div 
                    key={idx}
                    className={`cursor-pointer transition-all duration-500 pl-8 border-l-2 ${activeIngredient === idx ? 'border-foreground opacity-100' : 'border-border opacity-40 hover:opacity-70'}`}
                    onClick={() => setActiveIngredient(idx)}
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="text-2xl font-serif mb-3">{ing.title}</h3>
                    <p className="font-light leading-relaxed text-foreground/80">{ing.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Dynamic Image Right Side */}
              <div className="relative aspect-square bg-background p-8 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIngredient}
                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-foreground/5"
                  >
                    {/* Placeholder dynamic background based on active ingredient */}
                    <div className="w-full h-full flex items-center justify-center font-serif text-9xl text-foreground/10 select-none">
                      {activeIngredient === 0 ? "01" : activeIngredient === 1 ? "02" : "03"}
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <img 
                  src={product.mainImage} 
                  alt="Product Formulation" 
                  className="relative z-10 w-2/3 h-2/3 object-cover shadow-2xl mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 3: THE REAL RESULTS VIEW === */}
        <motion.section className="container mx-auto px-4 md:px-8 mb-32" variants={containerVariants}>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Real Transformations</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">The Proof is in the Progress</h2>
            <div className="h-px w-24 bg-foreground/20 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.results.map((result) => (
              <motion.div key={result.id} className="bg-secondary p-6 group" variants={itemVariants}>
                <div className="flex relative aspect-video mb-6 overflow-hidden">
                  <div className="w-1/2 relative border-r border-background">
                    <img src={result.beforeImage} alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
                    <span className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-wider font-medium">Before</span>
                  </div>
                  <div className="w-1/2 relative">
                    <img src={result.afterImage} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-wider font-medium">After</span>
                  </div>
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-foreground/90 text-center px-4">
                  {result.customerQuote}
                </p>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <TikTokEmbed url={product.tiktokVideoUrl} />
            </motion.div>
          </div>
        </motion.section>

        {/* === SECTION 4: FAQ === */}
        <motion.section className="bg-background border-t border-border py-24" variants={containerVariants}>
          <div className="container mx-auto px-4 md:px-8">
             <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Information</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion faq={product.faq} />
          </div>
        </motion.section>
        
      </motion.div>
    </Layout>
  );
}