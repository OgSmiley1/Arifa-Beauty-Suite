import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth";

export default function AdminLogin() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await login(username, password);
    } catch {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl tracking-[0.15em] text-foreground mb-2">ARIFA</h1>
          <div className="h-px w-12 bg-foreground/20 mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/30 p-8 border border-border/50">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="username" className="text-xs tracking-wider uppercase text-foreground/60">
              Username
            </label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="bg-background border-border/50 rounded-none h-12 focus-visible:ring-foreground/20"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-xs tracking-wider uppercase text-foreground/60">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="bg-background border-border/50 rounded-none h-12 focus-visible:ring-foreground/20"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-xs tracking-[0.2em] uppercase"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-xs text-foreground/40 mt-6">
          Authorized personnel only
        </p>
      </div>
    </div>
  );
}
