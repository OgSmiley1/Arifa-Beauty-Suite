# ARIFA COSMETICS — REPLIT CONTINUATION BUILD BRIEF
# Paste this ENTIRE document into Replit as your next prompt.

---

## CONTEXT — READ THIS FIRST

This is a **continuation** of an existing project. Do NOT create a new project or start from scratch. The current codebase already has:

- React + Vite frontend with TailwindCSS
- Public pages: Home (hero, featured products, testimonials, brand values), Shop (category filters, product grid), About, Contact (form + details)
- Admin portal at `/admin` with: Dashboard (stats cards, recent orders, top products), Products table (search, status badges), Sidebar navigation
- Vacheron Constantin-inspired typography (Playfair Display headings, clean serif/sans-serif pairing)
- Luxury design system: champagne/off-white backgrounds, charcoal/terracotta accents, zero border-radius, frosted glass navbar
- TikTok product screenshots mapped to Shop, Home, and Admin pages (Henna Paste, Pigmentation Cream, Herbal Hair Oil)
- ProductPage.tsx component with Framer Motion animations, before/after results section, FAQ section
- Routing via `wouter`

**What is NOT built yet:** Backend, database, authentication, functional admin CRUD, real data persistence, payment-ready architecture, mobile PWA setup.

---

## YOUR MISSION

Transform this frontend mockup into a **fully functional full-stack application**. Every button, form, and admin action must work with real data. Follow the phases below in exact order.

---

## PHASE 1 — BACKEND FOUNDATION

### 1A. Database Setup (PostgreSQL via Prisma)

Set up Prisma ORM connected to a PostgreSQL database (use Replit's built-in DB or Neon). Create and run migrations for these models:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String   @id @default(uuid())
  fullName     String
  email        String   @unique
  phone        String?
  passwordHash String
  role         Role     @default(CUSTOMER)
  avatarUrl    String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  sessions     Session[]
  orders       Order[]
}

model Session {
  id        String   @id @default(uuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Product {
  id          String   @id @default(uuid())
  name        String
  slug        String   @unique
  description String
  price       Float
  comparePrice Float?
  category    String
  images      String[]
  stock       Int      @default(0)
  status      ProductStatus @default(ACTIVE)
  featured    Boolean  @default(false)
  sortOrder   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  orderItems  OrderItem[]
  testimonials Testimonial[]
}

model Testimonial {
  id           String  @id @default(uuid())
  productId    String?
  customerName String
  quote        String
  rating       Int     @default(5)
  beforeImage  String?
  afterImage   String?
  tiktokUrl    String?
  featured     Boolean @default(false)
  createdAt    DateTime @default(now())
  product      Product? @relation(fields: [productId], references: [id])
}

model HeroSlide {
  id        String  @id @default(uuid())
  title     String
  subtitle  String?
  imageUrl  String
  ctaText   String?
  ctaLink   String?
  sortOrder Int     @default(0)
  active    Boolean @default(true)
}

model ContactSubmission {
  id        String   @id @default(uuid())
  name      String
  email     String
  subject   String?
  message   String
  status    SubmissionStatus @default(NEW)
  createdAt DateTime @default(now())
}

model Order {
  id          String      @id @default(uuid())
  orderNumber String      @unique
  userId      String?
  customerName String
  customerEmail String
  customerPhone String?
  status      OrderStatus @default(PENDING)
  subtotal    Float
  total       Float
  notes       String?
  items       OrderItem[]
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  user        User?       @relation(fields: [userId], references: [id])
}

model OrderItem {
  id        String  @id @default(uuid())
  orderId   String
  productId String
  quantity  Int
  unitPrice Float
  order     Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)
  product   Product @relation(fields: [productId], references: [id])
}

model SiteSettings {
  id            String @id @default("main")
  businessName  String @default("Arifa Cosmetics")
  tagline       String?
  phone         String?
  whatsapp      String?
  email         String?
  address       String?
  instagram     String?
  tiktok        String?
  aboutText     String?
  shippingInfo  String?
  returnPolicy  String?
  updatedAt     DateTime @updatedAt
}

enum Role {
  CUSTOMER
  ADMIN
}

enum ProductStatus {
  ACTIVE
  DRAFT
  OUT_OF_STOCK
}

enum SubmissionStatus {
  NEW
  REVIEWED
  RESOLVED
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}
```

### 1B. Express.js Backend API

Create a `server/` directory with Express.js. Structure:

```
server/
├── index.ts              # Express app entry, CORS, JSON parser, route mounting
├── middleware/
│   ├── auth.ts           # JWT verification middleware
│   └── admin.ts          # Role check middleware (ADMIN only)
├── routes/
│   ├── auth.ts           # POST /signup, POST /login, POST /logout, GET /me
│   ├── products.ts       # Public: GET /products, GET /products/:slug
│   ├── admin/
│   │   ├── products.ts   # CRUD: GET, POST, PUT, DELETE /admin/products
│   │   ├── slides.ts     # CRUD: /admin/slides
│   │   ├── testimonials.ts # CRUD: /admin/testimonials
│   │   ├── orders.ts     # GET, PUT /admin/orders
│   │   ├── submissions.ts # GET, PUT /admin/submissions
│   │   ├── users.ts      # GET /admin/users
│   │   ├── settings.ts   # GET, PUT /admin/settings
│   │   └── dashboard.ts  # GET /admin/dashboard/stats
│   ├── contact.ts        # POST /contact (public form)
│   └── site.ts           # GET /site/settings, GET /site/slides (public)
└── lib/
    ├── prisma.ts         # Prisma client singleton
    └── jwt.ts            # Token sign/verify helpers
```

**Auth implementation:**
- Signup: validate inputs → hash password with bcrypt (12 rounds) → create User → return JWT
- Login: find user by email → verify password → create Session → return JWT in httpOnly cookie
- JWT secret stored in Replit Secrets as `JWT_SECRET`
- All `/admin/*` routes require both auth + admin middleware

**Dashboard stats endpoint** (`GET /admin/dashboard/stats`) must return:
```json
{
  "totalProducts": 12,
  "totalOrders": 45,
  "totalRevenue": 15750.00,
  "totalCustomers": 89,
  "newOrdersToday": 3,
  "newCustomersThisWeek": 7,
  "recentOrders": [...],
  "topProducts": [...]
}
```

---

## PHASE 2 — CONNECT FRONTEND TO BACKEND

### 2A. Replace All Mock/Hardcoded Data

Go through EVERY existing component and replace hardcoded product arrays, testimonial objects, and stats with real API calls. Create a shared API utility:

```typescript
// src/lib/api.ts
const API_BASE = '/api';

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
```

**Specific replacements:**
- `Home.tsx` → Fetch hero slides from `/api/site/slides`, featured products from `/api/products?featured=true`, testimonials from `/api/products/testimonials?featured=true`
- `Shop.tsx` → Fetch all products from `/api/products` with category filter query param
- `Contact.tsx` → Form submits POST to `/api/contact`
- `AdminDashboard.tsx` → Fetch real stats from `/api/admin/dashboard/stats`
- `AdminProducts.tsx` → Fetch from `/api/admin/products`, wire up Add/Edit/Delete buttons

### 2B. Build Missing Admin Pages

These admin pages need to be fully functional with forms that save to the database:

**Products Management** (`/admin/products`):
- Table with real data, search, category filter, pagination
- "Add Product" button opens a modal/form with: name, description, price, compare price, category (dropdown), stock quantity, images (URL input for now, file upload later), featured toggle, status dropdown
- Edit button on each row opens same form pre-filled
- Delete button with confirmation dialog
- All actions hit the backend API and refresh the table

**Hero Slideshow Management** (`/admin/slides`):
- Drag-to-reorder list of current slides
- Add/edit slide: title, subtitle, image URL, CTA text, CTA link, active toggle
- Delete with confirmation

**Testimonials Management** (`/admin/testimonials`):
- Table of all testimonials
- Add/edit: customer name, quote, rating (1-5), before image URL, after image URL, TikTok video URL, linked product (dropdown), featured toggle
- Delete with confirmation

**Orders** (`/admin/orders`):
- Table: order number, customer name, email, total, status badge, date
- Click to expand: order items with product names, quantities, prices
- Status dropdown to update order status

**Contact Submissions** (`/admin/submissions`):
- Table of all form submissions: name, email, subject, status, date
- Click to read full message
- Status update: New → Reviewed → Resolved

**Site Settings** (`/admin/settings`):
- Single form page to edit: business name, tagline, phone, WhatsApp, email, address, Instagram URL, TikTok URL, about text, shipping info, return policy
- Save button persists to database

**Customers** (`/admin/customers`):
- Table of all registered users: name, email, phone, signup date, order count
- Click to view profile and order history

---

## PHASE 3 — PRODUCT DETAIL PAGE UPGRADE

The existing `ProductPage.tsx` needs to become a dynamic, database-driven page:

1. Fetch product data from `/api/products/:slug` on mount
2. Display: product images (gallery with thumbnail selector), name, price (with strikethrough compare price if exists), full description, stock status, "Add to Bag" button
3. Below the product info, add a **"Real Results"** section that fetches testimonials linked to this product — show before/after images, customer quotes, star ratings, and embedded TikTok videos
4. Interactive **FAQ accordion** — clicking a question smoothly reveals/hides the answer using Framer Motion
5. **Related Products** carousel at the bottom — fetch 4 products from the same category
6. Keep the existing Framer Motion animations but ensure they work with dynamic data loading (add loading skeleton states)

---

## PHASE 4 — PUBLIC PAGES REFINEMENT

### New Page: `/results`
- Full-width page showcasing all featured testimonials
- Grid of before/after cards with customer quotes and ratings
- "As Seen on TikTok" section with embedded TikTok videos
- Link to this page from the main navigation

### Homepage Enhancements
- Hero slideshow pulls from database (auto-rotate every 5 seconds with fade transition)
- Featured products section pulls `featured: true` products
- Testimonials section pulls `featured: true` testimonials
- Brand values section remains static but editable copy comes from SiteSettings

### Shop Page Enhancements
- Category filter tabs are dynamic (derived from actual product categories in DB)
- Add sorting: Price Low→High, High→Low, Newest, Best Selling
- Product cards show: image, name, price, "Quick Add" button, category badge, stock indicator
- Clicking a product card navigates to `/products/:slug`

---

## PHASE 5 — DESIGN SYSTEM ENFORCEMENT

Maintain the existing Vacheron Constantin-inspired luxury aesthetic throughout ALL new pages and components:

**Typography:**
- Headings: `Playfair Display` (serif), elegant weight
- Body: Clean sans-serif (the existing Prelo/SohneLeicht simulation)
- No generic fonts (Inter, Roboto, Arial)

**Color Palette (preserve existing):**
- Background: Warm champagne/off-white `hsl(35, 61%, 94%)`
- Text: Deep charcoal
- Primary accent: Terracotta/warm brown `hsl(27, 19%, 39%)`
- Admin: Can use a slightly more neutral/dark sidebar with the same accent colors

**Design Rules:**
- Zero border-radius on all elements (sharp, editorial edges)
- Frosted glass effect on navbar (backdrop-blur)
- Generous whitespace
- Hover effects on all interactive elements
- Loading skeleton animations while data fetches
- Toast notifications for all admin actions (save, delete, error)
- All forms use inline validation with clear error messages
- Responsive: mobile-first, works perfectly at 375px+

---

## PHASE 6 — MOBILE-READY (PWA)

- Add `public/manifest.json` with:
  - `name`: "Arifa Cosmetics"
  - `short_name`: "Arifa"
  - `display`: "standalone"
  - `theme_color`: matching the brand palette
  - `icons`: generate placeholder icons at 192x192 and 512x512
- Register a service worker for static asset caching
- Add proper meta tags: viewport, apple-mobile-web-app-capable, theme-color
- Touch targets: minimum 44px on all buttons and links
- Mobile navigation: hamburger menu slides smoothly, all admin pages scroll properly on mobile

---

## PHASE 7 — SEED DATA

Create a seed script (`prisma/seed.ts`) that populates:

1. **Admin account:**
   - Email: `admin@arifa.ae`
   - Password: `Arifa@2026!` (bcrypt hashed)
   - Role: ADMIN

2. **Products (minimum 6):**
   - Radiant Glow Pigmentation Cream — 150 AED, Skincare category
   - Premium Henna Paste — 45 AED, Henna Art category
   - Herbal Hair Growth Oil — 120 AED, Hair Care category
   - Saffron Brightening Serum — 180 AED, Skincare category
   - Natural Henna Cone Set (Pack of 6) — 75 AED, Henna Art category
   - Complete Glow Kit (Cream + Serum + Oil) — 399 AED, Sets category

3. **Testimonials (minimum 5)** with realistic quotes from TikTok-style feedback:
   - "This literally saved my skin. Dark spots gone in 3 weeks!"
   - "Best henna I've ever used. The color is so rich and lasts forever."
   - "My hair stopped falling out after just 2 weeks of using the oil."
   - "I bought the glow kit for my wedding prep and my skin was flawless."
   - "Finally a brand that actually delivers what they promise."

4. **3 Hero Slides** with placeholder image URLs

5. **Site Settings** with:
   - Phone/WhatsApp: placeholder UAE number
   - TikTok: `https://www.tiktok.com/@arifa.cosmetics`
   - About text: brief luxury brand story

6. **3 sample contact submissions** and **2 sample orders** for dashboard testing

---

## EXECUTION ORDER — BUILD IN THIS SEQUENCE

1. Install dependencies: `prisma`, `@prisma/client`, `express`, `bcrypt`, `jsonwebtoken`, `cors`
2. Set up Prisma schema and run `prisma migrate dev`
3. Build Express server with auth routes (signup/login/logout/me)
4. Build admin API routes (products CRUD, slides CRUD, testimonials CRUD, orders, submissions, settings, dashboard stats)
5. Build public API routes (products list/detail, site settings, slides, contact form)
6. Run seed script to populate test data
7. Create `src/lib/api.ts` utility
8. Replace ALL hardcoded data in existing frontend components with API calls
9. Build admin product management page (form, table, CRUD actions)
10. Build admin slides, testimonials, orders, submissions, settings pages
11. Build public `/results` page
12. Upgrade ProductPage to dynamic with slug routing
13. Add PWA manifest and service worker
14. Polish: loading states, error handling, toast notifications, responsive fixes
15. Test every route end-to-end

**Every feature must be fully functional. No placeholder text like "coming soon." No buttons that do nothing. Every form saves to the database. Every table shows real data.**
