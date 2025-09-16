export interface TabsProps {
  children: React.ReactNode;
  centered?: boolean;
  style?: StyleSheet;
}

export interface TabsItemProps {
  label: string;
  disabled?: boolean;
  default?: boolean;
  children: React.ReactNode;
}
