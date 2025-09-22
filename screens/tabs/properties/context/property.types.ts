import { createContext } from "react";

export interface PropertyContextValue {
  propertyId: string | null;
  setPropertyId: (id: string | null) => void;
}

export const PropertyContext = createContext<PropertyContextValue>({
  propertyId: null,
  setPropertyId: () => {},
});

export interface PropertyProviderProps {
  children: React.ReactNode;
}
