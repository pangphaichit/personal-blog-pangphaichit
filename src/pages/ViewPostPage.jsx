import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ViewPost} from "@/components/ViewPost";

export function ViewPostPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <ViewPost />
      </div>
      <Footer />
    </div>
  );
}

