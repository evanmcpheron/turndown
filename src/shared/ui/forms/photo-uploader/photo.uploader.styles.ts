// photo.uploader.styled.ts

import { withOpacity } from "@/src/shared/styles";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const turndownPhotoUploaderComponentStyles = (t: AppTheme) =>
  StyleSheet.create({
    container: { gap: t.spacing[2] },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    subtle: { color: t.colors.textMuted },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: t.spacing[2],
    },
    tile: {
      width: 96,
      height: 96,
      borderRadius: t.radii.lg,
      overflow: "hidden",
      backgroundColor: t.colors.surface2,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: t.colors.outline,
      position: "relative",
    },
    thumb: { width: "100%", height: "100%" },
    progressBarWrap: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 6,
      backgroundColor: withOpacity(t.colors.text, 0.1),
    },
    progressBar: {
      height: "100%",
      backgroundColor: t.colors.primary,
      width: "0%",
    },
    errorBadge: {
      position: "absolute",
      top: 6,
      right: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: t.radii.pill,
      backgroundColor: withOpacity(t.colors.danger, 0.15),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(t.colors.danger, 0.6),
    },
    errorText: { color: t.colors.danger, fontSize: 11 },
    row: { flexDirection: "row", gap: t.spacing[2] },
    actionBar: { flexDirection: "row", gap: t.spacing[2], flexWrap: "wrap" },
    clearBtn: {
      paddingVertical: t.spacing[1],
      paddingHorizontal: t.spacing[2],
      borderRadius: t.radii.md,
      backgroundColor: withOpacity(t.colors.text, 0.08),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: t.colors.outline,
    },
    linkBtn: {
      paddingVertical: t.spacing[1],
      paddingHorizontal: t.spacing[2],
      borderRadius: t.radii.md,
      backgroundColor: withOpacity(t.colors.primary, t.isDark ? 0.14 : 0.08),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(t.colors.primary, 0.25),
    },
    linkText: { color: t.colors.primary },
  });
