import { PlusIcon } from "@/src/shared/icons/plus.component";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { useRef, useState } from "react";

export const MessagesScreen = () => {
  const checklistCreateFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page
      header="Messages"
      scrollable
      isLoading={isLoading}
      headerButton={
        <TurndownButton
          width={50}
          circle
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
        >
          <PlusIcon type="regular" color="onPrimary" size={"medium"} />
        </TurndownButton>
      }
    ></Page>
  );
};
