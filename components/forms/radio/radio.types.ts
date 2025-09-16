export interface RadioProps {
  children: React.ReactNode;
}

export interface RadioItemProps {
  label: string;
  disabled?: boolean;
  default?: boolean;
  children?: React.ReactNode;
}
