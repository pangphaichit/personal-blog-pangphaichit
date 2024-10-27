import axios from "axios";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  useEffect, useState } from "react";

export function BlogCard({ image, category, title, description, author, date, authorImage}) {
  const fallbackAuthorImage = "/womanwithcat.jpg"; 
    return (
      <div className="flex flex-col gap-4 mt-8">
        <a href="#" className="relative h-[212px] sm:h-[360px]">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt={title}
          />
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
              {category}
            </span>
          </div>
          <a href="#">
            <h2 className="font-bold text-xl mb-2 line-clamp-2 hover:underline">
              {title}
            </h2>
          </a>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-sm">
            <img
              className="w-8 h-8 rounded-full mr-2 object-cover"
              src={authorImage || fallbackAuthorImage}
              alt={author}
            />
            <span className="font-semibold text-base text-gray-700">{author}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }

export function Article() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts`
        );
        setAllPosts(response.data.posts); 
        setPosts(response.data.posts); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPosts =
      category === "Highlight"
        ? allPosts 
        : allPosts.filter((post) => post.category === category); 
    setPosts(filteredPosts);
  }, [category, allPosts]);

  return (
    <div className="w-full mx-auto md:px-6 lg:px-20 mb-20 px-4 ">
      <h2 className="text-xl font-bold mb-4 px-4">Latest articles</h2>
      <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row-reverse md:items-center md:space-y-0 md:justify-between">
        
        <div className="w-full md:max-w-sm">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
            />
          </div>
        </div>
        <div className="md:hidden w-full">
        <Select
            value={category}
            onValueChange={(value) => setCategory(value)}
          >
            <SelectTrigger className="w-full py-3 rounded-sm text-muted-foreground">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => {
                return (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden md:flex space-x-2">
        {categories.map((cat) => (<button key={cat} onClick={() => setCategory(cat)}
              className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
                category === cat ? "bg-[#DAD6D1]" : "hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-0 gap-y-2">
      {posts.map((post, index) => (
          <BlogCard
            key={index}
            id={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author="Sofia Blake."
            authorImage={post.authorImage}
            date={new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />
        ))}
      </article>
    </div>
  );
}