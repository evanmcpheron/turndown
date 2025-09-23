// swipe.row.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { SemanticColors } from "@/src/shared/styles/general.styles";
import { TurndownObject } from "@/src/types";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Label } from "../../data-display/font";
import { swipeRowComponentStyles } from "./swipe.row.styled";
import { SwipeRowHandle, SwipeRowProps } from "./swipe.row.types";

export const SwipeRow = forwardRef<SwipeRowHandle, SwipeRowProps>(
  function SwipeRow(
    {
      children,
      leftActions = [],
      rightActions = [],
      actionWidth = 72,
      rightThreshold = 40,
      leftThreshold = 40,
      friction = 2,
      overshootLeft = false,
      overshootRight = false,
      onSwipeStart,
      onSwipeEnd,
    },
    ref
  ) {
    const swipeRef = useRef<TurndownObject>(null);
    const { app } = useTheme();

    useImperativeHandle(ref, () => ({
      close: () => swipeRef.current?.close(),
      openLeft: () => swipeRef.current?.openLeft(),
      openRight: () => swipeRef.current?.openRight(),
    }));

    const styles = useMemo(() => swipeRowComponentStyles(app), [app]);

    const renderActions = (side: "left" | "right") => {
      const actions = side === "left" ? leftActions : rightActions;
      if (!actions.length) return null;

      return (
        <View
          style={[
            styles.actionsContainer,
            {
              width: actions.reduce((w, a) => w + (a.width ?? actionWidth), 0),
              borderBottomLeftRadius: side === "left" ? app.radii.lg : 0,
              borderBottomRightRadius: side === "right" ? app.radii.lg : 0,
              borderTopLeftRadius: side === "left" ? app.radii.lg : 0,
              borderTopRightRadius: side === "right" ? app.radii.lg : 0,
              overflow: "hidden",
            },
          ]}
        >
          {actions.map((a, idx) => {
            const bg = app.colors[a.severity as keyof SemanticColors];
            const w = a.width ?? actionWidth;
            return (
              <RectButton
                key={`${side}-${idx}`}
                onPress={() => {
                  swipeRef.current?.close();
                  a.onPress();
                }}
                style={[
                  styles.action,
                  {
                    backgroundColor: bg,
                    width: w,
                  },
                ]}
                testID={a.testID}
              >
                <View style={styles.center}>
                  {a.icon ?? <Label style={styles.fallbackDot}>•</Label>}
                </View>
              </RectButton>
            );
          })}
        </View>
      );
    };

    return (
      <Swipeable
        ref={swipeRef}
        renderLeftActions={() => renderActions("left")}
        renderRightActions={() => renderActions("right")}
        rightThreshold={rightThreshold}
        leftThreshold={leftThreshold}
        friction={friction}
        overshootLeft={overshootLeft}
        overshootRight={overshootRight}
        onSwipeableWillOpen={onSwipeStart}
        onSwipeableWillClose={onSwipeEnd}
      >
        <View style={{ overflow: "hidden" }}>{children}</View>
      </Swipeable>
    );
  }
);
