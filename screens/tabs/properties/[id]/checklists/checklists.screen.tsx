import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { ChecklistsListComponent } from "./list/checklists.list.component";

export const ChecklistsScreen = () => {
  return (
    <Page
      contentContainerStyle={{ justifyContent: "center" }}
      header="Checklists"
      canGoBack
    >
      <ChecklistsListComponent />
    </Page>
  );
};
