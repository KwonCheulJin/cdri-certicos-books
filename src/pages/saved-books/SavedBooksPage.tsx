import BookItem from '@/components/book/BookItem';
import EmptyBookMessage from '@/components/common/EmptyBookMessage';
import InfinityScrollSection from '@/components/common/InfinityScrollSection';
import PageContainer from '@/components/common/PageContainer';
import PageTitle from '@/components/common/PageTitle';
import ResultBooksCountMessage from '@/components/common/ResultBooksCountMessage';
import useSavedBookInfiniteScroll from '@/components/saved-book/hook/useSavedBookInfiniteScroll';
import useAccordion from '@/hook/useAccordion';

export default function SavedBooksPage() {
  const { data, ref } = useSavedBookInfiniteScroll();
  const { openBookId, handleToggle } = useAccordion();
  return (
    <PageContainer>
      <PageTitle title="내가 찜한 책" />
      <ResultBooksCountMessage
        label="찜한 책"
        totalCount={data?.pages[0].totalCount}
      />
      {data && data.pages[0].totalCount > 0 ? (
        <InfinityScrollSection ref={ref}>
          {data?.pages.map(page =>
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
        <EmptyBookMessage message="찜한 책이 없습니다." />
      )}
    </PageContainer>
  );
}
