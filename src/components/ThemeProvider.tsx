"use client";

import { FunctionComponent } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
