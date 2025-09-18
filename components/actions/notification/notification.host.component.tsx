// NoticeHost.tsx
import React, { useEffect, useRef, useState } from "react";
import { Notification } from "./notification.component";
import { NoticePayload, subscribe } from "./notification.helper";

export function NoticeHost() {
  const [current, setCurrent] = useState<NoticePayload | null>(null);
  const queueRef = useRef<NoticePayload[]>([]);
  const showingRef = useRef(false);

  useEffect(() => {
    return subscribe((payload) => {
      if (!payload) {
        // Explicit hide
        setCurrent(null);
        showingRef.current = false;
        return;
      }
      if (showingRef.current) {
        // If one is visible, queue the next
        queueRef.current.push(payload);
      } else {
        console.log("payload", payload);

        setCurrent(payload);
        showingRef.current = true;
      }
    });
  }, []);

  const handleClose = () => {
    const next = queueRef.current.shift();
    if (next) {
      setCurrent(next);
      showingRef.current = true;
    } else {
      setCurrent(null);
      showingRef.current = false;
    }
  };

  return (
    <Notification
      visible={!!current}
      title={current?.title}
      message={current?.message}
      type={(current?.type ?? "info") as any}
      duration={current?.duration ?? 4000}
      onClose={handleClose}
    />
  );
}
