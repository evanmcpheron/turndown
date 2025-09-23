// row.action.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { TrashCanIcon } from "@/src/shared/icons/trash-can.component";
import { useMemo } from "react";
import { Pressable, View } from "react-native";
import { TurndownButton } from "../../actions";
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

  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={() => {
          onEdit && onEdit();
        }}
        style={styles.textWrap}
      >
        <Label numberOfLines={1} ellipsizeMode="tail">
          {text}
        </Label>
      </Pressable>

      {(onEdit || onDelete) && (
        <View style={styles.actionsWrap}>
          {onDelete && (
            <TurndownButton variant="outline" onPress={onDelete}>
              <TrashCanIcon type="regular" color="danger" />
            </TurndownButton>
          )}
        </View>
      )}
    </View>
  );
};
