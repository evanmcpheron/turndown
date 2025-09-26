import { propertiesApi } from "@/src/services/api/properties";
import { Cell, normalCase, snakeCaseToSpaces } from "@/src/shared";
import { CheckIcon } from "@/src/shared/icons/check.component";
import { SquareExclamationIcon } from "@/src/shared/icons/square-exclamation.component";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownPill } from "@/src/shared/ui/data-display/pill";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { SwipeRow } from "@/src/shared/ui/surface/swipe-row";
import { SwipeAction } from "@/src/shared/ui/surface/swipe-row/swipe.row.types";
import { Severity } from "@/src/types";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { TurnWorkerRowProps } from "./turn.row.types";

export const TurnWorkerRow = ({
  turn,
  onView,
  onDelete,
}: TurnWorkerRowProps) => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const {
    assigned_user_id,
    scheduled_start_at,
    status,
    readiness_status,
    property_id,
  } = turn;

  useEffect(() => {
    propertiesApi.getById(property_id).then((res) => {
      setAddress(
        `${res.address_line1} ${res.city}, ${res.state} ${res.postal_code}`
      );
      setName(res.name);
    });
  });

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
    <SwipeRow {...(status !== "completed" && { rightActions })}>
      <Pressable onPress={onView}>
        <Row rowDirection="column" justifyContent="center">
          <Label variant={"h4"}>{name}</Label>
          <Label>{address}</Label>
          <Cell
            cellDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Label>{scheduled_start_at.toString()}</Label>
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
