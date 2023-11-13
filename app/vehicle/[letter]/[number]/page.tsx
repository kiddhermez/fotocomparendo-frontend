import {
  getDriversByPlate,
  getVehiclesByPlate,
  getTicketsByPlate,
  getLicenseByPlate,
} from "@/api";
import { UpWave } from "@/components/icons";
import Info from "@/components/info/info";

export default async function Page({
  params,
}: {
  params: { letter: string; number: string };
}) {
  const { letter, number } = params;
  const { data: vehicles } = await getVehiclesByPlate(letter, number);
  const { data: drivers } = await getDriversByPlate(letter, number);
  const { data: tickets } = await getTicketsByPlate(letter, number);
  const { data: licenses } = await getLicenseByPlate(letter, number);
  const noData: React.ReactNode = (
    <div className="flex h-screen w-screen items-center justify-center gap-2 text-xl text-slate-600">
      <b className="font-bold">Error 404:</b> Vehiculo {letter}-{number} no
      encontrado
    </div>
  );

  return (
    <div>
      {vehicles ? (
        <Info
          driver={drivers ?? []}
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
