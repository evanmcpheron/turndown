// room.create.form.component.tsx

import { useProperty } from "@/screens/tabs/properties/context/property.context";
import { useAuth } from "@/src/contexts/auth";
import { roomsApi } from "@/src/services/api/rooms";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownPhotoUploader } from "@/src/shared/ui/forms/photo-uploader";
import { TurndownPhotoUploaderHandle } from "@/src/shared/ui/forms/photo-uploader/photo.uploader.types";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Room, TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { formValidationSchema } from "./room.create.form.logic";
import { RoomCreateFormProps } from "./room.create.form.types";

export const RoomCreateForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  RoomCreateFormProps
>((_props, ref) => {
  const { user } = useAuth();
  const uploaderRef = useRef<TurndownPhotoUploaderHandle>(null);
  const { propertyId } = useProperty();

  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm } = useForm({
    formName: "frmCreateRoom",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async ({ nickname }: TurndownObject) => {
    try {
      if (uploaderRef.current && propertyId) {
        uploaderRef.current.uploadAll().then(async (response) => {
          const cleaned = {
            nickname,
            photos: response,
          } as Room;

          await roomsApi.post(cleaned, propertyId);
        });
        return true;
      } else {
        showErrorNotification("Something went wrong creating this room");
        return false;
      }
    } catch {
      showErrorNotification("Something went wrong creating this room");
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) return;
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        console.log(
          `🚀 ~ room.create.form.component.tsx:69 ~ submitData ~ data: \n`,
          data
        );

        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }
        const success = await saveData(data);
        if (success) callback(success);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmCreateRoom">
      <TurndownSection title="Identity" hint="What should we call this room?">
        <Input name="nickname" placeholder="Nickname" label="Nickname" />
        <TurndownPhotoUploader
          ref={uploaderRef}
          userId={user?.id}
          sourceMode="both"
          multiple
          autoUpload={false}
          showAddButtons={false}
        />
        <TurndownButton
          onPress={() => {
            if (uploaderRef.current) {
              uploaderRef.current.addFromCamera();
            }
          }}
        >
          Camera
        </TurndownButton>
        <TurndownButton
          onPress={() => {
            if (uploaderRef.current) {
              uploaderRef.current.addFromLibrary();
            }
          }}
        >
          Library
        </TurndownButton>
      </TurndownSection>
    </Form>
  );
});
