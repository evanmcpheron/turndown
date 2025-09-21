// turndown.pill.types.ts

import { Severity } from "@/helpers";

export interface TurndownPillProps {
  severity: Severity;
  label: React.ReactNode | number | string;
}
