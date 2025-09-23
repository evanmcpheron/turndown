// row.action.types.ts

import { StyleProp, ViewStyle } from "react-native";

export interface RowActionProps {
  text: string;
  onEdit?: () => void;
  onDelete?: () => void;
  disabled?: boolean;
  photo_required?: boolean;
  style?: StyleProp<ViewStyle>;
}
