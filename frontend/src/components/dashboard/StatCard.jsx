import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/20"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div
          className={`rounded-xl p-3 ${color}`}
        >
          <Icon size={26} className="text-white" />
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;