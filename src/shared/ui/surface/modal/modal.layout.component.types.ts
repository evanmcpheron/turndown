export interface ModalProps {
  header?: {
    primary?: string;
    secondary?: string;
  };
  autoHeight?: boolean;
  saveText?: string;
  isOpen: boolean;
  isLoading?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
  animationType?: "none" | "slide" | "fade";
  isTransparent?: boolean;
  scrollable?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
}
