import { Mode } from "../../forms";

export interface ModalProps {
  header?: {
    primary?: string;
    secondary?: string;
  };
  autoHeight?: boolean;
  saveText?: string;
  isOpen: boolean;
  mode?: Mode;
  isLoading?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
  animationType?: "none" | "slide" | "fade";
  selectedId: string | null;
  hideSave?: boolean;
  isTransparent?: boolean;
  scrollable?: boolean;
  disabled?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}
