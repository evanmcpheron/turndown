// pill.types.ts

import { Severity } from "@/src/types";

export interface TurndownPillProps {
  severity: Severity;
  label: React.ReactNode | number | string;
}
