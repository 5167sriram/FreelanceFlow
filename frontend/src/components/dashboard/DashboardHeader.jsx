import { motion } from "framer-motion";

function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h1 className="text-4xl font-bold text-white">
        {greeting}, Freelancer 👋
      </h1>

      <p className="mt-3 text-slate-400 text-lg">
        Here's an overview of your business today.
      </p>
    </motion.div>
  );
}

export default DashboardHeader;