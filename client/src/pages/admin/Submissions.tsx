import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, MailOpen, Trash2 } from "lucide-react";

const SUBMISSIONS = [
  { id: "SUB-001", name: "Sarah Jenkins", email: "sarah.j@example.com", subject: "Question about shipping", status: "New", date: "Today" },
  { id: "SUB-002", name: "Mohammed Al Fayed", email: "mohammed@example.com", subject: "Wholesale inquiry", status: "Reviewed", date: "Yesterday" },
  { id: "SUB-003", name: "Aisha K.", email: "aisha.k@example.com", subject: "Product availability", status: "Resolved", date: "Oct 24" },
  { id: "SUB-004", name: "Emma Thompson", email: "emma.t@example.com", subject: "Return request", status: "New", date: "Oct 22" },
];

export default function AdminSubmissions() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Contact Submissions</h1>
          <p className="text-muted-foreground mt-2">Manage inquiries from the contact form.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search submissions..." 
                className="pl-9 bg-secondary/50 border-transparent focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sender</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SUBMISSIONS.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell>
                    <div className="font-medium">{sub.name}</div>
                    <div className="text-xs text-muted-foreground">{sub.email}</div>
                  </TableCell>
                  <TableCell>{sub.subject}</TableCell>
                  <TableCell>{sub.date}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      sub.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      sub.status === 'Reviewed' ? 'bg-amber-100 text-amber-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {sub.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MailOpen className="h-4 w-4 text-muted-foreground hover:text-foreground" />
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