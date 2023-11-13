import {
  getDriversById,
  getLicenseById,
  getTicketsById,
  getVehiclesById,
} from "@/api";
import { UpWave } from "@/components/icons";
import Info from "@/components/info/info";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: drivers } = await getDriversById(id);
  const { data: vehicles } = await getVehiclesById(id);
  const { data: tickets } = await getTicketsById(id);
  const { data: licenses } = await getLicenseById(id);

  const noData: React.ReactNode = (
    <div className="flex h-screen w-screen items-center justify-center gap-2 text-xl text-slate-600">
      <b className="font-bold">Error 404:</b> Cedula {id} no encontrada
    </div>
  );

  return (
    <div>
      {drivers ? (
        <Info
          driver={drivers}
          license={licenses ?? []}
          vehicle={vehicles ?? []}
          ticket={tickets ?? []}
        />
      ) : (
        noData
      )}
      <UpWave className="absolute top-0 z-[-1] w-screen rotate-180 fill-slate-200/60 blur-sm" />
    </div>
  );
}
