import { MetaData } from ".";

export type ChecklistScope = "global" | "property";

export interface Checklist extends MetaData {
  id: string;
  name: string;
  room_id?: string;
  property_id?: string;
  is_template: boolean;
}

export interface ChecklistItem extends MetaData {
  id: string;
  checklist_id: string;
  text: string;
  room_id?: string;
  photo_required: boolean;
}
