import { savedBookStorage } from '@/storage/saved-book';
import { BookInfo, InfiniteQueryResponse } from '@/types/search-book';
import { getBooksByPage, getTotalPages } from '@/utils/book';
import { waitFor } from '@/utils/waitFor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

export default function useStoredSavedBook() {
  const queryClient = useQueryClient();
  const [savedBookIds, setSavedBookIds] = useState(() =>
    savedBookStorage.getBookIds()
  );
  const [storedBooks, setStoredSavedBooks] = useState(() =>
    savedBookStorage.getBooks()
  );

  const totalPages = getTotalPages(storedBooks.length);

  const { mutate } = useMutation({
    mutationFn: (book: BookInfo) => {
      return new Promise<void>(resolve => {
        toggleSavedBook(book)();
        resolve();
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-book'] });
    },
  });

  const savedBook = useCallback(
    (newBook: BookInfo) => {
      const updateBooks = [newBook, ...storedBooks];
      setStoredSavedBooks(updateBooks);
      savedBookStorage.updateBooks(updateBooks);
    },
    [storedBooks]
  );

  const removeTargetSavedBook = useCallback(
    (bookId: string) => {
      const books = storedBooks.filter(book => book.id !== bookId);
      setStoredSavedBooks(books);
      savedBookStorage.updateBooks(books);
    },
    [storedBooks]
  );

  const toggleSavedBook = useCallback(
    (book: BookInfo) => () => {
      if (savedBookIds[book.id]) {
        savedBookIds[book.id] = false;
        removeTargetSavedBook(book.id);
      } else {
        savedBookIds[book.id] = true;
        savedBook(book);
      }

      setSavedBookIds(savedBookIds);
      savedBookStorage.updateBookIds(savedBookIds);
    },
    [savedBookIds, removeTargetSavedBook, savedBook]
  );

  async function getSavedBooks(
    page: number = 1
  ): Promise<InfiniteQueryResponse<BookInfo>> {
    const content = getBooksByPage(storedBooks, page);
    await waitFor(50);
    return {
      content,
      nextPage: page + 1,
      isLast: page >= totalPages,
      totalCount: storedBooks.length,
    };
  }

  useEffect(() => {
    return savedBookStorage.subscribeIds(value =>
      setSavedBookIds((value as Record<string, boolean>) || {})
    );
  }, []);

  useEffect(() => {
    return savedBookStorage.subscribe(value => {
      setStoredSavedBooks((value as BookInfo[]) || []);
    });
  }, []);

  return {
    savedBook,
    removeTargetSavedBook,
    toggleSavedBook: mutate,
    savedBookIds,
    getSavedBooks,
  };
}
