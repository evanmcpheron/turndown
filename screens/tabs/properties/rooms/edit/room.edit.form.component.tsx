// room.edit.form.component.tsx

import { useAuth } from "@/src/contexts/auth";
import { checklistApi } from "@/src/services";
import { roomsApi } from "@/src/services/api/rooms";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
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
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { formValidationSchema } from "./room.edit.form.logic";
import { RoomEditFormProps } from "./room.edit.form.types";

export const RoomEditForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  RoomEditFormProps
>(({ selectedId }, ref) => {
  const { user } = useAuth();
  const uploaderRef = useRef<TurndownPhotoUploaderHandle>(null);

  const [submittingData, setSubmittingData] = useState(false);
  const [checklistTemplates, setChecklistTemplates] = useState<SelectOption[]>(
    []
  );

  const { submitForm, setValue } = useForm({
    formName: "frmEditRoom",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: Room) => {
    try {
      if (uploaderRef.current && selectedId) {
        uploaderRef.current.uploadAll().then(async (response) => {
          const cleaned = {
            ...data,
            photos: response,
          } as Room;

          await roomsApi.updateById(cleaned, selectedId);
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
          `🚀 ~ room.edit.form.component.tsx:77 ~ submitData ~ data: \n`,
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

  useEffect(() => {
    if (!selectedId) return;
    roomsApi.getById(selectedId).then((res) => {
      setValue("name", res.name);
      setValue("checklist_template_id", res?.checklist_template_id);
    });
    fetchChecklists();
  }, [selectedId]);

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

  return (
    <Form name="frmEditRoom">
      <TurndownSection title="Identity" hint="What should we call this room?">
        <Input name="name" placeholder="Name" label="Name" />
      </TurndownSection>
      <TurndownSection title="Checklist">
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
