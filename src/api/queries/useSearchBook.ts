import { searchBookApiService } from '@/api/service/SearchBookApiService';
import { useSearchStore } from '@/store/useSearchStore';
import { formatAuthorList } from '@/utils/author';
import { generateThumbnailUrls } from '@/utils/thumbnail';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function useSearchBook() {
  const { query, target } = useSearchStore(state => state.searchQuery);
  return useInfiniteQuery({
    queryKey: ['search-book', query, target],
    queryFn: ({ pageParam }) =>
      searchBookApiService.getSearchBooks({
        query,
        page: pageParam,
        target,
      }),
    select: data => {
      const updatePages = data.pages.map((book, idx) => {
        const newContent = book.content.map((item, index) => {
          return {
            id: `${item.title}-${idx}-${index}`,
            title: item.title,
            author: formatAuthorList(item.authors),
            contents: item.contents,
            price: {
              original: item.price,
              discounted: item.sale_price < 0 ? undefined : item.sale_price,
            },
            thumbnail: generateThumbnailUrls(item.thumbnail),
            url: item.url,
          };
        });
        return { ...book, content: newContent };
      });
      return { ...data, pages: updatePages };
    },
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
    enabled: !!query,
  });
}
