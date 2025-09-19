import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";

export * from "./properties";
export * from "./users";

export const dateToTimestamp = (date?: Date): Timestamp => {
  const d = dayjs(date || Date.now());
  return Timestamp.fromDate(d.toDate());
};

export const timestampToDate = (timestamp?: Timestamp): Date => {
  const t = timestamp || Timestamp.now();
  return t.toDate();
};
