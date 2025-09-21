import { TurndownObject } from "@/helpers";

export interface ReturnData {
  success: boolean;
  message?: string;
  data?: TurndownObject | TurndownObject[];
}

export type Collections =
  | "User"
  | "Property"
  | "Checklist"
  | "Room"
  | "Inventory";
