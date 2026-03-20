import Layout from "@/components/Layout";
import { TikTok } from "react-tiktok";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Reusing some mock data, but expanding for the dedicated results page
const REAL_RESULTS = [
  {
    id: 'res_01',
    beforeImage: 'https://images.unsplash.com/photo-1590518335031-15582f6e5229?q=80&w=400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1615397323631-50e50337c768?q=80&w=400&auto=format&fit=crop',
    customerQuote: '"This is the only thing that has ever worked on my dark spots. I saw a difference in just 3 weeks!"',
    productName: "Radiant Glow Pigmentation Cream",
    rating: 5
  },
  {
    id: 'res_02',
    beforeImage: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&auto=format&fit=crop',
    customerQuote: '"My skin feels so smooth and looks so much brighter. I finally feel confident without makeup."',
    productName: "Radiant Glow Pigmentation Cream",
    rating: 5
  },
  {
    id: 'res_03',
    beforeImage: 'https://images.unsplash.com/photo-1580481072645-022f9a6d4ce4?q=80&w=400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop',
    customerQuote: '"The henna stain is incredibly dark and lasted over two weeks. Best quality I have found in the UAE."',
    productName: "Pure Natural Henna Cone",
    rating: 5
  }
];

export default function Results() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Community Success</span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Real Results from the Arifa Community</h1>
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-8"></div>
          <p className="text-foreground/80 text-lg font-light leading-relaxed">
            Don't just take our word for it. Explore the authentic transformations and honest feedback from our thousands of satisfied customers across the UAE.
          </p>
        </div>
      </section>

      {/* As Seen On TikTok Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-4">As Seen on TikTok</h2>
            <p className="text-foreground/70 font-light">Join our community of over 40,000 followers</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-[325px] bg-background border border-border/50 shadow-xl p-4">
               {/* 
                  Note: The react-tiktok component requires a valid TikTok video URL.
                  We are using a placeholder container here for the mockup, but in a real app,
                  you would pass the actual URL like this:
                  <TikTok url="https://www.tiktok.com/@arifa.cosmetics/video/YOUR_VIDEO_ID" />
               */}
               <div className="aspect-[9/16] bg-secondary flex flex-col items-center justify-center text-center p-6 mb-4">
                  <svg className="w-12 h-12 mx-auto mb-4 text-foreground/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                  <p className="font-serif text-lg mb-2">Viral Pigmentation Results</p>
                  <p className="text-xs text-foreground/60 mb-4">2.4M Views • 150K Likes</p>
                  <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 rounded-none text-xs uppercase tracking-widest w-full">
                    Watch on TikTok
                  </Button>
               </div>
               <p className="text-sm font-light italic text-center px-4">
                 "Watch how our signature mix transforms skin texture in just 4 weeks."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-4">Customer Transformations</h2>
            <div className="h-px w-16 bg-foreground/20 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             {REAL_RESULTS.map((result) => (
              <div key={result.id} className="bg-secondary p-6 group flex flex-col h-full border border-border/50">
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
                
                <div className="flex justify-center text-amber-600 text-sm mb-4">
                  {"★".repeat(result.rating)}
                </div>
                
                <p className="font-serif italic text-lg leading-relaxed text-foreground/90 text-center px-4 flex-grow mb-6">
                  {result.customerQuote}
                </p>
                
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-foreground/60 mb-1">Used Product</p>
                  <p className="text-sm font-medium text-foreground">{result.productName}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/shop">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-12 h-14 text-sm tracking-[0.2em] uppercase transition-all duration-300">
                Shop The Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}