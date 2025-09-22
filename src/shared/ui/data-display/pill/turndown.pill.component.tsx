// turndown.pill.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { useMemo } from "react";
import { View } from "react-native";
import { turndownPillComponentStyles } from "./turndown.pill.styled";
import { TurndownPillProps } from "./turndown.pill.types";

export const TurndownPill = ({ severity, label }: TurndownPillProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownPillComponentStyles(app), [app]);

  const color = {
    low: { color: app.colors.onSuccess, backgroundColor: app.colors.success },
    medium: {
      color: app.colors.onWarning,
      backgroundColor: app.colors.warning,
    },
    high: { color: app.colors.onDanger, backgroundColor: app.colors.danger },
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color[severity].backgroundColor,
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
