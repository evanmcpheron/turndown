// expandable.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { ChevronDownIcon } from "@/src/shared/icons/chevron-down.component";
import { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Pressable } from "react-native";
import { Hr } from "../../data-display/hr";
import { Card } from "../card/card.layout.component";
import { Row } from "../cell/row/row.layout.component";
import { turndownExpandableComponentStyles } from "./expandable.styles";
import { TurndownExpandableProps } from "./expandable.types";

export const TurndownExpandable = ({
  header,
  body,
}: TurndownExpandableProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => turndownExpandableComponentStyles(app), [app]);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen, rotateAnim]);

  const arrowRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <Card>
      <Pressable style={{}} onPress={() => setIsOpen(!isOpen)}>
        <Row alignItems="center" justifyContent="space-between">
          {header}
          <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
            <ChevronDownIcon type="regular" />
          </Animated.View>
        </Row>
      </Pressable>
      {isOpen && <Hr marginVertical={10} />}
      {isOpen && body}
    </Card>
  );
};
