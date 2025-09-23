// section.types.ts

import { TurndownObject } from "@/src/types";
import React from "react";
import { StyleProp } from "react-native";

export interface TurndownSectionProps {
  title?: string;
  hint?: string;
  right?: React.ReactNode;
  style?: StyleProp<TurndownObject>;
  children: React.ReactNode;
}
