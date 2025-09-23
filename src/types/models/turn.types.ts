import { Timestamp } from "firebase/firestore";
import { MetaData, ReadinessStatus, TurnStatus } from ".";

// ───────────────────────────── turns (work blocks between checkout→check-in)
export interface Turn extends MetaData {
  id?: string;
  property_id: string;
  booking_id?: string;

  scheduled_start_at: Timestamp; // usually checkout time
  scheduled_end_at: Timestamp; // usually next check-in time

  status: TurnStatus;
  readiness_status: ReadinessStatus;

  assigned_user_id?: string;
  started_at?: Timestamp;
  finished_at?: Timestamp;

  ready_marked_at?: Timestamp;
  ready_marked_by_user_id?: string;

  notes?: string;
  proof_pack_url?: string;
}

// ───────────────────────────── turn_tasks (flattened checklist runtime)
export interface TurnTask extends MetaData {
  id?: string;
  turn_id: string;
  property_id: string;

  checklist_item_id?: string; // origin template item
  title: string;
  room_label?: string;
  photo_required: boolean;

  status: "todo" | "done" | "skipped";
  completed_at?: Timestamp;
}
