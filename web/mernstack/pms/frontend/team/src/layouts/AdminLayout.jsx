import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import useAuth from '../store/useAuth'
import { Button } from '../components/ComponentLib'
import { Bell, FolderKanban, LayoutDashboard, ListTodo, LogOut, UserRound, Users } from 'lucide-react'
// manager layout
const AdminLayout = ({children}) => {
  const user = useAuth((state) => state.user)
  const logout = useAuth((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/auth/login', {replace: true})
  }
  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Employees", path: "/employees", icon: UserRound },
    { name: "Tasks", path: "/tasks", icon: ListTodo },
  ];
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white">
        
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-gray-100 px-6">
          <h1 className="text-xl font-bold">
            pms
          </h1>
        </div>

        {/* Side Navigation */}
        <nav className="p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-purple-600 text-white"
                        : "text-slate-700 hover:bg-slate-900 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Main */}
      <div className="ml-64">

        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex h-20 items-center justify-end bg-white px-6">
          
          {/* <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Dashboard
            </h2>
          </div> */}

          <div className="flex items-center gap-5">
            <button className="text-slate-500 hover:text-slate-800">
              <Bell size={21} />
            </button>

            <Button 
            title={<LogOut size={21} />}
            onClick={handleLogout}
            className="flex p-2 items-center justify-center rounded-full shadow-lg cursor-pointer bg-red-600 text-sm font-semibold text-white" />
          </div>
        </header>

        {/* Content */}
        <main className="min-h-[calc(100vh-5rem)] p-6">
          {children}
        </main>

      </div>
    </div>
  )
}

export default AdminLayout