import { Timestamp } from "firebase/firestore";
import { InventoryLevel } from ".";

// ───────────────────────────── inventory (global catalog)
export interface InventoryItem {
  id?: string; // e.g., "toilet-paper"
  slug: string;
  label: string;
  unit_label?: string; // "rolls", "pods"
  is_active: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}

// ───────────────────────────── property_inventory (per-property settings)
export interface PropertyInventory {
  id?: string;
  property_id: string;
  inventory_item_id: string;

  threshold: number; // owner-defined critical threshold
  is_critical: boolean;

  restock_note?: string;
  restock_link?: string;

  created_at: Timestamp;
  updated_at: Timestamp;
}

// ───────────────────────────── inventory_counts (per-turn or ad-hoc logs)
export interface InventoryCount {
  id?: string;
  property_id: string;
  inventory_item_id: string;

  turn_id?: string; // set when done during a turn
  level: InventoryLevel; // ok/low/out (quick stepper)
  value_count?: number; // optional exact count if captured

  counted_at: Timestamp;
  counted_by_user_id: string;

  created_at: Timestamp;
}
