// swipe.row.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { SemanticColors } from "@/src/shared/styles/general.styles";
import { Label } from "@/src/shared/ui/data-display/font";
import { Card } from "@/src/shared/ui/surface/card";
import { TurndownObject } from "@/src/types";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
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
    },
    ref
  ) {
    const swipeRef = useRef<TurndownObject>(null);
    const { app } = useTheme();

    const [isSwiping, setIsSwiping] = useState(false);

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
        renderRightActions={() =>
          rightActions.length > 0 && renderActions("right")
        }
        rightThreshold={rightThreshold}
        leftThreshold={leftThreshold}
        friction={friction}
        overshootLeft={overshootLeft}
        overshootRight={overshootRight}
        onSwipeableWillOpen={(direction) => {
          if (
            (direction === "left" && leftActions.length) ||
            (direction === "right" && rightActions.length)
          ) {
            setIsSwiping(true);
          }
        }}
        onSwipeableWillClose={() => setIsSwiping(false)}
      >
        <View style={{ overflow: "hidden" }}>
          <Card secondary rounded={!isSwiping}>
            {children}
          </Card>
        </View>
      </Swipeable>
    );
  }
);
