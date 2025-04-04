import { NavItem } from '@/types/common';
import { ValueOf } from '@/types/utils';

export const LOCAL_STORAGE_KEY = {
  storedKeywords: 'stored-keywords',
  storedSavedBooks: 'stored-saved-books',
  storedSavedBookIds: 'stored-saved-book-ids',
} as const;

export const PORTAL_ID = {
  detailModal: 'detail-modal-portal',
  history: 'history-portal',
} as const;

export const SEARCH_CATEGORY_ITEMS = [
  { id: 'title', value: '제목' },
  { id: 'person', value: '저자명' },
  { id: 'publisher', value: '출판사' },
  { id: 'isbn', value: 'ISBN' },
] as const;

export const SEARCH_TYPE = {
  BASIC: 'BASIC',
  DETAIL: 'DETAIL',
} as const;

export const MAX_THUMBNAIL_IMAGE = {
  width: 232,
  height: 328,
} as const;

export const SAVED_BOOK_CONFIG = {
  PAGE_SIZE: 10,
  STORAGE_DELAY: 50,
} as const;

export const NAV_ITEMS: NavItem[] = [
  {
    path: '/search',
    label: '도서 검색',
    ariaLabel: '도서 검색 페이지로 이동',
  },
  {
    path: '/saved-books',
    label: '내가 찜한 책',
    ariaLabel: '찜한 책 목록 페이지로 이동',
  },
] as const;

export const QUERY_KEY = {
  searchBook: 'search-book',
  savedBook: 'saved-book',
} as const;

export const IMAGE_SIZE = {
  closed: {
    width: '48',
    height: '68',
  },
  open: {
    width: '210',
    height: '280',
  },
} as const;

export type SearchCategoryItem = (typeof SEARCH_CATEGORY_ITEMS)[number];
export type SearchTarget = (typeof SEARCH_CATEGORY_ITEMS)[number]['id'];

export type SearchType = ValueOf<typeof SEARCH_TYPE>;
