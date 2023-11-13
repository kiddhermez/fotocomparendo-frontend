import { Vehicle } from "@/api/interfaces/vehicle";
import { NextUI } from "@/app/providers";
import {
  Card,
  CardHeader,
  CardBody,
  ScrollShadow,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { BikeIcon, CarSideIcon, TruckIcon } from "../icons";

interface Props {
  vehicle: Vehicle[];
}

const colors: { [key: string]: string } = {
  Amarillo: "#e4e1af",
  Azul: "#afcfe4",
  Blanco: "#e4e4e4",
  Cafe: "#e4d1af",
  Gris: "#c4c4c4",
  Morado: "#d1afcf",
  Naranja: "#e4c7af",
  Negro: "#4c4c4c",
  Rojo: "#e47a7a",
  Verde: "#afe4af",
};

const vehicleTypes: { [key: string]: JSX.Element } = {
  Carro: <CarSideIcon />,
  Moto: <BikeIcon />,
  Camioneta: <TruckIcon />,
};

const VehiclesCard = ({ vehicle }: Props) => {
  return (
    <NextUI className="relative h-2/5 w-1/2">
      <Card className="relative h-full w-full bg-slate-300">
        <CardHeader className="flex h-1/6 w-full flex-row items-center justify-center bg-slate-300 text-lg text-slate-600">
          Vehiculos
        </CardHeader>
        <CardBody className="relative flex h-full w-full flex-col gap-10">
          <ScrollShadow className="flex h-full w-full flex-col gap-4 px-5 scrollbar-thin scrollbar-thumb-[#71869a] scrollbar-thumb-rounded-full">
            {vehicle.map((l) => (
              <div
                key={JSON.stringify(l)}
                className="flex flex-row items-center justify-center gap-5 rounded-lg bg-[#71869a] p-5"
              >
                <section style={{ fill: colors[l.color] }} className="w-1/4">
                  {vehicleTypes[l.tipo_vehiculo]}
                </section>
                <section className="flex w-3/4 flex-col">
                  <p className="w-full text-center text-2xl font-bold text-slate-50">
                    {l.placa}
                  </p>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">Color:</p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.color}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">Tipo:</p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.tipo_vehiculo}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">Marca:</p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.marca} - {l.linea}
                    </p>
                  </article>
                  <Divider className="my-2" />
                  <p className="w-full text-center text-2xl font-bold text-slate-50">
                    SOAT
                  </p>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Numero de Poliza:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.soat.nro_poliza}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">Costo:</p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      ${l.soat.costo}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Fecha de Vigencia:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.soat.fecha_vigencia.split("T")[0]}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Fecha de Vencimiento:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.soat.fecha_final.split("T")[0]}
                    </p>
                  </article>
                  <Divider className="my-2" />
                  <p className="w-full text-center text-2xl font-bold text-slate-50">
                    TECNOMECANICA
                  </p>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Numero de Acreditacion:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.tecnomecanica.nro_acreditacion}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Fecha de Expedicion:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.tecnomecanica.fecha_expedicion.split("T")[0]}
                    </p>
                  </article>
                  <article className="flex items-center justify-center gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Fecha de Vencimiento:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {l.tecnomecanica.fecha_vencimiento.split("T")[0]}
                    </p>
                  </article>
                </section>
              </div>
            ))}
          </ScrollShadow>
        </CardBody>
      </Card>
    </NextUI>
  );
};

export default VehiclesCard;
