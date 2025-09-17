import { PlusIcon } from "@/assets/icons/plus.component";
import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Page } from "@/components/layouts/page/page.layout.component";

const TurnScreen = () => {
  return (
    <Page
      header="Turndowns"
      headerButton={
        <Button width={50} circle>
          <PlusIcon type="solid" size={"regular"} />
        </Button>
      }
      scrollable
    >
      <Label>Testing</Label>
    </Page>
  );
};

export default TurnScreen;
