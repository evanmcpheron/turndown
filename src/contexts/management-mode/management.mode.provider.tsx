// management.mode.provider.tsx

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  DEFAULT_MANAGEMENT_MODE_KEY,
  ManagementModeContext,
  ManagementModeContextValue,
  ManagementModeProviderProps,
} from "./management.mode.types";

export const ManagementModeProvider = ({
  children,
  defaultMode = true,
  persist = true,
  storageKey = DEFAULT_MANAGEMENT_MODE_KEY,
  onChange,
}: ManagementModeProviderProps) => {
  const [managementMode, setManagementMode] = useState<boolean>(defaultMode);

  const didHydrate = useRef(false);

  useEffect(() => {
    if (!persist) {
      didHydrate.current = true;
      return;
    }
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(storageKey);
        if (saved === "true" || saved === "false") {
          setManagementMode(saved === "true");
        }
      } catch {
      } finally {
        didHydrate.current = true;
      }
    })();
  }, [persist, storageKey]);

  useEffect(() => {
    if (!persist || !didHydrate.current) return;
    AsyncStorage.setItem(storageKey, String(managementMode)).catch(() => {});
  }, [managementMode, persist, storageKey]);

  useEffect(() => {
    onChange?.(managementMode);
  }, [managementMode, onChange]);

  const changeManagementMode = useCallback(() => {
    setManagementMode((prev) => {
      if (prev) {
        router.replace("/(tabs)/settings");
      } else {
        router.replace("/(tabs)/settings");
      }
      return !prev;
    });
  }, []);

  const setExplicit = useCallback((value: boolean) => {
    setManagementMode(value);
  }, []);

  const value = useMemo<ManagementModeContextValue>(
    () => ({
      managementMode,

      changeManagementMode,
      setManagementMode: setExplicit,
      didHydrate: didHydrate.current,
    }),
    [managementMode, changeManagementMode, setExplicit]
  );

  return (
    <ManagementModeContext.Provider value={value}>
      {children}
    </ManagementModeContext.Provider>
  );
};
