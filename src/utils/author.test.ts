import { formatAuthorList } from '@/utils/author';
import { describe, expect, test } from 'vitest';

const authorLength1 = ['저자1'];
const authorLength2 = ['저자2', '저자3'];
const authorLength3 = ['저자4', '저자5', '저자6'];

describe('formatAuthorList', () => {
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
