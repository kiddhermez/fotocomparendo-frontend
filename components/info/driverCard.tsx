"use client";
import { Driver } from "@/api/interfaces/driver";
import { NextUI } from "@/app/providers";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { differenceInYears } from "date-fns";
import React from "react";

interface Props {
  driver: Driver;
}

const DriverCard = ({ driver }: Props) => {
  return (
    <NextUI className="relative h-1/3 w-1/2">
      <Card className="relative h-full w-full bg-slate-600/60">
        <CardHeader className="flex h-1/5 w-full flex-row items-center justify-center bg-slate-300 text-lg text-slate-600">
          Cedula de Ciudadania
        </CardHeader>
        <CardBody className="flex h-full w-full flex-row gap-10 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
          <Avatar
            size="lg"
            radius="sm"
            showFallback
            src="https://images.unsplash.com/broken"
            className="h-full w-1/3 opacity-60"
          />
          <div className="w-1/2">
            <p className="w-full text-center text-2xl font-bold text-slate-50">
              C.C {driver.cedula ?? driver.Cedula}
            </p>
            <p className="w-full text-lg text-slate-50">Apellidos:</p>
            <p className="pl-5 text-xl text-slate-50">
              {driver.apellido1} {driver.apellido2}
            </p>
            <p className="w-full text-lg text-slate-50">Nombres:</p>
            <p className="pl-5 text-xl text-slate-50">
              {driver.nombre1 ?? driver.Nombre1}{" "}
              {driver.nombre2 ?? driver.Nombre2}
            </p>
            <p className="w-full text-lg text-slate-50">Fecha de Nacimiento:</p>
            <p className="pl-5 text-xl text-slate-50">
              {driver.fecha_nacimiento.split("T")[0]} (
              {differenceInYears(new Date(), new Date(driver.fecha_nacimiento))}{" "}
              años)
            </p>
          </div>
        </CardBody>
      </Card>
    </NextUI>
  );
};

export default DriverCard;
