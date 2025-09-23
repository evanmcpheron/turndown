import { Timestamp } from "firebase/firestore";
import { MetaData } from ".";
export type InventoryLevel = "out" | "low" | "ok";

export interface InventoryItem extends MetaData {
  id?: string;
  slug: string;
  label: string;
  unit_label?: string;
  is_active: boolean;
}

export interface PropertyInventory extends MetaData {
  id?: string;
  property_id: string;
  inventory_item_id: string;
  threshold: number;
  is_critical: boolean;
  restock_note?: string;
  restock_link?: string;
}

export interface InventoryCount extends MetaData {
  id?: string;
  property_id: string;
  inventory_item_id: string;
  turn_id?: string;
  level: InventoryLevel;
  value_count?: number;
  counted_at: Timestamp;
  counted_by_user_id: string;
}
