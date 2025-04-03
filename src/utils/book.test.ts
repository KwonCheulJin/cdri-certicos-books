import { SAVED_BOOK_CONFIG } from '@/types/constant';
import { BookInfo } from '@/types/search-book';
import { getBooksByPage, getIsLastPage, getTotalPages } from '@/utils/book';
import { describe, expect, it } from 'vitest';

describe('Book', () => {
  describe('getIsLastPage', () => {
    it('현재 페이지가 총 페이지와 같으면 true를 반환해야 한다.', () => {
      expect(getIsLastPage({ page: 5, totalPages: 5 })).toBe(true);
    });

    it('현재 페이지가 총 페이지보다 크면 true를 반환해야 한다.', () => {
      expect(getIsLastPage({ page: 6, totalPages: 5 })).toBe(true);
    });

    it('현재 페이지가 총 페이지보다 작으면 false를 반환해야 한다.', () => {
      expect(getIsLastPage({ page: 4, totalPages: 5 })).toBe(false);
    });
  });

  describe('getBooksByPage', () => {
    const mockBooks: BookInfo[] = Array.from({ length: 25 }, (_, index) => ({
      id: `book-${index + 1}`,
      title: `Book ${index + 1}`,
      author: `Author ${index + 1}`,
      contents: `Description ${index + 1}`,
      price: {
        original: 10000,
        discounted: 9000,
      },
      thumbnail: {
        small: '',
        large: '',
      },
      url: '',
    }));

    it('첫 페이지의 도서를 반환해야 한다.', () => {
      const result = getBooksByPage(mockBooks, 1);
      expect(result).toHaveLength(SAVED_BOOK_CONFIG.PAGE_SIZE);
      expect(result[0].id).toBe('book-1');
    });

    it('중간 페이지의 도서를 반환해야 한다.', () => {
      const result = getBooksByPage(mockBooks, 2);
      expect(result).toHaveLength(SAVED_BOOK_CONFIG.PAGE_SIZE);
      expect(result[0].id).toBe(`book-${SAVED_BOOK_CONFIG.PAGE_SIZE + 1}`);
    });

    it('마지막 페이지의 남은 도서를 반환해야 한다.', () => {
      const lastPage = Math.ceil(
        mockBooks.length / SAVED_BOOK_CONFIG.PAGE_SIZE
      );
      const result = getBooksByPage(mockBooks, lastPage);
      const expectedLength =
        mockBooks.length % SAVED_BOOK_CONFIG.PAGE_SIZE ||
        SAVED_BOOK_CONFIG.PAGE_SIZE;
      expect(result).toHaveLength(expectedLength);
    });

    it('페이지 번호가 전달되지 않으면 첫 페이지를 반환해야 한다.', () => {
      const result = getBooksByPage(mockBooks);
      expect(result).toHaveLength(SAVED_BOOK_CONFIG.PAGE_SIZE);
      expect(result[0].id).toBe('book-1');
    });

    it('빈 배열이 전달되면 빈 배열을 반환해야 한다.', () => {
      const result = getBooksByPage([], 1);
      expect(result).toHaveLength(0);
    });
  });

  describe('getTotalPages', () => {
    it('총 아이템 수가 페이지 크기로 나누어떨어지는 경우', () => {
      expect(getTotalPages(SAVED_BOOK_CONFIG.PAGE_SIZE * 3)).toBe(3);
    });

    it('총 아이템 수가 페이지 크기로 나누어떨어지지 않는 경우', () => {
      expect(getTotalPages(SAVED_BOOK_CONFIG.PAGE_SIZE * 3 + 1)).toBe(4);
    });

    it('총 아이템 수가 0인 경우', () => {
      expect(getTotalPages(0)).toBe(0);
    });

    it('총 아이템 수가 페이지 크기보다 작은 경우', () => {
      expect(getTotalPages(SAVED_BOOK_CONFIG.PAGE_SIZE - 1)).toBe(1);
    });
  });
});
