import React, { createContext, ReactNode, useContext, useState } from "react";

interface PropertyContextValue {
  propertyId: string | null;
  setPropertyId: (id: string | null) => void;
}

const PropertyContext = createContext<PropertyContextValue | undefined>(
  undefined
);

interface PropertyProviderProps {
  children: ReactNode;
}

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

export const useProperty = (): PropertyContextValue => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
};
