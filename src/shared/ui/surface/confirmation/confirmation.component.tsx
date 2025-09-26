// confirmation.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useMemo } from "react";
import { Modal, View } from "react-native";
import { TurndownButton } from "../../actions";
import { Label } from "../../data-display";
import { Row } from "../cell";
import { TurndownSection } from "../section";
import { confirmationComponentStyles } from "./confirmation.styled";
import { ConfirmationProps } from "./confirmation.types";

export const Confirmation = ({
  visible,
  onCancel,
  onConfirm,
  title,
  body,
  cancelText = "Cancel",
  confirmText = "Confirm",
}: ConfirmationProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => confirmationComponentStyles(app), [app]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.backdrop}>
        <TurndownSection title={title} style={styles.card}>
          <Label>{body}</Label>
          <Row justifyContent="flex-end">
            <TurndownButton variant="outline" onPress={onCancel}>
              {cancelText}
            </TurndownButton>
            <TurndownButton onPress={onConfirm}>{confirmText}</TurndownButton>
          </Row>
        </TurndownSection>
      </View>
    </Modal>
  );
};
