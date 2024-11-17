import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AdminSidebar } from "@/components/AdminWebSection";

const InputField = ({ id, label, value, disabled = false, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
      {label}
    </label>
    <Input id={id} value={value} disabled={disabled} className="mt-1 max-w-lg" {...props} />
  </div>
);

const TextareaField = ({ id, label, maxLength, rows, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
      {label} {maxLength && `(max ${maxLength} letters)`}
    </label>
    <Textarea
      id={id}
      rows={rows}
      maxLength={maxLength}
      className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
      {...props}
    />
  </div>
);

const FileUpload = () => (
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
);

export const AdminCreateArticlePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create article</h2>
          <div className="space-x-2">
            <Button className="px-8 py-2 rounded-full" variant="outline">
              Save as draft
            </Button>
            <Button className="px-8 py-2 rounded-full">Save and publish</Button>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-7 max-w-4xl">
          {/* File Upload Section */}
          <FileUpload />

          {/* Category Selection */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <Select>
              <SelectTrigger className="max-w-lg mt-1 py-3 rounded-sm text-muted-foreground focus:ring-0 focus:ring-offset-0 focus:border-muted-foreground">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="inspiration">Inspiration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Author Field */}
          <InputField id="author" label="Author name" value="Sofia Blake" disabled />

          {/* Title Field */}
          <InputField
            id="title"
            label="Title"
            placeholder="Article title"
            className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
          />

          {/* Introduction Field */}
          <TextareaField
            id="introduction"
            label="Introduction"
            maxLength={120}
            rows={3}
            placeholder="Introduction"
          />

          {/* Content Field */}
          <TextareaField
            id="content"
            label="Content"
            rows={20}
            placeholder="Content"
          />
        </form>
      </main>
    </div>
  );
};


