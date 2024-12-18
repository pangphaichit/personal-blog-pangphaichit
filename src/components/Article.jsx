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
import { Loader2 } from "lucide-react";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SofiaImage from "../assets/author-image.jpg";

export function BlogCard({ id, image, category, title, description, author, date, authorImage}) {
  const navigate = useNavigate();
  const fallbackAuthorImage = SofiaImage; 
    return (
      <div className="flex flex-col gap-4 mt-8">
        <a href="#" onClick={() => navigate(`/post/${id}`)} className="relative h-[212px] sm:h-[360px]">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt={title}
          />
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span className="bg-sky-50 text-stone-600 rounded-full px-3 py-1 text-sm font-semibold mb-2">
              {category}
            </span>
          </div>
          <a href="#" onClick={() => navigate(`/post/${id}`)}>
            <h2 className="font-bold text-xl mb-2 line-clamp-2 hover:underline hover:text-cyan-600">
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
            <span className="font-semibold text-sm text-gray-700">{author}</span>
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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const limit = 6;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6${
            category !== "Highlight" ? `&category=${category}` : ""
          }`
        );
  
        if (page === 1) {
          setPosts(response.data.posts);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
        }

        setHasMore(response.data.posts.length === limit); 
      } catch (error) {
        console.log(error);
      }finally {
          setLoading(false);
        }
    };

    fetchPosts();
  }, [page, category]);
  
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (searchKeyword.length > 0) {
      setLoading(true);
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `https://blog-post-project-api.vercel.app/posts?keyword=${searchKeyword}`
          );
          setSuggestions(response.data.posts); 
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); 
    }
  }, [searchKeyword]);

  return (
    <div className="w-full mx-auto md:px-6 lg:px-20 mb-20">
      <h2 className="text-xl font-bold mb-4 px-4">Latest articles</h2>
      <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4 md:flex-row-reverse md:items-center md:space-y-0 md:justify-between">
        
        <div className="w-full md:max-w-sm">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
              onChange={(e) => setSearchKeyword(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => {
                setTimeout(() => {
                  setShowDropdown(false);
                }, 200);
              }}
            />
            {!loading &&
              showDropdown &&
              searchKeyword &&
              suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-2 bg-background rounded-sm shadow-lg p-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="text-start px-4 py-2 block w-full text-sm text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground hover:rounded-sm cursor-pointer"
                      onClick={() => navigate(`/post/${suggestion.id}`)}
                    >
                      {suggestion.title}
                    </button>
                  ))}
                </div>
              )}
          </div>
        </div>
        <div className="md:hidden w-full">
        <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              setPage(1); 
            }}
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
        {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setPage(1); 
              }}
              className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
                category === cat ? "bg-[#DAD6D1]" : "hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-0 gap-y-2 px-4">
      {loading && page === 1 ? (
        <div className="col-span-full flex flex-col justify-center items-center h-40 w-full">
           <Loader2 className="w-12 h-12 animate-spin text-foreground" />
          <p>Loading...</p> 
        </div>
        ) : (
      posts.map((post, index) => (
          <BlogCard
            key={index}
            id={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author="Sofia Blake"
            authorImage={post.authorImage}
            date={new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />
        ))
      )}
      </article>

      <div className="text-center mt-16">  
      {loading && page > 1 && (
    <>
      <div className="col-span-full flex flex-col justify-center items-center h-40 w-full">
      <Loader2 className="w-12 h-12 animate-spin text-foreground mb-2" />
      <p>Loading more posts...</p>
      </div>
    </>
  )}
  {!loading && hasMore && posts.length > 0 && (
    <button
      onClick={handleLoadMore}
      className="font-medium mt-4 px-10 py-3 border rounded-lg border-slate-300 bg-white text-slate-800 hover:bg-gray-400 hover:text-white transition-colors"
    >
      View More
    </button>
  )}
    </div>
      
    </div>
  );
}