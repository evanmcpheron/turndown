import { DomProperties } from "@/types/global.types";

export interface RowProps extends DomProperties {
  gap?: number;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  rowDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  rowWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial";
  stretchRow?: boolean;
}
