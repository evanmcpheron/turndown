import { Mode } from "@/src/shared/ui/forms";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { useRef, useState } from "react";
import { TasksTemplateRefHandler } from "./tasks.template.types";

export const TasksTemplateScreen = () => {
  const tasksTemplateEditFormRef = useRef<TasksTemplateRefHandler>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  return (
    <Page
      header="TasksTemplate"
      scrollable
      canGoBack
      isLoading={isLoading}
    ></Page>
  );
};
