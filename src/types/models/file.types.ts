import { MetaData } from "./base.types";

export type MediaKind = "image" | "video" | "file";

export interface Media extends MetaData {
  id: string;
  property_id: string;
  turn_id: string;
  issue_id: string;
  url: string;
  media_kind: MediaKind;
  caption?: string;
}
