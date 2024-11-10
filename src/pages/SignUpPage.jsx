import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function SignUpPage() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidName, setIsValidName] = useState(true);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
  
      if (!name.trim()) {
        setIsValidName(false);
        valid = false;
      } else {
        setIsValidName(true);
      }
  
      if (!username.trim()) {
        setIsValidUsername(false);
        valid = false;
      } else {
        setIsValidUsername(true);
      }
  
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
        setIsValidEmail(false);
        valid = false;
      } else {
        setIsValidEmail(true);
      }
  
      if (!password.trim()) {
        setIsValidPassword(false);
        valid = false;
      } else {
        setIsValidPassword(true);
      }
  
      if (valid) {
        console.log("Sign up successful:", { name, username, email, password });
        navigate("/sign-up/success");
      }
    };
  
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex justify-center items-center p-4 my-6 flex-grow">
          <div className="w-full max-w-2xl bg-[#EFEEEB] rounded-sm shadow-md px-3 sm:px-20 py-14">
            <h2 className="text-4xl font-semibold text-center mb-6 text-foreground">
              Sign up
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative space-y-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground ${
                    !isValidName ? "border-red-500" : ""
                  }`}
                />
                {!isValidName && (
                  <p className="text-red-500 text-xs absolute">
                    Please enter your name.
                  </p>
                )}
              </div>
              <div className="relative space-y-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Username
                </label>
                <Input
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground ${
                    !isValidUsername ? "border-red-500" : ""
                  }`}
                />
                {!isValidUsername && (
                  <p className="text-red-500 text-xs absolute">
                    Please enter a username.
                  </p>
                )}
              </div>
              <div className="relative space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground ${
                    !isValidEmail ? "border-red-500" : ""
                  }`}
                />
                {!isValidEmail && (
                  <p className="text-red-500 text-xs absolute">
                    Please enter a valid email.
                  </p>
                )}
              </div>
              <div className="relative space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground ${
                    !isValidPassword ? "border-red-500" : ""
                  }`}
                />
                {!isValidPassword && (
                  <p className="text-red-500 text-xs absolute">
                    Please enter a password.
                  </p>
                )}
              </div>
              <div className="flex justify-center py-2">
                <button
                  type="submit"
                  className="px-8 py-2 bg-foreground text-white rounded-full hover:bg-muted-foreground transition-colors"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="flex flex-row justify-center gap-1 text-sm text-center py-3 text-muted-foreground font-medium">
              Already have an account?{" "}
              <a
                onClick={() => navigate("/log-in")}
                className="text-foreground hover:text-muted-foreground transition-colors underline font-semibold cursor-pointer"
              >
                Log in
              </a>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }