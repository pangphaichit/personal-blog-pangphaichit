import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { HomePage } from "./pages/HomePage";
import { ViewPostPage } from "./pages/ViewPostPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignUpSuccessPage } from "./pages/SignUpSuccessPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminResetPasswordPage } from "./pages/admin/AdminResetPasswordPage";
import { AdminProfilePage } from "./pages/admin/AdminProfilePage";
import { AdminNotificationPage } from "./pages/admin/AdminNotificationPage";
import { AdminArticleManagementPage } from "./pages/admin/AdminArticlePage";
import { AdminEditArticlePage } from "./pages/admin/AdminEditArticlePage";
import { AdminCreateArticlePage } from "./pages/admin/AdminCreateArticle";
import { AdminCategoryManagementPage } from "./pages/admin/AdminCategoryPage";
import { AdminCreateCategoryPage } from "./pages/admin/AdminCreateCategoryPage";
import { AdminEditCategoryPage } from "./pages/admin/AdminEditCategoryPage";

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
           {/* Admin Section */}
           <Route path="/admin/log-in" element={<AdminLoginPage />} />
           <Route path="/admin/reset-password"element={<AdminResetPasswordPage />} />
           <Route path="/admin/profile" element={<AdminProfilePage />} />
           <Route path="/admin/notification"element={<AdminNotificationPage />} />
           <Route path="/admin/article-management" element={< AdminArticleManagementPage />} />
           <Route path="/admin/article-management/edit/:postId" element={<AdminEditArticlePage />} />
           <Route path="/admin/article-management/create" element={<AdminCreateArticlePage />} />
           <Route path="/admin/category-management" element={<AdminCategoryManagementPage />} />
           <Route path="/admin/category-management/edit/:categoryName" element={<AdminEditCategoryPage />} />
           <Route path="/admin/category-management/create" element={<AdminCreateCategoryPage />}
          />
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

