import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { InventoryTemplateList } from "./list/inventory.template.list";

export const InventoryTemplateScreen = () => {
  return (
    <Page
      contentContainerStyle={{ justifyContent: "center" }}
      header="Inventory"
      canGoBack
    >
      <InventoryTemplateList />
    </Page>
  );
};
