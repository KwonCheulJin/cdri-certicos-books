import { BookInfo } from '@/types/search';

export interface SavedBookState {
  books: BookInfo[];
  bookIds: Record<string, boolean>;
}

export interface SavedBookPage {
  page: number;
  totalPages: number;
}
