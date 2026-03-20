import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2, ArrowUp, ArrowDown } from "lucide-react";

import product1 from "@assets/Screenshot_20260319-234309_TikTok_1773954622729.jpg";
import product2 from "@assets/Screenshot_20260319-234307_TikTok_1773954622753.jpg";

const SLIDES = [
  { id: "SLD-001", title: "Discover the Secret to Flawless Skin", subtitle: "UAE Licensed Seller", image: product2, ctaText: "Shop The Collection", status: "Active", order: 1 },
  { id: "SLD-002", title: "Authentic Henna Art", subtitle: "Rich, Long-lasting Color", image: product1, ctaText: "Explore Henna", status: "Active", order: 2 },
];

export default function AdminSlides() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Slideshow</h1>
          <p className="text-muted-foreground mt-2">Manage the hero section slides on your homepage.</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Slide
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Order</TableHead>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SLIDES.map((slide) => (
                <TableRow key={slide.id}>
                  <TableCell>
                    <div className="flex flex-col items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ArrowUp className="h-3 w-3" />
                      </Button>
                      <span className="text-xs font-medium">{slide.order}</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ArrowDown className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="h-12 w-20 rounded overflow-hidden bg-secondary">
                      <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-sm">{slide.title}</div>
                    <div className="text-xs text-muted-foreground">{slide.subtitle}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1 border border-border inline-block px-1 bg-secondary">CTA: {slide.ctaText}</div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      slide.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-secondary text-muted-foreground'
                    }`}>
                      {slide.status}
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