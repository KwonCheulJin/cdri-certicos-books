import useStoredSavedBook from '@/components/book/hook/useStoredSavedBook';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function useSavedBook() {
  const { getSavedBooks } = useStoredSavedBook();
  return useInfiniteQuery({
    queryKey: ['saved-book'],
    queryFn: ({ pageParam }) => getSavedBooks(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
  });
}
