import { checklistItemApi } from "@/src/services";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownPill } from "@/src/shared/ui/data-display/pill";
import { Cell } from "@/src/shared/ui/surface/cell/cell.layout.component";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { SwipeRow } from "@/src/shared/ui/surface/swipe-row";
import { SwipeAction } from "@/src/shared/ui/surface/swipe-row/swipe.row.types";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { ChecklistRowProps } from "./checklist.row.types";

export const ChecklistRow = ({
  name,
  id,
  onEdit,
  onDelete,
}: ChecklistRowProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (id) {
      checklistItemApi.getAllByChecklistId(id).then((response) => {
        setCount(response.length);
      });
    }
  }, [id]);

  const rightActions: SwipeAction[] = [
    {
      severity: "danger",
      icon: <Label color="onDanger">Delete</Label>,
      onPress: () => onDelete?.(),
      width: 88,
    },
  ];

  return (
    <SwipeRow rightActions={rightActions}>
      <Pressable onPress={onEdit}>
        <Row justifyContent="space-between" alignItems="center">
          <Cell>
            <Label>{name}</Label>
          </Cell>
          <Cell height={35}>
            <TurndownPill label={`${count}`} severity={"low"} />
          </Cell>
        </Row>
      </Pressable>
    </SwipeRow>
  );
};
