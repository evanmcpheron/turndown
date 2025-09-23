// swipe.row.types.ts

import { SemanticColors } from "@/src/shared/styles/general.styles";

export type SwipeAction = {
  severity?: keyof SemanticColors;
  icon?: React.ReactNode;
  onPress: () => void;
  width?: number;
  testID?: string;
};

export type SwipeRowHandle = {
  close: () => void;
  openLeft: () => void;
  openRight: () => void;
};

export interface SwipeRowProps {
  children: React.ReactNode;
  leftActions?: SwipeAction[];
  rightActions?: SwipeAction[];
  actionWidth?: number;
  rightThreshold?: number;
  leftThreshold?: number;
  friction?: number;
  overshootLeft?: boolean;
  overshootRight?: boolean;
  onSwipeStart?: (direction: "left" | "right") => void;
  onSwipeEnd?: (direction: "left" | "right") => void;
}
