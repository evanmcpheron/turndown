// turndown.empty.state.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useMemo } from "react";
import { View } from "react-native";
import { turndownEmptyStateComponentStyles } from "./turndown.empty.state.styled";
import { TurndownEmptyStateProps } from "./turndown.empty.state.types";

export const TurndownEmptyState = (_props: TurndownEmptyStateProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownEmptyStateComponentStyles(app), [app]);

  return <View style={styles.container}></View>;
};
