import {
  addDoc,
  collection,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
  endAt as qEndAt,
  endBefore as qEndBefore,
  limit as qLimit,
  orderBy as qOrderBy,
  startAfter as qStartAfter,
  startAt as qStartAt,
  query,
  QueryConstraint,
  where as qWhere,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { TurndownObject } from "@/src/types";
import dayjs from "dayjs";
import { db } from "./firbase.init";
import { Collections, ReturnData } from "./firestore.types";

export const dateToTimestamp = (date?: Date): Timestamp => {
  const d = dayjs(date || Date.now());
  return Timestamp.fromDate(d.toDate());
};

export const timestampToDate = (timestamp?: Timestamp): Date => {
  const t = timestamp || Timestamp.now();
  return t.toDate();
};

// ---------- Create ----------
export const post = async (
  coll: Collections,
  data: TurndownObject,
  id?: string
): Promise<ReturnData> => {
  try {
    const dates = dateToTimestamp();
    if (id) {
      await setDoc(doc(db, coll, id), {
        ...data,
        deleted: false,
        created_at: dates,
        updated_at: dates,
      });
      return { success: true, data: { id, data } };
    } else {
      const ref: DocumentReference<DocumentData> = await addDoc(
        collection(db, coll),
        {
          ...data,
          deleted: false,
          created_at: dates,
          updated_at: dates,
        }
      );
      return { success: true, data: { id: ref.id, ...data } };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

type FilterOp =
  | "<"
  | "<="
  | "=="
  | "!="
  | ">="
  | ">"
  | "array-contains"
  | "array-contains-any"
  | "in"
  | "not-in";

export type WhereClause = {
  field: string;
  op: FilterOp;
  value: any;
};

export type OrderBySpec =
  | { field: string; direction?: "asc" | "desc" }
  | { field: string; direction?: "asc" | "desc" }[];

export interface QueryOptions {
  where?: WhereClause[];
  orderBy?: OrderBySpec;
  limit?: number;
  startAfter?: any;
  startAt?: any;
  endAt?: any;
  endBefore?: any;
}

export function get(coll: Collections, id: string): Promise<ReturnData>;
export function get(
  coll: Collections,
  options: QueryOptions
): Promise<ReturnData>;

export async function get(
  coll: Collections,
  idOrOptions: string | QueryOptions
): Promise<ReturnData> {
  try {
    if (typeof idOrOptions === "string") {
      const docRef = doc(db, coll, idOrOptions);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        return { success: true, data: { id: snap.id, ...snap.data() } };
      }
      return { success: false, message: "Document does not exist" };
    }

    const options = idOrOptions as QueryOptions;
    const baseRef = collection(db, coll);
    const constraints: QueryConstraint[] = [];
    options.where?.push({ field: "deleted", op: "==", value: false });
    if (options.where?.length) {
      for (const w of options.where) {
        constraints.push(qWhere(w.field, w.op as any, w.value));
      }
    }

    if (options.orderBy) {
      const list = Array.isArray(options.orderBy)
        ? options.orderBy
        : [options.orderBy];
      for (const ob of list) {
        constraints.push(qOrderBy(ob.field, ob.direction ?? "asc"));
      }
    }

    if (options.startAt !== undefined) {
      constraints.push(qStartAt(options.startAt));
    }
    if (options.startAfter !== undefined) {
      constraints.push(qStartAfter(options.startAfter));
    }
    if (options.endAt !== undefined) {
      constraints.push(qEndAt(options.endAt));
    }
    if (options.endBefore !== undefined) {
      constraints.push(qEndBefore(options.endBefore));
    }

    if (options.limit) {
      constraints.push(qLimit(options.limit));
    }

    const q = query(baseRef, ...constraints);
    const snap = await getDocs(q);

    const items: TurndownObject[] = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as any),
    }));

    return { success: true, data: items };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export const update = async (
  coll: Collections,
  id: string,
  data: Partial<TurndownObject>
): Promise<ReturnData> => {
  try {
    const dates = dateToTimestamp();

    const docRef = doc(db, coll, id);
    await updateDoc(docRef, { ...data, updated_at: dates });
    return { success: true, data: { id, ...data } };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export const remove = async (
  coll: Collections,
  id: string
): Promise<ReturnData> => {
  try {
    const dates = dateToTimestamp();

    const docRef = doc(db, coll, id);
    await updateDoc(docRef, { deleted: true });
    return { success: true, data: { id, deleted: true, updated_at: dates } };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
