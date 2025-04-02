import { ValueOf } from '@/types/utils';

export const screen = {
  mobile: 600,
  tablet: 1279,
  desktop: 1280,
} as const;

export const breakpoints = {
  mobile: `${screen.mobile}px`,
  tablet: `${screen.tablet}px`,
  desktop: `${screen.desktop}px`,
} as const;

export const LOCAL_STORAGE_KEY = {
  storedKeywords: 'stored-keywords',
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

export type SearchCategoryItem = (typeof SEARCH_CATEGORY_ITEMS)[number];
export type SearchTarget = (typeof SEARCH_CATEGORY_ITEMS)[number]['id'];

export type SearchType = ValueOf<typeof SEARCH_TYPE>;
