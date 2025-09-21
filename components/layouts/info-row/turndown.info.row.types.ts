// turndown.info.row.types.ts

import { Severity } from "@/helpers";

export interface TurndownInfoRowProps {
  label: string;
  value?: string;
  quantity?: number;
  severity?: Severity;
}
