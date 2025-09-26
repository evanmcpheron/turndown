// field.container.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { Row } from "@/src/shared/ui/surface/cell";
import { useMemo } from "react";
import { View } from "react-native";
import { fieldContainerComponentStyles } from "./field.container.styled";
import { FieldContainerProps } from "./field.container.types";

export const FieldContainer = ({
  label,
  subLabel,
  required,
  requiredCaption,
  formInput,
}: FieldContainerProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => fieldContainerComponentStyles(app), [app]);

  return (
    <View style={styles.container}>
      <Row rowDirection="column">
        {label && (
          <Label variant="caption" style={styles.label}>
            {label}
            {required && <Label color="danger"> *</Label>}
          </Label>
        )}
        {formInput}
      </Row>
    </View>
  );
};
