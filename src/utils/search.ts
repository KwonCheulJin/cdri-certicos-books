import { BookInfo, Document, InfiniteQueryResponse } from '@/types/search';
import { InfiniteData } from '@tanstack/react-query';

import { MAX_THUMBNAIL_IMAGE } from '@/types/constant';

export function formatAuthorList(authors: string[]): string {
  if (authors.length === 1) return authors[0];
  return `${authors[0]} 외 ${authors.length - 1}명`;
}

export function generateThumbnailUrls(thumbnail: string): {
  small: string;
  large: string;
} {
  if (!thumbnail) {
    return {
      small: '/default-image.webp',
      large: '/default-image.webp',
    };
  }
  const largeSize = `R${MAX_THUMBNAIL_IMAGE.width}x${MAX_THUMBNAIL_IMAGE.height}`;

  const largeThumbnail = thumbnail.replace(/R\d+x\d+/, largeSize);

  return {
    small: thumbnail,
    large: largeThumbnail,
  };
}

export function transformSearchData(
  data: InfiniteData<InfiniteQueryResponse<Document>, number | undefined>
): InfiniteData<InfiniteQueryResponse<BookInfo>, unknown> {
  return {
    ...data,
    pages: data.pages.map((book, idx) => ({
      ...book,
      content: book.content.map((item, index) => ({
        id: `${item.title}-${idx}-${index}`,
        title: item.title,
        author: formatAuthorList(item.authors),
        contents: item.contents,
        price: {
          original: item.price,
          discounted: item.sale_price < 0 ? undefined : item.sale_price,
        },
        thumbnail: generateThumbnailUrls(item.thumbnail),
        url: item.url,
      })),
    })),
  };
}
