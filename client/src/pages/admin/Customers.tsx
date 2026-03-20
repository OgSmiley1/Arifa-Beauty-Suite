import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Mail } from "lucide-react";

const CUSTOMERS = [
  { id: "CUS-001", name: "Amina S.", email: "amina@example.com", phone: "+971 50 123 4567", orders: 3, joined: "Jan 15, 2024" },
  { id: "CUS-002", name: "Fatima R.", email: "fatima@example.com", phone: "+971 52 987 6543", orders: 1, joined: "Mar 22, 2024" },
  { id: "CUS-003", name: "Mariam K.", email: "mariam@example.com", phone: "+971 56 345 6789", orders: 5, joined: "Nov 05, 2023" },
  { id: "CUS-004", name: "Zainab A.", email: "zainab@example.com", phone: "+971 54 234 5678", orders: 2, joined: "Feb 10, 2024" },
  { id: "CUS-005", name: "Sara M.", email: "sara@example.com", phone: "+971 58 876 5432", orders: 0, joined: "Apr 01, 2024" },
];

export default function AdminCustomers() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Customers</h1>
          <p className="text-muted-foreground mt-2">Manage customer accounts and view their history.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search customers..." 
                className="pl-9 bg-secondary/50 border-transparent focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {CUSTOMERS.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>
                    <div className="text-sm">{customer.email}</div>
                    <div className="text-xs text-muted-foreground">{customer.phone}</div>
                  </TableCell>
                  <TableCell>{customer.joined}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View Profile
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