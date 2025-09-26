import { Turn } from "@/src/types/models";

export interface TurnWorkerRowProps {
  turn: Turn;
  onDelete: () => void;
  onView: () => void;
}
