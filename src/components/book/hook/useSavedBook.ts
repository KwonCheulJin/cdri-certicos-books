import { LOCAL_STORAGE_KEY } from '@/types/constant';
import { BookInfo } from '@/types/search-book';
import { storageManager } from '@/utils/localStorageManager';
import { useCallback, useState } from 'react';

const getStoredSavedBooks = (): BookInfo[] => {
  return storageManager.getItem(LOCAL_STORAGE_KEY.storedSavedBooks) || [];
};
const getStoredSavedBookIds = (): Record<string, boolean> => {
  return storageManager.getItem(LOCAL_STORAGE_KEY.storedSavedBookIds) || {};
};

const updateStoredSavedBooks = (books: BookInfo[]) => {
  storageManager.setItem(LOCAL_STORAGE_KEY.storedSavedBooks, books);
};

const updateStoredSavedBookIds = (books: Record<string, boolean>) => {
  storageManager.setItem(LOCAL_STORAGE_KEY.storedSavedBookIds, books);
};

export default function useSavedBook() {
  const [savedBookIds, setSavedBookIds] = useState(() =>
    getStoredSavedBookIds()
  );

  const savedBook = useCallback((newBook: BookInfo) => {
    const books = getStoredSavedBooks();
    const updateBooks = [newBook, ...books];
    updateStoredSavedBooks(updateBooks);
  }, []);

  const removeTargetSavedBook = useCallback((bookId: string) => {
    const books = getStoredSavedBooks().filter(book => book.id !== bookId);
    updateStoredSavedBooks(books);
  }, []);

  const toggleSavedBookId = useCallback(
    (book: BookInfo) => () => {
      const bookIds = getStoredSavedBookIds();

      if (bookIds[book.id]) {
        bookIds[book.id] = false;
        removeTargetSavedBook(book.id);
      } else {
        bookIds[book.id] = true;
        savedBook(book);
      }

      setSavedBookIds(bookIds);
      updateStoredSavedBookIds(bookIds);
    },
    [savedBook, removeTargetSavedBook]
  );

  const getBooksByPage = useCallback(({ page = 1 }: { page: number }) => {
    const SIZE = 10;
    const books = getStoredSavedBooks();
    const startIdx = (page - 1) * SIZE;
    const endIdx = startIdx + SIZE;

    return books.slice(startIdx, endIdx);
  }, []);

  return {
    savedBook,
    getBooksByPage,
    removeTargetSavedBook,
    toggleSavedBookId,
    savedBookIds,
  };
}
