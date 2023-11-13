import { Ticket } from "@/api/interfaces/ticket";
import { NextUI } from "@/app/providers";
import { Card, CardHeader, CardBody, ScrollShadow } from "@nextui-org/react";
import React from "react";

interface Props {
  ticket: Ticket[];
}

const TicketsCard = ({ ticket }: Props) => {
  return (
    <NextUI className="relative h-2/5 w-2/5">
      <Card className="relative h-full w-full bg-slate-300">
        <CardHeader className="flex h-1/6 w-full flex-row items-center justify-center bg-slate-300 text-lg text-slate-600">
          Infracciones
        </CardHeader>
        <CardBody className="relative flex h-full w-full flex-col gap-10">
          <ScrollShadow className="flex h-full w-full flex-col gap-4 px-5 scrollbar-thin scrollbar-thumb-[#71869a] scrollbar-thumb-rounded-full">
            {ticket.length > 0 ? (
              ticket.map((t) => (
                <div
                  key={JSON.stringify(t)}
                  className="flex flex-col gap-2 rounded-lg bg-[#71869a] p-5"
                >
                  <article className="flex gap-1">
                    <p className="basis-full text-lg text-slate-50">Costo:</p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {t.costo?.split(" ")[0] ?? "$" + t.costo_Inf}
                    </p>
                  </article>
                  <article className="flex gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Comuna de Infraccion:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      Comuna {t.nom_comuna}
                    </p>
                  </article>
                  <article className="flex gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Ubicacion de Infraccion:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {t.latitud}, {t.longitud}
                    </p>
                  </article>
                  <article className="flex gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Velocidad del Vehiculo:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {t.velocidad} km/h
                    </p>
                  </article>
                  <article className="flex gap-1">
                    <p className="basis-full text-lg text-slate-50">
                      Fecha Infraccion:
                    </p>
                    <p className="basis-full pl-5 text-right text-xl text-slate-50">
                      {new Date(t.fecha).toDateString()}
                    </p>
                  </article>
                </div>
              ))
            ) : (
              <p className="w-full text-center text-2xl font-bold text-slate-50">
                El conductor no ha cometido ninguna infracción
              </p>
            )}
          </ScrollShadow>
        </CardBody>
      </Card>
    </NextUI>
  );
};

export default TicketsCard;
