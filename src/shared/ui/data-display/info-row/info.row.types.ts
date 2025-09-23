// info.row.types.ts

import { Severity } from "@/src/types";

export interface TurndownInfoRowProps {
  label: string;
  value?: string;
  quantity?: number;
  severity?: Severity;
  onEdit?: () => void;
  onDelete?: () => void;
}
