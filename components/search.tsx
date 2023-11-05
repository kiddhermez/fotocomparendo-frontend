import React from "react";
import { Input, Card, CardBody, CardFooter } from "@nextui-org/react";
import { NextUI } from "@/app/providers";
import { DownWave } from "./waves";

const Search = () => {
  return (
    <NextUI>
      <div
        className={`relative flex h-[60vh] w-screen items-center justify-center bg-background`}
        id="Home"
      >
        <Card
          isBlurred
          className="mt-[40vh] flex h-[80%] w-[70%] rounded-3xl !bg-blue-950/60 p-10"
        >
          <CardBody className="flex h-full flex-col items-center justify-center gap-10 ">
            <p className="text-center text-xl font-bold md:text-3xl">
              ¿Desea consultar sus fotocomparendos?
              <p>Ingrese su cedula aqui</p>
            </p>
            <Input
              isClearable
              label="Cedula"
              size="lg"
              classNames={{
                label: "text-foreground",
              }}
            />
          </CardBody>
        </Card>
      </div>
      <DownWave />
    </NextUI>
  );
};

export default Search;
