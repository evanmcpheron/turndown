// turndown.photo.uploader.component.tsx

// turndown.photo.uploader.component.tsx

import { Label } from "@/components/font";
import { useTheme } from "@/context/theme/theme.context";
import * as ImagePicker from "expo-image-picker";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from "firebase/storage";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Image, Pressable, View } from "react-native";
import { turndownPhotoUploaderComponentStyles } from "./turndown.photo.uploader.styled";
import {
  TurndownPhotoItem,
  TurndownPhotoUploaderHandle,
  TurndownPhotoUploaderProps,
} from "./turndown.photo.uploader.types";

const storage = getStorage();

const genId = () => Math.random().toString(36).slice(2);

async function uriToBlob(uri: string): Promise<Blob> {
  const res = await fetch(uri);
  return await res.blob();
}

function defaultPath({
  userId,
  filename,
}: {
  userId?: string;
  filename: string;
}) {
  const ts = Date.now();
  const prefix = userId ? `uploads/${userId}` : `uploads/anonymous`;
  return `${prefix}/${ts}-${filename}`;
}

export const TurndownPhotoUploader = forwardRef<
  TurndownPhotoUploaderHandle,
  TurndownPhotoUploaderProps
>(
  (
    {
      sourceMode = "both",
      multiple = true,
      maxCount = 10,
      autoUpload = false,
      forceCameraOnly = false,
      onChange,
      onUploadComplete,
      onFileUploaded,
      buildStoragePath = defaultPath,
      userId,
      allowsEditing = false,
      aspect,
      quality = 0.9,
      showAddButtons = true,
      label = "Photos",
      disabled = false,
    },
    forwardedRef
  ) => {
    const { app } = useTheme();
    const s = useMemo(() => turndownPhotoUploaderComponentStyles(app), [app]);

    const [items, setItems] = useState<TurndownPhotoItem[]>([]);
    const uploadingRef = useRef(false);

    const emitChange = useCallback(
      (next: TurndownPhotoItem[]) => {
        setItems(next);
        onChange?.(next);
      },
      [onChange]
    );

    const requestLibrary = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") throw new Error("Library permission denied");
    };

    const requestCamera = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") throw new Error("Camera permission denied");
    };

    const addFromLibrary = useCallback(async () => {
      await requestLibrary();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: multiple,
        allowsEditing,
        aspect,
        quality,
        selectionLimit: multiple ? 0 : 1,
      });
      if (result.canceled) return;

      const selected = "assets" in result ? result.assets : [result];
      const staged = selected.map((a) => ({
        id: genId(),
        localUri: a.uri,
        status: "staged" as const,
        progress: 0,
        filename: a.fileName || `photo-${Date.now()}.jpg`,
      }));

      const merged = [...items, ...staged].slice(0, maxCount);
      emitChange(merged);
      if (autoUpload) await uploadAll(merged);
    }, [
      items,
      multiple,
      allowsEditing,
      aspect,
      quality,
      maxCount,
      autoUpload,
      emitChange,
    ]);

    const addFromCamera = useCallback(async () => {
      await requestCamera();
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing,
        aspect,
        quality,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (result.canceled) return;

      const a = "assets" in result ? result.assets[0] : result;
      const staged: TurndownPhotoItem = {
        id: genId(),
        localUri: a.uri,
        status: "staged",
        progress: 0,
        filename: a.fileName || `photo-${Date.now()}.jpg`,
      };

      const merged = [...items, staged].slice(0, maxCount);
      emitChange(merged);
      if (autoUpload) await uploadAll(merged);
    }, [
      items,
      allowsEditing,
      aspect,
      quality,
      maxCount,
      autoUpload,
      emitChange,
    ]);

    const uploadOne = useCallback(
      async (item: TurndownPhotoItem) => {
        if (item.status === "uploaded") return item;

        let next = { ...item, status: "uploading", progress: 0 };
        emitChange(
          items.map((it) =>
            it.id === next.id ? next : it
          ) as TurndownPhotoItem[]
        );

        try {
          const blob = await uriToBlob(item.localUri);
          const storagePath = buildStoragePath({
            userId,
            filename: item.filename || `photo-${Date.now()}.jpg`,
          });
          const sRef = storageRef(storage, storagePath);
          const task = uploadBytesResumable(sRef, blob);

          await new Promise<void>((resolve, reject) => {
            task.on(
              "state_changed",
              (snap) => {
                const pct = Math.round(
                  (snap.bytesTransferred / snap.totalBytes) * 100
                );
                next = { ...next, progress: pct };
                emitChange(
                  items.map((it) =>
                    it.id === next.id ? next : it
                  ) as TurndownPhotoItem[]
                );
              },
              (err) => reject(err),
              () => resolve()
            );
          });

          const downloadUrl = await getDownloadURL(task.snapshot.ref);
          next = { ...next, status: "uploaded", progress: 100, downloadUrl };
          const updated = items.map((it) => (it.id === next.id ? next : it));
          emitChange(updated as TurndownPhotoItem[]);
          onFileUploaded?.(next as TurndownPhotoItem);
          return next;
        } catch (e: any) {
          next = { ...next, status: "error", error: String(e?.message || e) };
          emitChange(
            items.map((it) =>
              it.id === next.id ? next : it
            ) as TurndownPhotoItem[]
          );
          return next;
        }
      },
      [items, buildStoragePath, userId, emitChange, onFileUploaded]
    );

    const uploadAll = useCallback(
      async (list = items) => {
        if (uploadingRef.current) return [];
        uploadingRef.current = true;

        const results: TurndownPhotoItem[] = [];
        for (const it of list) {
          const done = it.status === "uploaded" ? it : await uploadOne(it);
          results.push(done as TurndownPhotoItem);
        }

        uploadingRef.current = false;

        const ok = results.filter((r) => r.status === "uploaded");
        const urls = ok.map((r) => r.downloadUrl!).filter(Boolean);
        if (ok.length === results.length) onUploadComplete?.(urls);
        return urls;
      },
      [items, uploadOne, onUploadComplete]
    );

    const clearAll = useCallback(() => {
      emitChange([]);
    }, [emitChange]);

    const removeOne = useCallback(
      (id: string) => {
        emitChange(items.filter((i) => i.id !== id));
      },
      [items, emitChange]
    );

    // 👇 Expose the imperative API
    useImperativeHandle(
      forwardedRef,
      () => ({
        uploadAll: () => uploadAll(),
        addFromCamera,
        addFromLibrary,
        clear: () => clearAll(),
        items: () => items,
      }),
      [uploadAll, addFromCamera, addFromLibrary, clearAll, items]
    );

    const canAddFromLibrary =
      !disabled &&
      !forceCameraOnly &&
      (sourceMode === "both" || sourceMode === "library");
    const canAddFromCamera =
      !disabled &&
      (forceCameraOnly || sourceMode === "both" || sourceMode === "camera");

    return (
      <View style={s.container}>
        <View style={s.headerRow}>
          <Label variant="subtitle1">{label}</Label>
          <Label variant="subtitle2" style={s.subtle}>
            {items.length} / {maxCount}
          </Label>
        </View>

        {showAddButtons && (
          <View style={s.actionBar}>
            {canAddFromLibrary && (
              <Pressable onPress={addFromLibrary} style={s.linkBtn}>
                <Label style={s.linkText}>Add from Library</Label>
              </Pressable>
            )}
            {canAddFromCamera && (
              <Pressable onPress={addFromCamera} style={s.linkBtn}>
                <Label style={s.linkText}>Take Photo</Label>
              </Pressable>
            )}
            {!autoUpload && items.some((i) => i.status !== "uploaded") && (
              <Pressable onPress={() => uploadAll()} style={s.linkBtn}>
                <Label style={s.linkText}>Upload All</Label>
              </Pressable>
            )}
            {!!items.length && (
              <Pressable onPress={clearAll} style={s.clearBtn}>
                <Label variant="subtitle2">Clear</Label>
              </Pressable>
            )}
          </View>
        )}

        {/* Grid of staged/uploaded images */}
        <View style={s.grid}>
          {items.map((it) => (
            <View key={it.id} style={s.tile}>
              <Image source={{ uri: it.localUri }} style={s.thumb} />
              {/* progress bar */}
              {it.status !== "uploaded" && (
                <View style={s.progressBarWrap}>
                  <View style={[s.progressBar, { width: `${it.progress}%` }]} />
                </View>
              )}
              {/* error badge */}
              {it.status === "error" && (
                <View style={s.errorBadge}>
                  <Label style={s.errorText}>Failed</Label>
                </View>
              )}
              {/* remove button (tiny) */}
              <Pressable
                onPress={() => removeOne(it.id)}
                style={{ position: "absolute", top: 6, left: 6, padding: 6 }}
              >
                <Label variant="subtitle2" style={s.subtle}>
                  ✕
                </Label>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    );
  }
);
