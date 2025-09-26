import { useTheme } from "@/src/contexts/theme";
import { XIcon } from "@/src/shared/icons/x.component";
import { FlashList } from "@shopify/flash-list";
import React, { useMemo } from "react";
import { Image, Pressable, useWindowDimensions, View } from "react-native";
import { masonryImageComponentStyles } from "./masonry.image.styled";
import { MasonryImageProps } from "./masonry.image.types";

export const MasonryImage = ({ photos, onDelete }: MasonryImageProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => masonryImageComponentStyles(app), [app]);

  const photoList = useSizedPhotos(photos);

  return (
    <FlashList
      data={photoList}
      keyExtractor={(i) => i.id}
      numColumns={2}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image
            source={{ uri: item.url }}
            style={{ height: item.height }}
            resizeMode="cover"
          />
          {onDelete && (
            <Pressable
              onPress={() => onDelete?.(item)}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              <XIcon type="regular" />
            </Pressable>
          )}
        </View>
      )}
      masonry
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

type RawPhoto = { id: string; url: string };
type Photo = { id: string; url: string; height: number };

export function useSizedPhotos(
  items: RawPhoto[],
  { columns = 2, listPadding = 8, itemMargin = 4, fallbackAspect = 3 / 4 } = {}
) {
  const { width: screenWidth } = useWindowDimensions();

  const columnWidth = React.useMemo(() => {
    const totalHorizontalGutters = listPadding * 2 + columns * itemMargin * 2;
    return (screenWidth - totalHorizontalGutters) / columns;
  }, [screenWidth, columns, listPadding, itemMargin]);

  const [photos, setPhotos] = React.useState<Photo[]>([]);

  React.useEffect(() => {
    let cancelled = false;

    const measureAll = async () => {
      const results = await Promise.all(
        items.map(
          (p) =>
            new Promise<Photo>((resolve) => {
              Image.getSize(
                p.url,
                (w, h) => {
                  const scaledHeight = Math.max(
                    1,
                    Math.round((h / w) * columnWidth)
                  );
                  resolve({ id: p.id, url: p.url, height: scaledHeight });
                },
                () => {
                  resolve({
                    id: p.id,
                    url: p.url,
                    height: Math.round(columnWidth * fallbackAspect),
                  });
                }
              );
            })
        )
      );
      if (!cancelled) setPhotos(results);
    };

    measureAll();
    return () => {
      cancelled = true;
    };
  }, [items, columnWidth, fallbackAspect]);

  return photos;
}
