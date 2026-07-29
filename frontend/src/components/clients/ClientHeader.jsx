import AddClientButton from "./AddClientButton";
import ClientSearch from "./ClientSearch";

function ClientHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Clients
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all your clients in one place.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex gap-4">
        <ClientSearch />
        <AddClientButton />
      </div>

    </div>
  );
}

export default ClientHeader;