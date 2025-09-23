// row.action.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useMemo, useState } from "react";
import { Pressable } from "react-native";
import { Card } from "../../surface/card/card.layout.component";
import { SwipeRow } from "../../surface/swipe-row";
import { SwipeAction } from "../../surface/swipe-row/swipe.row.types";
import { Label } from "../font";
import { rowActionComponentStyles } from "./row.action.styled";
import { RowActionProps } from "./row.action.types";

export const RowAction = ({
  text,
  onEdit,
  onDelete,
  disabled = false,
  style,
}: RowActionProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => rowActionComponentStyles(app), [app]);
  const [isSwiping, setIsSwiping] = useState(false);

  const rightActions: SwipeAction[] = [
    {
      severity: "danger",
      icon: <Label color="onDanger">Delete</Label>,
      onPress: () => onDelete?.(),
      width: 88,
    },
  ];

  return (
    <SwipeRow
      rightActions={rightActions}
      onSwipeStart={() => setIsSwiping(true)}
      onSwipeEnd={() => setIsSwiping(false)}
    >
      <Card secondary rounded={!isSwiping} style={[styles.container, style]}>
        <Pressable
          onPress={() => {
            onEdit && onEdit();
          }}
        >
          <Label>{text}</Label>
        </Pressable>
      </Card>
    </SwipeRow>
  );
};
