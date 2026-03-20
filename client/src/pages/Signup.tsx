import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Signup() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-background py-20 px-4">
        <div className="w-full max-w-md bg-secondary p-8 md:p-12 border border-border/50">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-foreground mb-4">Create Account</h1>
            <p className="text-sm font-light text-foreground/70">Join Arifa Cosmetics for exclusive benefits</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-xs tracking-wider uppercase text-foreground/70">Full Name</label>
              <Input id="fullName" type="text" placeholder="Enter your full name" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs tracking-wider uppercase text-foreground/70">Email Address</label>
              <Input id="email" type="email" placeholder="Enter your email" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs tracking-wider uppercase text-foreground/70">Phone Number (Optional)</label>
              <Input id="phone" type="tel" placeholder="+971 50 123 4567" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs tracking-wider uppercase text-foreground/70">Password</label>
              <Input id="password" type="password" placeholder="Create a password" className="bg-background border-border rounded-none h-12 focus-visible:ring-foreground/20" />
            </div>

            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-sm tracking-[0.2em] uppercase mt-4 transition-all">
              Sign Up
            </Button>
          </form>

          <div className="mt-8 text-center border-t border-border pt-6">
            <p className="text-sm text-foreground/70 font-light">
              Already have an account?{' '}
              <Link href="/login">
                <span className="text-foreground hover:text-primary transition-colors cursor-pointer border-b border-foreground pb-0.5 ml-1">Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}