import { Page } from "@/components/layouts/page/page.layout.component";
import { Mode } from "@/helpers/types/base/base.types";
import { useRef, useState } from "react";

const ProfileScreen = () => {
  const checklistCreateFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page header="Profile" scrollable canGoBack isLoading={isLoading}></Page>
  );
};

export default ProfileScreen;
