import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, DollarSign, ShoppingCart, Users, TrendingUp, TrendingDown } from "lucide-react";

const STATS = [
  { title: "Total Revenue", value: "12,450 AED", change: "+15%", trend: "up", icon: DollarSign },
  { title: "Orders", value: "145", change: "+8%", trend: "up", icon: ShoppingCart },
  { title: "Products", value: "24", change: "3 low stock", trend: "neutral", icon: Package },
  { title: "Active Customers", value: "892", change: "+12%", trend: "up", icon: Users },
];

const RECENT_ORDERS = [
  { id: "ORD-001", customer: "Emma Thompson", date: "Today", total: "120.00 AED", status: "Processing" },
  { id: "ORD-002", customer: "Sarah Jenkins", date: "Yesterday", total: "85.00 AED", status: "Shipped" },
  { id: "ORD-003", customer: "Michael Chen", date: "Yesterday", total: "210.00 AED", status: "Shipped" },
  { id: "ORD-004", customer: "Jessica Davis", date: "Mar 18", total: "45.00 AED", status: "Delivered" },
];

const TOP_PRODUCTS = [
  { name: "Pigmentation Cream Mix", sales: 42, stock: 15 },
  { name: "Authentic Henna Paste", sales: 38, stock: 24 },
  { name: "Natural Herbal Hair Oil", sales: 25, stock: 8 },
  { name: "Saffron Glow Face Mask", sales: 18, stock: 32 },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to Arifa Cosmetics Admin Portal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {STATS.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs mt-1 flex items-center ${
                stat.trend === "up" ? "text-emerald-600" : "text-muted-foreground"
              }`}>
                {stat.trend === "up" && <TrendingUp className="h-3 w-3 mr-1" />}
                {stat.change} {stat.trend === "up" ? "from last month" : ""}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {RECENT_ORDERS.map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.id} &bull; {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{order.total}</p>
                    <p className={`text-xs ${
                      order.status === "Processing" ? "text-amber-600" :
                      order.status === "Shipped" ? "text-blue-600" : "text-emerald-600"
                    }`}>
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {TOP_PRODUCTS.map((product, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales this month</p>
                  </div>
                  <div className="text-right text-sm">
                    <span className={product.stock < 10 ? "text-destructive font-medium" : "text-muted-foreground"}>
                      {product.stock} in stock
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
