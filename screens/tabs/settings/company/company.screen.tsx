import useAuth from "@/src/contexts/auth/auth.context";
import { companyMembersApi } from "@/src/services";
import { companyApi } from "@/src/services/api/company";
import {
  Modal,
  Mode,
  normalCase,
  Row,
  TurndownButton,
  TurndownSection,
} from "@/src/shared";
import { PencilIcon } from "@/src/shared/icons/pencil.component";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownInfoRow } from "@/src/shared/ui/data-display/info-row";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Company, CompanyMember } from "@/src/types";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { CompanyCreateForm } from "./forms/create";
import { CompanyEditForm } from "./forms/edit/company.edit.form.component";

export const CompanyScreen = () => {
  const companyCreateFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);
  const companyEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const { user } = useAuth();

  const [company, setCompany] = useState<Company | null>(null);
  const [companyMembers, setCompanyMembers] = useState<CompanyMember[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const modeRef = useRef<Mode>(null);

  const fetchCompany = async () => {
    setRefreshing(true);

    if (user?.company_id) {
      const res = await companyApi.getById(user.company_id);
      console.log(`🚀 ~ company.screen.tsx:44 ~ fetchCompany ~ res: \n`, res);
      await companyMembersApi.getById(res.id).then((response) => {
        setCompanyMembers(response);
      });
      setCompany(res);
    } else {
      setCompany(null);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCompany();
  }, [user?.id]);

  const handleCancel = () => {
    fetchCompany();
    setIsModalDisplayed(false);
    setSelectedId(null);
    modeRef.current = null;
  };

  const handleCreate = () => {
    if (companyCreateFormRef.current) {
      companyCreateFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchCompany();
          setSelectedId(null);
          setIsModalDisplayed(false);
        }
      });
    }
  };

  const handleEdit = () => {
    if (companyEditFormRef.current) {
      companyEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchCompany();
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
    <Page header="Company" scrollable canGoBack>
      <TurndownSection title={company ? "Company Name" : "Create a company"}>
        {company ? (
          <Row justifyContent="space-between" alignItems="center">
            <Label variant="h4">{company.name}</Label>
            <TurndownButton
              onPress={() => {
                modeRef.current = "EDIT";
                setSelectedId(company.id);
                setIsModalDisplayed(true);
              }}
              variant="outline"
              circle
            >
              <PencilIcon type="regular" size={"small"} color="primary" />
            </TurndownButton>
          </Row>
        ) : (
          <TurndownButton
            onPress={() => {
              modeRef.current = "CREATE";
              setIsModalDisplayed(true);
            }}
          >
            Create Company
          </TurndownButton>
        )}
      </TurndownSection>
      {company && (
        <TurndownSection
          title="Company Members"
          hint="These are the members of you company. They can include managers, hosts, cleaners, and helpers"
        >
          {!companyMembers.length && (
            <TurndownButton onPress={() => router.replace("/settings/invite")}>
              Invite Members
            </TurndownButton>
          )}
          {companyMembers.map((member: CompanyMember) => {
            return (
              <TurndownInfoRow
                key={`company_member_${member.role}`}
                label={member.role}
              />
            );
          })}
        </TurndownSection>
      )}
      <Modal
        header={{
          primary: `${normalCase(modeRef.current as string)} Company`,
        }}
        selectedId={selectedId}
        scrollable
        saveText={`${normalCase(modeRef.current as string)} Company`}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        onSave={handleSave}
      >
        {modeRef.current === "CREATE" && (
          <CompanyCreateForm ref={companyCreateFormRef} />
        )}
        {modeRef.current === "EDIT" && selectedId && (
          <CompanyEditForm companyId={selectedId} ref={companyEditFormRef} />
        )}
      </Modal>
    </Page>
  );
};
