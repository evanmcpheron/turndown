import useAuth from "@/src/contexts/auth/auth.context";
import { userApi } from "@/src/services/api/users";
import {
  showSuccessNotification,
  TurndownButton,
  TurndownSection,
} from "@/src/shared";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { User } from "@/src/types";
import { useEffect, useRef } from "react";
import { ProfileEditForm } from "./forms/edit/profile.edit.form.component";

export const ProfileScreen = () => {
  const profileEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.id) {
      userApi.getById(user?.id).then((response: User) => {
        console.log(
          `🚀 ~ profile.screen.tsx:23 ~ ProfileScreen ~ response: \n`,
          response
        );
      });
    }
  }, [user?.id]);

  const handleSave = async () => {
    if (profileEditFormRef.current) {
      profileEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          showSuccessNotification("Successfully edited profile.");
        }
      });
    }
  };

  return (
    <Page header="Profile" scrollable canGoBack>
      <TurndownSection>
        {user?.id && (
          <ProfileEditForm userId={user.id} ref={profileEditFormRef} />
        )}

        <TurndownButton onPress={handleSave}>Save Profile</TurndownButton>
      </TurndownSection>
    </Page>
  );
};
