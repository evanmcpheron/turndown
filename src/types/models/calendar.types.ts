import { Timestamp } from "firebase/firestore";
import { BookingStatus, IntegrationSource } from ".";

// ───────────────────────────── bookings (from iCal/email/manual)
export interface Booking {
  id?: string;
  property_id: string;
  source: IntegrationSource | "manual";
  external_reservation_id?: string;
  guest_name?: string;
  check_in_at: Timestamp;
  check_out_at: Timestamp;
  status: BookingStatus;
  created_at: Timestamp;
  updated_at: Timestamp;
}

// ───────────────────────────── property_calendar_links (iCal ingestion)
export interface PropertyCalendarLink {
  id?: string;
  property_id: string;
  source: IntegrationSource;
  ical_url: string;
  is_active: boolean;
  last_fetch_at?: Timestamp;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface ActivityEvent {
  id?: string;
  property_id: string;
  turn_id?: string;

  event_type:
    | "turn_assigned"
    | "turn_started"
    | "turn_finished"
    | "turn_ready_marked"
    | "task_completed"
    | "photo_added"
    | "issue_created"
    | "issue_resolved"
    | "low_stock_detected"
    | "message_posted";
  actor_user_id?: string;
  message?: string; // short human-readable detail

  created_at: Timestamp;
}
