// swipe.row.component.tsx

import { useMemo } from "react";
import { View } from "react-native";
import { SwipeRowProps } from './swipe.row.types'
import { useTheme } from "@/context/theme/theme.context";
import { swipeRowComponentStyles } from './swipe.row.styled'

export const SwipeRow = (_props: SwipeRowProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => swipeRowComponentStyles(app), [app]);

  return <View style={styles.container}></View>;
}
