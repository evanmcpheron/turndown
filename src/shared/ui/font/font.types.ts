import { SemanticColors } from "@/src/shared/styles/general.styles";
import { TurndownObject } from "@/src/types";
import { TextProps } from "react-native";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

export interface FontProps extends TextProps {
  variant?: Variant;
  align?: "left" | "center" | "right" | "justify";
  color?: keyof SemanticColors;
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold";
  onPress?: (e: TurndownObject) => void;
}
