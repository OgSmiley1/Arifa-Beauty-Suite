import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import {
  insertProductSchema,
  insertOrderSchema,
  insertTestimonialSchema,
  insertContactMessageSchema,
  insertNewsletterSubscriberSchema,
} from "@shared/schema";
import session from "express-session";
import MemoryStore from "memorystore";

const SessionStore = MemoryStore(session);

function getParam(val: string | string[] | undefined): string {
  if (Array.isArray(val)) return val[0];
  return val ?? "";
}

// Simple auth middleware
function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && (req.session as any).userId) {
    return next();
  }
  return res.status(401).json({ message: "Unauthorized" });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Session setup
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "arifa-beauty-suite-secret-key",
      resave: false,
      saveUninitialized: false,
      store: new SessionStore({ checkPeriod: 86400000 }),
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
    })
  );

  // ---- Auth Routes ----
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    const user = await storage.getUserByUsername(username);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    (req.session as any).userId = user.id;
    return res.json({ id: user.id, username: user.username });
  });

  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
    });
  });

  app.get("/api/auth/me", async (req: Request, res: Response) => {
    if (!req.session || !(req.session as any).userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await storage.getUser((req.session as any).userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    return res.json({ id: user.id, username: user.username });
  });

  // ---- Product Routes ----
  app.get("/api/products", async (_req: Request, res: Response) => {
    const products = await storage.getProducts();
    return res.json(products);
  });

  app.get("/api/products/:id", async (req: Request, res: Response) => {
    const product = await storage.getProduct(getParam(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  });

  app.post("/api/products", requireAuth, async (req: Request, res: Response) => {
    const parsed = insertProductSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid product data", errors: parsed.error.flatten() });
    }
    const product = await storage.createProduct(parsed.data);
    return res.status(201).json(product);
  });

  app.put("/api/products/:id", requireAuth, async (req: Request, res: Response) => {
    const product = await storage.updateProduct(getParam(req.params.id), req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  });

  app.delete("/api/products/:id", requireAuth, async (req: Request, res: Response) => {
    const deleted = await storage.deleteProduct(getParam(req.params.id));
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    return res.json({ message: "Product deleted" });
  });

  // ---- Order Routes ----
  app.get("/api/orders", requireAuth, async (_req: Request, res: Response) => {
    const orders = await storage.getOrders();
    return res.json(orders);
  });

  app.get("/api/orders/:id", requireAuth, async (req: Request, res: Response) => {
    const order = await storage.getOrder(getParam(req.params.id));
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.json(order);
  });

  app.post("/api/orders", async (req: Request, res: Response) => {
    const parsed = insertOrderSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid order data", errors: parsed.error.flatten() });
    }
    const order = await storage.createOrder(parsed.data);
    return res.status(201).json(order);
  });

  app.put("/api/orders/:id", requireAuth, async (req: Request, res: Response) => {
    const order = await storage.updateOrder(getParam(req.params.id), req.body);
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.json(order);
  });

  // ---- Testimonial Routes ----
  app.get("/api/testimonials", async (req: Request, res: Response) => {
    const approvedOnly = req.query.approved === "true";
    const testimonials = await storage.getTestimonials(approvedOnly);
    return res.json(testimonials);
  });

  app.post("/api/testimonials", requireAuth, async (req: Request, res: Response) => {
    const parsed = insertTestimonialSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid testimonial data", errors: parsed.error.flatten() });
    }
    const testimonial = await storage.createTestimonial(parsed.data);
    return res.status(201).json(testimonial);
  });

  app.put("/api/testimonials/:id", requireAuth, async (req: Request, res: Response) => {
    const testimonial = await storage.updateTestimonial(getParam(req.params.id), req.body);
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
    return res.json(testimonial);
  });

  app.delete("/api/testimonials/:id", requireAuth, async (req: Request, res: Response) => {
    const deleted = await storage.deleteTestimonial(getParam(req.params.id));
    if (!deleted) return res.status(404).json({ message: "Testimonial not found" });
    return res.json({ message: "Testimonial deleted" });
  });

  // ---- Contact Message Routes ----
  app.get("/api/contact", requireAuth, async (_req: Request, res: Response) => {
    const messages = await storage.getContactMessages();
    return res.json(messages);
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    const parsed = insertContactMessageSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid message data", errors: parsed.error.flatten() });
    }
    const message = await storage.createContactMessage(parsed.data);
    return res.status(201).json(message);
  });

  app.put("/api/contact/:id/read", requireAuth, async (req: Request, res: Response) => {
    const success = await storage.markContactMessageRead(getParam(req.params.id));
    if (!success) return res.status(404).json({ message: "Message not found" });
    return res.json({ message: "Marked as read" });
  });

  // ---- Newsletter Routes ----
  app.get("/api/newsletter", requireAuth, async (_req: Request, res: Response) => {
    const subscribers = await storage.getNewsletterSubscribers();
    return res.json(subscribers);
  });

  app.post("/api/newsletter", async (req: Request, res: Response) => {
    const parsed = insertNewsletterSubscriberSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid email", errors: parsed.error.flatten() });
    }
    const subscriber = await storage.addNewsletterSubscriber(parsed.data);
    return res.status(201).json(subscriber);
  });

  return httpServer;
}
