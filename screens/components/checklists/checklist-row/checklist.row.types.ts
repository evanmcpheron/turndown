import { TurndownObject } from "@/src/types";

export interface ChecklistRowProps {
  id: TurndownObject;
  name: string;
  onEdit: () => void;
  onDelete: () => void;
}
