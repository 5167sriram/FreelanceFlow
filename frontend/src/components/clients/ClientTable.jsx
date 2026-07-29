import { Mail, Phone } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Acme Inc.",
    email: "contact@acme.com",
    phone: "+91 9876543210",
    projects: 3,
  },
  {
    id: 2,
    name: "TechNova",
    email: "hello@technova.com",
    phone: "+91 9123456789",
    projects: 5,
  },
  {
    id: 3,
    name: "Creative Studio",
    email: "studio@gmail.com",
    phone: "+91 9988776655",
    projects: 2,
  },
];

function ClientTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left text-slate-300">Client</th>
            <th className="px-6 py-4 text-left text-slate-300">Email</th>
            <th className="px-6 py-4 text-left text-slate-300">Phone</th>
            <th className="px-6 py-4 text-left text-slate-300">Projects</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-t border-slate-800 hover:bg-slate-800/50 transition"
            >
              <td className="px-6 py-5 text-white font-medium">
                {client.name}
              </td>

              <td className="px-6 py-5 text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {client.email}
                </div>
              </td>

              <td className="px-6 py-5 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  {client.phone}
                </div>
              </td>

              <td className="px-6 py-5 text-cyan-400 font-semibold">
                {client.projects}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ClientTable;