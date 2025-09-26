import { useContext } from "react";
import {
  ManagementModeContext,
  ManagementModeContextValue,
} from "./management.mode.types";

export const useManagementMode = (): ManagementModeContextValue => {
  const context = useContext(ManagementModeContext);
  if (context === undefined) {
    throw new Error(
      "useManagementMode must be used within a ManagementModeProvider"
    );
  }
  return context;
};
