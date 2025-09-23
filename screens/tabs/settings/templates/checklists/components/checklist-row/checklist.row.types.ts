import { TurndownObject } from "@/src/types";

export interface ChecklistRowProps {
  id: TurndownObject;
  name: string;
  onPress: () => void;
}
