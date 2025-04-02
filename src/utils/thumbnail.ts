import { MAX_THUMBNAIL_IMAGE } from '@/types/constant';

export function generateThumbnailUrls(thumbnail: string): {
  small: string;
  large: string;
} {
  if (!thumbnail) {
    return {
      small: '/default-image.png',
      large: '/default-image.png',
    };
  }
  const largeSize = `R${MAX_THUMBNAIL_IMAGE.width}x${MAX_THUMBNAIL_IMAGE.height}`;

  const largeThumbnail = thumbnail.replace(/R\d+x\d+/, largeSize);

  return {
    small: thumbnail,
    large: largeThumbnail,
  };
}
