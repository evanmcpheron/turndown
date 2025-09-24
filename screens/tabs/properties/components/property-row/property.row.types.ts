import { Property } from "@/src/types/models";

export interface PropertyRowProps {
  property: Property;
  onEdit: () => void;
  onDelete: () => void;
}
