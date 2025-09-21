export interface ModalProps {
  header?: {
    primary?: string;
    secondary?: string;
  };
  saveText?: string;
  isOpen: boolean;
  isLoading?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
  animationType?: "none" | "slide" | "fade";
  isTransparent?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
}
