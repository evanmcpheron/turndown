import { Timestamp } from "firebase/firestore";
import { MemberRole } from ".";

// ───────────────────────────── users (accounts)
export interface User {
  id?: string;
  email: string;
  display_name: string;
  phone_number?: string;
  photo_url?: string;
  global_role?: MemberRole;
  is_active: boolean;
  deleted: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}

// ───────────────────────────── property_members (who can work on a property)
export interface PropertyMember {
  id?: string;
  property_id: string;
  user_id: string;
  role: MemberRole;
  invited_by_user_id?: string;
  invite_method?: "email" | "sms" | "link";
  is_active: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}
