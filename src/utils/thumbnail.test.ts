import { MAX_THUMBNAIL_IMAGE } from '@/types/constant';
import { generateThumbnailUrls } from '@/utils/thumbnail';
import { describe, expect, test } from 'vitest';

const defaultUrl = 'https://search1.kakaocdn.net/thumb/R120x174.q85';
const generateUrl = `https://search1.kakaocdn.net/thumb/R${MAX_THUMBNAIL_IMAGE.width}x${MAX_THUMBNAIL_IMAGE.height}.q85`;

describe('generateThumbnailUrls', () => {
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
