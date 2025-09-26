import { useTheme } from "@/src/contexts/theme";
import { userApi } from "@/src/services/api/users";
import { defaultImages, FieldContainer, Row } from "@/src/shared";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownPhotoUploader } from "@/src/shared/ui/forms/photo-uploader";
import { TurndownPhotoUploaderHandle } from "@/src/shared/ui/forms/photo-uploader/photo.uploader.types";
import { TurndownObject, User } from "@/src/types";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Image, Pressable } from "react-native";
import { formValidationSchema } from "./profile.edit.form.logic";
import { profileEditFormStyles } from "./profile.edit.form.styles";
import { ProfileEditFormProps } from "./profile.edit.form.types";

export const ProfileEditForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  ProfileEditFormProps
>(({ userId }, ref) => {
  const uploaderRef = useRef<TurndownPhotoUploaderHandle>(null);
  const { app } = useTheme();
  const styles = useMemo(() => profileEditFormStyles(app), [app]);

  const [submittingData, setSubmittingData] = useState(false);
  const [profile, setProfile] = useState<User | null>(null);

  const { submitForm } = useForm({
    formName: "frmEditProfile",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const fetchUser = () => {
    userApi.getById(userId).then((response) => {
      console.log(
        `🚀 ~ profile.edit.form.component.tsx:48 ~ fetchUser ~ response: \n`,
        response
      );

      setProfile(response);
    });
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const saveData = async (data: TurndownObject) => {
    try {
      const cleaned = removeUndefined(data);

      await userApi.updateById(cleaned, userId);
      return true;
    } catch {
      showErrorNotification("Something went wrong creating this profile");
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

  return (
    <Form name="frmEditProfile" editValues={profile || {}}>
      <TurndownPhotoUploader
        label="Profile Photo"
        showAddButtons={false}
        autoUpload
        onUploadComplete={(downloadUrls: string[]) => {
          userApi
            .updateById({ photo_url: downloadUrls?.[0] }, userId)
            .then(() => {
              fetchUser();
              showSuccessNotification("Successfully updated profile photo.");
            });
        }}
        ref={uploaderRef}
      />
      <Row justifyContent="center">
        <Pressable
          onPress={() => {
            if (uploaderRef.current) {
              uploaderRef.current.addFromLibrary();
            }
          }}
        >
          <Image
            source={{ uri: profile?.photo_url || defaultImages.profile }}
            style={{ width: 96, height: 96, borderRadius: "50%" }}
          />
        </Pressable>
      </Row>

      <FieldContainer
        label="Name"
        required
        formInput={
          <Input name="display_name" placeholder="Name" label="Name" />
        }
      />
      <FieldContainer
        label="Email"
        required
        formInput={<Input name="email" placeholder="Email" label="Email" />}
      />
      <FieldContainer
        label="Phone Number"
        formInput={<Input name="phone_number" placeholder="Phone Number" />}
      />
    </Form>
  );
});
