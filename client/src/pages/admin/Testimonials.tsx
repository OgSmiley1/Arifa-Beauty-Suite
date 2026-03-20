import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

const TESTIMONIALS = [
  { id: "TST-001", customer: "Amina S.", product: "Pigmentation Cream Mix", rating: 5, status: "Featured" },
  { id: "TST-002", customer: "Fatima R.", product: "Authentic Henna Paste", rating: 5, status: "Featured" },
  { id: "TST-003", customer: "Mariam K.", product: "Natural Herbal Hair Oil", rating: 5, status: "Featured" },
  { id: "TST-004", customer: "Sara M.", product: "Saffron Face Mask", rating: 4, status: "Hidden" },
];

export default function AdminTestimonials() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Testimonials</h1>
          <p className="text-muted-foreground mt-2">Manage customer reviews and TikTok results.</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search testimonials..." 
                className="pl-9 bg-secondary/50 border-transparent focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TESTIMONIALS.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.customer}</TableCell>
                  <TableCell>{t.product}</TableCell>
                  <TableCell>
                    <div className="flex text-amber-600 text-xs">
                      {"★".repeat(t.rating)}{"☆".repeat(5-t.rating)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      t.status === 'Featured' ? 'bg-emerald-100 text-emerald-800' : 'bg-secondary text-muted-foreground'
                    }`}>
                      {t.status}
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