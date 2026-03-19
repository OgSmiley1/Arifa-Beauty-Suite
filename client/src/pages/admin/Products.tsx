import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

import product1 from "@assets/Screenshot_20260319-234309_TikTok_1773954622729.jpg";
import product2 from "@assets/Screenshot_20260319-234307_TikTok_1773954622753.jpg";
import product3 from "@assets/Screenshot_20260319-234303_TikTok_1773954622767.jpg";
import product4 from "@assets/Screenshot_20260319-234314_TikTok_1773954622743.jpg";

const PRODUCTS = [
  { id: "PRD-001", name: "Authentic Henna Paste", category: "Henna Art", price: 35, stock: 150, status: "Active", image: product1 },
  { id: "PRD-002", name: "Pigmentation Cream Mix", category: "Skincare", price: 65, stock: 45, status: "Active", image: product2 },
  { id: "PRD-003", name: "Natural Herbal Hair Oil", category: "Hair Care", price: 45, stock: 12, status: "Low Stock", image: product3 },
  { id: "PRD-004", name: "Luxury Skincare Bundle", category: "Sets", price: 150, stock: 30, status: "Active", image: product4 },
  { id: "PRD-005", name: "Saffron Face Mask", category: "Skincare", price: 55, stock: 0, status: "Out of Stock", image: product1 },
];

export default function AdminProducts() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Products</h1>
          <p className="text-muted-foreground mt-2">Manage your catalog, pricing, and inventory.</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-9 bg-secondary/50 border-transparent focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PRODUCTS.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="h-10 w-10 rounded overflow-hidden bg-secondary">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price.toFixed(2)} AED</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                      product.status === 'Low Stock' ? 'bg-amber-100 text-amber-800' :
                      'bg-rose-100 text-rose-800'
                    }`}>
                      {product.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4 text-destructive hover:text-destructive/80" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}