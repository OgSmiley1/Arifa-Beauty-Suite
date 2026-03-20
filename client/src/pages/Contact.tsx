import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <span className="text-foreground/50 uppercase tracking-[0.3em] text-xs mb-6 block font-medium">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
            Contact Us
          </h1>
          <div className="h-px w-16 bg-foreground/20 mx-auto mb-6"></div>
          <p className="text-foreground/60 text-lg font-light">
            We'd love to hear from you. Reach out with any questions about our products or orders.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+971 52 365 2588", href: "https://wa.me/971523652588" },
              { icon: Phone, label: "Phone", value: "056 112 1834", href: "tel:0561121834" },
              { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9am - 8pm" },
              { icon: MapPin, label: "Location", value: "United Arab Emirates" },
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary/30 border border-border/30 p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.5} />
                </div>
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4 block">Message Us</span>
                <h2 className="text-3xl font-serif text-foreground mb-6">Send a Message</h2>
                <div className="h-px w-16 bg-foreground/20 mb-8"></div>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                Whether you have a question about our authentic henna products, custom skincare mixes, or an existing order, our team is here to help. We typically respond within a few hours.
              </p>
              <div className="pt-4">
                <p className="text-sm text-foreground/60 mb-4 font-light">For faster service, reach us directly:</p>
                <a
                  href="https://wa.me/971523652588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-background p-8 md:p-10 border border-border/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs tracking-wider uppercase text-foreground/60">Full Name</label>
                  <Input id="name" placeholder="Enter your name" className="bg-secondary/30 border-border/50 rounded-none h-12 focus-visible:ring-foreground/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs tracking-wider uppercase text-foreground/60">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-secondary/30 border-border/50 rounded-none h-12 focus-visible:ring-foreground/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs tracking-wider uppercase text-foreground/60">Subject</label>
                  <Input id="subject" placeholder="What is this regarding?" className="bg-secondary/30 border-border/50 rounded-none h-12 focus-visible:ring-foreground/20" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs tracking-wider uppercase text-foreground/60">Message</label>
                  <Textarea id="message" placeholder="Type your message here..." className="bg-secondary/30 border-border/50 rounded-none min-h-[150px] focus-visible:ring-foreground/20 resize-none" />
                </div>

                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-xs tracking-[0.2em] uppercase transition-all">
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
