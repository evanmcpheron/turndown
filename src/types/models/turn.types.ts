import { Timestamp } from "firebase/firestore";
import { MetaData, ReadinessStatus, Severity } from ".";
export type IssueType =
  | "damage"
  | "maintenance"
  | "stain"
  | "missing"
  | "safety"
  | "other";
export type TurnStatus =
  | "pending"
  | "assigned"
  | "in_progress"
  | "completed"
  | "canceled";
export type IssueStatus = "open" | "resolved" | "wont_fix";

export interface Turn extends MetaData {
  id?: string;
  property_id: string;
  scheduled_start_at: Timestamp;
  scheduled_end_at: Timestamp;
  status: TurnStatus;
  readiness_status: ReadinessStatus;
  checklist_id?: string;
  assigned_user_id?: string;
  started_at?: Timestamp;
  finished_at?: Timestamp;
  ready_marked_at?: Timestamp;
  ready_marked_by?: string;
  notes?: string;
  proof_pack_url?: string;
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
  estimated_cost?: number;
  status: IssueStatus;
  reported_by: string;
  resolved_at?: Timestamp;
  resolved_by?: string;
}
