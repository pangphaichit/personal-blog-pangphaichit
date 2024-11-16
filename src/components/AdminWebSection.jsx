import {
    Bell,
    FileText,
    FolderOpen,
    Key,
    LogOut,
    User,
    Globe,
  } from "lucide-react";
  import { useLocation, Link } from "react-router-dom";
  
  function SidebarLink({ to, isActive, icon: Icon, children }) {
    return (
      <Link
        to={to}
        className={`flex items-center px-4 py-2 ${
          isActive
            ? "bg-gray-200 text-gray-700"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon className="mr-3 h-5 w-5" />
        {children}
      </Link>
    );
  }
  
  export function AdminSidebar() {
    const location = useLocation();
  
    const isActive = (basePath) => location.pathname.startsWith(basePath);
  
    return (
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">
            Sofia Blake<span className="text-green-400">.</span>
          </h1>
          <p className="text-xl font-semibold text-orange-400">Admin panel</p>
        </div>
        <nav className="mt-6">
          <SidebarLink to="/admin/article-management" isActive={isActive("/admin/article-management")} icon={FileText}>
            Article management
          </SidebarLink>
          <SidebarLink to="/admin/category-management" isActive={isActive("/admin/category-management")} icon={FolderOpen}>
            Category management
          </SidebarLink>
          <SidebarLink to="/admin/profile" isActive={isActive("/admin/profile")} icon={User}>
            Profile
          </SidebarLink>
          <SidebarLink to="/admin/notification" isActive={isActive("/admin/notification")} icon={Bell}>
            Notification
          </SidebarLink>
          <SidebarLink to="/admin/reset-password" isActive={isActive("/admin/reset-password")} icon={Key}>
            Reset password
          </SidebarLink>
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-gray-200 py-2">
          <SidebarLink to="/" isActive={false} icon={Globe}>
            Go to the website
          </SidebarLink>
          <SidebarLink to="/" isActive={false} icon={LogOut}>
            Log out
          </SidebarLink>
        </div>
      </aside>
    );
  }
  