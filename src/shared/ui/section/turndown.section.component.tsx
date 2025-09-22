// turndown.section.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/font";
import { useMemo } from "react";
import { View } from "react-native";
import { Row } from "../cell/row/row.layout.component";
import { turndownSectionComponentStyles } from "./turndown.section.styled";
import { TurndownSectionProps } from "./turndown.section.types";

export const TurndownSection = ({
  title,
  hint,
  right,
  children,
}: TurndownSectionProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownSectionComponentStyles(app), [app]);

  return (
    <View style={styles.container}>
      <Row
        justifyContent="space-between"
        style={{ marginBottom: app.spacing[2] }}
      >
        <View style={{ marginBottom: app.spacing[2] }}>
          <Label variant="h3">{title}</Label>
          {!!hint && (
            <Label
              variant="subtitle2"
              style={{ color: app.colors.textMuted, marginTop: 4 }}
            >
              {hint}
            </Label>
          )}
        </View>
        {right}
      </Row>
      {children}
    </View>
  );
};
