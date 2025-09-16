import { AppTheme, SemanticColors } from "@/helpers/theme/general.styles";
import type { Theme } from "@react-navigation/native";

export type Scheme = "light" | "dark" | "system";
export const DEFAULT_THEME_KEY = "@custom-theme/scheme";

export type ThemeOverrides = Partial<{
  light: Partial<AppTheme>;
  dark: Partial<AppTheme>;
}>;

export type ThemeProviderProps = {
  children: React.ReactNode;
  mode?:  Scheme;
  persist?: boolean;
  storageKey?: string;
  overrides?: ThemeOverrides;
  onChange?: (scheme: Scheme, appTheme: AppTheme, navTheme: Theme) => void;
};

export type CustomThemeContextValue = {
  scheme: Scheme;
  mode:  Scheme;
  app: AppTheme;
  colors: SemanticColors;
  nav: Theme;
  toggle: () => void;
  setScheme: (s: Scheme) => void;
  followSystem: () => void;
};
