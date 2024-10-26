import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownmenu";

export function Header() {
    return (
      
      <header className="flex items-center bg-white border-b justify-between h-16 px-6">
        <div className="logo lg:pl-20">
        <img src="/hh..svg" alt="Logo" className="h-6" />
        </div>
        <nav className="flex items-center lg:pr-20">
         <ul className="nav-list justify-end hidden sm:flex space-x-4">
            <li className="hidden sm:flex space-x-4">
            <a href="/login" className="px-9 py-3 rounded-full border border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors">Log in</a>
            </li>
            <li className="hidden md:flex space-x-4">
            <a href="/login" className="px-8 py-3  rounded-full border border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors"> Sign up</a>
            </li>
          </ul>
          <DropdownMenu className="flex">
          <DropdownMenuTrigger className="sm:hidden focus:outline-none">
          <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="sm:hidden w-screen rounded-none mt-4 flex flex-col gap-6 py-10 px-6">
          <a href="/login" className="px-8 py-4 rounded-full text-center text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors">
            Log in
          </a>
          <a
            href="/signup" className="px-8 py-4 bg-foreground text-center text-white rounded-full hover:bg-muted-foreground transition-colors">
            Sign up
          </a>
        </DropdownMenuContent>
      </DropdownMenu>
        </nav>
      </header>
    );
  }