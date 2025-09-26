// confirmation.types.ts

export interface ConfirmationProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  body: string;
  cancelText?: string;
  confirmText?: string;
}
