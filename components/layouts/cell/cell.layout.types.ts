import { DomProperties } from "@/helpers/types/base/style.types";
import React from "react";
import { ViewStyle } from "react-native";

export interface CellProperties extends DomProperties {
  children?: React.ReactNode;

  display?: "flex" | "none";
  cellDirection?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  cellWrap?: ViewStyle["flexWrap"];
  gap?: number;

  width?: number | string;
  height?: number | string;

  groupId?: string;
  active?: boolean;
}
