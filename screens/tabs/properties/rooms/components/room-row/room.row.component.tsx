import { useTheme } from "@/src/contexts/theme";
import { defaultImages } from "@/src/shared/config/base.consts";
import { Row } from "@/src/shared/ui/cell/row/row.layout.component";
import { Label } from "@/src/shared/ui/font";
import { useMemo } from "react";
import { Image, View } from "react-native";
import { roomRowStyles } from "./room.row.styled";
import { RoomRowProps } from "./room.row.types";

export const RoomRow = ({ room }: RoomRowProps) => {
  const { app } = useTheme();
  const style = useMemo(() => roomRowStyles(app), [app]);

  const { nickname, photos, hero_photo } = room;

  return (
    <View>
      <Row alignItems="center">
        <View style={style.thumb}>
          <Image
            source={{
              uri:
                (hero_photo || "").trim() !== ""
                  ? hero_photo
                  : (photos || []).length > 0
                  ? photos?.[0]
                  : defaultImages.home,
            }}
            style={style.thumbImg}
          />
        </View>

        <Label
          variant="h3"
          numberOfLines={1}
          style={{ marginBottom: app.spacing[1] }}
        >
          {nickname || "Room"}
        </Label>
      </Row>
      <View>
        {photos?.map((photo) => {
          return (
            <Image
              key={photo}
              source={{
                uri: photo,
              }}
              style={{ width: "50%", height: "50%" }}
            />
          );
        })}
      </View>
    </View>
  );
};
