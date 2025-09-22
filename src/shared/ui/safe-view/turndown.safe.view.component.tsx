// turndown.safe.view.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { safeViewComponentStyles } from "./turndown.safe.view.styled";
import { SafeViewProps } from "./turndown.safe.view.types";

export const TurndownSafeView = (props: SafeViewProps) => {
  const { ignoreTop, ignoreBottom, ignoreLeft, ignoreRight, children } = props;
  const insets = useSafeAreaInsets();
  const { app } = useTheme();

  const styles = useMemo(() => safeViewComponentStyles(app), [app]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: !ignoreTop ? insets.top : 0,
          paddingBottom: !ignoreBottom ? insets.bottom + 20 : 0,
          paddingLeft: !ignoreLeft ? insets.left : 0,
          paddingRight: !ignoreRight ? insets.right : 0,
        },
      ]}
    >
      {children}
    </View>
  );
};
