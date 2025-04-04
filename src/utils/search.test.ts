import { MAX_THUMBNAIL_IMAGE } from '@/types/constant';
import { Document, InfiniteQueryResponse } from '@/types/search';
import {
  formatAuthorList,
  generateThumbnailUrls,
  transformSearchData,
} from '@/utils/search';
import { InfiniteData } from '@tanstack/react-query';

import { describe, expect, test } from 'vitest';

describe('search', () => {
  describe('generateThumbnailUrls', () => {
    const generateUrl = `https://search1.kakaocdn.net/thumb/R${MAX_THUMBNAIL_IMAGE.width}x${MAX_THUMBNAIL_IMAGE.height}.q85`;
    const defaultUrl = 'https://search1.kakaocdn.net/thumb/R120x174.q85';

    test(`${defaultUrl}을 전달하면 { small: ${defaultUrl}, large: ${generateUrl} }로 변환된 객체가 반환된다.`, () => {
      const result = generateThumbnailUrls(defaultUrl);

      expect(result).toEqual({ small: defaultUrl, large: generateUrl });
    });
    test(`빈 문자('')를 전달하면 { small: '/default-image.webp', large: '/default-image.webp' }로 변환된 객체가 반환된다.`, () => {
      const result = generateThumbnailUrls('');

      expect(result).toEqual({
        small: '/default-image.webp',
        large: '/default-image.webp',
      });
    });
  });

  describe('formatAuthorList', () => {
    const authorLength1 = ['저자1'];
    const authorLength2 = ['저자2', '저자3'];
    const authorLength3 = ['저자4', '저자5', '저자6'];

    test(`${authorLength1}을 전달하면 ${authorLength1[0]}로 반환된다.`, () => {
      const result = formatAuthorList(authorLength1);

      expect(result).toEqual(authorLength1[0]);
    });
    test(`${authorLength2}을 전달하면 ${authorLength2[0]} 외 ${
      authorLength2.length - 1
    }명으로 반환된다.`, () => {
      const result = formatAuthorList(authorLength2);

      expect(result).toEqual(
        `${authorLength2[0]} 외 ${authorLength2.length - 1}명`
      );
    });
    test(`${authorLength3}을 전달하면 ${authorLength3[0]} 외 ${
      authorLength3.length - 1
    }명으로 반환된다.`, () => {
      const result = formatAuthorList(authorLength3);

      expect(result).toEqual(
        `${authorLength3[0]} 외 ${authorLength3.length - 1}명`
      );
    });
  });

  describe('transformSearchData', () => {
    const mockData: InfiniteData<
      InfiniteQueryResponse<Document>,
      number | undefined
    > = {
      pages: [
        {
          content: [
            {
              title: '책 제목 1',
              authors: ['저자1', '저자2'],
              contents: '책 내용 1',
              datetime: new Date('2023-01-01T00:00:00Z'),
              isbn: '9781234567890',
              price: 15000,
              publisher: '출판사 1',
              sale_price: 12000,
              status: '정상판매',
              thumbnail: 'https://search1.kakaocdn.net/thumb/R120x174.q85',
              translators: ['번역가1'],
              url: 'https://example.com/book1',
            },
            {
              title: '책 제목 2',
              authors: ['저자3'],
              contents: '책 내용 2',
              datetime: new Date('2023-02-01T00:00:00Z'),
              isbn: '9780987654321',
              price: 20000,
              publisher: '출판사 2',
              sale_price: -1,
              status: '절판',
              thumbnail: '',
              translators: [],
              url: 'https://example.com/book2',
            },
          ],
          isLast: false,
          nextPage: 2,
          totalCount: 2,
        },
      ],
      pageParams: [1],
    };

    test('데이터를 올바르게 변환해야 한다.', () => {
      const result = transformSearchData(mockData);

      expect(result.pages[0].content[0]).toEqual({
        id: '책 제목 1-0-0',
        title: '책 제목 1',
        author: '저자1 외 1명',
        contents: '책 내용 1',
        price: {
          original: 15000,
          discounted: 12000,
        },
        thumbnail: {
          small: 'https://search1.kakaocdn.net/thumb/R120x174.q85',
          large: `https://search1.kakaocdn.net/thumb/R${MAX_THUMBNAIL_IMAGE.width}x${MAX_THUMBNAIL_IMAGE.height}.q85`,
        },
        url: 'https://example.com/book1',
      });

      expect(result.pages[0].content[1]).toEqual({
        id: '책 제목 2-0-1',
        title: '책 제목 2',
        author: '저자3',
        contents: '책 내용 2',
        price: {
          original: 20000,
          discounted: undefined,
        },
        thumbnail: {
          small: '/default-image.webp',
          large: '/default-image.webp',
        },
        url: 'https://example.com/book2',
      });
    });

    test('isLast와 nextPage 값을 유지해야 한다.', () => {
      const result = transformSearchData(mockData);

      expect(result.pages[0].isLast).toBe(false);
      expect(result.pages[0].nextPage).toBe(2);
    });
  });
});
