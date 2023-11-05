import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#adcee4",
            foreground: "#b7dddd",
            primary: "#e64f59",
            secondary: "#fcefa9",
            success: "#b7ddbe",
            divider: "#b7dddd",
          },
        },
      },
    }),
  ],
};
export default config;
