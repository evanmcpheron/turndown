import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownPill } from "@/src/shared/ui/data-display/pill";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { SwipeRow } from "@/src/shared/ui/surface/swipe-row";
import { SwipeAction } from "@/src/shared/ui/surface/swipe-row/swipe.row.types";
import { Pressable } from "react-native";
import { InviteRowProps } from "./invite.row.types";

export const InviteRow = ({ invite, onDelete, onView }: InviteRowProps) => {
  const {} = invite;

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
      <Pressable onPress={onView}>
        <Row rowDirection="column">
          <Label>{invite.email}</Label>
          <Row>
            <TurndownPill label={invite.code} />
            <TurndownPill label={invite.status} />
          </Row>
        </Row>
      </Pressable>
    </SwipeRow>
  );
};
