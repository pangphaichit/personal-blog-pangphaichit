import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ViewPostPage } from "./pages/ViewPostPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/admin/LoginPage";
import { SignUpPage } from "./pages/admin/SignUpPage";
import { SignUpSuccessPage } from "./pages/admin/SignUpSuccessPage";
import { Toaster } from "sonner";

function App() {
return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<ViewPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-up/success" element={<SignUpSuccessPage />} />
          <Route path="/log-in" element={<LoginPage />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          unstyled: true,
        }}
      />
    </div>
  );
}

export default App;

