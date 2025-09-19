import { PlusIcon } from "@/assets/icons/plus.component";
import { Button } from "@/components/actions";
import { showSuccessNotification } from "@/components/actions/notification/notification.helper";
import { Modal } from "@/components/layouts/modal/modal.layout.component";
import { Page } from "@/components/layouts/page/page.layout.component";
import { PropertiesCreateForm } from "@/components/screens/tabs/properties/properties.create.form.component";
import { useAuth } from "@/context";
import { Property } from "@/helpers";
import { getPropertiesByUserId } from "@/helpers/firebase/api/properties/properties.api.helpers";
import { Mode } from "@/helpers/types/base/base.types";
import { useEffect, useRef, useState } from "react";

const PropertyScreen = () => {
  const propertiesCreateFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);
  const propertiesEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const { user } = useAuth();

  const [properties, setProperties] = useState<Property[]>([]);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);

  const fetchProperties = async () => {
    if (user?.id) {
      getPropertiesByUserId(user.id).then((res: Property[]) => {
        setProperties(res);
      });
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [user]);

  const handleCancel = () => {
    setIsModalDisplayed(false);
    setMode(null);
  };

  const handleSave = () => {
    if (propertiesCreateFormRef.current) {
      propertiesCreateFormRef.current.submitData((success: boolean) => {
        if (success) {
          showSuccessNotification("Successfully created a new property");
          fetchProperties();
        }
      });
    }
    setIsModalDisplayed(false);
    setMode(null);
  };

  return (
    <Page
      header="Property"
      headerButton={
        <Button
          width={50}
          circle
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
        >
          <PlusIcon type="solid" size={"regular"} />
        </Button>
      }
      scrollable
    >
      {mode === "CREATE" && (
        <Modal
          header={{ primary: "Create Property" }}
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleSave}
        >
          <PropertiesCreateForm ref={propertiesCreateFormRef} />
        </Modal>
      )}
    </Page>
  );
};

export default PropertyScreen;
