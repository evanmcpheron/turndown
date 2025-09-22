// turndown.info.row.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { Label } from "@/src/shared/ui/data-display/font";
import { useMemo } from "react";
import { View } from "react-native";

import { Row } from "../../surface/cell/row/row.layout.component";
import { TurndownPill } from "../pill";
import { turndownInfoRowComponentStyles } from "./turndown.info.row.styled";
import { TurndownInfoRowProps } from "./turndown.info.row.types";

export const TurndownInfoRow = ({
  label,
  value = "-",
  quantity,
  severity = "low",
}: TurndownInfoRowProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => turndownInfoRowComponentStyles(app), [app]);

  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      style={styles.container}
    >
      <Label style={styles.subtle}>{label}</Label>
      {quantity == null ? (
        <Label>{value}</Label>
      ) : (
        <View>
          {value !== "-" && <Label>{value}</Label>}
          <TurndownPill severity={severity} label={quantity} />
        </View>
      )}
    </Row>
  );
};
