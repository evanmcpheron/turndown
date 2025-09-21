import { PlusIcon } from "@/assets/icons/plus.component";
import { Button } from "@/components/actions";
import { Page } from "@/components/layouts/page/page.layout.component";
import { Mode } from "@/helpers/types/base/base.types";
import { useRef, useState } from "react";

export const TurndownScreen = () => {
  const checklistCreateFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page
      header="Turndown"
      scrollable
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

export default TurndownScreen;
