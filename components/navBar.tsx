"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { NextUI } from "@/app/providers";

// TODO: Add navBar menu

const NavBar = () => {
  return (
    <NextUI>
      <Navbar className="absolute top-3 mx-auto w-[98%] rounded-xl !bg-[#afcfe4] p-2 md:justify-between">
        <NavbarContent
          justify="start"
          className="justify-center md:justify-start"
        >
          <NavbarBrand className="flex items-center justify-center gap-1 text-blue-950/60 md:justify-start">
            <h1 className="text-center text-2xl font-bold md:text-start">
              FotoComparendo
            </h1>
            <sub className="text-lg">Fusagasuga</sub>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    </NextUI>
  );
};

export default NavBar;
