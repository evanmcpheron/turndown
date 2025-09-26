import { Turn } from "@/src/types/models";

export interface TurnRowProps {
  turn: Turn;
  onDelete: () => void;
  onEdit: () => void;
}
