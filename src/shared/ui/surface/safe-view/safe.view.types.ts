// safe.view.types.ts

export interface SafeViewProps {
  ignoreTop?: boolean;
  ignoreBottom?: boolean;
  ignoreLeft?: boolean;
  ignoreRight?: boolean;
  children: React.ReactNode;
}
