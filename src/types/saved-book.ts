import { BookInfo } from '@/types/search-book';

export interface SavedBookState {
  books: BookInfo[];
  bookIds: Record<string, boolean>;
}

export interface SavedBookPage {
  page: number;
  totalPages: number;
}
