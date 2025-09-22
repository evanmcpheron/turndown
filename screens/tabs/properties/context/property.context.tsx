import { useContext } from "react";
import { PropertyContext, PropertyContextValue } from "./property.types";

export const useProperty = (): PropertyContextValue => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
};
