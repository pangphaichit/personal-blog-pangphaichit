import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdminSidebar } from "@/components/AdminWebSection";
import SofiaImage from "../../assets/author-image.jpg";

function ProfileAvatar() {
  return (
    <div className="flex items-center mb-6">
      <Avatar className="w-24 h-24 mr-4">
        <AvatarImage src={SofiaImage} alt="A woman with a cat on her back." className="object-cover" />
        <AvatarFallback>TP</AvatarFallback>
      </Avatar>
      <Button variant="outline">Upload profile picture</Button>
    </div>
  );
}

function FormField({ label, id, type = "text", defaultValue, rows }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          defaultValue={defaultValue}
          rows={rows}
          className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
        />
      ) : (
        <Input
          id={id}
          type={type}
          defaultValue={defaultValue}
          className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
        />
      )}
    </div>
  );
}

export function AdminProfilePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <Button className="px-8 py-2 rounded-full">Save</Button>
        </div>

        <div>
          <ProfileAvatar />

          <form className="space-y-7 max-w-2xl">
            <FormField
              label="Name"
              id="name"
              defaultValue="Sofia Blake"
            />
            <FormField
              label="Username"
              id="username"
              defaultValue="Sofia"
            />
            <FormField
              label="Email"
              id="email"
              type="email"
              defaultValue="sofia.blake@gmail.com"
            />
            <FormField
              label="Bio (max 120 letters)"
              id="bio"
              type="textarea"
              defaultValue="I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.

When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes."
              rows={10}
            />
          </form>
        </div>
      </main>
    </div>
  );
}
