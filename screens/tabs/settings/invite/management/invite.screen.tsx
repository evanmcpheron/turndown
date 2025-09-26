import useAuth from "@/src/contexts/auth/auth.context";
import { companyMemberInvitesApi } from "@/src/services";
import {
  Modal,
  Mode,
  normalCase,
  TurndownButton,
  TurndownSection,
} from "@/src/shared";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { CompanyInvite } from "@/src/types";
import React, { useEffect, useRef, useState } from "react";
import { InviteRow } from "../worker/components";
import { CompanyInviteCard } from "./components/details/invite.details.component";
import { InviteCreateForm } from "./forms/create";
import { InviteEditForm } from "./forms/edit";

export const InviteScreen = () => {
  const inviteCreateFormRef = useRef<{
    submitData: (callback: (success: boolean, id: string) => void) => void;
  }>(null);
  const inviteEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const { user } = useAuth();

  const [invites, setInvites] = useState<CompanyInvite[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const modeRef = useRef<Mode>(null);

  const fetchInvites = async () => {
    if (user?.company_id) {
      await companyMemberInvitesApi
        .getByCompanyId(user.company_id)
        .then((res) => {
          setInvites(res);
        });
    } else {
      setInvites([]);
    }
  };

  useEffect(() => {
    fetchInvites();
  }, [user?.id]);

  const handleCancel = () => {
    fetchInvites();
    setIsModalDisplayed(false);
    setSelectedId(null);
    modeRef.current = null;
  };

  const handleCreate = () => {
    if (inviteCreateFormRef.current) {
      inviteCreateFormRef.current.submitData((success: boolean, id: string) => {
        if (success && id) {
          modeRef.current = "DETAILS";
          setSelectedId(id);
        }
      });
    }
  };

  const handleEdit = () => {
    if (inviteEditFormRef.current) {
      inviteEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchInvites();
          setSelectedId(null);
          setIsModalDisplayed(false);
        }
      });
    }
  };

  const handleSave = () => {
    if (modeRef.current === "CREATE") {
      handleCreate();
    } else {
      handleEdit();
    }
  };

  return (
    <Page header="Invite" scrollable canGoBack>
      <TurndownSection>
        <TurndownButton
          onPress={() => {
            modeRef.current = "CREATE";
            setIsModalDisplayed(true);
          }}
        >
          Create Invite
        </TurndownButton>
      </TurndownSection>

      <TurndownSection>
        {invites.map((invite) => {
          return (
            <InviteRow
              key={`company_invite_${invite.id}`}
              invite={invite}
              onDelete={() => {
                companyMemberInvitesApi.delete(invite.id).then(() => {
                  fetchInvites();
                });
              }}
              onView={() => {
                modeRef.current = "DETAILS";
                setIsModalDisplayed(true);
                setSelectedId(invite.id);
              }}
            />
          );
        })}
      </TurndownSection>

      <Modal
        header={{
          primary: `${normalCase(modeRef.current as string)} Invite`,
        }}
        selectedId={selectedId}
        saveText={`${normalCase(modeRef.current as string)} Invite`}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        {...(modeRef.current !== "DETAILS" && { onSave: handleSave })}
      >
        {modeRef.current === "CREATE" && (
          <InviteCreateForm ref={inviteCreateFormRef} />
        )}
        {modeRef.current === "EDIT" && selectedId && (
          <InviteEditForm inviteId={selectedId} ref={inviteEditFormRef} />
        )}
        {modeRef.current === "DETAILS" && selectedId && (
          <CompanyInviteCard inviteId={selectedId} />
        )}
      </Modal>
    </Page>
  );
};
