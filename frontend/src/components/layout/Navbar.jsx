import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/clients": "Clients",
    "/projects": "Projects",
    "/tasks": "Tasks",
    "/timer": "Timer",
    "/invoices": "Invoices",
    "/analytics": "Analytics",
    "/settings": "Settings",
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <h2 className="text-2xl font-bold text-white">
        {titles[location.pathname] || "FreelanceFlow"}
      </h2>
    </header>
  );
}

export default Navbar;