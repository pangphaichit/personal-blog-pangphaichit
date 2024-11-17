import * as React from "react"
import { PenSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminSidebar } from "@/components/AdminWebSection";
import { useNavigate } from "react-router-dom";

const articles = [
  { title: "Understanding Cat Behavior", category: "Cat", status: "Published" },
  { title: "The Fascinating World of Cats", category: "Cat", status: "Published" },
  { title: "Finding Motivation", category: "General", status: "Published" },
  { title: "The Science of the Cat's Purr", category: "Cat", status: "Published" },
  { title: "Top 10 Health Tips for Cats", category: "Cat", status: "Published" },
  { title: "Unlocking Creativity", category: "Inspiration", status: "Published" },
];

const Filters = () => {
  return (
    <div className="flex space-x-4 mb-6">
      {/* Search */}
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
        />
      </div>
      {/* Status Filter */}
      <Select>
        <SelectTrigger className="w-[180px] py-3 rounded-sm text-muted-foreground focus:ring-0 focus:ring-offset-0 focus:border-muted-foreground">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
        </SelectContent>
      </Select>
      {/* Category Filter */}
      <Select>
        <SelectTrigger className="w-[180px] py-3 rounded-sm text-muted-foreground focus:ring-0 focus:ring-offset-0 focus:border-muted-foreground">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cat">Cat</SelectItem>
          <SelectItem value="general">General</SelectItem>
          <SelectItem value="inspiration">Inspiration</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const ArticleRow = React.memo(({ article, onEdit }) => {
    return (
      <TableRow>
        <TableCell className="font-medium">{article.title}</TableCell>
        <TableCell>{article.category}</TableCell>
        <TableCell>
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            {article.status}
          </span>
        </TableCell>
        <TableCell className="text-right">
          <Button variant="ghost" size="sm" onClick={() => onEdit(article)}>
            <PenSquare className="h-4 w-4 hover:text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="sm">
            <Trash2 className="h-4 w-4 hover:text-muted-foreground" />
          </Button>
        </TableCell>
      </TableRow>
    );
  });

export function AdminArticleManagementPage() {
  const navigate = useNavigate();

  const handleEditArticle = (article) => {
    navigate(`/admin/article-management/edit/${article.title}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Article management</h2>
          <Button
            className="px-8 py-2 rounded-full"
            onClick={() => navigate("/admin/article-management/create")}
          >
            <PenSquare className="mr-2 h-4 w-4" /> Create article
          </Button>
        </div>

        {/* Filters Section */}
        <Filters />

        {/* Articles Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Article title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article, index) => (
              <ArticleRow
                key={index}
                article={article}
                onEdit={handleEditArticle} 
              />
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
