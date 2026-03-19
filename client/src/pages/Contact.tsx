import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-background">
         <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/contact-bg.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center pt-20">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-6">Get In Touch</h2>
                <div className="h-px w-16 bg-foreground/20 mb-8"></div>
                <p className="text-foreground/80 font-light leading-relaxed mb-8">
                  We'd love to hear from you. Whether you have a question about our authentic henna products, custom skincare mixes, or an existing order, our team is here to help.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2">WhatsApp / Phone</h3>
                  <p className="text-lg font-light text-foreground">+971 52 365 2588</p>
                  <p className="text-lg font-light text-foreground">056 112 1834</p>
                </div>
                
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2">Business Hours</h3>
                  <p className="text-lg font-light text-foreground">Monday - Saturday: 9am - 8pm</p>
                  <p className="text-lg font-light text-foreground">Sunday: Closed</p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-2">Legal</h3>
                  <p className="text-lg font-light text-foreground">UAE Licensed Seller</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-secondary p-8 md:p-12 border border-border/50">
              <h2 className="text-2xl font-serif text-foreground mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs tracking-wider uppercase text-foreground/70">Full Name</label>
                  <Input id="name" placeholder="Enter your name" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs tracking-wider uppercase text-foreground/70">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs tracking-wider uppercase text-foreground/70">Subject</label>
                  <Input id="subject" placeholder="What is this regarding?" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs tracking-wider uppercase text-foreground/70">Message</label>
                  <Textarea id="message" placeholder="Type your message here..." className="bg-background border-border rounded-none min-h-[150px] focus-visible:ring-foreground/20 resize-none" />
                </div>
                
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-sm tracking-[0.2em] uppercase mt-4 transition-all">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}