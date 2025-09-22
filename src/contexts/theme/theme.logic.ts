import { AppTheme } from "@/src/shared/styles/general.styles";
import type { Theme } from "@react-navigation/native";
import { Platform } from "react-native";

export const deepMerge = <T extends object>(base: T, patch?: Partial<T>): T => {
  if (!patch) return base;
  const result: any = Array.isArray(base)
    ? [...(base as any)]
    : { ...(base as any) };
  for (const key of Object.keys(patch) as (keyof T)[]) {
    const v = patch[key];
    if (
      v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      typeof (base as any)[key] === "object"
    ) {
      result[key] = deepMerge((base as any)[key], v as any);
    } else if (v !== undefined) {
      result[key] = v;
    }
  }
  return result as T;
};

export const toNativeTheme = (app: AppTheme): Theme => {
  const c = app.colors;
  return {
    dark: app.isDark,
    colors: {
      primary: c.primary,
      background: c.background,
      card: c.navCard,
      text: c.text,
      border: c.navBorder,
      notification: c.navNotification,
    },
    fonts: {
      regular: {
        fontFamily: Platform.select({
          ios: "System",
          android: "Roboto",
          default: "System",
        })!,
        fontWeight: "400",
      },
      medium: {
        fontFamily: Platform.select({
          ios: "System",
          android: "Roboto",
          default: "System",
        })!,
        fontWeight: "600",
      },
      bold: {
        fontFamily: Platform.select({
          ios: "System",
          android: "Roboto",
          default: "System",
        })!,
        fontWeight: "700",
      },
      heavy: {
        fontFamily: Platform.select({
          ios: "System",
          android: "Roboto",
          default: "System",
        })!,
        fontWeight: "800",
      },
    },
  };
};
