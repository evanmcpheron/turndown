import { Timestamp } from "firebase/firestore";
import { MemberRole, MetaData } from ".";

// ───────────────────────────── users (accounts)
export interface User {
  id?: string;
  email: string;
  display_name: string;
  phone_number?: string;
  photo_url?: string;
  global_role?: MemberRole;
  is_active: boolean;
  company_id: string;
  is_admin: boolean;
  deleted: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}

// ───────────────────────────── property_members (who can work on a property)
export interface PropertyMember extends MetaData {
  id?: string;
  property_id: string;
  user_id: string;
  role: MemberRole;
  invited_by_user_id?: string;
  invite_method?: "email" | "sms" | "link";
  is_active: boolean;
}
