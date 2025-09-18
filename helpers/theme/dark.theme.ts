import type { Theme as NavigationTheme } from "@react-navigation/native";
import {
  AppTheme,
  elevation,
  opacity,
  palette,
  radii,
  spacing,
  toNavigationTheme,
  typography,
} from "./general.styles";

/**
 * Dark Theme
 */
export const DarkAppTheme: AppTheme = {
  isDark: true,
  name: "dark",
  colors: {
    background: palette.gray[950],
    onBackground: palette.gray[50],
    backgroundDisabled: palette.gray[500],
    surface: palette.gray[900],
    surface2: palette.gray[800],
    surface3: palette.gray[700],
    text: palette.gray[100],
    textMuted: palette.gray[400],

    primary: palette.blue[400],
    onPrimary: palette.gray[950],
    secondary: palette.violet[400],
    onSecondary: palette.gray[950],

    success: palette.teal[400],
    onSuccess: palette.gray[950],
    warning: palette.amber[400],
    onWarning: palette.gray[950],
    danger: palette.red[400],
    onDanger: palette.gray[950],
    info: palette.blue[300],
    onInfo: palette.gray[950],

    outline: palette.gray[700],
    outlineStrong: palette.gray[600],

    overlay: "rgba(0,0,0,0.6)",

    navCard: palette.gray[900],
    navBorder: palette.gray[800],
    navNotification: palette.violet[400],
  },
  typography,
  spacing,
  radii,
  elevation,
  opacity,
  navigation: {} as NavigationTheme, // replaced below
};
DarkAppTheme.navigation = toNavigationTheme(true, DarkAppTheme.colors);

export const DarkThemeCustom: NavigationTheme = DarkAppTheme.navigation;
