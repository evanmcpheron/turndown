import { Timestamp } from "firebase/firestore";
import { ReadinessStatus } from ".";

// ───────────────────────────── properties
export interface Property {
  id?: string;
  user_id: string; // owner/primary admin (host)
  nickname: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  timezone: string;
  photo_url?: string;

  default_cleaner_user_id?: string;

  // denormalized, maintained by writes/Cloud Functions
  readiness_status: ReadinessStatus;
  next_check_in_at?: Timestamp;
  open_issues_count: number;
  low_stock_count: number;
  last_turn_completed_at?: Timestamp;

  checklist_template_id?: string; // default checklist for this property

  is_active: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}
