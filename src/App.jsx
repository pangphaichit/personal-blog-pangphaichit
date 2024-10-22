
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import {Article} from "./components/Article";
import {Footer} from "./components/Footer";



function App() {
return (
    <>
    <div>
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <Article />
      </div>
      <Footer />
     </div>
    </>
  );
}

export default App;

