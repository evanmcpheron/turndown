import { AppTheme } from "@/helpers/theme/general.styles";
import type { Theme } from "@react-navigation/native";

export type Scheme = "light" | "dark";
export const DEFAULT_THEME_KEY = "@custom-theme/scheme";

export type ThemeOverrides = Partial<{
  light: Partial<AppTheme>;
  dark: Partial<AppTheme>;
}>;

export type ThemeProviderProps = {
  children: React.ReactNode;
  mode?: "system" | Scheme;
  persist?: boolean;
  storageKey?: string;
  overrides?: ThemeOverrides;
  onChange?: (scheme: Scheme, appTheme: AppTheme, navTheme: Theme) => void;
};

export type CustomThemeContextValue = {
  scheme: Scheme;
  mode: "system" | Scheme;
  app: AppTheme;
  nav: Theme;
  toggle: () => void;
  setScheme: (s: Scheme) => void;
  followSystem: () => void;
  updateOverrides: (patch: ThemeOverrides) => void;
};
