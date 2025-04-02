import useSearchBook from '@/api/queries/useSearchBook';
import useIntersectionObserver from '@/hook/useIntersectionObserver';
import { useEffect, useRef } from 'react';

const ioOptions = { threshold: 1 };

export default function useSearchInfiniteScroll() {
  const { data, fetchNextPage } = useSearchBook();
  const moreRef = useRef<HTMLDivElement>(null);
  const {
    entries: [entry],
  } = useIntersectionObserver(moreRef, ioOptions);
  const isIntersecting = entry?.isIntersecting;

  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return { data, moreRef };
}
