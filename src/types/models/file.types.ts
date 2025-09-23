import { MediaKind, MetaData } from ".";

// ───────────────────────────── exports (Proof Pack files)
export interface ExportFile extends MetaData {
  id?: string;
  property_id: string;
  turn_id: string;
  file_url: string; // PDF/ZIP
}

// ───────────────────────────── media (photos/videos/files for audit trail)
export interface Media extends MetaData {
  id?: string;
  property_id: string;
  turn_id?: string;
  issue_id?: string;

  url: string;
  media_kind: MediaKind;
  caption?: string;
}
