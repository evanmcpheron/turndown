import useAuth from "@/src/contexts/auth/auth.context";
import { companyMemberInvitesApi, companyMembersApi } from "@/src/services";
import {
  Modal,
  Mode,
  normalCase,
  TurndownButton,
  TurndownSection,
} from "@/src/shared";
import { Label } from "@/src/shared/ui/data-display/font";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { CompanyInvite, CompanyMember } from "@/src/types";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { InviteCreateForm } from "../management/forms/create";
import { WorkerInviteCard } from "./components/invite-details/invite.details.component";
import { InviteRow } from "./components/invite-row";

export const WorkerInviteScreen = () => {
  const inviteCreateFormRef = useRef<{
    submitData: (callback: (success: boolean, id: string) => void) => void;
  }>(null);
  const inviteEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const { user } = useAuth();

  const [invites, setInvites] = useState<CompanyInvite[]>([]);
  const [companies, setCompanies] = useState<CompanyMember[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const modeRef = useRef<Mode>(null);

  const fetchInvites = async () => {
    if (user?.email) {
      await companyMemberInvitesApi.getByUserEmail(user.email).then((res) => {
        setInvites(res);
      });
      await companyMembersApi.getByUserId(user.id).then((response) => {
        setCompanies(response);
      });
    } else {
      setCompanies([]);
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
          Redeem Invite Code
        </TurndownButton>
      </TurndownSection>

      <TurndownSection
        title={"Pending Invites"}
        hint={"Don't forget to accept your pending invites"}
      >
        {invites.map((invite) => {
          return (
            <InviteRow
              key={`company_invite_${invite.id}`}
              invite={invite}
              onDelete={() => {}}
              onView={() => {
                modeRef.current = "DETAILS";
                setSelectedId(invite.id);
                setIsModalDisplayed(true);
              }}
            />
          );
        })}
      </TurndownSection>
      <TurndownSection
        title={"Companies"}
        hint={"A list of companies you're in network with."}
      >
        {companies.map((company) => {
          return (
            <View key={`company_members_${company.id}`}>
              <Label>{company.company_id}</Label>
            </View>
          );
        })}
      </TurndownSection>

      <Modal
        header={{
          primary: `${normalCase(modeRef.current as string)} Invite`,
        }}
        saveText={`${normalCase(modeRef.current as string)} Invite`}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        selectedId={selectedId}
        {...(modeRef.current !== "DETAILS" && { onSave: handleSave })}
      >
        {modeRef.current === "CREATE" && (
          <InviteCreateForm ref={inviteCreateFormRef} />
        )}
        {modeRef.current === "DETAILS" && selectedId && (
          <WorkerInviteCard
            inviteId={selectedId}
            onAccept={(data?: CompanyInvite) => {
              if (data) {
                companyMemberInvitesApi
                  .acceptInvite(selectedId, data, user?.id || "")
                  .then(() => {
                    modeRef.current = null;
                    setSelectedId(null);
                    setIsModalDisplayed(false);
                    fetchInvites();
                  });
              }
            }}
            onDecline={(code: string) => {
              companyMemberInvitesApi
                .declineInvite(selectedId, code)
                .then(() => {
                  modeRef.current = null;
                  setSelectedId(null);
                  setIsModalDisplayed(false);
                  fetchInvites();
                });
            }}
          />
        )}
      </Modal>
    </Page>
  );
};
