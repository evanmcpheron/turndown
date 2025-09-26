import { showErrorNotification } from "@/src/shared";
import { CompanyInvite } from "@/src/types";
import * as ExpoCrypto from "expo-crypto";
import {
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { db, get, post, remove, update } from "../../firebase";

export const companyMemberInvitesApi = {
  getById: async (invite_id: string) => {
    try {
      const response = await get("CompanyInvite", invite_id);

      return response.data;
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting this invite info.");
    }
  },
  getByCompanyId: async (company_id: string) => {
    try {
      const response = await get("CompanyInvite", {
        where: [{ field: "company_id", op: "==", value: company_id }],
      });

      return response.data;
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting invites");
    }
  },
  getByUserEmail: async (user_email: string) => {
    console.log(`🚀 ~ index.ts:36 ~ user_email: \n`, user_email);

    try {
      const response = await get("CompanyInvite", {
        where: [{ field: "email", op: "==", value: user_email }],
      });
      console.log(`🚀 ~ index.ts:42 ~ response: \n`, response);

      return response.data;
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting invites");
    }
  },
  acceptInvite: async (
    invite_id: string,
    data: CompanyInvite,
    user_id: string
  ) => {
    try {
      const now = Date.now();
      await remove("CodeRegistry", data.code_id, true);
      await update("CompanyInvite", invite_id, {
        status: "redeemed",
        redeemed_by: user_id,
        redeemed_at: now,
      });
      await post("CompanyMember", {
        user_id,
        role: data.role,
        company_id: data.company_id,
        is_active: true,
      });
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong.");
    }
  },
  declineInvite: async (invite_id: string, code: string) => {
    await remove("CodeRegistry", code, true);
    await remove("CompanyInvite", invite_id);
    try {
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong.");
    }
  },
  post: async (data: Partial<CompanyInvite>, company_id: string) => {
    try {
      return createUniqueInvite(data, company_id);
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong sending the invite");
    }
  },
  delete: async (invite_id: string) => {
    try {
      await remove("CompanyInvite", invite_id);
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong deleting the invite");
    }
  },
};

const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

export async function makeInviteCode(length = 8, group = 4): Promise<string> {
  // 32 divides 256, so (byte & 31) is perfectly uniform with random bytes
  const bytes = await ExpoCrypto.getRandomBytesAsync(length);
  let raw = "";
  for (let i = 0; i < length; i++) raw += ALPHABET[bytes[i] & 31];

  if (group > 0) {
    const parts = raw.match(new RegExp(`.{1,${group}}`, "g")) ?? [raw];
    return parts.join("-");
  }
  return raw;
}

export async function createUniqueInvite(
  data: Partial<CompanyInvite>,
  company_id: string
) {
  return runTransaction(db, async (tx) => {
    let code = "";
    let codeId = "";

    for (;;) {
      code = await makeInviteCode(8);
      codeId = code.replace(/-/g, "");

      const regRef = doc(collection(db, "CodeRegistry"), codeId);
      const regSnap = await tx.get(regRef);
      if (!regSnap.exists()) {
        tx.set(regRef, { reservedAt: serverTimestamp() });
        break;
      }
    }

    const response = await post("CompanyInvite", {
      ...data,
      company_id,
      code,
      code_id: codeId,
      status: "pending",
    });
    return response.data;
  });
}
