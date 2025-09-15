/* eslint-disable @typescript-eslint/no-unused-vars */
import { DarkAppTheme } from "@/helpers/theme/dark.theme";
import { AppTheme } from "@/helpers/theme/general.styles";
import { LightAppTheme } from "@/helpers/theme/light.theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme } from "@react-navigation/native";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { deepMerge, toNativeTheme } from "./theme.context.helpers";
import {
  CustomThemeContextValue,
  DEFAULT_THEME_KEY,
  Scheme,
  ThemeOverrides,
  ThemeProviderProps,
} from "./theme.context.types";

const CustomThemeContext = createContext<CustomThemeContextValue | undefined>(
  undefined
);

export function CustomThemeProvider({
  children,
  mode: initialMode = "system",
  persist = true,
  storageKey = DEFAULT_THEME_KEY,
  overrides: initialOverrides,
  onChange,
}: ThemeProviderProps) {
  const systemScheme = useColorScheme(); // 'light' | 'dark' | null
  const [mode, setMode] = useState<"system" | Scheme>(initialMode);
  const [_scheme, setExplicitScheme] = useState<Scheme>(
    initialMode === "dark" ? "dark" : "light"
  );
  const [overrides, setOverrides] = useState<ThemeOverrides | undefined>(
    initialOverrides
  );
  const didHydrate = useRef(false);

  // Hydrate from storage
  useEffect(() => {
    if (!persist) return;
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark") {
          setMode(saved as Scheme);
          setExplicitScheme(saved as Scheme);
        } else if (saved === "system") {
          setMode("system");
        }
      } catch {}
      didHydrate.current = true;
    })();
  }, [persist, storageKey]);

  // Resolve effective scheme
  const effectiveScheme: Scheme = useMemo(() => {
    if (mode === "system") {
      return systemScheme === "dark" ? "dark" : "light";
    }
    return mode;
  }, [mode, systemScheme]);

  // Build themes (merge overrides)
  const app: AppTheme = useMemo(() => {
    const base = effectiveScheme === "dark" ? DarkAppTheme : LightAppTheme;
    const patch = overrides?.[effectiveScheme];
    return deepMerge(base, patch);
  }, [effectiveScheme, overrides]);

  const nav: Theme = useMemo(() => toNativeTheme(app), [app]);

  useEffect(() => {
    if (!persist || !didHydrate.current) return;
    const value = mode === "system" ? "system" : effectiveScheme;
    AsyncStorage.setItem(storageKey, value).catch(() => {});
  }, [mode, effectiveScheme, persist, storageKey]);

  useEffect(() => {
    onChange?.(effectiveScheme, app, nav);
  }, [effectiveScheme, app, nav, onChange]);

  const toggle = useCallback(() => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
    setExplicitScheme((s) => (s === "dark" ? "light" : "dark"));
  }, []);

  const setScheme = useCallback((s: Scheme) => {
    setMode(s);
    setExplicitScheme(s);
  }, []);

  const followSystem = useCallback(() => {
    setMode("system");
  }, []);

  const updateOverrides = useCallback((patch: ThemeOverrides) => {
    setOverrides((prev) => deepMerge(prev ?? {}, patch));
  }, []);

  const value = useMemo<CustomThemeContextValue>(
    () => ({
      scheme: effectiveScheme,
      mode,
      app,
      nav,
      toggle,
      setScheme,
      followSystem,
      updateOverrides,
    }),
    [
      effectiveScheme,
      mode,
      app,
      nav,
      toggle,
      setScheme,
      followSystem,
      updateOverrides,
    ]
  );

  return (
    <CustomThemeContext.Provider value={value}>
      {children}
    </CustomThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(CustomThemeContext);
  if (!ctx)
    throw new Error("useTheme() must be used within <CustomThemeProvider>");
  return ctx;
}
