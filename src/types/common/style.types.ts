import { SemanticColors } from "@/src/shared/styles/general.styles";
import { TurndownObject } from "@/src/types";
import { AccessibilityProps, StyleProp } from "react-native";

export interface DomProperties extends AccessibilityProps {
  style?: StyleProp<TurndownObject>;
  className?: string;
  nativeID?: string;
  children?: React.ReactNode | string;
}

export interface ClickActions {
  onPress?: (ev: TurndownObject) => void;
  onOut?: (ev: TurndownObject) => void;
  onMove?: (ev: TurndownObject) => void;
  onUp?: (ev: TurndownObject) => void;
  onDown?: (ev: TurndownObject) => void;
  onOver?: (ev: TurndownObject) => void;
  groupId?: string;
  active?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export type RnDimension = number | `${number}%` | "auto";

// Common icon sizes (dp)
export const sizes = {
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
  "x-large": 22,
  "xx-large": 32,
} as const;

export type CSSColor = string;

export type ThemeColorKeys = string;
export type Colors = ThemeColorKeys | CSSColor | string;
export type ThemeColorProperties = Record<string, CSSColor>;
export declare const Color: Record<ThemeColorKeys, string>;

export interface IconProps extends DomProperties, ClickActions {
  type?: "solid" | "regular" | "light" | "thin" | "duotone" | "brands";
  size?: keyof typeof sizes | number | `${number}%`;
  color?: keyof SemanticColors;
  opacity?: number;
  haptic?: "strong" | "light";
}

export type MickeyDefaultFontNames =
  | "default"
  | "black"
  | "bold"
  | "heavy"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | (string & { value?: string });

export interface AquaPhoenixFonts extends Record<string, string> {
  default: string;
}

export type FontType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "lead"
  | "small";

export type FontSizeNames =
  | "inherit"
  | "xx-small"
  | "x-small"
  | "small"
  | "regular"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large";

export type FontSize = FontSizeNames | number;
export type LineHeightSize = number;

export type DisplayType = "none" | "flex" | "inherit";
export interface BaseFonts {
  font?: MickeyDefaultFontNames; // map to fontFamily
  fontType?: FontType;
  color?: keyof SemanticColors;
  size?: FontSize;
  lineHeight?: LineHeightSize;
  display?: DisplayType;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

export interface ThemeAliasProperties {
  primary?: CSSColor;
  primaryLight?: CSSColor;
  primaryDark?: CSSColor;
  primaryText?: CSSColor;
  primaryTextAlt?: CSSColor;
  secondary?: CSSColor;
  secondaryLight?: CSSColor;
  secondaryDark?: CSSColor;
  secondaryText?: CSSColor;
  secondaryTextAlt?: CSSColor;
  tertiary?: CSSColor;
  tertiaryLight?: CSSColor;
  tertiaryDark?: CSSColor;
  tertiarText?: CSSColor;
  tertiarTextAlt?: CSSColor;
  quaternary?: CSSColor;
  quaternaryLight?: CSSColor;
  quaternaryDark?: CSSColor;
  quaternaryText?: CSSColor;
  quaternaryTextAlt?: CSSColor;
}

export interface MiscProperties {
  shadowLeft?: string;
  shadowRight?: string;
  shadowBottom?: string;
  shadowTop?: string;
  shadowFull?: string;

  baseBgColor?: CSSColor;
  baseTextColor?: CSSColor;
  textSelectionColor?: CSSColor;
}

export interface ColorProperties {
  blueLight?: CSSColor;
  blueDark?: CSSColor;
  greenLight?: CSSColor;
  greenDark?: CSSColor;
  indigoLight?: CSSColor;
  indigoDark?: CSSColor;
  orangeLight?: CSSColor;
  orangeDark?: CSSColor;
  pinkLight?: CSSColor;
  pinkDark?: CSSColor;
  purpleLight?: CSSColor;
  purpleDark?: CSSColor;
  redLight?: CSSColor;
  redDark?: CSSColor;
  tealLight?: CSSColor;
  tealDark?: CSSColor;
  mintLight?: CSSColor;
  mintDark?: CSSColor;
  brownLight?: CSSColor;
  brownDark?: CSSColor;
  cyanLight?: CSSColor;
  cyanDark?: CSSColor;
  yellowLight?: CSSColor;
  yellowDark?: CSSColor;

  // Greys
  grayLight1?: CSSColor;
  grayLight2?: CSSColor;
  grayLight3?: CSSColor;
  grayLight4?: CSSColor;
  grayLight5?: CSSColor;
  grayLight6?: CSSColor;
  grayLight7?: CSSColor;
  grayDark1?: CSSColor;
  grayDark2?: CSSColor;
  grayDark3?: CSSColor;
  grayDark4?: CSSColor;
  grayDark5?: CSSColor;
  grayDark6?: CSSColor;
  grayDark7?: CSSColor;

  black?: CSSColor;
  white?: CSSColor;
  transparent?: CSSColor;
}
