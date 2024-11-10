import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MooDeng from "../assets/moo-deng.svg";
import { User, Lock } from "lucide-react";

function ProfileAvatar({ src, alt, size = "14" }) {
  return (
    <Avatar className={`h-${size} w-${size}`}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  );
}

function ProfileFormField({ id, label, value, onChange, disabled = false }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
      />
    </div>
  );
}

export function ProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("Moodeng ja");
  const [username, setUsername] = useState("moodeng.cute");
  const [email, setEmail] = useState("moodeng.cute@gmail.com");
  const [profileImage, setProfileImage] = useState(MooDeng);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];  
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="min-h-screen md:p-8">
        <div className="max-w-4xl mx-auto overflow-hidden">
          {/* Header for larger screens */}
          <div className="hidden md:flex items-center p-6">
          <ProfileAvatar src={profileImage} alt="Moodeng ja" size="14" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">Moodeng ja</h1>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden p-4">
            <div className="flex justify-start gap-12 items-center mb-4">
              <div className="flex items-center space-x-2 text-foreground font-medium cursor-default">
                <User className="h-5 w-5 mb-1" />
                <span>Profile</span>
              </div>
              <a
                onClick={() => navigate("/reset-password")}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                <Lock className="h-5 w-5 mb-1" />
                Reset password
              </a>
            </div>
            <div className="flex items-center">
              <ProfileAvatar src={MooDeng} alt="Moodeng ja" size="10" />
              <h2 className="ml-3 text-xl font-semibold">Moodeng ja</h2>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar (for larger screens) */}
            <aside className="hidden md:block w-64 p-6">
              <nav>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-foreground font-medium cursor-default">
                    <User className="h-5 w-5 mb-1" />
                    <span>Profile</span>
                  </div>
                  <a
                    onClick={() => navigate("/reset-password")}
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    <Lock className="h-5 w-5 mb-1" />
                    Reset password
                  </a>
                </div>
              </nav>
            </aside>

            {/* Profile Form (Main Area) */}
            <main className="flex-1 p-8 bg-[#EFEEEB] md:m-2 md:shadow-md md:rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-start md:gap-6 mb-6">
                 <ProfileAvatar src={profileImage} alt="Profile" size="28" />
                 <label className="bg-background mt-4 px-8 py-2 rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors cursor-pointer">
                  Upload profile picture
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden" 
                  />
                </label>
              </div>

              <form className="space-y-4">
                <ProfileFormField
                  id="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <ProfileFormField
                  id="username"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <ProfileFormField
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
                <button
                  type="submit"
                  className="px-8 py-2 mt-2 bg-foreground text-white rounded-full hover:bg-muted-foreground transition-colors"
                >
                  Save
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
