import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { ChecklistsTemplateList } from "./list/checklists.template.list";

export const ChecklistsTemplateScreen = () => {
  return (
    <Page
      contentContainerStyle={{ justifyContent: "center" }}
      header="Checklists"
      canGoBack
    >
      <ChecklistsTemplateList />
    </Page>
  );
};
