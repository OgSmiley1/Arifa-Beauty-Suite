import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Failed to send message. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-foreground">Message Sent</h3>
                  <p className="text-foreground/60 font-light">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors border-b border-foreground/30 pb-0.5 mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 text-center">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs tracking-wider uppercase text-foreground/60">Full Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                      className="bg-secondary/30 border-border/50 rounded-none h-12 focus-visible:ring-foreground/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs tracking-wider uppercase text-foreground/60">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                      className="bg-secondary/30 border-border/50 rounded-none h-12 focus-visible:ring-foreground/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs tracking-wider uppercase text-foreground/60">Subject</label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                      placeholder="What is this regarding?"
                      className="bg-secondary/30 border-border/50 rounded-none h-12 focus-visible:ring-foreground/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs tracking-wider uppercase text-foreground/60">Message</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Type your message here..."
                      className="bg-secondary/30 border-border/50 rounded-none min-h-[150px] focus-visible:ring-foreground/20 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-xs tracking-[0.2em] uppercase transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
