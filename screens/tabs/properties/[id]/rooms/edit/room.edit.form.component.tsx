// room.edit.form.component.tsx

import useAuth from "@/src/contexts/auth/auth.context";
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
import { MasonryImage } from "@/src/shared/ui/surface/masonry-image";
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
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([]);
  const [room, setRoom] = useState<Room>();

  const { submitForm, setValue } = useForm({
    formName: "frmEditRoom",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: Room) => {
    try {
      if (uploaderRef.current && selectedId) {
        uploaderRef.current.uploadAll().then(async (response) => {
          const combinedPhoto = new Set(response);
          photos.forEach((photo) => {
            combinedPhoto.add(photo.url);
          });
          const cleaned = {
            ...data,
            photos: Array.from(combinedPhoto),
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
    fetchRoomData();
    fetchChecklists();
  }, [selectedId]);

  const fetchRoomData = async () => {
    roomsApi.getById(selectedId).then((res) => {
      setRoom(res);
      setPhotos(() => {
        const photoList = [];
        for (const photo of res.photos) {
          photoList.push({ id: photo, url: photo });
        }
        return photoList;
      });
      setValue("name", res.name);
      setValue("checklist_template_id", res?.checklist_template_id);
    });
  };

  const fetchChecklists = async () => {
    if (user?.id) {
      const res = await checklistApi.getAllTemplatesByCompanyId(
        user.company_id
      );

      setChecklistTemplates(() => {
        return res.map((checklist: Checklist) => {
          return { label: checklist.name, value: checklist.id };
        });
      });
    } else {
      setChecklistTemplates([]);
    }
  };

  const handleDelete = async (image: { id: string; url: string }) => {
    const updatedPhotosList: string[] = [];
    photos.map((photo) => {
      if (photo.url !== image.url) {
        updatedPhotosList.push(image.url);
      }
    });
    setRoom(
      (prev) =>
        prev && {
          ...prev,
          prev: {
            photos: prev?.photos?.filter((photo) => photo === image.url),
          },
        }
    );
    setPhotos((prev) => prev.filter((photo) => photo.id === image.id));
    await roomsApi.updateById({ photos: updatedPhotosList }, selectedId);
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
        {photos.length > 0 && (
          <MasonryImage photos={photos} onDelete={handleDelete} />
        )}
        <TurndownPhotoUploader
          ref={uploaderRef}
          userId={user?.id}
          sourceMode="both"
          multiple
          maxCount={10}
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
