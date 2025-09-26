// masonry.image.types.ts

export interface MasonryImageProps {
  photos: { id: string; url: string }[];
  onDelete?: (item: { id: string; url: string }) => void;
}
