// noticeBus.ts
export type NoticeType = "success" | "error" | "info" | "warning";

export type NoticePayload = {
  type: NoticeType;
  title?: string;
  message?: string;
  duration?: number;
};

type Listener = (payload: NoticePayload | null) => void;
const listeners = new Set<Listener>();

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener); // don't return the boolean
  };
}

export function showNotice(payload: NoticePayload) {
  for (const l of Array.from(listeners)) l(payload);
}

export function hideNotice() {
  for (const l of Array.from(listeners)) l(null);
}

// Convenience helpers you can call anywhere in the app:
export function showSuccessNotification(
  message: string,
  title?: string,
  duration?: number
) {
  showNotice({
    type: "success",
    message,
    title: title ?? "Success",
    duration: duration,
  });
}

export function showErrorNotification(
  message: string,
  title?: string,
  duration?: number
) {
  showNotice({
    type: "error",
    message,
    title: title ?? "Something went wrong",
    duration: duration,
  });
}

export function showInfoNotification(
  message: string,
  title?: string,
  duration?: number
) {
  showNotice({
    type: "info",
    message,
    title: title ?? "Notice",
    duration: duration,
  });
}

export function showWarningNotification(
  message: string,
  title?: string,
  duration?: number
) {
  showNotice({
    type: "warning",
    message,
    title: title ?? "Warning",
    duration: duration,
  });
}
