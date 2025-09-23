import { Mode } from "@/src/shared/ui/forms";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { useRef, useState } from "react";
import { InventoryTemplateRefHandler } from "./inventory.template.types";

export const InventoryTemplateScreen = () => {
  const inventoryTemplateEditFormRef =
    useRef<InventoryTemplateRefHandler>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page
      header="InventoryTemplate"
      scrollable
      canGoBack
      isLoading={isLoading}
    ></Page>
  );
};
