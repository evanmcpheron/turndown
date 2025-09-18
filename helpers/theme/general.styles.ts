import type { Theme as NavigationTheme } from "@react-navigation/native";

export const palette = {
  // Grays (neutral)
  gray: {
    0: "#FFFFFF",
    50: "#F7F7F8",
    100: "#EFEFF1",
    200: "#E3E4E8",
    300: "#C9CBD3",
    400: "#A6AAB5",
    500: "#858A96",
    600: "#676B78",
    700: "#4C505C",
    800: "#343844",
    900: "#1E212B",
    950: "#0F1117",
  },

  // Brand / accents
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1B336F",
  },
  violet: {
    50: "#F5F3FF",
    100: "#EDE9FE",
    200: "#DDD6FE",
    300: "#C4B5FD",
    400: "#A78BFA",
    500: "#8B5CF6",
    600: "#7C3AED",
    700: "#6D28D9",
    800: "#5B21B6",
    900: "#3F1E7C",
  },
  teal: {
    50: "#F0FDFA",
    100: "#CCFBF1",
    200: "#99F6E4",
    300: "#5EEAD4",
    400: "#2DD4BF",
    500: "#14B8A6",
    600: "#0D9488",
    700: "#0F766E",
    800: "#115E59",
    900: "#134E4A",
  },
  amber: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
  },
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },
};

/**
 * --- Typography ---
 */
export const typography = {
  fontFamily: {
    // Change these to your installed fonts
    sans: "System",
    mono: "Menlo",
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    display: 34,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.4,
    relaxed: 1.6,
  },
  weight: {
    regular: "400" as const,
    medium: "600" as const,
    bold: "700" as const,
  },
};

/**
 * --- Spacing, Radius, Elevation, Opacity ---
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
};

export const radii = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  pill: 999,
};

export const elevation = {
  // Cross‑platform guidance tokens. Map to Android elevation & iOS shadow.
  0: {
    android: 0,
    ios: { opacity: 0, radius: 0, offset: { width: 0, height: 0 } },
  },
  1: {
    android: 1,
    ios: { opacity: 0.08, radius: 3, offset: { width: 0, height: 2 } },
  },
  2: {
    android: 3,
    ios: { opacity: 0.1, radius: 6, offset: { width: 0, height: 3 } },
  },
  3: {
    android: 6,
    ios: { opacity: 0.12, radius: 10, offset: { width: 0, height: 4 } },
  },
  4: {
    android: 12,
    ios: { opacity: 0.14, radius: 16, offset: { width: 0, height: 6 } },
  },
};

export const opacity = {
  disabled: 0.38,
  medium: 0.6,
  overlay: 0.72,
};

/**
 * --- Semantic Color Roles (Light/Dark) ---
 * These are app-level roles that map to components and to React Navigation's theme.
 */
export type SemanticColors = {
  // Base surfaces & text
  background: string;
  onBackground: string;
  backgroundDisabled: string;
  surface: string;
  surface2: string;
  surface3: string;
  text: string;
  textMuted: string;
  // Brand & interactive
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  // Status
  success: string;
  onSuccess: string;
  warning: string;
  onWarning: string;
  danger: string;
  onDanger: string;
  info: string;
  onInfo: string;
  // Borders & outlines
  outline: string;
  outlineStrong: string;
  // Overlays
  overlay: string;
  // Navigation specific
  navCard: string;
  navBorder: string;
  navNotification: string;
};

export type AppTheme = {
  isDark: boolean;
  name: "light" | "dark";
  colors: SemanticColors;
  typography: typeof typography;
  spacing: typeof spacing;
  radii: typeof radii;
  elevation: typeof elevation;
  opacity: typeof opacity;
  /**
   * React Navigation compatible theme derived from this AppTheme.
   */
  navigation: NavigationTheme;
};

export const toNavigationTheme = (
  isDark: boolean,
  c: SemanticColors
): NavigationTheme => {
  return {
    dark: isDark,
    colors: {
      primary: c.primary,
      background: c.background,
      card: c.navCard,
      text: c.text,
      border: c.navBorder,
      notification: c.navNotification,
    },
  } as NavigationTheme;
};

export const components = {
  button: (t: AppTheme) => ({
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: radii.lg,
    backgroundColor: t.colors.primary,
  }),
  buttonText: (t: AppTheme) => ({
    color: t.colors.onPrimary,
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
  }),
  card: (t: AppTheme) => ({
    backgroundColor: t.colors.surface,
    borderRadius: radii.xl,
    padding: spacing[4],
  }),
  input: (t: AppTheme) => ({
    backgroundColor: t.isDark ? t.colors.surface2 : t.colors.surface3,
    color: t.colors.text,
    borderRadius: radii.md,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderWidth: 1,
    borderColor: t.colors.outline,
  }),
};
