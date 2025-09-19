import { TurndownObject } from "../types";

export interface ReturnData {
  success: boolean;
  message?: string;
  data?: TurndownObject | TurndownObject[];
}

export type Collections = "Users" | "Properties";
