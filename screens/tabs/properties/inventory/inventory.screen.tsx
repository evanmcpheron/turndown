import { Mode } from "@/src/shared/forms";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { Button } from "@/src/shared/ui/button";
import { Page } from "@/src/shared/ui/page/page.layout.component";
import { useRef, useState } from "react";

export const InventoryScreen = () => {
  const checklistCreateFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page
      header="Inventory"
      scrollable
      canGoBack
      isLoading={isLoading}
      headerButton={
        <Button
          width={50}
          circle
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
        >
          <PlusIcon type="regular" color="onPrimary" size={"medium"} />
        </Button>
      }
    ></Page>
  );
};
