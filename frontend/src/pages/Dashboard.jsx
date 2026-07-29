import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";

import {
  Briefcase,
  Users,
  DollarSign,
  FileText,
  UserPlus,
  FolderPlus,
  Clock3,
  Receipt,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <DashboardHeader />

      {/* Statistics */}
     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Active Projects"
          value="8"
          icon={Briefcase}
          color="bg-cyan-500"
        />

        <StatCard
          title="Clients"
          value="15"
          icon={Users}
          color="bg-blue-500"
        />

        <StatCard
          title="Revenue"
          value="₹48,500"
          icon={DollarSign}
          color="bg-green-500"
        />

        <StatCard
          title="Pending Invoices"
          value="6"
          icon={FileText}
          color="bg-orange-500"
        />

      </div>

      {/* Quick Actions */}
      <div>

        <h2 className="mb-5 text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <QuickActionCard
            title="New Client"
            icon={UserPlus}
          />

          <QuickActionCard
            title="New Project"
            icon={FolderPlus}
          />

          <QuickActionCard
            title="Start Timer"
            icon={Clock3}
          />

          <QuickActionCard
            title="Create Invoice"
            icon={Receipt}
          />

        </div>

      </div>
      {/* Activity Section */}

      <div className="grid gap-6 lg:grid-cols-2">

    <RecentActivity />

    <UpcomingDeadlines />

      </div>

    </div>
  );
}

export default Dashboard;