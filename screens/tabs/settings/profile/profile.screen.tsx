import { Mode } from "@/src/shared/ui/forms";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { useRef, useState } from "react";

export const ProfileScreen = () => {
  const profileEditFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page header="Profile" scrollable canGoBack isLoading={isLoading}></Page>
  );
};
