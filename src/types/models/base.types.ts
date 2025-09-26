export type Severity = "neutral" | "low" | "medium" | "high";

export interface MetaData {
  company_id: string;
  deleted: boolean;
  updated_by: string;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

export type ReadinessStatus = "ready" | "not_ready" | "blocked" | "unknown";
