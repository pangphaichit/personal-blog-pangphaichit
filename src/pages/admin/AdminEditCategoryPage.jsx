import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom"; 
import React, { useState, useEffect } from "react"; 
import { AdminSidebar } from "@/components/AdminWebSection";

const FormInput = ({ id, label, placeholder, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
    />
  </div>
);

const DeleteButton = ({ onDelete }) => (
  <button
    className="underline underline-offset-2 hover:text-muted-foreground text-sm font-medium flex items-center gap-1 mt-6"
    onClick={onDelete}
  >
    <Trash2 className="h-5 w-5" />
    Delete Category
  </button>
);

export function AdminEditCategoryPage() {
    const { categoryName } = useParams();  // Access categoryName from URL params
    const [category, setCategory] = useState({ name: "" });
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchedCategory = { name: categoryName };  
      setCategory(fetchedCategory);
    }, [categoryName]);  
  
    const handleCategoryNameChange = (e) => setCategory({ ...category, name: e.target.value });
  
    const handleDeleteCategory = () => {
      console.log("Deleting category:", category.name);
      navigate("/admin/category-management"); 
    };
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Edit Category</h2>
          <Button className="px-8 py-2 rounded-full">Save</Button>
        </div>
        <div className="space-y-7 max-w-md">
          {/* Category Name Input */}
          <FormInput
            id="category-name"
            label="Category Name"
            placeholder="Category name"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </div>
        {/* Delete Category Button */}
        <DeleteButton onDelete={handleDeleteCategory} />
      </main>
    </div>
  );
}
