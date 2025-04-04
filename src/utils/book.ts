import { BookInfo } from '@/types/search';

import { SAVED_BOOK_CONFIG } from '@/types/constant';
import { SavedBookPage } from '@/types/saved-book';

export const getIsLastPage = ({ page, totalPages }: SavedBookPage): boolean => {
  return page >= totalPages;
};

export const getBooksByPage = (books: BookInfo[], page: number = 1) => {
  const { PAGE_SIZE } = SAVED_BOOK_CONFIG;
  const startIdx = (page - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;

  return books.slice(startIdx, endIdx);
};

export const getTotalPages = (totalCount: number): number => {
  return Math.ceil(totalCount / SAVED_BOOK_CONFIG.PAGE_SIZE);
};
