import { OctagonCheckIcon } from "@/src/shared/icons/octagon-check.component";
import { SquareCheckIcon } from "@/src/shared/icons/square-check.component";
import { Label } from "@/src/shared/ui/data-display/font";
import { Card } from "@/src/shared/ui/surface/card/card.layout.component";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { SwipeRow } from "@/src/shared/ui/surface/swipe-row";
import { SwipeAction } from "@/src/shared/ui/surface/swipe-row/swipe.row.types";
import { useState } from "react";
import { Pressable } from "react-native";
import { RoomRowProps } from "./room.row.types";

export const RoomRow = ({ room, onEdit, onDelete }: RoomRowProps) => {
  const [isSwiping, setIsSwiping] = useState(false);

  const { name, checklist_template_id } = room;

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
      <Pressable onPress={onEdit}>
        <Card secondary rounded={!isSwiping}>
          <Row justifyContent="space-between" alignItems="center">
            <Label variant="h4" numberOfLines={1}>
              {name || "Room"}
            </Label>
            {checklist_template_id ? (
              <SquareCheckIcon color={"success"} type="regular" />
            ) : (
              <OctagonCheckIcon color={"danger"} type="regular" />
            )}
          </Row>
        </Card>
      </Pressable>
    </SwipeRow>
  );
};
