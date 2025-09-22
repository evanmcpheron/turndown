// empty.state.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useMemo } from "react";
import { View } from "react-native";
import { turndownEmptyStateComponentStyles } from "./empty.state.styles";
import { TurndownEmptyStateProps } from "./empty.state.types";

export const TurndownEmptyState = (_props: TurndownEmptyStateProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownEmptyStateComponentStyles(app), [app]);

  return <View style={styles.container}></View>;
};
