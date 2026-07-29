import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  Timer,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Clients", path: "/clients", icon: Users },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Tasks", path: "/tasks", icon: CheckSquare },
  { name: "Timer", path: "/timer", icon: Timer },
  { name: "Invoices", path: "/invoices", icon: FileText },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">
      <div className="p-8">
        <h1 className="text-3xl font-black text-cyan-400">
          FreelanceFlow
        </h1>
      </div>

     <nav className="flex-1 space-y-2 px-4">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <item.icon size={20} />

            {item.name}
          </NavLink>
        ))}

      </nav>

     <div className="mt-auto p-4">

        <button className="flex w-full items-center gap-3 rounded-xl bg-red-500/20 px-4 py-3 text-red-400 hover:bg-red-500/30">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;