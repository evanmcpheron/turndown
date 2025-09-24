// section.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { useMemo } from "react";
import { View } from "react-native";
import { Hr } from "../../data-display/hr";
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
        <View>
          <Row>
            <View
              style={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
              }}
            >
              <Label variant="h3" style={{ marginBottom: 4 }}>
                {title}
              </Label>
              <Label variant="caption">{hint}</Label>
            </View>
            {action && action}
          </Row>
          <Hr marginVertical={10} />
        </View>
      )}
      {children}
    </View>
  );
};
