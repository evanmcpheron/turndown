// turndown.empty.state.component.tsx

import { useMemo } from "react";
import { View } from "react-native";
import { TurndownEmptyStateProps } from './turndown.empty.state.types'
import { useTheme } from "@/context/theme/theme.context";
import { turndownEmptyStateComponentStyles } from './turndown.empty.state.styled'

export const TurndownEmptyState = (_props: TurndownEmptyStateProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => turndownEmptyStateComponentStyles(app), [app]);

  return <View style={styles.container}></View>;
}
