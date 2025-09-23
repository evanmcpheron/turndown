// bottom.drawer.types.ts

export interface BottomDrawerProps {
  open: boolean;
  onClose: () => void;
  height?: number;
  children: React.ReactNode;
  backdropOpacity?: number;
}
