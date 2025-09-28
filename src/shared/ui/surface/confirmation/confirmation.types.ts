// confirmation.types.ts

import { SemanticColors } from "@/src/shared/styles/general.styles";

export interface ConfirmationProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  confirmationColor?: keyof SemanticColors;
  title: string;
  body: string;
  cancelText?: string;
  confirmText?: string;
}
