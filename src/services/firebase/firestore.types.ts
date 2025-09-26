import { TurndownObject } from "@/src/types";

export interface ReturnData {
  success: boolean;
  message?: string;
  data?: TurndownObject | TurndownObject[];
}

export type Collections =
  | "Checklist"
  | "ChecklistItem"
  | "TurnRunItem"
  | "CodeRegistry"
  | "Company"
  | "CompanyInvite"
  | "CompanyMember"
  | "Inventory"
  | "Property"
  | "Turn"
  | "Message"
  | "Room"
  | "User";
