import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Star,
  LogOut
} from "lucide-react";

export function AdminSidebar() {
  const [location] = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Package, label: "Products", path: "/admin/products" },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: Star, label: "Testimonials", path: "/admin/testimonials" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col fixed left-0 top-0">
      <div className="h-20 flex items-center px-6 border-b border-sidebar-border">
        <Link href="/">
          <span className="font-serif text-2xl tracking-widest text-sidebar-foreground cursor-pointer">
            ARIFA
          </span>
        </Link>
        <span className="ml-2 text-xs uppercase tracking-wider text-sidebar-foreground/50 mt-1">Admin</span>
      </div>
      
      <div className="flex-1 py-6 flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = location === item.path || (location.startsWith(item.path) && item.path !== "/admin");
          return (
            <Link key={item.path} href={item.path}>
              <div 
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors cursor-pointer ${
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <Link href="/">
          <div className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors cursor-pointer">
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Exit Admin</span>
          </div>
        </Link>
      </div>
    </div>
  );
}