import useStoredSavedBook from '@/components/book/hook/useStoredSavedBook';
import { QUERY_KEY } from '@/types/constant';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function useSavedBook() {
  const { getSavedBooks } = useStoredSavedBook();
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.savedBook],
    queryFn: ({ pageParam }) => getSavedBooks(pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
  });
}
