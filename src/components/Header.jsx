import { Menu, Bell } from "lucide-react";
import { toast } from 'sonner';
import { X } from 'lucide-react';  
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdownmenu";
import SofiaLogo from "../assets/logo.png";
import MooDeng from "../assets/moo-deng.svg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Key, LogOut } from "lucide-react";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual login state

  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-8 bg-background border-b border-muted">
       <a href="#" onClick={() => navigate("/")} className="logo lg:pl-20">
        <img src={SofiaLogo} alt="Logo" className="h-12" />
        </a>
      {!isLoggedIn ? (
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={() => navigate("/log-in")}
            className="px-10 py-2 rounded-full border border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="px-9 py-2 rounded-full border border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors"
          >
            Sign up
          </button>
        </div>
      ) : (
        <div className="hidden sm:flex items-center space-x-4">
          <button className="ml-auto p-3.5 rounded-full border border-[#EFEEEB] bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground cursor-pointer transition-colors">
            <Bell className="h-4 w-4" />
          </button> 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 rounded-md text-sm font-medium text-foreground hover:text-muted-foreground focus:outline-none">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={ MooDeng }
                    alt="Moo Deng"
                  />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span>Moodeng ja</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-background rounded-sm shadow-sm p-1"
            >
              <DropdownMenuItem
                onClick={() => navigate("/profile")}
                className="text-sm text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground hover:rounded-sm cursor-pointer"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/reset-password")}
                className="text-sm text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground hover:rounded-sm cursor-pointer"
              >
                <Key className="mr-2 h-4 w-4" />
                <span>Reset password</span>
              </DropdownMenuItem>
              <div className="border-t border-muted m-1"></div>
              <DropdownMenuItem
                onClick={() => setIsLoggedIn(false)}
                className="text-sm text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground hover:rounded-sm cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger className="sm:hidden focus:outline-none">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:hidden w-screen rounded-none mt-4 flex flex-col gap-6 py-6 px-6">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/log-in")}
                className="px-8 py-4 rounded-full text-center text-foreground border  border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="px-8 py-4 rounded-full text-center text-foreground border  border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors"
              >
                Sign up
              </button>
            </>
          ) : (
            <div className="sm:hidden">
              <div className="space-y-2">
                <div className="flex items-center py-2">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={ MooDeng }
                      alt="Moo Deng"
                    />
                    <AvatarFallback>
                      <User className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-3 text-base font-medium text-foreground">
                    Moodeng ja
                  </span>
                  <button className="ml-auto p-3.5 rounded-full border border-[#EFEEEB] bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground cursor-pointer transition-colors">
                    <Bell className="h-4 w-4" />
                  </button>
                </div>
                <a
                  href="#"
                  onClick={() => navigate("/profile")}
                  className="flex items-center justify-between px-4 py-2 text-base font-medium text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground rounded-sm cursor-pointer transition-colors"
                >
                  <div className="flex items-center">
                    <User className="mr-4 h-5 w-5 " />
                    Profile
                  </div>
                </a>
                <a
                  href="#"
                  onClick={() => navigate("/reset-password")}
                  className="flex items-center justify-between px-4 py-2 text-base font-medium text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground rounded-sm cursor-pointer transition-colors"
                >
                  <div className="flex items-center">
                    <Key className="mr-4 h-5 w-5" />
                    Reset password
                  </div>
                </a>
                <div className="border-t border-muted"></div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center px-4 py-2 text-base font-medium text-foreground hover:bg-[#EFEEEB] hover:text-muted-foreground rounded-sm cursor-pointer transition-colors"
                >
               <LogOut className="mr-4 h-5 w-5" />
                   Log out
               </button>
              </div>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
