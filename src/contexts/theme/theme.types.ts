import { AppTheme, SemanticColors } from "@/src/shared/styles/general.styles";
import type { Theme } from "@react-navigation/native";
import { createContext } from "react";

export type Scheme = "light" | "dark" | "system";
export const DEFAULT_THEME_KEY = "@custom-theme/scheme";

export const CustomThemeContext = createContext<
  CustomThemeContextValue | undefined
>(undefined);

export type ThemeOverrides = Partial<{
  light: Partial<AppTheme>;
  dark: Partial<AppTheme>;
}>;

export type ThemeProviderProps = {
  children: React.ReactNode;
  mode?: Scheme;
  persist?: boolean;
  storageKey?: string;
  overrides?: ThemeOverrides;
  onChange?: (scheme: Scheme, appTheme: AppTheme, navTheme: Theme) => void;
};

export type CustomThemeContextValue = {
  scheme: Scheme;
  mode: Scheme;
  app: AppTheme;
  colors: SemanticColors;
  nav: Theme;
  toggle: () => void;
  setScheme: (s: Scheme) => void;
  followSystem: () => void;
};
