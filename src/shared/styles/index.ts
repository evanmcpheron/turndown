export { DarkAppTheme } from "./dark.theme";
export { AppTheme } from "./general.styles";
export { LightAppTheme } from "./light.theme";

export const withOpacity = (hex: string, opacity: number): string => {
  if (!/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    throw new Error("Hex must be in #RRGGBB format");
  }

  const alpha = Math.round(Math.min(Math.max(opacity, 0), 1) * 255);
  const alphaHex = alpha.toString(16).padStart(2, "0").toUpperCase();

  return `${hex}${alphaHex}`;
};
