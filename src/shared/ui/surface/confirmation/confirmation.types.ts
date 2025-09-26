// confirmation.types.ts

export interface ConfirmationProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
