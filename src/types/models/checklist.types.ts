import { Timestamp } from "firebase/firestore";

// ───────────────────────────── checklist templates (global or per property)
export interface Checklist {
  id?: string;
  name: string;
  scope: "global" | "property";
  property_id?: string; // set when scope === 'property'
  is_default: boolean; // default for its scope (property/global)
  is_express: boolean; // express-mode variant
  created_by_user_id: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface ChecklistItem {
  id?: string;
  checklist_id: string;
  order_index: number;
  title: string;
  room_label?: string;
  required_photo: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}
