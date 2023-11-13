import { Driver } from "@/api/interfaces/driver";
import { License } from "@/api/interfaces/license";
import { Ticket } from "@/api/interfaces/ticket";
import { Vehicle } from "@/api/interfaces/vehicle";
import React from "react";
import DriverCard from "./driverCard";
import LicenseCard from "./licenseCard";
import TicketsCard from "./ticketsCard";
import VehiclesCard from "./vehiclesCard";

interface Props {
  driver: Driver[];
  license: License[];
  vehicle: Vehicle[];
  ticket: Ticket[];
}

const Info = ({ driver, license, vehicle, ticket: tickets }: Props) => {
  return (
    <div className="z-50 flex h-[150vh] w-screen flex-wrap content-center items-start justify-center gap-5">
      <DriverCard driver={driver[0]} />
      <LicenseCard license={license || []} />
      <VehiclesCard vehicle={vehicle || []} />
      <TicketsCard ticket={tickets || []} />
    </div>
  );
};

export default Info;
