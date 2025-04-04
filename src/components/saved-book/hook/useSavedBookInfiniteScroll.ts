import useSavedBook from '@/api/queries/useSavedBook';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ioOptions = { threshold: 1 };

export default function useSavedBookInfiniteScroll() {
  const { data, fetchNextPage } = useSavedBook();
  const { ref, inView } = useInView(ioOptions);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return { data, ref };
}
