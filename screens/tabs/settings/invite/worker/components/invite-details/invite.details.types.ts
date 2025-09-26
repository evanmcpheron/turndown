import { CompanyInvite } from "@/src/types/models";

export interface InviteRowProps {
  invite: CompanyInvite;
  onDelete: () => void;
  onView: () => void;
}
