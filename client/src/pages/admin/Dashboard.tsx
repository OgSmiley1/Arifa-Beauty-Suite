import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to Arifa Cosmetics Admin Portal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.00</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center text-emerald-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +15% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center text-emerald-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">
              3 low in stock
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center text-emerald-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "ORD-001", customer: "Emma Thompson", date: "Today", total: "$120.00", status: "Processing" },
                { id: "ORD-002", customer: "Sarah Jenkins", date: "Yesterday", total: "$85.00", status: "Shipped" },
                { id: "ORD-003", customer: "Michael Chen", date: "Yesterday", total: "$210.00", status: "Shipped" },
                { id: "ORD-004", customer: "Jessica Davis", date: "Oct 12", total: "$45.00", status: "Delivered" },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.id} • {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.total}</p>
                    <p className={`text-xs ${
                      order.status === 'Processing' ? 'text-amber-600' : 
                      order.status === 'Shipped' ? 'text-blue-600' : 'text-emerald-600'
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
              {[
                { name: "Radiance Vitamin C Serum", sales: 42, stock: 15 },
                { name: "Hydrating Body Lotion", sales: 38, stock: 24 },
                { name: "Botanical Cleansing Oil", sales: 25, stock: 8 },
                { name: "Rosewater Toner", sales: 18, stock: 32 },
              ].map((product, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales this month</p>
                  </div>
                  <div className="text-right text-sm">
                    <span className={product.stock < 10 ? "text-destructive" : "text-muted-foreground"}>
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

// Added mock Users icon missing from import
function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}