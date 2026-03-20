import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Star,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Package, label: "Products", path: "/admin/products" },
  { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
  { icon: Users, label: "Customers", path: "/admin/customers" },
  { icon: Star, label: "Testimonials", path: "/admin/testimonials" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export function AdminSidebar() {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/admin") return location === "/admin";
    return location.startsWith(path);
  };

  const sidebarContent = (
    <>
      <div className="h-20 flex items-center px-6 border-b border-sidebar-border">
        <Link href="/">
          <span className="font-serif text-2xl tracking-[0.15em] text-sidebar-foreground cursor-pointer">
            ARIFA
          </span>
        </Link>
        <span className="ml-2 text-[10px] uppercase tracking-wider text-sidebar-foreground/40 mt-1 border border-sidebar-foreground/20 px-1.5 py-0.5">
          Admin
        </span>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => (
          <Link key={item.path} href={item.path}>
            <div
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer ${
                isActive(item.path)
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="p-3 border-t border-sidebar-border">
        <Link href="/">
          <div className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground/50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors cursor-pointer">
            <LogOut className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm font-medium">Exit Admin</span>
          </div>
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-foreground text-background p-2"
        aria-label="Toggle admin menu"
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`md:hidden fixed left-0 top-0 h-screen w-64 bg-sidebar z-40 flex flex-col transition-transform duration-300 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {sidebarContent}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex w-64 bg-sidebar border-r border-sidebar-border h-screen flex-col fixed left-0 top-0">
        {sidebarContent}
      </div>
    </>
  );
}
