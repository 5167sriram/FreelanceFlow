import { motion } from "framer-motion";

function QuickActionCard({
  title,
  icon: Icon,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
      >
      <div className="rounded-xl bg-cyan-500/20 p-3">
        <Icon
          size={24}
          className="text-cyan-400"
        />
      </div>

      <span className="text-lg font-medium text-white">
        {title}
      </span>
    </motion.button>
  );
}

export default QuickActionCard;