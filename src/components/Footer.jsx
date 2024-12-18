import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
    return (
      
     <footer className="bg-[#EFEEEB] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 py-3">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 px-20 py-8">
        <span className="font-medium">Get in touch</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-muted-foreground">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-muted-foreground">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="hover:text-muted-foreground">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <a href="/" className="hover:text-muted-foreground font-medium underline px-20 py-8">
        Home page
      </a>
    </footer>

    );
  }