import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";

const deadlines = [
  "Website Redesign - Tomorrow",
  "Invoice Submission - Friday",
  "Logo Design - Aug 2",
];

function UpcomingDeadlines() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
    >
      <h2 className="mb-6 text-xl font-bold text-white">
        Upcoming Deadlines
      </h2>

      <div className="space-y-5">
        {deadlines.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <CalendarClock
              size={18}
              className="text-orange-400"
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

export default UpcomingDeadlines;