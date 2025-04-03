import BookItem from '@/components/book/BookItem';
import EmptyBookMessage from '@/components/common/EmptyBookMessage';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import InfinityScrollSection from '@/components/common/InfinityScrollSection';
import ResultBooksCountMessage from '@/components/common/ResultBooksCountMessage';
import useAccordion from '@/hook/useAccordion';
import { BookInfo, InfiniteQueryResponse } from '@/types/search';
import { InfiniteData } from '@tanstack/react-query';
import { ReactNode } from 'react';

interface Props {
  label: string;
  data?: InfiniteData<InfiniteQueryResponse<BookInfo>, unknown>;
  ref: (node?: Element | null) => void;
  emptyMessage: string;
  fallbackMessage: ReactNode;
}

export default function BookListSection({
  label,
  data,
  ref,
  emptyMessage,
  fallbackMessage,
}: Props) {
  const { openBookId, handleToggle } = useAccordion();

  return (
    <ErrorBoundary fallback={fallbackMessage}>
      <ResultBooksCountMessage
        label={label}
        totalCount={data?.pages[0].totalCount}
      />
      {data && data.pages[0].totalCount > 0 ? (
        <InfinityScrollSection ref={ref}>
          {data.pages.map(page =>
            page.content.map(book => (
              <BookItem
                key={book.id}
                book={book}
                isOpen={openBookId === book.id}
                onToggle={handleToggle(book.id)}
              />
            ))
          )}
        </InfinityScrollSection>
      ) : (
        <EmptyBookMessage message={emptyMessage} />
      )}
    </ErrorBoundary>
  );
}
