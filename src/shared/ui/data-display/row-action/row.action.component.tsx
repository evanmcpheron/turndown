// row.action.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { CameraSlashIcon } from "@/src/shared/icons/camera-slash.component";
import { Pressable, View } from "react-native";
import { SwipeRow } from "../../surface/swipe-row";
import { SwipeAction } from "../../surface/swipe-row/swipe.row.types";
import { Label } from "../font";
import { RowActionProps } from "./row.action.types";

export const RowAction = ({
  text,
  onEdit,
  onDelete,
  photo_required,
}: RowActionProps) => {
  const { app } = useTheme();

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
      <Pressable
        onPress={() => {
          onEdit && onEdit();
        }}
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
      </Pressable>
    </SwipeRow>
  );
};
