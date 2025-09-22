// turndown.section.types.ts

import React from "react";

export interface TurndownSectionProps {
  title?: string;
  hint?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}
