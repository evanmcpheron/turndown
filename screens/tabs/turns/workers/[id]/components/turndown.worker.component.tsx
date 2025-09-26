import { Row, TurndownButton, TurndownSection, useTheme } from "@/src";
import useAuth from "@/src/contexts/auth/auth.context";
import { turnsApi } from "@/src/services";
import { now } from "@/src/services/firebase/firestore.helper";
import { CameraIcon } from "@/src/shared/icons/camera.component";
import { TurndownCheckbox } from "@/src/shared/ui/forms/checkbox";
import { TurndownPhotoUploader } from "@/src/shared/ui/forms/photo-uploader";
import { TurndownPhotoUploaderHandle } from "@/src/shared/ui/forms/photo-uploader/photo.uploader.types";
import { Confirmation } from "@/src/shared/ui/surface/confirmation";
import { MasonryImage } from "@/src/shared/ui/surface/masonry-image";
import { Property, Turn, TurnRunItem } from "@/src/types";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

interface TurndownWorkerComponentProps {
  turn?: Turn;
  property?: Property;
}

export const TurndownWorkerComponent = ({
  turn,
  property,
}: TurndownWorkerComponentProps) => {
  const uploaderRef = useRef<TurndownPhotoUploaderHandle>(null);

  const { app } = useTheme();
  const { user } = useAuth();
  const [turnList, setTurnList] =
    useState<{ room: string; items: TurnRunItem[] }[]>();
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const itemIdRef = useRef<string | null>(null);

  const fetchData = async () => {
    if (turn && property) {
      const turnListData = await turnsApi.getTurn(property.id, turn.id);
      setPhotos(() => {
        const photoList: { id: string; url: string }[] = [];
        turnListData?.forEach((room) => {
          room.items.forEach((item: TurnRunItem) => {
            if (item.photo) {
              photoList.push({ id: item.id, url: item.photo });
            }
          });
        });
        return photoList;
      });
      setTurnList(turnListData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [turn, property]);

  const handleSave = async (downloadUrl?: string) => {
    if (itemIdRef.current) {
      await turnsApi.updateTurnItem(
        { photo: downloadUrl, status: "completed", completed_at: now },
        itemIdRef.current
      );
      fetchData();
      itemIdRef.current = null;
    }
  };

  const handleCamera = () => {
    if (uploaderRef.current) {
      uploaderRef.current.addFromCamera();
    }
  };

  return (
    <View>
      {turnList?.map(({ room, items }, index) => {
        return (
          <TurndownSection title={room} key={`room_index_${index}`}>
            {items.map((item: TurnRunItem, idx: number) => {
              return (
                <Row key={`${idx}_${room}`}>
                  <TurndownCheckbox
                    label={item.text}
                    disabled={!!turn?.finished_at}
                    checked={item.status === "completed"}
                    name={`${idx}_${room}`}
                    onChange={async (e) => {
                      if (e && item.photo_required) {
                        itemIdRef.current = item.id;
                        handleCamera();
                      } else {
                        await turnsApi.updateTurnItem(
                          {
                            status:
                              item.status !== "completed"
                                ? "completed"
                                : "in_progress",
                            completed_at: now,
                          },
                          item.id
                        );
                        fetchData();
                      }
                    }}
                  />
                  {item.photo_required && (
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: app.colors.success,
                        borderWidth: 2,
                        borderRadius: "50%",
                      }}
                    >
                      <CameraIcon type="regular" color="success" size="small" />
                    </View>
                  )}
                </Row>
              );
            })}
          </TurndownSection>
        );
      })}
      <MasonryImage
        photos={photos}
        {...(!turn?.finished_at && {
          onDelete: (item) => {
            console.log(item);
          },
        })}
      />
      {!turn?.finished_at && (
        <TurndownButton
          color="success"
          onPress={() => {
            setShowConfirmation(true);
          }}
        >
          Finish
        </TurndownButton>
      )}
      <Confirmation
        title="Complete Turndown"
        body="Are you sure you are ready to complete this Turndown?"
        confirmText="Complete"
        visible={showConfirmation}
        onCancel={() => setShowConfirmation(false)}
        onConfirm={async () => {
          setShowConfirmation(false);
          try {
            if (turn) {
              await turnsApi.updateById(
                {
                  status: "completed",
                  finished_at: now,
                  readiness_status: "ready",
                  finished_by: user?.id,
                },
                turn.id
              );
              router.replace("/(tabs)/turns");
            }
          } catch {}
        }}
      />
      <TurndownPhotoUploader
        ref={uploaderRef}
        showAddButtons={false}
        autoUpload
        onUploadComplete={(downloadUrls: string[]) =>
          handleSave(downloadUrls[0])
        }
      />
    </View>
  );
};
