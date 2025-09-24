// room.create.form.component.tsx

import { useAuth } from "@/src/contexts/auth";
import { checklistApi } from "@/src/services";
import { roomsApi } from "@/src/services/api/rooms";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { TurndownButton } from "@/src/shared/ui/actions";
import {
  Dropdown,
  SelectOption,
} from "@/src/shared/ui/forms/dropdown/dropdown.form.component";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownPhotoUploader } from "@/src/shared/ui/forms/photo-uploader";
import { TurndownPhotoUploaderHandle } from "@/src/shared/ui/forms/photo-uploader/photo.uploader.types";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Room } from "@/src/types";
import { Checklist } from "@/src/types/models/checklist.types";
import { useLocalSearchParams } from "expo-router";
import React, {
  forwardRef,
  useEffect,
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
  const uploaderRef = useRef<TurndownPhotoUploaderHandle>(null);
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const [checklistTemplates, setChecklistTemplates] = useState<SelectOption[]>(
    []
  );

  const { submitForm } = useForm({
    formName: "frmCreateRoom",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: Room) => {
    try {
      if (uploaderRef.current && id) {
        uploaderRef.current.uploadAll().then(async (response) => {
          const cleaned = removeUndefined({
            ...data,
            photos: response,
          }) as Room;

          await roomsApi.post(cleaned, id);
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

  const fetchChecklists = async () => {
    if (user?.id) {
      const res = await checklistApi.getAllTemplatesByCompanyId(user.id);

      setChecklistTemplates(() => {
        return res.map((checklist: Checklist) => {
          return { label: checklist.name, value: checklist.id };
        });
      });
    } else {
      setChecklistTemplates([]);
    }
  };

  useEffect(() => {
    fetchChecklists();
  }, [user?.id]);

  return (
    <Form name="frmCreateRoom">
      <TurndownSection title="Identity" hint="What should we call this room?">
        <Input name="name" placeholder="Name" label="Name" />
      </TurndownSection>
      <TurndownSection
        title="Checklist"
        hint="Don't forget to add a checklist to the room."
      >
        <Dropdown
          name={"checklist_template_id"}
          hasFooter
          placeholder="Select a checklist"
          heading={{ primary: "Select a Checklist Template" }}
          options={checklistTemplates}
        />
      </TurndownSection>
      <TurndownSection
        title="Photos"
        hint="Are there any photos you'd like to add as reference photos for this room?"
      >
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
