import { useTheme } from "@/src/contexts/theme";
import { checklistItemApi } from "@/src/services";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownPill } from "@/src/shared/ui/data-display/pill";
import { Card } from "@/src/shared/ui/surface/card/card.layout.component";
import { Cell } from "@/src/shared/ui/surface/cell/cell.layout.component";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { useEffect, useMemo, useState } from "react";
import { Pressable } from "react-native";
import { checklistsRowStyles } from "./checklist.row.styles";
import { ChecklistRowProps } from "./checklist.row.types";

export const ChecklistRow = ({ name, id, onPress }: ChecklistRowProps) => {
  const { app } = useTheme();
  const styles = useMemo(() => checklistsRowStyles(app), [app]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (id) {
      checklistItemApi.getAllByChecklistId(id).then((response) => {
        console.log(
          `🚀 ~ checklist.row.component.tsx:18 ~ ChecklistRow ~ response: \n`,
          response
        );
        setCount(response.length);
      });
    }
  }, [id]);

  return (
    <Pressable onPress={onPress}>
      <Card>
        <Row justifyContent="space-between" alignItems="center">
          <Cell>
            <Label>{name}</Label>
          </Cell>
          <Cell height={35}>
            <TurndownPill label={`${count}`} severity={"low"} />
          </Cell>
        </Row>
      </Card>
    </Pressable>
  );
};
