import { PlusIcon } from "@/src/shared/icons/plus.component";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { View } from "react-native";

export const InventoryTemplateList = () => {
  return (
    <View>
      <TurndownSection
        title="Templates"
        hint="Maintain reusable inventory: add or remove templates, then edit item details within each."
        style={{ height: "100%" }}
        action={
          <TurndownButton
            width={50}
            circle
            onPress={() => {
              console.log("hit");
            }}
          >
            <PlusIcon type="solid" size={"regular"} />
          </TurndownButton>
        }
      >
        <Label>Inventory</Label>
      </TurndownSection>
    </View>
  );
};
