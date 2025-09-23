// row.action.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { CameraSlashIcon } from "@/src/shared/icons/camera-slash.component";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { Card } from "../../surface/card/card.layout.component";
import { SwipeRow } from "../../surface/swipe-row";
import { SwipeAction } from "../../surface/swipe-row/swipe.row.types";
import { Label } from "../font";
import { RowActionProps } from "./row.action.types";

export const RowAction = ({
  text,
  onEdit,
  onDelete,
  photo_required,
  disabled = false,
  style,
}: RowActionProps) => {
  const { app } = useTheme();

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
      <Pressable
        onPress={() => {
          onEdit && onEdit();
        }}
      >
        <Card
          disablePadding
          secondary
          rounded={!isSwiping}
          style={[style, { height: 60, justifyContent: "center" }]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <Label>{text}</Label>
            {!photo_required && (
              <View
                style={{
                  padding: 2,
                  borderColor: app.colors.danger,
                  borderWidth: 2,
                  borderRadius: "50%",
                }}
              >
                <CameraSlashIcon type="regular" color="danger" size="regular" />
              </View>
            )}
          </View>
        </Card>
      </Pressable>
    </SwipeRow>
  );
};
