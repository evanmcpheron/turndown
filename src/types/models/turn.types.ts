import { SelectOption } from "@/src/shared/ui/forms/dropdown/dropdown.form.component";
import { MetaData, ReadinessStatus, Severity } from "./base.types";
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
  | "unassigned"
  | "in_progress"
  | "completed"
  | "canceled";
export type IssueStatus = "open" | "resolved" | "wont_fix";
export type ChecklistRunItemStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "skipped"
  | "blocked";

export interface Turn extends MetaData {
  id: string;
  property_id: string;
  scheduled_start_at: Date;
  scheduled_end_at: Date;
  status: TurnStatus;
  readiness_status: ReadinessStatus;
  assigned_user_id?: string;
  started_at?: Date;
  finished_at?: Date;
  finished_by?: string;

  notes?: string;
}

export interface TurnRunItem extends MetaData {
  id: string;

  turn_id: string;
  room_id: string;

  text: string;
  photo_required: boolean;
  photo?: string;

  status: ChecklistRunItemStatus;
  blocked_reason?: string;

  completed_at?: Date;
  completed_by?: string;
}

export interface Issue extends MetaData {
  id: string;
  property_id: string;
  turn_id: string;
  type: IssueType;
  title: string;
  description?: string;
  severity: Severity;
  blocks_check_in: boolean;
  estimated_cost?: number;
  status: IssueStatus;
  reported_by: string;
  resolved_at?: Date;
  resolved_by?: string;
}

export const READINESS_STATUS_OPTIONS = [
  { label: "Ready", value: "ready" },
  { label: "Not ready", value: "not_ready" },
  { label: "Blocked", value: "blocked" },
  { label: "Unknown", value: "unknown" },
] satisfies (SelectOption & { value: ReadinessStatus })[];

export const ISSUE_TYPE_OPTIONS = [
  { label: "Damage", value: "damage" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Stain", value: "stain" },
  { label: "Missing", value: "missing" },
  { label: "Safety", value: "safety" },
  { label: "Other", value: "other" },
] satisfies (SelectOption & { value: IssueType })[];

export const TURN_STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "Assigned", value: "assigned" },
  { label: "In progress", value: "in_progress" },
  { label: "Completed", value: "completed" },
  { label: "Canceled", value: "canceled" },
] satisfies (SelectOption & { value: TurnStatus })[];

export const ISSUE_STATUS_OPTIONS = [
  { label: "Open", value: "open" },
  { label: "Resolved", value: "resolved" },
  { label: "Won't fix", value: "wont_fix" },
] satisfies (SelectOption & { value: IssueStatus })[];
