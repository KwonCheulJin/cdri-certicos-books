import { searchBookApiService } from '@/api/service/SearchBookApiService';
import { useSearchStore } from '@/store/useSearchStore';
import { QUERY_KEY } from '@/types/constant';
import { transformSearchData } from '@/utils/search';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useSearchBook() {
  const { query, target } = useSearchStore(state => state.searchQuery);
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.searchBook, query, target],
    queryFn: ({ pageParam }) =>
      searchBookApiService.getSearchBooks({
        query,
        page: pageParam,
        target,
      }),
    select: data => transformSearchData(data),
    initialPageParam: query ? 1 : undefined,
    getNextPageParam: lastPage =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
    enabled: !!query,
    throwOnError: error => {
      if (axios.isAxiosError(error)) {
        console.error(`🔥 [useSearchBook] API Error:`, error.message);
        const status = error.response?.status ?? 0;
        return status >= 500;
      }
      return false;
    },
  });
}
