import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminSidebar } from "@/components/AdminWebSection";

const FormInput = ({ id, label, placeholder, type = "text" }) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
    />
  </div>
);

export function AdminCreateCategoryPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create Category</h2>
          <Button className="px-8 py-2 rounded-full">Save</Button>
        </div>

        <div className="space-y-7 max-w-md">
          {/* Category Name Input */}
          <FormInput
            id="category-name"
            label="Category Name"
            placeholder="Enter category name"
            type="text"
          />
        </div>
      </main>
    </div>
  );
}
