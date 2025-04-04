import { LOCAL_STORAGE_KEY } from '@/types/constant';
import { BookInfo } from '@/types/search';
import { StorageValue } from '@/types/storage';
import { storageManager } from '@/utils/localStorageManager';

export const savedBookStorage = {
  getBooks: (): BookInfo[] => {
    return storageManager.getItem(LOCAL_STORAGE_KEY.storedSavedBooks) || [];
  },

  getBookIds: (): Record<string, boolean> => {
    return storageManager.getItem(LOCAL_STORAGE_KEY.storedSavedBookIds) || {};
  },

  updateBooks: (books: BookInfo[]): void => {
    storageManager.setItem(LOCAL_STORAGE_KEY.storedSavedBooks, books);
  },

  updateBookIds: (bookIds: Record<string, boolean>): void => {
    storageManager.setItem(LOCAL_STORAGE_KEY.storedSavedBookIds, bookIds);
  },

  subscribe: <T>(callback: (value: StorageValue<T>) => void) => {
    return storageManager.subscribe(
      LOCAL_STORAGE_KEY.storedSavedBooks,
      callback
    );
  },

  subscribeIds: <T>(callback: (value: StorageValue<T>) => void) => {
    return storageManager.subscribe(
      LOCAL_STORAGE_KEY.storedSavedBookIds,
      callback
    );
  },
};
