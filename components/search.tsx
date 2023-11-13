"use client";
import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { FindIcon } from "./icons";
import { NextUI } from "@/app/providers";
import { useRouter } from "next/navigation";

const Search = () => {
  const [type, setType] = React.useState("Cedula");
  const [validation, setValidation] = React.useState(/^(?:\d{8}|\d{10})$/);
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const route = useRouter();

  const isInvalid = React.useMemo(() => {
    const validateInfo = (value: string) => value.match(validation);
    if (value === "") return false;

    return validateInfo(value) ? false : true;
  }, [value, validation]);

  const handleSelectionChange = (e: any) => {
    setType(e.target.value);
    setValidation(
      e.target.value === "Cedula"
        ? /^(?:\d{8}|\d{10})$/
        : /^[A-Za-z]{3}-\d{3}$/,
    );
  };

  const handleOnClick = async () => {
    setIsLoading(true);
    type === "Cedula" && route.push(`/driver/${value}`);
    const [letter, number] = value.split("-");
    type === "Placa" && route.push(`/vehicle/${letter}/${number}`);
  };

  return (
    <NextUI>
      <div
        className={`relative flex h-[90vh] w-full flex-col items-center justify-center gap-10`}
        id="Home"
      >
        <p className="z-20 w-2/3 text-center text-3xl text-blue-950/60">
          ¿Cruzó el semáforo en <b className="text-[#e47a7a]">Rojo</b> y cometió
          una infracción cerca de nuestros sensores?
        </p>
        <p className="w-2/3 text-center text-xl text-blue-950/60">
          Consulte aqui su infraccion usando su placa o cedula
        </p>
        <section className="flex w-2/3 rounded-full bg-[#6e8494]">
          <Select
            label="Tipo"
            size="lg"
            radius="full"
            required
            defaultSelectedKeys={["Cedula"]}
            classNames={{
              trigger: "text-foreground !bg-[#6e8494] shadow-none",
              label: "text-foreground",
              listbox: "text-foreground !bg-[#6e8494] shadow-none",
              popover: "text-foreground !bg-[#6e8494] shadow-none",
              value: "text-foreground ",
            }}
            onChange={handleSelectionChange}
            className="w-1/2"
          >
            <SelectItem key="Placa" value="plate">
              Placa
            </SelectItem>
            <SelectItem key="Cedula" value="id">
              Cedula
            </SelectItem>
          </Select>
          <Input
            value={type === "Placa" ? value.toUpperCase() : value}
            isInvalid={isInvalid}
            onValueChange={setValue}
            isDisabled={!Boolean(type)}
            color={isInvalid ? "danger" : "default"}
            errorMessage={isInvalid && "Porfavor ingrese un valor valido"}
            isClearable
            label={type}
            size="lg"
            classNames={{
              label: "text-foreground",
              input: "text-foreground !bg-[#6e8494] shadow-none",
              inputWrapper: "text-foreground !bg-[#6e8494] shadow-none",
              errorMessage: "ml-2 text-sm absolute",
            }}
            className="w-full"
          />
          <Button
            size="lg"
            radius="full"
            disabled={isInvalid || !Boolean(type) || value === ""}
            isLoading={isLoading}
            onClick={handleOnClick}
            className="h-full !bg-[#6e8494] hover:!bg-[#485661] disabled:hover:!bg-[#6e8494]"
          >
            <FindIcon id="find" className="fill-background " />
          </Button>
        </section>
      </div>
    </NextUI>
  );
};

export default Search;
