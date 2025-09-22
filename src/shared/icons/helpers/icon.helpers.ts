// rn-icon.utils.ts
import { TurndownObject } from "@/src/types";
import type { ViewStyle } from "react-native";

// ---------- size helpers ----------

const SIZE_MAP: Record<string, number> = {
  small: 18,
  regular: 24,
  medium: 28,
  large: 32,
  "x-large": 40,
  "xx-large": 60,
};
export function normalizeSize(
  size?: unknown,
  fallback: number = 14
): TurndownObject {
  if (typeof size === "number") return size;

  if (typeof size === "string") {
    if (SIZE_MAP[size] != null) return SIZE_MAP[size];

    // "24px" -> 24
    const px = size.match(/^(-?\d+(?:\.\d+)?)px$/i);
    if (px) return Number(px[1]);

    // "50%" -> "50%"
    const pct = size.match(/^(-?\d+(?:\.\d+)?)%$/);
    if (pct) return `${Number(pct[1])}%` as const;

    // "24" -> 24
    const num = Number(size);
    if (!Number.isNaN(num)) return num;
  }

  return fallback;
}

/** Always returns non-null RN width/height */
export function getIconSize(props?: TurndownObject): {
  width: NonNullable<ViewStyle["width"]>;
  height: NonNullable<ViewStyle["height"]>;
} {
  const size = normalizeSize((props as any)?.size);

  return { width: size, height: size };
}
