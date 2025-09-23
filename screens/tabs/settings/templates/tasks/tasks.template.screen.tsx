import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { TasksTemplateList } from "./list/tasks.template.list";

export const TasksTemplateScreen = () => {
  return (
    <Page
      contentContainerStyle={{ justifyContent: "center" }}
      header="Tasks"
      canGoBack
    >
      <TasksTemplateList />
    </Page>
  );
};
