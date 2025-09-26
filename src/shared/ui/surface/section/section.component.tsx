// section.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { useMemo } from "react";
import { View } from "react-native";
import { Row } from "../cell/row/row.layout.component";
import { turndownSectionComponentStyles } from "./section.styles";
import { TurndownSectionProps } from "./section.types";

export const TurndownSection = ({
  title,
  hint,
  action,
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
            borderBottomColor: app.colors.primary,
            borderBottomWidth: 2,
            paddingBottom: 10,
          }}
        >
          <Row>
            <View
              style={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
              }}
            >
              {title && (
                <Label variant="h3" style={{ marginBottom: 4 }}>
                  {title}
                </Label>
              )}
              {hint && <Label variant="caption">{hint}</Label>}
            </View>
            {action && action}
          </Row>
        </View>
      )}
      {children}
    </View>
  );
};
