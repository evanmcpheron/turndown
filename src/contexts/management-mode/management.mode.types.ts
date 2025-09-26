// management.mode.types.ts
import { createContext } from "react";

export const DEFAULT_MANAGEMENT_MODE_KEY = "@management-mode/enabled";

export interface ManagementModeContextValue {
  managementMode: boolean;
  changeManagementMode: () => void;
  setManagementMode?: (value: boolean) => void;
  didHydrate?: boolean;
}

export interface ManagementModeProviderProps {
  children: React.ReactNode;
  defaultMode?: boolean;
  persist?: boolean;
  storageKey?: string;
  onChange?: (managementMode: boolean) => void;
}

export const ManagementModeContext = createContext<ManagementModeContextValue>({
  managementMode: true,
  changeManagementMode: () => {},
});
