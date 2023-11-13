"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function NextUI({ children, ...props }: Props) {
  return <NextUIProvider {...props}>{children}</NextUIProvider>;
}
