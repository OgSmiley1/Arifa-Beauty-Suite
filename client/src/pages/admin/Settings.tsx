import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-foreground">Site Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your store's general information and policies.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
              <CardDescription>Basic details about your business.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Name</label>
                <Input defaultValue="Arifa Cosmetics" className="bg-secondary/50 border-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tagline</label>
                <Input defaultValue="Luxury skincare, authentic henna, and custom cosmetics" className="bg-secondary/50 border-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">About Text</label>
                <Textarea 
                  defaultValue="Arifa Cosmetics was founded with a passion for authentic beauty traditions. Based in the UAE, we specialize in high-quality, natural cosmetics."
                  className="bg-secondary/50 border-transparent min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
              <CardDescription>How customers can reach you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input defaultValue="contact@arifacosmetics.ae" className="bg-secondary/50 border-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input defaultValue="0561121834" className="bg-secondary/50 border-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">WhatsApp</label>
                  <Input defaultValue="+971 52 365 2588" className="bg-secondary/50 border-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">TikTok URL</label>
                  <Input defaultValue="https://www.tiktok.com/@arifa.cosmetics" className="bg-secondary/50 border-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8">
            Save Settings
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}