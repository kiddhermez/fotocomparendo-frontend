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
import sites from "@/config/sites";
import { NextUI } from "@/app/providers";

// TODO: Add navBar menu

const NavBar = () => {
  return (
    <NextUI>
      <Navbar
        isBlurred
        className="absolute top-3 mx-auto w-[98%] rounded-xl !bg-blue-950/60 p-2 md:justify-between"
      >
        <NavbarContent
          justify="start"
          className="justify-center md:justify-start"
        >
          <NavbarBrand className="flex items-center justify-center gap-1 md:justify-start">
            <h1 className="text-center text-lg font-bold md:text-start">
              FotoComparendo
            </h1>
            <sub className="text-xs">Fusagasuga</sub>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          justify="center"
          className="hidden justify-end text-foreground md:flex"
        >
          {sites.map((site, i) => (
            <NavbarItem key={`${site.title}-${i}`}>
              <Link href={site.url} className="text-current">
                {site.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </NextUI>
  );
};

export default NavBar;
