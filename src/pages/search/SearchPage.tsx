import BookItem from '@/components/book/BookItem';
import EmptyBookMessage from '@/components/common/EmptyBookMessage';
import InfinityScrollSection from '@/components/common/InfinityScrollSection';
import PageContainer from '@/components/common/PageContainer';
import PageTitle from '@/components/common/PageTitle';
import ResultBooksCountMessage from '@/components/common/ResultBooksCountMessage';
import BasicSearchContainer from '@/components/search/BasicSearchContainer';
import DetailSearchContainer from '@/components/search/DetailSearchContainer';

import useSearchInfiniteScroll from '@/components/search/hook/useSearchInfiniteScroll';
import useAccordion from '@/hook/useAccordion';
import styled from 'styled-components';

export default function SearchPage() {
  const { data, ref } = useSearchInfiniteScroll();
  const { openBookId, handleToggle } = useAccordion();

  return (
    <PageContainer>
      <SearchFormContainer>
        <PageTitle title="도서 검색" />
        <SearchContainer role="search" aria-label="도서 검색 폼">
          <BasicSearchContainer />
          <DetailSearchContainer />
        </SearchContainer>
      </SearchFormContainer>
      <ResultBooksCountMessage
        label="도서 검색 결과"
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
        <EmptyBookMessage message="검색된 결과가 없습니다." />
      )}
    </PageContainer>
  );
}

const SearchFormContainer = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
