import { ImageIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdminSidebar } from "@/components/AdminWebSection";
import { Textarea } from "@/components/ui/textarea";

const FormInput = ({ id, label, placeholder, type = "text", disabled = false, value }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
    />
  </div>
);

const FormTextarea = ({ id, label, placeholder, rows = 3, maxLength, value }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Textarea
      id={id}
      placeholder={placeholder}
      rows={rows}
      maxLength={maxLength}
      value={value}
      className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
    />
  </div>
);

const FormSelect = ({ id, label, options, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Select value={value} onChange={onChange}>
      <SelectTrigger className="max-w-lg mt-1 py-3 rounded-sm text-muted-foreground focus:ring-0 focus:ring-offset-0 focus:border-muted-foreground">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export function AdminEditArticlePage() {
  const categories = [
    { label: "Cat", value: "cat" },
    { label: "General", value: "general" },
    { label: "Inspiration", value: "inspiration" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Edit article</h2>
          <div className="space-x-2">
            <Button className="px-8 py-2 rounded-full" variant="outline">
              Save as draft
            </Button>
            <Button className="px-8 py-2 rounded-full">Save</Button>
          </div>
        </div>

        <form className="space-y-7 max-w-4xl">
          {/* Thumbnail image section */}
          <div>
            <label htmlFor="thumbnail" className="block text-gray-700 font-medium mb-2">
              Thumbnail image
            </label>
            <div className="flex items-end space-x-4">
              <div className="flex justify-center items-center w-full max-w-lg h-64 px-6 py-20 border-2 border-gray-300 border-dashed rounded-md bg-gray-50">
                <div className="text-center space-y-2">
                  <ImageIcon className="mx-auto h-8 w-8 text-gray-400" />
                </div>
              </div>
              <label
                htmlFor="file-upload"
                className="px-8 py-2 bg-background rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors cursor-pointer"
              >
                <span>Upload thumbnail image</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
            </div>
          </div>

          {/* Category select */}
          <FormSelect
            id="category"
            label="Category"
            options={categories}
            value="cat"
            onChange={() => {}}
          />

          {/* Author input */}
          <FormInput id="author" label="Author name" placeholder="Sofia Blake" disabled />

          {/* Title input */}
          <FormInput id="title" label="Title" placeholder="Article title" />

          {/* Introduction textarea */}
          <FormTextarea
            id="introduction"
            label="Introduction (max 120 letters)"
            placeholder="Introduction"
            rows={3}
            maxLength={120}
          />

          {/* Content textarea */}
          <FormTextarea
            id="content"
            label="Content"
            placeholder="Content"
            rows={20}
          />
        </form>

        {/* Delete article button */}
        <button className="underline underline-offset-2 hover:text-muted-foreground text-sm font-medium flex items-center gap-1 mt-4">
          <Trash2 className="h-5 w-5" />
          Delete article
        </button>
      </main>
    </div>
  );
}
