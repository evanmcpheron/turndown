import { Timestamp } from "firebase/firestore";
import { MediaKind } from ".";

// ───────────────────────────── exports (Proof Pack files)
export interface ExportFile {
  id?: string;
  property_id: string;
  turn_id: string;
  file_url: string; // PDF/ZIP
  created_at: Timestamp;
}

// ───────────────────────────── media (photos/videos/files for audit trail)
export interface Media {
  id?: string;
  property_id: string;
  turn_id?: string;
  issue_id?: string;

  url: string;
  media_kind: MediaKind;
  caption?: string;

  taken_at?: Timestamp;
  uploaded_by_user_id: string;

  created_at: Timestamp;
  updated_at: Timestamp;
}
