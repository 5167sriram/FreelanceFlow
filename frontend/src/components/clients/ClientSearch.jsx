import { Search } from "lucide-react";

function ClientSearch() {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-3 text-slate-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search clients..."
        className="w-72 rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
      />

    </div>
  );
}

export default ClientSearch;