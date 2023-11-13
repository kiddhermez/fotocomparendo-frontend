"use client";
import { License } from "@/api/interfaces/license";
import { NextUI } from "@/app/providers";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  ScrollShadow,
} from "@nextui-org/react";
import React from "react";

interface Props {
  license: License[];
}

const LicenseCard = ({ license }: Props) => {
  return (
    <NextUI className="relative h-1/3 w-2/5">
      <Card className="relative h-full w-full bg-slate-300">
        <CardHeader className="flex h-1/6 w-full flex-row items-center justify-center bg-slate-300 text-lg text-slate-600">
          Licencias
        </CardHeader>
        <CardBody className="relative flex h-full w-full flex-col gap-10">
          <ScrollShadow className="flex h-full w-full flex-col gap-4 px-5 scrollbar-thin scrollbar-thumb-[#71869a] scrollbar-thumb-rounded-full">
            {license.map((l) => (
              <div
                key={JSON.stringify(l)}
                className="flex flex-col gap-2 rounded-lg bg-[#71869a] p-5"
              >
                <p className="w-full text-center text-2xl font-bold text-slate-50">
                  {l.nro_lic}
                </p>
                <article className="flex gap-1">
                  <p className="basis-full text-lg text-slate-50">Categoria:</p>
                  <p className="basis-full pl-5 text-right text-xl text-slate-50">
                    {l.categoria.cod_categoria} - {l.categoria.clase_vehiculo}
                  </p>
                </article>
                <article className="flex gap-1">
                  <p className="basis-full text-lg text-slate-50">
                    Fecha de Expedicion:
                  </p>
                  <p className="basis-full pl-5 text-right text-xl text-slate-50">
                    {l.fecha_expedicion.split("T")[0]}
                  </p>
                </article>
                <article className="flex gap-1">
                  <p className="basis-full text-lg text-slate-50">
                    Fecha de Vencimiento:
                  </p>
                  <p className="basis-full pl-5 text-right text-xl text-slate-50">
                    {l.fecha_vencimiento.split("T")[0]}
                  </p>
                </article>
              </div>
            ))}
          </ScrollShadow>
        </CardBody>
      </Card>
    </NextUI>
  );
};

export default LicenseCard;
