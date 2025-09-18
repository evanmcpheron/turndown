import { PlusIcon } from "@/assets/icons/plus.component";
import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Page } from "@/components/layouts/page/page.layout.component";

const PropertyScreen = () => {
  return (
    <Page
      header="Property"
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

export default PropertyScreen;
