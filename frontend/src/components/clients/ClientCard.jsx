import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  IndianRupee,
  Pencil,
  Trash2,
} from "lucide-react";

function ClientCard({
  name,
  company,
  email,
  phone,
  rate,
  status,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {name}
          </h3>

          <div className="mt-1 flex items-center gap-2 text-slate-400">
            <Building2 size={16} />
            <span>{company}</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-slate-300">
          <Mail size={18} className="text-cyan-400" />
          <span>{email}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <Phone size={18} className="text-cyan-400" />
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-300">
          <IndianRupee size={18} className="text-cyan-400" />
          <span>{rate}/hr</span>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
          {status}
        </span>

        <div className="flex gap-3">

          <button className="rounded-lg bg-blue-500/20 p-2 text-blue-400 transition hover:bg-blue-500 hover:text-white">
            <Pencil size={18} />
          </button>

          <button className="rounded-lg bg-red-500/20 p-2 text-red-400 transition hover:bg-red-500 hover:text-white">
            <Trash2 size={18} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}

export default ClientCard;