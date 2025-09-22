import { Dimensions } from "react-native";

export type NoticeType = "success" | "info" | "error" | "warning";
export type Position = "top" | "bottom";

export type NotificationProps = {
  visible: boolean;
  title?: string;
  message?: string;
  onClose?: () => void;
  duration?: number;
  type?: NoticeType;
  position?: Position;
};

export const SCREEN = Dimensions.get("window");
export const IN_DURATION = 220;
export const OUT_DURATION = 180;
