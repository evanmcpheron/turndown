import { Timestamp } from "firebase/firestore";

export * from "./property.types";
export * from "./user.types";

export type Severity = "low" | "medium" | "high";
export type ReadinessStatus = "ready" | "not_ready" | "blocked" | "unknown";

export interface MetaData {
  company_id: string;
  deleted: boolean;
  updated_by: string;
  created_by: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}
