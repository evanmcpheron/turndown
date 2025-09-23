import { TurndownObject } from "@/src/types";

export interface ReturnData {
  success: boolean;
  message?: string;
  data?: TurndownObject | TurndownObject[];
}

export type Collections =
  | "Checklist"
  | "ChecklistItem"
  | "Inventory"
  | "Property"
  | "Task"
  | "Message"
  | "Room"
  | "User";
