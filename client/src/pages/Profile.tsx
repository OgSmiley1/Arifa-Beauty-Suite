import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, User, LogOut, Heart } from "lucide-react";
import { Link } from "wouter";

export default function Profile() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl font-serif text-foreground mb-4">My Account</h1>
            <p className="text-foreground/70 font-light">Welcome back, Sarah Jenkins.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar / Tabs (Mockup visual only) */}
            <div className="md:col-span-1 space-y-2">
              <div className="bg-secondary p-4 flex items-center gap-3 cursor-pointer border-l-2 border-foreground">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Profile</span>
              </div>
              <div className="p-4 flex items-center gap-3 cursor-pointer hover:bg-secondary/50 transition-colors text-foreground/70 hover:text-foreground">
                <Package className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Orders</span>
              </div>
              <div className="p-4 flex items-center gap-3 cursor-pointer hover:bg-secondary/50 transition-colors text-foreground/70 hover:text-foreground">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Wishlist</span>
              </div>
              <div className="p-4 flex items-center gap-3 cursor-pointer hover:bg-secondary/50 transition-colors text-foreground/70 hover:text-foreground mt-8 border-t border-border">
                <LogOut className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Sign Out</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="md:col-span-3 space-y-8">
              <Card className="rounded-none border-border/50 shadow-none">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Full Name</p>
                      <p className="font-light">Sarah Jenkins</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Email Address</p>
                      <p className="font-light">sarah.jenkins@example.com</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Phone Number</p>
                      <p className="font-light">+971 50 987 6543</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Member Since</p>
                      <p className="font-light">October 15, 2023</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 rounded-none h-12 px-8 text-xs uppercase tracking-widest">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none border-border/50 shadow-none">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-serif">Recent Orders</h2>
                    <Link href="/shop"><span className="text-xs uppercase tracking-widest border-b border-foreground pb-0.5 cursor-pointer">Shop Now</span></Link>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b border-border/50">
                      <div>
                        <p className="font-medium text-sm">Order #ORD-8472</p>
                        <p className="text-xs text-foreground/60 mt-1">Placed on October 24, 2023</p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center justify-between sm:justify-end w-full sm:w-auto gap-8">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 text-[10px] uppercase tracking-widest font-medium">Delivered</span>
                        <span className="font-light">85.00 AED</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4">
                      <div>
                        <p className="font-medium text-sm">Order #ORD-7102</p>
                        <p className="text-xs text-foreground/60 mt-1">Placed on September 12, 2023</p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center justify-between sm:justify-end w-full sm:w-auto gap-8">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 text-[10px] uppercase tracking-widest font-medium">Delivered</span>
                        <span className="font-light">150.00 AED</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}