import { Cell, normalCase, snakeCaseToSpaces } from "@/src/shared";
import { CheckIcon } from "@/src/shared/icons/check.component";
import { SquareExclamationIcon } from "@/src/shared/icons/square-exclamation.component";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownPill } from "@/src/shared/ui/data-display/pill";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { SwipeRow } from "@/src/shared/ui/surface/swipe-row";
import { SwipeAction } from "@/src/shared/ui/surface/swipe-row/swipe.row.types";
import { Severity } from "@/src/types";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { TurnRowProps } from "./turn.row.types";

export const TurnRow = ({ turn, onEdit, onDelete }: TurnRowProps) => {
  const { assigned_user_id, scheduled_start_at, status, readiness_status } =
    turn;

  const [statusColor] = useState<Severity>(() => {
    if (status === "pending") {
      return "neutral";
    } else if (
      status === "assigned" ||
      status === "completed" ||
      status === "in_progress"
    ) {
      return "low";
    } else if (status === "canceled") {
      return "medium";
    }
    return "neutral";
  });

  const [readinessStatusColor] = useState<Severity>(() => {
    if (readiness_status === "ready") {
      return "low";
    } else if (readiness_status === "not_ready") {
      return "medium";
    } else if (readiness_status === "blocked") {
      return "high";
    }
    return "neutral";
  });

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
        <Row rowDirection="column" justifyContent="center">
          <Cell
            cellDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Label>{scheduled_start_at}</Label>
            <TurndownPill
              label={normalCase(snakeCaseToSpaces(readiness_status))}
              severity={readinessStatusColor}
            />
          </Cell>
          <Cell
            cellDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Label>Worker Assigned: </Label>
              {assigned_user_id ? (
                <CheckIcon type="regular" color="success" />
              ) : (
                <SquareExclamationIcon type="regular" color="danger" />
              )}
            </View>
            <TurndownPill label={normalCase(status)} severity={statusColor} />
          </Cell>
        </Row>
      </Pressable>
    </SwipeRow>
  );
};
