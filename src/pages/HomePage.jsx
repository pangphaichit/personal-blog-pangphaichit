import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Article } from "@/components/Article";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header  />
      <div className="flex-grow">
        <HeroSection />
        <Article />
      </div>
      <Footer />
    </div>
  );
}

