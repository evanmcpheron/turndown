import { useState } from "react";
import {
  PropertyContext,
  PropertyContextValue,
  PropertyProviderProps,
} from "./property.types";

export const PropertyProvider = ({ children }: PropertyProviderProps) => {
  const [propertyId, setPropertyId] = useState<string | null>(null);

  const value: PropertyContextValue = {
    propertyId,
    setPropertyId,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};
