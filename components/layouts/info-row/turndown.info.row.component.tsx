// turndown.info.row.component.tsx

import { Label } from "@/components/font";
import { useTheme } from "@/context/theme/theme.context";
import { useMemo } from "react";
import { View } from "react-native";
import { TurndownPill } from "../../misc/pill";
import { Row } from "../cell/row/row.layout.component";
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
