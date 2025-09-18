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
 * Light Theme
 */
export const LightAppTheme: AppTheme = {
  isDark: false,
  name: "light",
  colors: {
    background: palette.gray[50],
    onBackground: palette.gray[950],
    backgroundDisabled: palette.gray[500],
    surface: palette.gray[0],
    surface2: palette.gray[50],
    surface3: palette.gray[100],
    text: palette.gray[900],
    textMuted: palette.gray[600],

    primary: palette.blue[600],
    onPrimary: palette.gray[0],
    secondary: palette.violet[600],
    onSecondary: palette.gray[0],

    success: palette.teal[600],
    onSuccess: palette.gray[0],
    warning: palette.amber[600],
    onWarning: palette.gray[900],
    danger: palette.red[600],
    onDanger: palette.gray[0],
    info: palette.blue[600],
    onInfo: palette.gray[0],

    outline: palette.gray[200],
    outlineStrong: palette.gray[300],

    overlay: "rgba(0,0,0,0.5)",

    navCard: palette.gray[0],
    navBorder: palette.gray[200],
    navNotification: palette.violet[500],
  },
  typography,
  spacing,
  radii,
  elevation,
  opacity,
  navigation: {} as NavigationTheme, // replaced below
};
LightAppTheme.navigation = toNavigationTheme(false, LightAppTheme.colors);

export const DefaultThemeCustom: NavigationTheme = LightAppTheme.navigation;
