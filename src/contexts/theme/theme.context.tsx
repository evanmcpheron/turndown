import { useContext } from "react";
import { CustomThemeContext } from "./theme.types";

export function useTheme() {
  const ctx = useContext(CustomThemeContext);
  if (!ctx) throw new Error("useTheme() must be used within <ThemeProvider>");
  return ctx;
}
