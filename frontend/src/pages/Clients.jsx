import ClientHeader from "../components/clients/ClientHeader";
import ClientTable from "../components/clients/ClientTable";
function Clients() {
  return (
    <div className="space-y-8">
      <ClientHeader />
      <ClientTable />
    </div>
  );
}

export default Clients;