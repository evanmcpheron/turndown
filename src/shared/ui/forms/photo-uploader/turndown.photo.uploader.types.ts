// turndown.photo.uploader.types.ts

export interface TurndownPhotoItem {
  id: string;
  localUri: string;
  status: "staged" | "uploading" | "uploaded" | "error";
  progress: number; // 0-100
  downloadUrl?: string;
  error?: string;
  filename?: string;
}

export type TurndownPhotoSource = "camera" | "library" | "both";

export interface TurndownPhotoUploaderProps {
  /** Allow taking photos, selecting from library, or both (default: "both") */
  sourceMode?: TurndownPhotoSource;
  /** Allow selecting multiple at once (default: true; Android may pick one-by-one) */
  multiple?: boolean;
  /** Max photos allowed in the staging list (default: 10) */
  maxCount?: number;
  /** Auto-upload immediately after adding (default: false = staged) */
  autoUpload?: boolean;
  /** If true, hide library button and force camera (overrides sourceMode) */
  forceCameraOnly?: boolean;

  /** Called whenever staged list changes (local URIs, statuses, urls when uploaded) */
  onChange?: (items: TurndownPhotoItem[]) => void;
  /** Called when a batch upload finishes (all successful) */
  onUploadComplete?: (downloadUrls: string[]) => void;
  /** Called when any single file finishes uploading (success) */
  onFileUploaded?: (item: TurndownPhotoItem) => void;

  /** Build a Storage path per file. Defaults to `uploads/{userId}/{timestamp}.jpg` */
  buildStoragePath?: (ctx: { userId?: string; filename: string }) => string;
  /** Optional userId for default path builder; if not provided, it’ll still work */
  userId?: string;

  /** Image picker options */
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number; // 0..1

  /** UI toggles */
  showAddButtons?: boolean; // default: true
  label?: string; // header label

  /** Disable everything (readonly display) */
  disabled?: boolean;
}

export interface TurndownPhotoUploaderHandle {
  /** Triggers upload for all staged items. Resolves to successful download URLs. */
  uploadAll: () => Promise<string[]>;
  /** Open camera and stage a photo (or upload if autoUpload=true). */
  addFromCamera: () => Promise<void>;
  /** Open library and stage photo(s) (or upload if autoUpload=true). */
  addFromLibrary: () => Promise<void>;
  /** Clear all staged/uploaded items from the component state. */
  clear: () => void;
  /** Snapshot of the current items list (staged, uploading, uploaded). */
  items: () => TurndownPhotoItem[];
}
