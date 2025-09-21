// room.create.form.component.tsx

import { Button } from "@/components/actions";
import { showErrorNotification } from "@/components/actions/notification/notification.helper";
import { Form, useForm } from "@/components/forms/form";
import { getFirstPropertyValue } from "@/components/forms/form/form.helpers";
import { Input } from "@/components/forms/input";
import { TurndownPhotoUploader } from "@/components/forms/photo-uploader";
import { TurndownPhotoUploaderHandle } from "@/components/forms/photo-uploader/turndown.photo.uploader.types";
import { ValidationResult } from "@/components/forms/validations/common.validations";
import { TurndownSection } from "@/components/layouts/section";
import { useAuth } from "@/context";
import { useProperty } from "@/context/property/property.context";
import { TurndownObject } from "@/helpers";
import { postRoom } from "@/helpers/firebase/api/rooms/rooms.api.helpers";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { RoomCreateFormProps } from "./room.create.form.types";

const formValidationSchema = {
  nickname: (v: string): ValidationResult =>
    (v ?? "").trim() === "" && "Property must have a nickname",
};

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
        console.log(
          `🚀 ~ room.create.form.component.tsx:49 ~ saveData ~ nickname: \n`,
          nickname
        );
        uploaderRef.current.uploadAll().then(async (response) => {
          const cleaned = {
            nickname,
            photos: response,
          };

          await postRoom(cleaned, propertyId);
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
          `🚀 ~ room.create.form.component.tsx:78 ~ submitData ~ data: \n`,
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
        <Button
          onPress={() => {
            if (uploaderRef.current) {
              uploaderRef.current.addFromCamera();
            }
          }}
        >
          Camera
        </Button>
        <Button
          onPress={() => {
            if (uploaderRef.current) {
              uploaderRef.current.addFromLibrary();
            }
          }}
        >
          Library
        </Button>
      </TurndownSection>
    </Form>
  );
});
