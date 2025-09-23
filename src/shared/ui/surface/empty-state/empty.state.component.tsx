// empty.state.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useMemo } from "react";
import { View } from "react-native";
import { TurndownButton } from "../../actions";
import { Label } from "../../data-display/font";
import { Card } from "../card/card.layout.component";
import { turndownEmptyStateComponentStyles } from "./empty.state.styles";
import { TurndownEmptyStateProps } from "./empty.state.types";

export const TurndownEmptyState = ({
  onCreate,
  title,
  buttonText,
  description,
}: TurndownEmptyStateProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownEmptyStateComponentStyles(app), [app]);

  return (
    <Card secondary title={`No ${title} yet`}>
      <View style={styles.container}>
        <Label style={{ color: app.colors.textMuted, textAlign: "center" }}>
          {description}
        </Label>
        <TurndownButton fullWidth onPress={onCreate} variant="filled">
          {buttonText}
        </TurndownButton>
      </View>
    </Card>
  );
};
