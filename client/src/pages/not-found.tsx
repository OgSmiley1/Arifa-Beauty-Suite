import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-6 block font-medium">
          Page Not Found
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-4">404</h1>
        <div className="h-px w-16 bg-foreground/20 mx-auto mb-6"></div>
        <p className="text-foreground/60 text-lg font-light max-w-md mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-10 h-14 text-xs tracking-[0.2em] uppercase">
            Back to Home
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
