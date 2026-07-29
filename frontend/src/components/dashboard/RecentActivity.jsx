import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const activities = [
  "Added new client - Acme Inc.",
  "Created project - Portfolio Website",
  "Generated Invoice #1024",
  "Started timer for Mobile App",
];

function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              className="text-green-400"
              size={18}
            />

            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default RecentActivity;