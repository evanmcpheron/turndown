import { Timestamp } from "firebase/firestore";

export * from "./property.types";
export * from "./user.types";

export type ReadinessStatus = "ready" | "not_ready" | "blocked" | "unknown";
export type TurnStatus =
  | "pending"
  | "assigned"
  | "in_progress"
  | "completed"
  | "canceled";
export type BookingStatus = "confirmed" | "canceled" | "completed";
export type IssueType =
  | "damage"
  | "maintenance"
  | "stain"
  | "missing"
  | "safety"
  | "other";
export type Severity = "low" | "medium" | "high";
export type IssueStatus = "open" | "resolved" | "wont_fix";
export type InventoryLevel = "out" | "low" | "ok";
export type IntegrationSource = "airbnb" | "vrbo" | "custom";
export type MemberRole = "host" | "manager" | "cleaner" | "helper";
export type MediaKind = "image" | "video" | "file";

export interface MetaData {
  company_id: string;
  deleted: boolean;
  updated_by: string;
  created_by: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}
export interface Issue extends MetaData {
  id?: string;
  property_id: string;
  turn_id?: string;

  type: IssueType;
  title: string;
  description?: string;
  severity: Severity;
  blocks_check_in: boolean;

  estimated_cost_cents?: number;

  status: IssueStatus;
  reported_by_user_id: string;
  resolved_at?: Timestamp;
  resolved_by_user_id?: string;

  created_at: Timestamp;
  updated_at: Timestamp;
}
