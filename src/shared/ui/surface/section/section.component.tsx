// section.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { useMemo } from "react";
import { View } from "react-native";
import { Hr } from "../../data-display/hr";
import { turndownSectionComponentStyles } from "./section.styles";
import { TurndownSectionProps } from "./section.types";

export const TurndownSection = ({
  title,
  hint,
  right,
  style,
  children,
}: TurndownSectionProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownSectionComponentStyles(app), [app]);

  return (
    <View style={[styles.container, style]}>
      {(title || hint) && (
        <View
          style={{
            marginBottom: app.spacing[2],
          }}
        >
          <View>
            <Label variant="h3">{title}</Label>
            {!!hint && (
              <Label
                variant="subtitle2"
                style={{
                  flexWrap: "wrap",
                  textOverflow: "wrap",
                  color: app.colors.textMuted,
                  marginVertical: app.spacing[2],
                  paddingBottom: app.spacing[2],
                }}
              >
                {hint}
              </Label>
            )}
          </View>
          <Hr />
        </View>
      )}
      <View>{children}</View>
      {right && <View>{right}</View>}
    </View>
  );
};
