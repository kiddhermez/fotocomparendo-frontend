import * as React from "react";
import { SVGProps } from "react";
export const DownWave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#adcee4"
      d="m0 64 60 42.7C120 149 240 235 360 245.3 480 256 600 192 720 186.7c120-5.7 240 48.3 360 42.6 120-5.3 240-69.3 300-101.3l60-32V0H0Z"
    />
  </svg>
);

export const UpWave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#adcee4"
      d="m0 64 60 42.7C120 149 240 235 360 245.3 480 256 600 192 720 186.7c120-5.7 240 48.3 360 42.6 120-5.3 240-69.3 300-101.3l60-32v224H0Z"
    />
  </svg>
);
