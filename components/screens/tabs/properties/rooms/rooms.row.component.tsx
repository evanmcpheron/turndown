import { Label } from "@/components/font";
import { Row } from "@/components/layouts/cell/row/row.layout.component";
import { defaultImages } from "@/constants/base.consts";
import { useTheme } from "@/context/theme/theme.context";
import { Room } from "@/helpers";
import { useMemo } from "react";
import { Image, StyleSheet, View } from "react-native";

export interface RoomLinkProps {
  room: Partial<Room>;
}

export const RoomRow = ({ room }: RoomLinkProps) => {
  const { app } = useTheme();
  const style = useMemo(() => themedStyles(app), [app]);

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

const themedStyles = (t: import("@/helpers/theme/general.styles").AppTheme) => {
  return StyleSheet.create({
    thumb: {
      width: 56,
      height: 56,
      marginRight: 10,
      borderRadius: t.radii.lg,
      overflow: "hidden",
      backgroundColor: t.colors.surface2,
    },
    thumbImg: { width: "100%", height: "100%" },
  });
};
