import { Plus } from "lucide-react";
import { motion } from "framer-motion";

function AddClientButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-cyan-400"
    >
      <Plus size={20} />
      Add Client
    </motion.button>
  );
}

export default AddClientButton;