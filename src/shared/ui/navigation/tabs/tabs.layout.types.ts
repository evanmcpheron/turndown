import { TurndownObject } from "@/src/types";
import { StyleProp } from "react-native";

export interface TabsProps {
  children: React.ReactNode;
  centered?: boolean;
  style?: StyleProp<TurndownObject>;
}

export interface TabsItemProps {
  label: string;
  disabled?: boolean;
  default?: boolean;
  onPress?: (option: TurndownObject) => void;
  children: React.ReactNode;
}
