import { Timestamp } from "firebase/firestore";
import { MetaData, ReadinessStatus } from ".";

export interface Property extends MetaData {
  id: string;
  user_id: string; // owner/primary admin (host)
  name: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  timezone?: string;
  photo_url?: string;

  default_cleaner_user_id?: string;

  // denormalized, maintained by writes/Cloud Functions
  readiness_status: ReadinessStatus;
  next_check_in_at?: Timestamp;
  open_issues_count: number;
  low_stock_count: number;
  last_turn_completed_at?: Timestamp;

  checklist_template_id?: string;
  type: PropertyType; // required → stable bucket
  subtype?: PropertySubType;
  is_active: boolean;
}

export interface Room extends MetaData {
  id: string;
  deleted: boolean;
  name: string;
  hero_photo?: string;
  photos?: string[];
  property_id: string;
}

// Broad buckets (keep this stable)
export type PropertyType =
  | "residential"
  | "commercial"
  | "institutional" // schools, universities, churches
  | "hospitality" // hotels, resorts, short-term rentals
  | "recreation" // aquatics, gyms, parks
  | "industrial"
  | "healthcare"
  | "government"
  | "other";

// Specifics you actually filter/branch on
export type PropertySubType =
  | "single_family"
  | "multi_family"
  | "hoa_pool"
  | "municipal_pool"
  | "aquatics_center"
  | "gym"
  | "hotel"
  | "short_term_rental"
  | "school_k12"
  | "university"
  | "lab"
  | "restaurant"
  | "office"
  | "warehouse"
  | "manufacturing"
  | "church"
  | "waterpark"
  | "spa"
  | "clinic"
  | "hospital"
  | "other";
