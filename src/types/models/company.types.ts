import { Timestamp } from "firebase/firestore";
import { MetaData } from ".";

export type MemberRole = "admin" | "manager" | "host" | "cleaner" | "helper";

export interface Company extends Omit<MetaData, "company_id"> {
  id: string;
  name: string;
  slug?: string;
  owner_user_id: string;
  photo_url?: string;
  is_active: boolean;
}

export interface CompanyMember extends MetaData {
  id: string;
  user_id: string;
  role: MemberRole;
  is_active: boolean;
}

export interface CompanyInvite extends MetaData {
  id: string;
  role: MemberRole;
  code?: string;
  expires_at?: Timestamp;
  redeemed_by?: string;
  redeemed_at?: Timestamp;
  status: "pending" | "redeemed" | "expired" | "revoked";
}
