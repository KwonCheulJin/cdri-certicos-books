import useSearchBook from '@/api/queries/useSearchBook';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ioOptions = { threshold: 1 };

export default function useSearchInfiniteScroll() {
  const { data, fetchNextPage } = useSearchBook();
  const { ref, inView } = useInView(ioOptions);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return { data, ref };
}
