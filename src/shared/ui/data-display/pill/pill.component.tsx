// pill.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { withOpacity } from "@/src/shared/styles";
import { Label } from "@/src/shared/ui/data-display/font";
import { useMemo } from "react";
import { View } from "react-native";
import { turndownPillComponentStyles } from "./pill.styles";
import { TurndownPillProps } from "./pill.types";

export const TurndownPill = ({
  severity = "neutral",
  label,
}: TurndownPillProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownPillComponentStyles(app), [app]);

  const color = {
    neutral: {
      color: app.colors.textMuted,
      backgroundColor: withOpacity(app.colors.text, 0.08),
    },
    low: {
      color: app.colors.success,
      backgroundColor: withOpacity(app.colors.success, 0.18),
    },
    medium: {
      color: app.colors.warning,
      backgroundColor: withOpacity(app.colors.warning, 0.18),
    },
    high: {
      color: app.colors.danger,
      backgroundColor: withOpacity(app.colors.danger, 0.18),
    },
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color[severity].backgroundColor,
          borderColor: color[severity].backgroundColor,
        },
      ]}
    >
      <Label
        style={[
          styles.label,
          {
            color: color[severity].color,
          },
        ]}
      >
        {label}
      </Label>
    </View>
  );
};
