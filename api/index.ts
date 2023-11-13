import { apiGet } from "./apiGet";
import { Driver } from "./interfaces/driver";
import { License } from "./interfaces/license";
import { Ticket } from "./interfaces/ticket";
import { Vehicle } from "./interfaces/vehicle";

async function getByDriver<T>(id: string, url: string) {
  return await apiGet<T>(`${url}/driver/${id}`);
}

async function getByPlate<T>(
  plate_letter: string,
  plate_number: string,
  url: string,
) {
  return await apiGet<T>(`${url}/plate/${plate_letter}/${plate_number}`);
}

// * Driver
export const getDriversById = async (id: string) =>
  await apiGet<Driver>(`driver/id/${id}`);
export const getDriversByPlate = async (
  plate_letter: string,
  plate_number: string,
) => await getByPlate<Driver>(plate_letter, plate_number, "driver");

// * Vehicle
export const getVehiclesById = async (id: string) =>
  await getByDriver<Vehicle>(id, "vehicle");
export const getVehiclesByPlate = async (
  plate_letter: string,
  plate_number: string,
) => await getByPlate<Vehicle>(plate_letter, plate_number, "vehicle");

// * Ticket
export const getTicketsById = async (id: string) =>
  await getByDriver<Ticket>(id, "ticket");
export const getTicketsByPlate = async (
  plate_letter: string,
  plate_number: string,
) => await getByPlate<Ticket>(plate_letter, plate_number, "ticket");

// * License
export const getLicenseById = async (id: string) =>
  await getByDriver<License>(id, "license");
export const getLicenseByPlate = async (
  plate_letter: string,
  plate_number: string,
) => await getByPlate<License>(plate_letter, plate_number, "license");
